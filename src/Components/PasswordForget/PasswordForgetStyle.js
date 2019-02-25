import Styled from 'styled-components';
import Background from '../../Graphics/Backgorunds/mnm-all-551345-unsplash.jpg'

export const Main = Styled.div`
    display:flex;
    
    align-items:center;
    flex-direction:column;
    background:url(${Background});
    background-size:cover;
    height:100vh;
    justify-content:center;

    h1{
        color:var(--color-y);
        text-align:center;}

    button{
        background:${props => props.background};
        color:${props => props.color};
        box-shadow: 0 1px 1px 0 grey;
        font-family:Arial;
        font-weight:bold;
        font-size: 14px;
        border:none;
        border-radius: 5px;
        display:block;
       
        margin:30px auto;
        width: 150px;
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
        margin:10px auto;
        border: none;
        background-color:transparent;
        border-bottom: 1px solid black;
        display: block;
        border-bottom:1px solid white;
        transition:0.6s;
        caret-color:white;
        color:white;
        
        &::placeholder{
            text-align:center;
            color:white;
            
        }

        &:focus{
            outline: none;
            border-bottom:1px solid var(--color-g);
            
        }
    }
`;

export const Container = Styled.div`
      background-color:rgba(0,0,0, 0.7); 
      border:2px solid white;
      border-radius:4px;
      width:80%;
      height:60%;
      margin-top:40px;
      padding: 20px 0px 0px 0px;
`;

export const BottomButton = Styled.div`

    width:81%;
    z-index:5;
    button{
        border:none;
        
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

export const Error = Styled.div`

    color:red;
    font-size:14px;
    text-align:center;
    margin-bottom:10px;
    
`;