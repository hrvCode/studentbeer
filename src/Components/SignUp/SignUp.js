import React,{Component} from 'react';
import * as ROUTES from '../../Constats/routes';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {withFirebase} from '../Firebase';
import {Main, Container,Paragraph} from './SignUpStyle';
import * as ROLES from '../../Constats/roles'



const SignUpPage = () => (
    <Main>
    <Container>
        <h1>Sign up</h1>
            <SignUpForm/> 
            </Container>
            
    </Main>
)

// initinal state till signupform baser state.
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: false,
    error: null,
}


class SignUpFormBase extends Component{

    state={
        ...INITIAL_STATE,
        isLoading: true,
    }

    // skapa ny användare.
    onSubmit = event => {
        const { username , email, passwordOne, isAdmin} = this.state;
        const roles = [];
        if(isAdmin){
            roles.push(ROLES.ADMIN)
        }
        // anropar på firebase classen i firebase contexten.
        // för att skapa ny användare.
        this.props.Firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser =>{
            return (
               
                this.props.Firebase.user(authUser.user.uid)
                .set({
                    username,
                    email,
                    bioText: '',
                    img: '',
                    civilStatus: '',
                    roles,
                })
                .then(() =>{
                    this.setState({...INITIAL_STATE});
                    // withRouter redirectar till profile
                    this.props.history.push(ROUTES.PROFILE) 
                })
            )

        })
        .catch(error => { 
            // om det blir error sätter vi error objekt i state
            this.setState({
                error
            });
        })
        event.preventDefault();
    };
    
    onChange = event => {
        // sätter värde till state för varje knapptryckning.
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    onChangeCheckBox = event => {
        this.setState({
            [event.target.name]: event.target.checked
        })
    }

    componentDidMount(){
        this.setState({
            isLoading: false
        })
    }



    render(){
        // hämtar variabler från state.
        const {email, passwordOne, passwordTwo, username, error} = this.state;

        // isInvalid kontrollerar formens input,
        // disablar submit ifall isInvalid retunerar false,
        const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';
        
        return(
            this.state.isLoading ? <div>loading</div> :
            <form onSubmit={this.onSubmit}>
                <input 
                type="text"
                name="username"
                onChange={this.onChange}
                placeholder="Username" />
                                
                <input 
                type="text"
                name="email"
                onChange={this.onChange}
                placeholder="email" />

                <input 
                type="password" 
                name="passwordOne"
                onChange={this.onChange}
                placeholder="password"
                 />

                <input 
                type="password" 
                name="passwordTwo"
                onChange={this.onChange}
                placeholder="confirm password"
                 />
                <label>
                    admin:
                    <input 
                    type="checkbox"
                    name="isAdmin"
                    onChange={this.onChangeCheckBox}
                    />
                    </label>
                {error && <p>{error.message}</p>}
                <button type="submit" disabled={isInvalid}>Sign Up</button>

                {/* om det finns error i this.state.false så körs kodsnutten */}

                
            </form>
        )
    }
}


// wrappar SignUpForm variablen med withrouter och withfirebase.
const SignUpForm = withRouter(withFirebase(SignUpFormBase)); 

export default SignUpPage;