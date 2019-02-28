import Styled from 'styled-components';
import Background from '../../../Graphics/Backgorunds/mnm-all-551345-unsplash.jpg'

export const Main = Styled.div`
    text-align: center;
    height: 90vh;
    width: 100%
    margin: auto;
    overflow-y: scroll;
    background:url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-size: auto 100%;
    background-color: black;
    h2{color:var(--color-y);}

  

`

export const Header = Styled.header`
    width: 100%;
    height: 10vh;
    background-color:var(--color-r);
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items: center;

    h2{

        color:white;
        font-size: 24px;
    }

`;
export const TextArea = Styled.textarea`
    margin: 25px auto 0 auto;
    display:block;
    padding: 5px;
    min-width: 80%;
    min-height: 200px;
    background-color:var(--transparent-Light);
    border:none;

    &::placeholder{
        color:black;
    }
`
export const Button = Styled.button`
    width: 200px;
    height:40px
    margin-top: 15px;
    background-color: var(--color-b);
    color: #fff;
    font-size: 19px;
    border:none;
    border-radius:4px;
    &:hover{
        background: #18b318;
    }
`