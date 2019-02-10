
import Styled from 'styled-components';
import Background from '../../Graphics/Backgorunds/rawpixel-795617-unsplash.jpg'


export const ButtonContainer = Styled.div`
    
 
   display:flex;
   justify-content:center;
      
`;


export const Main = Styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    background:linear-gradient(rgba(0,0,0,0.5),rgba(255,255,255,0.5)), url(${Background});
    background-size:cover;
    height:90vh;
`;

export const ContainerTop = Styled.div`
display:flex;
flex-direction:column;

margin-top:50px;
    h1{
       
        font-family: 'Berkshire Swash', cursive;
        font-size:45px;
        color:Black;
        margin:0;
        border-top:8px solid red;
        padding-top:5px;
        width:100%;
        
        
    }

    h3{
        text-align:center;
        color:red;
        font-weight:bold;
    }

    input{
        font-size:24px;
        color:red;
        width:80%;
        margin:20px auto;
        border: none;
        background-color:transparent;
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

export const ContainerBottom = Styled.div`
display:flex;
flex-direction:column;
    h1{
       
        font-family: 'Berkshire Swash', cursive;
        font-size:45px;
        color:Black;
        margin:0;
        border-top:8px solid red;
        padding-top:5px;
        width:100%;
        
        
    }

    h3{
        margin-top:80px;
        text-align:center;
        color:red;
        font-weight:bold;
    }

    input{
        font-size:24px;
        width:80%;
        margin:20px auto;
        border: none;
        background-color:transparent;
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

export const Logotype = Styled.div`

   
  
    text-align:center;
    img{
        height:200px;
        margin-bottom:10px;
    }
    
`;


       