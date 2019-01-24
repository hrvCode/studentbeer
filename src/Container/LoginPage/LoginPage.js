import React, { Component } from "react";
import Styled from 'styled-components';
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import Logotype from "./LogoType/LogoType";
import Firebase  from '../../firebase/firebase';

const LoginPage = Styled.div`
    height: 100vh;
    background-color:SaddleBrown;
    display:flex;
    flex-direction:column;
    justify-items:center;
    align-items:center;
`;

class loginPage extends Component {

    state={
        loginState:true,
    }

    signUpState = () =>{
       this.setState({
        loginState: !this.state.loginState
        });
        Firebase.auth().signOut().then(function() {
            console.log('Signed Out');
          }, function(error) {
            console.error('Sign Out Error', error);
          });

    }
      
    render(){
        return(
            <LoginPage>
                <Logotype/>
                { this.state.loginState ? < Login login={this.props.login} loginState = {this.signUpState} /> 
                :  < SignUp loginState = {this.signUpState} /> }
            </LoginPage>
        );
    }
}



export default loginPage;

