
import Styled from 'styled-components';
export const Main = Styled.div`

display:flex;
flex-direction:row;
background-color:Dimgrey;
height:20vh;
justify-content:space-evenly;
align-items:center;


ul{
  margin:0;
  padding:0;
     li{
        margin:15px;
        display: inline;
        color:white;
        text-decoration:none;

        a{
            font-size:36px;
            color:white;  

            &:hover{
                color: Silver;
            } 
            &:active{
                color:Grey;
            }   
  
         }
         
    }   

}
`;