import Styled from 'styled-components'
export const antal = Styled.span`
    color: #fff;
    font-weight: 200;
    font-size:15px;
    vertical-align: middle;
`

export const Li = Styled.li`
    width: 90%;
    margin: auto;
    cursor: pointer
    padding: 10px 0;
    overflow:hidden;

            h4{
                background-color:var(--transparent-Dark);
                display: inline-block;
                font-weight: 200;
                font-size: 1.2em;
                padding:0 5px;
                margin:5px 0;
                color:var(--color-y);
                font-family: var(--main-title-font);
            }
            p{
                margin: 10px 0px;
                color:var(--text-lightColor);
                padding: 5px 0;

                strong{
                        font-size: 1.2em;
                        }
            }
`;
export const trying = Styled.div`
    background-color:var(--transparent-Dark);
    border-radius: 4px;
    margin: 0px auto 20px auto;
    max-height: ${props => (props.open ? "100%" : "0")};
    padding: ${props => (props.open ? "10px 15px" : "0 15px")};
    transition: all 0.3s;
`