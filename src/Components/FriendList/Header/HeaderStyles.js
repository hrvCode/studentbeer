import Styled from 'styled-components';

export const Header = Styled.div`
    text-align: center;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:var(--color-r);
    color:white;
   
  
`;
export const HeaderLink = Styled.div`
    cursor: pointer;
    padding: 5px;
    *{
        display: inline-block;
        padding: 0px 5px;
    }
    i{
        font-size: 20px;
    }
`
