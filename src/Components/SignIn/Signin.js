import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import {SignUpLink} from '../SignUp/SignUp';
import {withFirebase} from '../Firebase'
import * as ROUTES from '../../Constats/routes';
import {Main, Container} from './SignInStyle';

const SignInPage = () =>(
    <Main>
        
        <Container>
            <h1>Sign in</h1>
            <SignInForm />
            <SignUpLink/>
        </Container>
    </Main>
)

const INITIAL_STATE ={
        email:'',
        password:'',
        error: null,
}

class SignInFormBase extends Component{
    state = ({
        ...INITIAL_STATE
    })
    
    onSubmit = (event) =>{
        event.preventDefault();

        const {email, password} = this.state;

        this.props.Firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() =>{
            this.setState({...INITIAL_STATE})
            this.props.history.push(ROUTES.PROFILE);
        })
        .catch(error =>{
            this.setState({error});
        })
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        const {email, password, error} = this.state;
        const isInvalid = password === '' || email === '';
        return(
            <form onSubmit={this.onSubmit}>
                <div>
                    <div>
                        <input 
                            type="text"
                            name="email"
                            onChange={this.onChange}
                            placeholder="Email" 
                        />
                        <input 
                            type="password"
                            name="password"
                            onChange={this.onChange}  
                            placeholder="Password"
                        />
                    </div>

                    <div>
                        <button type="submit" disabled={isInvalid}>Login</button>

                        <button>SignUp</button>
                        {error && <p>{error.message}</p>}
                    </div>
                </div>
            </form>
        )
    }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;