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

    h1{

        color:white;
        font-size: 24px;
    }

`;

export const MiddleSection = Styled.section`
    
    color:white;
    width: 100%;
    height: 50vh;
 
    padding-top:50px;
    display:flex;
    
    flex-direction:column;
    justify-content:center;
    align-items: center;
    
`;

export const FormContainer = Styled.div`
    
    color:white;
    width: 100%;
    height: 50vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-start;

    h1{
    color:var(--color-y);
    font-size:16px;
    margin-bottom:5px;
    }
    textarea{

        height:15vh;
        border:0px;
        color:black;
        background-color:var(--transparent-Light);

        &::placeholder{
            color:black;
        }
    }

    input{
        border:0px;
        width:100%;
        height:20px;
        color:black;
        background-color:var(--transparent-Light);

        &::placeholder{
            color:black;
        }
    }
   
    select{
        border:0px;
        width:100%;
        height:20px;
        color:black;
        background-color:var(--transparent-Light);

        &::placeholder{
            color:black;
        }

    }
`;

export const Button = Styled.button`
    width: calc(80% + 12px);
    margin-top: 5px;
    background-color: var(--color-b);
    color: white;
    font-size: 19px;
    padding: 15px 0;
    border:none;
    border-radius:4px;
    &:hover{
        background: grey;
    }
`

export const BioTextInput = Styled.button`
     
     width:100%;
`

export const ProfileImgContainer = Styled.button`
    
    display: flex;
    flex-direction:column;
    align-items: left;
    width:100%;
    background-color:var(--transparent-Light);
    margin: 10px 0 0 0;
`