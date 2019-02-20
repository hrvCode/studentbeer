import Styled from 'styled-components';


export const SearchMain = Styled.div`
    text-align: center;
    height: 60px;
    padding: 2% 0 2% 0;
    margin:0 auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
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

`;
export const Button = Styled.button`
    outline: none;
    width: 45px;
    height: 45px;
    border: none;
    background: #808080;
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