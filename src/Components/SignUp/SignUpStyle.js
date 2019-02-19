import Styled from 'styled-components';
import Background from '../../Graphics/Backgorunds/mnm-all-551345-unsplash.jpg'

export const Main = Styled.div`
    height:100vh;
    background-image:url(${Background});
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

     
    h1{
        text-align:center;
        color:gold;
    }

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
        font-size:14px;
        width:80%;
        margin:20px auto;
        border: none;
        background-color:transparent; 
        border-bottom: 1px solid white;
        display: block;
        padding-top:2%;
        transition:0.6s;
        caret-color:white;
        color:white;
        @media(min-width: 1024px){
            width: 50%;
        }
        &::placeholder{
            text-align:center
            color:white;
            background-color:transparent; 
            
        }

        &:focus{
            outline: none;
            border-bottom: 1px solid red;
        }

        &::selection{

            background-color:transparent; 
        }
    }

   

    
`;

export const Container = Styled.div`
      background-color:rgba(0,0,0, 0.6); 
      border:2px solid white;
      border-radius:4px;
      width:80%;
      padding: 20px 0px 60px 0px;
`;

export const Paragraph = Styled.p`
   margin-top:20px;
   text-align:center;
   font-size:20px;
  
`;


export const AdminChoice = Styled.div`
 
   text-align:center;
   font-size:18px;
   font-weight:bold;
   display:flex;
   color:white;
  
   flex-direction:row;
   justify-content:center;
   align-items:center;

   input{
    margin:5px 0px 0px 0px;
    width:30px;
       
   }
  
`;

export const BottomButton = Styled.div`
    margin-top:10px;
    width:81%;
    z-index:5;
    button{border:none;
        
         cursor:pointer;
         width:100%;
         height:50px;
         background-color:rgba(0,0,0, 0.7); 
         color:white;
         border-radius:4px;
         border:2px solid white;
         font-weight:bold;
         font-size:18px;
         transition:0.4s;
         box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.55);}
         
         a{text-decoration:none;}

         &:hover{
            background-color:#cccccc;
        }
`;