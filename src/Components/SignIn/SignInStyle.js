
import Styled from 'styled-components';
import Background from '../../Graphics/Backgorunds/mnm-all-551345-unsplash.jpg'

export const Main = Styled.div`
    height:90vh;
    background-image:url(${Background});
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;  
    
    h1{text-align:center;}

    button{
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
        width: 100px;
        height:30px; 
        cursor:pointer;
        
        &:hover{
            background:${props => props.backgroundHover};
        }
        &:focus{
            outline: none;
        }
    }
    input{
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
    }

    a{

        font-family:Arial;
        font-weight:bold;
        font-size: 20px;
        color:red;
        text-align:center;
        display: block;
        margin:25px auto 25px auto;
        text-decoration:none;

        &:hover{
            color:black;
        }
    }

    p{
        text-align:center;
        color:red;
        font-weight:bold;
    }
`;

export const Container = Styled.div`
    
 
    background-color:white;
    border:2px solid white;
    border-radius:10px;
    width:80%;
      
`;

export const ButtonContainer = Styled.div`
    
 
   display:flex;
   justify-content:center;
      
`;





       