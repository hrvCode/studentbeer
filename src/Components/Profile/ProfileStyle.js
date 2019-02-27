import Styled from 'styled-components';
import Background from '../../Graphics/Backgorunds/fred-crandon-796719-unsplash.jpg'
export const Main = Styled.div`
    text-align: center;
    height:90vh;
    overflow-y: scroll;
    font-size: 17px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-size: auto 100%;
    background-color: black;

    /* Smartphones */
    @media (min-width:360px) {
    background-size: 100% 100%;
    }

    @media (min-width:640px) {
    background-size: 75% 100%;
    }

    /* Tablet */

    @media (min-width:768px) {
    background-size: 100% 100%;
    }

    @media (min-width:1024px) {
    background-size: 75% 100%;   
    }
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
    justify-content:flex-end;
    align-items: center;


   

    a{
        background-color:transparent;
        font-size:24px;
        color:white;
        margin-right:15px;
    }
`;

export const MiddleSection = Styled.section`
    
    color:var(--color-y);
    width: 100%;
    height: 30vh;
 
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;

    h1{margin:0px;font-size:36px;}

    
    /* Smartphones */
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

export const StatusSection = Styled.section`
    
    color:white;
    width: 100%;
    height: 20vh;
    
    
    display:flex;
    
    flex-direction:column;
    justify-content:flex-start;
    align-items: center;
    
    h1{
        margin:0px;
        font-size:20px;
    }
    p{
        margin:0px;
        font-size:16px;
        font-style:italic;
        color:var(--color-y);
        font-weight:bold;

    }

    /* Smartphones */
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

export const BioSection = Styled.section`
    
    color:white;
    height: 30vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-start;
    background-color:var(--transparent-Dark);
    
    

    
    h1{
        margin:20px 0px 0px 30px;
        font-size:24px;
    }
    p{
        word-break:break-all;
        margin:5px 30px 10px 30px;
        text-align:left;
    }

    /* Smartphones */
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




export const Avatar = Styled.div`
  
  width:80px;
  height:80px;
  border:5px solid grey;
  border-radius:50%;
  background-color:white;
  margin-top:20px;
  i{
    color:black;
    margin-top:20px;
    font-size:46px;
  }
   
`;

