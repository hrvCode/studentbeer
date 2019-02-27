import Styled from 'styled-components';


export const Friend = Styled.div`
    padding: 3% 0 3% 5%;
    display: flex;
    
    padding-left:10%;
    
  

    .far {
        font-size: 35px;
        color:green;
    } 

    div{
        
        width:100%;
    
        
            p {
            margin:0;
            float:left;
            padding-left:3%;
            color:white;

            }
            
            p:nth-of-type(2){
                font-Size:0.7em;
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
   
`;
export const onlineContainer = Styled.div `
    cursor: pointer;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    max-width: 40px;
    i {
        color:green;
    }
`