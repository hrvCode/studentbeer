
import Styled from 'styled-components';

export const Main = Styled.div`
    
    height:80vh;
    background-color:red;
    display:flex;
    flex-direction:column;
    justify-items:center;
    align-items:center;    
`;


export const Container = Styled.div`
    
 
    background-color:white;
      
`;
export const Input = Styled.input`
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
`;

export const InputContainer = Styled.div`
    
    width: 100%;
`;

export const ButtonContainer = Styled.div`
    margin:0 0 3% 0;
`;

export const Button = Styled.button `
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
    width: 130px;
    height:30px; 
    cursor:pointer;

    &:hover{
        background:${props => props.backgroundHover};
    }
    &:focus{
        outline: none;
    }
`;

export const Atag = Styled.a `
    
    font-family:Arial;
    font-weight:bold;
    font-size: 10px;
    color:red;
    text-align:center;
    display: block;
    margin:auto;
    margin-bottom:25px;
    margin-top:8%;
    text-decoration:none;

    &:hover{
        color:black;
    }
   
`;

       