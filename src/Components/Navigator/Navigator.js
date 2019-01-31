import React from 'react';
import Styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Main = Styled.div`

display:flex;
flex-direction:row;
background-color:Dimgrey;
height:20vh;
justify-content:space-evenly;
align-items:center;


ul{
  margin:0;
  padding:0;
     li{
        margin:15px;
        display: inline;
        color:white;
        text-decoration:none;

        i{
            font-size:36px;
            color:white;  

            &:hover{
                color: Silver;
            } 
            &:active{
                color:Grey;
            }   
  
         }
         
    }   

}


`;

const navigator = (props) => (
    <Main>
        <ul>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
                <NavLink to="/map">Map</NavLink>
            </li>
            <li>
                <NavLink to="/offers">Offers</NavLink>
            </li>
            <li>
                <NavLink to="/friendlist">Friendlist</NavLink>
            </li>
            <li>
                <NavLink to="/"><span onClick={props.signOut}>X</span></NavLink>
            </li>
        </ul>
    </Main>
)

export default navigator;