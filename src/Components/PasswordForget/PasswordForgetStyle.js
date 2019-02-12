import Styled from 'styled-components';
import Background from '../../Graphics/Backgorunds/mnm-all-551345-unsplash.jpg'

export const Main = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background:linear-gradient(rgba(0,0,0,0.9),rgba(80,80,80,0.8),rgba(255,255,255,0.5)), url(${Background});
    background-size:cover;
    height:90vh;

    h1{color:white;}

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
       
        margin:20px auto;
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
        width:250px;
        margin:10px auto;
        font-size:16px;
        border: none;
        background-color:transparent;
        border-bottom: 1px solid black;
        display: block;
        border-bottom:1px solid red;
        transition:0.6s;
        
        &::placeholder{
            text-align:center;
            color:white;
            
        }

        &:focus{
            outline: none;
            border-bottom:1px solid black;
            
        }
    }
`;