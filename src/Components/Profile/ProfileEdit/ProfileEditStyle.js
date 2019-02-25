import Styled from 'styled-components';

export const Main = Styled.div`
    text-align: center;
    height:90vh;
    overflow-y: scroll;
    font-size: 17px;
    display:flex;
    flex-direction:column;
    

   
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
    background-color:grey;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items: center;
    border-bottom:5px solid silver;
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
    height: 35vh;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: flex-start;

    h1{
    color:black;
    font-size:14px;
    margin-bottom:5px;
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