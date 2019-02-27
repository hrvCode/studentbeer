import Styled from 'styled-components';

export const Container = Styled.div`
    background-color:white;
    height:90vh;
  
    overflow:scroll;
    
`;


export const Friend = Styled.div`
    padding: 3% 0 3% 5%;
    
    display: flex;
    border-bottom:1px solid black;
    
    
  

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
   
`;
export const onlineContainer = Styled.div `
    cursor: pointer;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    max-width: 40px;
`