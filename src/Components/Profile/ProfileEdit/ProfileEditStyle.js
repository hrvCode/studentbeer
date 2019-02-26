import Styled from 'styled-components';
import Background from '../../../Graphics/Backgorunds/mnm-all-551345-unsplash.jpg'
export const Main = Styled.div`
    text-align: center;
    height:90vh;
    overflow-y: scroll;
    font-size: 17px;
    display:flex;
    flex-direction:column;
    background:url(${Background});
    background-attachment:fixed;
    background-size:cover;

   
`;

export const MainContent = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
`;

export const Header = Styled.header`
    width: 100%;
    height: 10vh;
    background-color:var(--color-r);
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items: center;
    border-bottom:5px solid var(--darkGrey);
    h1{

        color:white;
        font-size: 24px;
    }

`;

export const MiddleSection = Styled.section`
    
    color:white;
    width: 100%;
    height: 80vh;
    border-bottom:5px solid grey;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    
`;

export const FormContainer = Styled.div`
    
    color:white;
    width: 100%;
    height: 50vh;
    background-color:var(--transparent-Dark);
    border:2px solid var(--transparent-Light);
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-start;

    h1{
    color:white;
    font-size:14px;
    margin-bottom:5px;
    }
    textarea{

        height:15vh;
    }
   
    
`;

export const Button = Styled.button`
    width: calc(80% + 12px);
    margin-top: 5px;
    background-color: grey;
    color: white;
    font-size: 19px;
    padding: 15px 0;
    border:none;
    border-radius:4px;
    &:hover{
        background: #18b318;
    }
`

export const BioTextInput = Styled.button`
     
     width:100%;
`