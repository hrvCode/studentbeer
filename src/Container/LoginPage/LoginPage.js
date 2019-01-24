import React, { Component } from "react";
import Styled from 'styled-components';
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import Logotype from "./LogoType/LogoType";

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
    }
      

    render(){
       
        return(
            <LoginPage>
                <Logotype/>
                { this.state.loginState ? < Login loginState = {this.signUpState} /> :  < SignUp loginState = {this.signUpState} /> }
            </LoginPage>
        );
    }
}



export default loginPage;

