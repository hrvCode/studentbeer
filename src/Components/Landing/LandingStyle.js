import Styled from 'styled-components';
import Background from '../../Graphics/Backgorunds/rawpixel-795617-unsplash.jpg'

export const Main = Styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    background-image:url(${Background});
    background-size:cover;
    height:90vh;
`;

export const Container = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:white;
    border-radius:10px;
    margin:20px auto;
    width:325px;
    

    h1{
        font-family: 'Berkshire Swash', cursive;
        font-size:45px;
        color:Black;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size:18px;
        margin:0px 15px 15px 15px;
    }
`;

export const Logotype = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:white;
    border-radius:50%;
    margin:10px auto;
    width:200px;
    height:200px;
    
`;