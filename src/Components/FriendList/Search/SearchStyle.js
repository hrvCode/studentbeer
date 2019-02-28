import Styled from 'styled-components';


export const SearchMain = Styled.div`
    text-align: center;
    height: 10vh;
    margin:0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:var(--color-r);
    color:white;
 
`;
export const Input = Styled.input `
    width: 80%;
    height: 35px;
    padding: 5px;
    font-size:18px;
    background: #333;
    color: white;
    border: none;
    outline: none;
    border-top-left-radius:4px;
    border-bottom-left-radius:4px;

    &::placeholder{
        color:white;
    }


`;
export const Button = Styled.button`
    outline: none;
    width: 45px;
    height: 45px;
    border: none;
    background: var(--lightGrey);
    border-top-right-radius:4px;
    border-bottom-right-radius:4px;
    color:black;
    &:hover{
        background:var(--lightGrey);
        span{
            color:var(--color-r);
            font-size: 20px;
         }
    }
    span{
        color:var(--color-r);
        font-size: 20px;
    }
    &:active{
        background:var(--lightGrey);
        span{
            color:var(--color-r);
            font-size: 20px;
         }
    }
`