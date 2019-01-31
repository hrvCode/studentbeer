import React,{Component} from 'react';



const SignUpPage = () => (
    <div>
        <h1>sign up</h1>
        <SignUpForm />
    </div>
)
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}
class SignUpForm extends Component{

    state={
        ...INITIAL_STATE
    }

    onSubmit = event => {
        const { username, email, passwordOne} = this.state;

        this.props.Firebase
        .doSignUpWithEmailAndPassword(email, passwordOne)
        .then(authUser =>{
            this.setState({...INITIAL_STATE})
            console.log(authUser)
        })
        .catch(error => { 
            this.setState({
                error
            })
        })
        event.preventDefault();
    }
    
    onChange = event => (
        this.setState({
            [event.target.name]: event.target.value,
        })
    )

    render(){
        const {email, passwordOne, passwordTwo, username, error} = this.state;

        const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';
        return(

        <div>
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
                <div>
                    <button type="submit" disabled={isInvalid}>Sign Up</button>
                </div>

                {error && <p>{error.message}</p>}
            </form>
        </div>
        )
    }
}
export default SignUpPage;