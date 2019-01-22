import React from 'react';
import Styled from 'styled-components';

const SignUp = Styled.div`
    width: 100%;
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-items:center;
    align-items:center;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.4);
`;

const Input = Styled.input`
    width:150px;
    border: none;
    border-bottom: 1px solid black;
    display: block;
    padding-top:2%;

    &::placeholder{
        text-align:center;
    }

    &:focus{
        outline: none;
    }
`;

const InputContainer = Styled.div`
    margin:10px 0 10px 0;
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
    display: block;
    margin:auto;
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

const signup = (props) =>( 
    <SignUp>

        <InputContainer>
            <Input type="text" placeholder="Username"></Input>
            <Input type="email" placeholder="Email"></Input>
            <Input type="password" placeholder="Password"></Input>
        </InputContainer>

        <ButtonContainer>
            <Button background="#1D4717"  backgroundHover="#3E8E32" color="white">Create account</Button>
            <Button onClick={props.loginState} background="#FAD338" backgroundHover="#F9E48F" color="black">Back</Button>
        </ButtonContainer>
    </SignUp>
)

export default signup;