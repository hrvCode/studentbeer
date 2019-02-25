import Styled from 'styled-components';

export const Container = Styled.div`
    background-color:silver;
    height:90vh;
    overflow:scroll;
    
`;

export const Friend = Styled.div`
    padding: 3% 0 3% 5%;
    display: flex;
    
    border-bottom:1px solid black;
    
    
  

    .far {
        font-size: 35px;
        color:green;
        /* color:${props => props.color};
        color:  ${props => props.active ? 'green' : 'red' } */
    
    } 

    /* .far:nth-of-type(2n){
        color:red;
    } */
   

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
                        padding-left:3%;
                        font-size: 0.9em;
                        width:100%;
                        font-family: 'open-sans';
                        font-weight: 100;
                    }
    }
    &:hover{
            background-color: #E0E0E0;
    }
   
`;
export const onlineContainer = Styled.div `
    cursor: pointer;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    max-width: 40px;
`