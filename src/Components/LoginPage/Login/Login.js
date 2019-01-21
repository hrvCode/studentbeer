import React from 'react';
import Styled from 'styled-components';

const Login = Styled.div`
    width: 100%;
    height: auto;
    background-color:gold;
    display:flex;
    flex-direction:column;
    justify-items:center;
    align-items:center;

`;

const Input = Styled.input`
    width:100px;
    border: none;
    border-bottom: 1px solid black;
    display: block;
    padding-top:10%;
`;

const Button = Styled.button `
    background:${props => props.background};
    display: block;
    margin:auto;
    margin-top:1%;
    width: 50%; 
`;

const InputConatiner = Styled.div`
    margin-top:5%;
`;

const ButtonConatiner = Styled.div`
    margin-top:3%;
`;



const login = () =>( 
    <Login>
        <InputConatiner>
            <Input type="text" placeholder="Username"></Input>
            <Input type="password" placeholder="Password"></Input>
        </InputConatiner>

        <ButtonConatiner>
            <Button background="blue">Login</Button>
            <Button background="red">SignUp</Button>
            <a href="#">Forgot Password </a>
        </ButtonConatiner>

    </Login>
)

export default login;