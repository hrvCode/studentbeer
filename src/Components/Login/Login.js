import React from 'react';
import Styled from 'styled-components';
import Firebase  from '../../firebase/firebase';

const Login = Styled.div`
    width: 100%;
    @media(min-width: 700px){
        width: 50%;
        border-radius:5px;
    }
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-items:center;
    align-items:center;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.4);
    
`;

const Input = Styled.input`
    width:60%;
    margin:20px auto;
    border: none;
    
    border-bottom: 1px solid black;
    display: block;
    padding-top:2%;
    @media(min-width: 1024px){
        width: 50%;
    }
    &::placeholder{
        text-align:center;
    }

    &:focus{
        outline: none;
    }
`;

const InputContainer = Styled.div`
    
    width: 100%;
`;

const ButtonContainer = Styled.div`
    margin:0 0 3% 0;
`;

const Button = Styled.button `
    background:${props => props.background};
    color:${props => props.color};
    box-shadow: 0 1px 1px 0 grey;
    font-family:Arial;
    font-weight:bold;
    font-size: 16px;
    border:none;
    border-radius: 5px;
    display: inline-block;
    margin:0 20px;
    margin-top:4%;
    width: 130px;
    height:30px; 
    cursor:pointer;

    &:hover{
        background:${props => props.backgroundHover};
    }
    &:focus{
        outline: none;
    }
`;

const Atag = Styled.a `
    
    font-family:Arial;
    font-weight:bold;
    font-size: 10px;
    color:red;
    text-align:center;
    display: block;
    margin:auto;
    margin-bottom:25px;
    margin-top:8%;
    text-decoration:none;

    &:hover{
        color:black;
    }
   
`;

        
const login = (props) =>{
    let password;
    let email;

    const emailHandler = (event) => {
        email = event.target.value
    }

    const passwordHandler = (event) => {
        password = event.target.value
    }
    const loginAction = (email, password) => {
        try{
            Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
                let errorCode = error.code;
                let errorMessage = error.errorMessage;
                console.log(errorCode)
                console.log(errorMessage)
            })
        }catch(error){
            let errorCode = error.code;
            let errorMessage = error.errorMessage;
            console.log(errorCode)
            console.log(errorMessage)
        }
        props.login()
    }
    return(
            <Login>
            <InputContainer>
                <Input type="text" onChange={(event) => emailHandler(event)} placeholder="Username"></Input>
                <Input type="password"  onChange={(event) => passwordHandler(event)} placeholder="Password"></Input>
            </InputContainer>

            <ButtonContainer>
                <Button background="#1D4717" onClick={() => loginAction(email, password)}  backgroundHover="#3E8E32" color="white">Login</Button>
                <Button onClick={props.loginState} background="#FAD338" backgroundHover="#F9E48F" color="black">SignUp</Button>
                <Atag href="#">Forgot Password?</Atag>
            </ButtonContainer>
        </Login>
    )
}

export default login;