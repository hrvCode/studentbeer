import React,{Component} from 'react';
import * as ROUTES from '../../Constats/routes';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {FirebaseContext} from '../Firebase'



const SignUpPage = () => (
    <div>
        <h1>sign up</h1>
        <FirebaseContext.Consumer>
            {Firebase => <SignUpForm  Firebase={Firebase}/>} 
        </FirebaseContext.Consumer>
    </div>
)
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}
class SignUpFormBase extends Component{

    state={
        ...INITIAL_STATE
    }

    onSubmit = event => {
        event.preventDefault();
        const { username , email, passwordOne} = this.state;

        this.props.Firebase
        .doCreateUserWIthEmailAndPassword(email, passwordOne)
        .then(authUser =>{
            this.setState({...INITIAL_STATE});
            this.props.history.push(ROUTES.PROFILE)
        })
        .catch(error => { 
            this.setState({
                error
            });
        })
    };
    
    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render(){
        const {email, passwordOne, passwordTwo, username, error} = this.state;

        const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

        return(
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


const SignUpForm = withRouter(SignUpFormBase); 

export {SignUpLink};
export default SignUpPage;