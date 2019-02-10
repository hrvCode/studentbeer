
import Styled from 'styled-components';

export const Main = Styled.div`

    display:flex;
    flex-direction:row;
    background-color:Dimgrey;
    height:10vh;
    justify-content:center;
    align-items:center;

    button{
                
                color:black;  
                font-size:24px;
                font-weight:bold;
                text-decoration:none;
                border:none;
                width:100vw;
                height:10vh;
                margin:0;
                padding:0;

                &:hover{
                    color: Silver;
                    cursor:pointer;
                } 
                &:active{
                    color:Grey;
                }   
    
            }


    ul{
    margin:0;
    padding:0;
        li{
            
            display: inline;
            color:white;
            text-decoration:none;

            

            i{
                
                color:black;  
                font-size:24px;
                font-weight:bold;
                text-decoration:none;
                border:none;
              

                &:hover{
                    color: Silver;
                    cursor:pointer;
                } 
                &:active{
                    color:Grey;
                }   
    
            }
            
        }   

    }
`;

