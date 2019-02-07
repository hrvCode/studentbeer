import Styled from 'styled-components';

export const Main = Styled.div`
    text-align: center;
    height: 90vh;
    width: 100%
    margin: auto;
    overflow-y: scroll;

`
export const TextArea = Styled.textarea`
    margin: 25px auto 0 auto;
    display:block;
    padding: 5px;
    min-width: 80%;
    min-height: 200px;
`
export const Button = Styled.button`
    width: calc(80% + 12px);
    margin-top: 5px;
    background-color: #0e860e;
    color: #fff;
    font-size: 19px;
    padding: 15px 0;
    border:none;
    &:hover{
        background: #18b318;
    }
`