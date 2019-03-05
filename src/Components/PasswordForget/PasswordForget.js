import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {withFirebase} from '../Firebase';
import * as ROUTES from '../../Constants/routes';
import * as Styles from './PasswordForgetStyle';

const PasswordForgetPage = () =>(
<Styles.Main>
    <Styles.Container>
        <h1>Reset password</h1>
        <PasswordForgetForm/>
   </Styles.Container>

   <Styles.BottomButton>
            <Link to={ROUTES.SIGNIN}><button>Back</button></Link>
    </Styles.BottomButton>
</Styles.Main>

);

const INITIAL_STATE ={

    email:'',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props){
        super(props);

        this.state = {...INITIAL_STATE}

    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.Firebase.doPasswordReset(email).then(() => {

                this.setState({...INITIAL_STATE})
            })
        .catch(error => {
            this.setState({error});
        });

        event.preventDefault();
    };   
    
    onChange = event => {

        this.setState({[event.target.name]: event.target.value});
        
    };

  render() {

        const { email,error } = this.state;
        const isInvalid = email ==='';
  
  return (
    <form onSubmit = {this.onSubmit}>
        <input
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Adress" 
        />
        <button disabled= {isInvalid} type="submit">Reset Password</button>
        {error && <Styles.Error>{error.message}</Styles.Error>}
    </form>
    );
  }
}

const PasswordForgetLink = () => (
    <p>
        <Link to = {ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export {PasswordForgetLink};