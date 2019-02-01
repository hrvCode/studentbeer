import React from 'react';
import Styled from 'styled-components';
import {withAuthorization} from '../Session'

const Main = Styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:white;
height:80vh;
`;

const profile = () => (
    <Main>
        <header>
            <h2>Profil sidan</h2>
        </header>
    </Main>
)
const condition = authUser => authUser != null;
export default withAuthorization(condition)(profile);