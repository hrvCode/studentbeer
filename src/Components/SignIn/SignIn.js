import React,{Component} from 'react';
import {PasswordForgetLink} from '../PasswordForget/PasswordForget';
import {withRouter} from 'react-router-dom';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../../Constants/routes';
import * as Styles from './SignInStyle';
import Logo from '../../Graphics/bottle.png';
import {Link} from 'react-router-dom';
const SignInPage = () =>(
   <Styles.Main>
    
   <Styles.ContainerTop>
       <Styles.Logotype>
       <img src={Logo} alt="Logotype"></img>
       </Styles.Logotype>
       
       <h1>
           BeerHunter
       </h1>
   </Styles.ContainerTop>
   <Styles.Container>
   <Styles.ContainerBottom>
       <SignInForm/>
       <PasswordForgetLink/>
   </Styles.ContainerBottom>
   </Styles.Container>
   <Styles.BottomButton>
       <Link to={ROUTES.SIGNUP}><button>Sign up</button></Link>
   </Styles.BottomButton>
   <Styles.RegisterPub>
            <Link to={ROUTES.ADMIN}><buttoon>registrera din krog</buttoon></Link>
    </Styles.RegisterPub>
</Styles.Main>
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
    
    componentDidMount(){
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
            this.props.history.push(ROUTES.MAP);
        }) 


        // Vid error sätts error state till error objekt.
        .catch(error =>{
            this.setState({error});
        })
    }

    //Vid ändring sätts berörd fälts värde i motsvarande state.
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

                    {error && <Styles.Error>{error.message}</Styles.Error>}

                    <Styles.ButtonContainer>
                        <button 
                            type="submit" 
                            disabled={isInvalid}>
                            Sign in
                        </button>
                    </Styles.ButtonContainer>
                </div>
            </form>
        )
    }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));
export default SignInPage;