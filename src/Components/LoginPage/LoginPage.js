import React from 'react';
import Styled from 'styled-components';
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Logotype from "./LogoType/LogoType";

const LoginPage = Styled.div`
    height: 100vh;
    background-color:SaddleBrown;
    display:flex;
    flex-direction:column;
    justify-items:center;
    align-items:center;
`;


const loginPage = () =>( 
    <LoginPage>
        <Logotype/>
         <Login />
       {/* <SignUp/>*/}
    </LoginPage>
)

export default loginPage;