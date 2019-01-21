import React from 'react';
import Styled from 'styled-components';
import LogotypeImg from"./logotype.png";

const Logotype = Styled.div`
   
    height:auto;
    margin-top:10px;
    background-color:transparent;

`;


const logotype = () =>( 
    <Logotype>
       <img src={LogotypeImg }/>
    </Logotype>
)

export default logotype ;