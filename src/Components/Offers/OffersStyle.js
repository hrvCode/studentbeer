import Styled from 'styled-components';
import Background from '../../Graphics/Backgorunds/mnm-all-551345-unsplash.jpg'
export const Main = Styled.div`
    text-align: center;
    height:90vh;
    overflow-y: scroll;
    font-size: 17px;
    color: white;
    background:url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-size: auto 100%;
    

    a{
        color:white;
        text-decoration:none;
        margin-left:20px;
        padding:0px 8px 0px 8px;
        height:40px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:14px;
        font-weight:bold;
        background-color:var(--color-b);
        border-radius:4px;

        &:hover{
            background-color:silver;
        } 
    }
`;

export const MainContent = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Header = Styled.header`
    width: 100%;
    height: 10vh;
    display:flex;
    justify-content:center;
    align-items: center;
    background-color:var(--color-r);
    color:white;
    position:fixed;
`;

export const List = Styled.ul`
    overflow:hidden;
    width: 100%;
    list-style-type: none;
    margin:0px;
    padding:60px 0px 60px 0px;
    background-color: none;
    text-align:left;

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

