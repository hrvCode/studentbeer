import React from 'react';
import Styled from 'styled-components';
import LogotypeImg from"./logotype.png";

const Logotype = Styled.div`
    height:auto;
    margin-top:10px;
    background-color:transparent;

`;
const Img = Styled.img`
    max-width: 100%;
`;

const logotype = () =>( 
    <Logotype>
       <Img alt="logo" src={LogotypeImg }/>
    </Logotype>
)

export default logotype ;