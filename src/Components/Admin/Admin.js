import React,{Component} from 'react';
import * as ROUTES from '../../Constants/routes';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {withFirebase} from '../Firebase';
import * as Styles from './AdminStyle';
import * as ROLES from '../../Constants/roles'



const AdminSignUp = () => (
    <Styles.Main>
        <Styles.Container>
            <h1>Registrera din krog</h1>
            <AdminSignUpForm/> 
        </Styles.Container>
        <Styles.BottomButton>
            <Link to={ROUTES.SIGNIN}><button>Back</button></Link>
        </Styles.BottomButton>
    </Styles.Main>
)


// initinal state till signupform baser state.
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: true,
    error: null,
}


class AdminSignUpFormBase extends Component{

    state={
        ...INITIAL_STATE,
        isLoading: true,
    }

    // skapa ny användare.
    onSubmit = event => {
        const { username , email, passwordOne} = this.state;
        const roles = [];
        roles.push(ROLES.ADMIN)
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
                    position: {latitude:"0", longitude: "0"},
                    bioText: '',
                    img: '',
                    online: false, 
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
                placeholder="Företagsnamn" />
                                
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
                {error && <p>{error.message}</p>}
                <button type="submit" disabled={isInvalid}>Sign Up</button>

                {/* om det finns error i this.state.false så körs kodsnutten */}

                
            </form>
        )
    }
}


// wrappar AdminSignUpForm variablen med withrouter och withfirebase.
const AdminSignUpForm = withRouter(withFirebase(AdminSignUpFormBase)); 

export default AdminSignUp;