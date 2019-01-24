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




const navigator = () => (
    <Main>
        
            <ul>
                <li>
                    <NavLink to="/profile"><i  className="fas fa-user-circle"></i></NavLink>
                </li>
                <li>
                    <NavLink to="/map"><i className="fas fa-map-marker-alt"></i></NavLink>
                </li>
                <li>
                    <NavLink to="/offers"><i className="fas fa-gift"></i></NavLink>
                </li>
                <li>
                    <NavLink to="/friendlist"><i className="fas fa-user-friends"></i></NavLink>
                </li>
            </ul>
      
    </Main>
)

export default navigator;