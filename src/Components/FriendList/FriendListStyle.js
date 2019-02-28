import Styled from 'styled-components';

export const Container = Styled.div`
    background-color:white;
    height:90vh;
    margin:0 auto;
    overflow:scroll; 
    background: #333;
`;


export const Friend = Styled.div`
    padding: 3% 0 3% 5%;
    display: flex;
    border-bottom:1px solid black;
    margin:5px auto;
    background: #ffffff;
    .far {
        font-size: 35px;
        color:var(--color-g);

    
    }    

    div{
        padding-left:7%;
        width:100%;
        
            p {
            margin:0;
            
            }
                .fas{
                    
                    display:flex;
                }

                    .locationText{
                        color:var(--color-b);
                        padding-left:3%;
                        font-size: 0.9em;
                        width:100%;
                        font-family: 'open-sans';
                        font-weight: 100;
                    }
    }
    &:hover{
            background-color:var(--color-y);
    }
    @media (min-width:768px) {
        width: 75%;
    }

    @media (min-width:1024px) {
        width: 50%;
    }
   
`;
export const onlineContainer = Styled.div `
    cursor: pointer;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    max-width: 40px;
`