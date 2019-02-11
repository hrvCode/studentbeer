
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
    background:linear-gradient(rgba(0,0,0,0.9),rgba(80,80,80,0.8),rgba(255,255,255,0.5)), url(${Background});
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

   

`;

export const ContainerBottom = Styled.div`
display:flex;
flex-direction:column;
    h1{
       
        font-family: 'Berkshire Swash', cursive;
        font-size:55px;
        color:Black;
        margin:0;
        border-top:8px solid red;
        padding-top:5px;
        width:100%;
        
        
    }

    h3{
        margin-top:70px;
        text-align:center;
        color:black;
        font-size:16px;
        
    }

    input{
        font-size:18px;
        width:80%;
        margin:20px auto;
        border: none;
        background-color:transparent;
        border-bottom: 1px solid black;
        display: block;
        padding-top:2%;
        @media(min-width: 1024px){
            width: 100%;
        }
        &::placeholder{
            text-align:center;
            color:white;
            font-size:24px;
        }

        &:focus{
            outline: none;
        }
    }

    button{
         border:none;
         cursor:pointer;
         width:180px;
         height:40px;
         background-color:white;
         color:black;
         border-radius:4px;
         font-weight:bold;
         font-size:18px;
         transition:0.4s;
         box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.55);

         &:hover{
            background-color:#cccccc;
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


       