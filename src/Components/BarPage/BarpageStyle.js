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

export const Main = Styled.div `
    height: 90vh;
    text-align: center;
    height:90vh;
    overflow-y: scroll;
    font-size: 17px;
    color: #333333;
`