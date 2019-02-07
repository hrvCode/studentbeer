import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import {SignUpLink} from '../SignUp/SignUp';
import {withFirebase} from '../Firebase'
import * as ROUTES from '../../Constats/routes';
import {Main, Container,ButtonContainer} from './SignInStyle';

const SignInPage = () =>(
    <Main>
        <Container>
            <h1>Sign in</h1>
            <SignInForm/>
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

        // ropar på funktioner från Firebase context för att kunna logga in. 
        
        this.props.Firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() =>{
            this.setState({...INITIAL_STATE})
            this.props.history.push(ROUTES.PROFILE);
        })
        // Vid error sätts error state till error objekt.
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

                    {error && <p>{error.message}</p>}

                    <ButtonContainer>
                        <button type="submit" disabled={isInvalid}>Login</button>
                    </ButtonContainer>
                </div>
            </form>
        )
    }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;