import Styled from 'styled-components';
import Background from '../../Graphics/Backgorunds/mnm-all-551345-unsplash.jpg'

export const FlexContainer = Styled.div `
display:flex;
flex-direction:column;
`



export const HeaderContainer = Styled.div `

    width: 100%;
    height: 10vh;
    justify-content:center;
    align-items: center;
    background-color:var(--color-r);
    color:white;
    position:fixed;
    top:0; 
    left:0;
    

    i {
        float: left;
        position: absolute;
        left: 5%;
        top: 25px;
        font-size: 26px;
    }

    h1 {
        align-self: center;
        font-size:26px;
    }
`;
export const BioaBarText = Styled.div `
display:flex;
justify-content:center;
p{
    width: 100%;
    color:white;
    margin:0px;
    padding:20px 0px 20px 0px;
    text-align: center;
    background-color:var(--transparent-Dark);
    border-radius:4px;
    padding:15px;
    
}
`;

export const CheckInButton = Styled.div `
    width: 200px;
    
    margin: auto;

    button {
        width: 100%;
        
         display:inline-block;
         height: 40px;
         border-radius:4px;
         text-decoration:none;
         font-family:'Roboto',sans-serif;
         font-weight:300;
         color:white;
         border:none;
         background-color:var( --transparent-Dark);
         text-align:center;
         transition: all 0.2s;
    }

    button:hover {
         background-color:var( --transparent-Light);
    }
`;

export const Main = Styled.div `
    height: 90vh;
    margin:0 auto;
    text-align: center;
    overflow-y: scroll;
    font-size: 17px;
    color: #333333;
    background:url(${Background});
    background-attachment:fixed;
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (min-width:360px) {
    width: 100%;
    }

    @media (min-width:640px) {
        width: 75%;
    }

    /* Tablet */
    @media (min-width:768px) {
        width: 75%;
    }

    @media (min-width:1024px) {
        width: 50%;
    }
`;

export const Container = Styled.div `
    height: 90vh;
    text-align: center;
    height:90vh;
    overflow-y: scroll;
    font-size: 17px;
    color: #333333;
`;
