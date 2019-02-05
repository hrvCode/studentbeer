import React,{Component} from 'react';
import * as ROUTES from '../../Constats/routes';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {withFirebase} from '../Firebase'


const SignUpPage = () => (
    <div>
        <h1>sign up</h1>
            <SignUpForm/> 
    </div>
)

// initinal state till signupform baser state.
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: 'false',
    error: null,
}


class SignUpFormBase extends Component{

    state={
        ...INITIAL_STATE,
        isLoading: true,
    }

    // skapa ny användare.
    onSubmit = event => {
        const { username , email, passwordOne} = this.state;
    
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
                    comments: '',
                    img: '',
                    civilStatus: '',
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

                <button type="submit" disabled={isInvalid}>Sign Up</button>

                {/* om det finns error i this.state.false så körs kodsnutten */}

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}
const SignUpLink = () =>(
    <p> 
        Don't have an account? <Link to={ROUTES.SIGNUP}>Sign Up</Link>
    </p>
)

// wrappar SignUpForm variablen med withrouter och withfirebase.
const SignUpForm = withRouter(withFirebase(SignUpFormBase)); 

export {SignUpLink};
export default SignUpPage;