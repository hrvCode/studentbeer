import Styled from 'styled-components';

export const HeaderContainer = Styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;

    i {
        float: left;
        position: absolute;
        left: 5%;
        top: 4%;
        font-size: 20px;
    }

    h1 {
        align-self: center;
    }
`;


export const BioaBarText = Styled.div `

p{
    width: 80%;
    margin: auto;
    text-align: center;
}
`;

export const CheckInButton = Styled.div `
    width: 75%;
    margin: auto;

    button {
        width: 100%;
        
         display:inline-block;
        padding: 1.0em 1.0em;
         margin:0 0.3em 0.3em 0;
         border-radius:2em;
         box-sizing: border-box;
         text-decoration:none;
         font-family:'Roboto',sans-serif;
         font-weight:300;
         color:#FFFFFF;
         background-color:#4eb5f1;
         text-align:center;
         transition: all 0.2s;
    }

    button:hover {
         background-color:#4095c6;
    }
`;

export const Main = Styled.div `
    height: 90vh;
    text-align: center;
    height:90vh;
    overflow-y: scroll;
    font-size: 17px;
    color: #333333;
`
