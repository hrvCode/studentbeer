import Styled from 'styled-components';


export const SearchMain = Styled.div`
    text-align: center;
    height: 10vh;
    margin:0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:grey;
    color:white;
    border-bottom: 5px solid silver;
`;
export const Input = Styled.input `
    width: 80%;
    height: 35px;
    padding: 5px;
    font-size:18px;
    background: #333;
    color: #fff;
    border: none;
    outline: none;
    border-top-left-radius:4px;
    border-bottom-left-radius:4px;


`;
export const Button = Styled.button`
    outline: none;
    width: 45px;
    height: 45px;
    border: none;
    background: silver;
    border-top-right-radius:4px;
    border-bottom-right-radius:4px;
    color:black;
    &:hover{
        background: #f3f3f3;
        span{
            color: red;
            font-size: 20px;
         }
    }
    span{
        color: #f3f3f3;
        font-size: 20px;
    }
    &:active{
        background: #f3f3f3;
        span{
            color: red;
            font-size: 20px;
         }
    }
`