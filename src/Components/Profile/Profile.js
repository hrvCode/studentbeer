import React from 'react';
import Styled from 'styled-components';

const Main = Styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:white;
height:80vh;
`;

const profil = () => (
    <Main>
        <header>
            <h2>Profil sidan</h2>
        </header>
    </Main>
)
export default profil;