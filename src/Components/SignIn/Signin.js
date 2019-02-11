import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {withRouter} from 'react-router-dom'
import {withFirebase} from '../Firebase'
import * as ROUTES from '../../Constats/routes';
import {Main, ContainerTop,ContainerBottom,ButtonContainer,Logotype} from './SignInStyle';
import Logo from '../../Graphics/bottle.png'
const SignInPage = () =>(
    <Main>

        <ContainerTop>
            <Logotype>
            <img src={Logo}></img>
            </Logotype>
            
            <h1>
                BeerHunter
            </h1>
        </ContainerTop>

        <ContainerBottom>
            <SignInForm/>
            <h3>Don't have an account?</h3>
        </ContainerBottom>
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
    
    componentdidmount(){
       this.listener = this.props.Firebase.auth.onAuthStateChanged(
           authUser =>{
               if(authUser){
                   this.props.history.push(ROUTES.PROFILE)
               }
           }
       )
    }

    componentWillUnmount(){
        this.listener();
    }

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
                        <button type="submit" disabled={isInvalid}>Sign in</button>
                    </ButtonContainer>
                </div>
            </form>
        )
    }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));
export default SignInPage;