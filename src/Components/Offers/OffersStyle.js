import Styled from 'styled-components';
export const Main = Styled.div`
    text-align: center;
    height:90vh;
    overflow-y: scroll;
    font-size: 17px;
    font-color: #333333;
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
    border-bottom: 1px solid black;
    display:flex;
    justify-content:center;
    align-items: center;
`;
export const List = Styled.ul`
    overflow:hidden;
    width: 100%;
    list-style-type: none;
    margin:0;
    padding:0;
    background-color: none;
    text-align:left;

    li{
        width: 90%;
        margin: auto;
        div{
            border-radius: 16px;
            padding: 10px;
            background-color: #F2F2F2;
            margin: 20px auto;
                h4{
                    display: inline-block;
                    font-weight: 200;
                    font-size: 1.3em;
                    padding:0;
                    margin:5px 0;
                    color:#B40000;
                    font-family: 'open-sans';
                }
                p{
                    margin: 5px 0px;
                    padding:0;

                    strong{
                            font-size: 1.2em;
                            }
                }
        }
   
    }
`;