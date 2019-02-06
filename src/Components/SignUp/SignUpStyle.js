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

    p{
        text-align:center;
        color:red;
        font-weight:bold;
    }

    button{
        background:${props => props.background};
        color:${props => props.color};
        box-shadow: 0 1px 1px 0 grey;
        font-family:Arial;
        font-weight:bold;
        font-size: 16px;
        border:none;
        border-radius: 5px;
        display:block;
       
        margin:20px auto;
        width: 130px;
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

    
`;

export const Container = Styled.div`
      background-color:white; 
      border:2px solid white;
      border-radius:10px;
      width:80%;
`;

export const Paragraph = Styled.p`
   margin-top:20px;
   text-align:center;
   font-size:20px;
  
`;
