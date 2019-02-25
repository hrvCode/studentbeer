import Styled from 'styled-components';
import Background from '../../Graphics/Backgorunds/mnm-all-551345-unsplash.jpg'

export const HeaderContainer = Styled.div `

    width: 100%;
    height: 10vh;
    border-bottom: 5px solid var(--darkGrey);
    display:flex;
    justify-content:center;
    align-items: center;
    background-color:var(--color-r);
    color:white;
    position:fixed;
    

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
padding-top:120px;
p{
    width: 80%;
    color:white;
    margin: auto;
    text-align: center;
    background-color:var(--transparent-Dark);
    border: 2px solid var(--transparent-Light);
    border-radius:4px;
    padding:15px;
    
}
`;

export const CheckInButton = Styled.div `
    width: 80%;
    margin: auto;

    button {
        width: 100%;
        
         display:inline-block;
         padding: 1.0em 1.0em;
         margin:10px 0.3em 0.3em 0;
         border-radius:4px;
         box-sizing: border-box;
         text-decoration:none;
         font-family:'Roboto',sans-serif;
         font-weight:300;
         color:white;
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
    text-align: center;
    height:90vh;
    overflow-y: scroll;
    font-size: 17px;
    color: #333333;
    background:url(${Background});
    background-attachment:fixed;
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;

`;

export const Container = Styled.div `
    height: 90vh;
    text-align: center;
    height:90vh;
    overflow-y: scroll;
    font-size: 17px;
    color: #333333;
    background:url(${Background});
    background-attachment:fixed;
    background-size:cover;
`;
