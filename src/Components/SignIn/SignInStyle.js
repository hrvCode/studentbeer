
import Styled from 'styled-components';
import Background from '../../Graphics/Backgorunds/mnm-all-551345-unsplash.jpg'


export const ButtonContainer = Styled.div`
    
 
   display:flex;
   justify-content:center;
      
`;


export const Main = Styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
   
    background:url(${Background});
    background-size:cover;
    height:100vh;
`;

export const ContainerTop = Styled.div`
display:flex;
flex-direction:column;

margin-top:0px;
    h1{
       
        font-family: 'Berkshire Swash', cursive;
        font-size:45px;
        color:var(--color-y);
        text-shadow: 1px 1px black;
        margin:0;
        border-top:8px solid red;
        padding-top:5px;
        width:100%;
        
        
    }

    h3{
        text-align:center;
        color:var(--color-r);
        font-weight:bold;
    }
   

   

`;

export const ContainerBottom = Styled.div`
    display:flex;
    flex-direction:column;
    
    margin-top:30px;
    width:80%;
    h1{
       
        font-family: 'Berkshire Swash', cursive;
        font-size:55px;
        color:Black;
       
        margin:0;
        border-top:8px solid var(--color-r);
        padding-top:5px;
        width:100%;
        
        
    }

    h3{
        margin-top:70px;
        text-align:center;
        color:black;
        font-size:16px;
        
    }

    p{  
        text-align:center;

        a{
            text-decoration:none;
            color:var(--color-y);
            font-size:12px;
            font-weight:bold;
        }    
    }

    input{
       
        width:90%;
        margin:20px auto;
        border: none;
        background-color:transparent;
        border-bottom: 1px solid white;
        display: block;
        padding-top:1%;
        caret-color:white;
        color:white;
        transition:0.2s;
        @media(min-width: 1024px){
            width: 100%;
        }
        &::placeholder{
            text-align:center;
            color:white;
            font-size:18px;
        }

        &:focus{
            outline: none;
            border-bottom: 1px solid var(--color-g);
        }
    }

    button{
         border:none;
         cursor:pointer;
         width:180px;
         height:40px;
         background-color:white;
         color:black;
         border-radius:4px;
         font-weight:bold;
         font-size:18px;
         transition:0.4s;
         box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.55);

         &:hover{
            background-color:#cccccc;
        }

    }

    

`;

export const Logotype = Styled.div`

   
  
    text-align:center;
    img{
        margin-top:20px;
        height:180px;
        margin-bottom:10px;
    }
    
`;


export const Container = Styled.div`
      background-color:rgba(0,0,0, 0.6); 
<<<<<<< HEAD
     
=======
>>>>>>> 7daa53f0bdbb02fdd8a77bc6c1c1c02a71632466
      border-radius:4px;
      width:100%;
      margin-top:10px;
      padding: 0px 0px 30px 0px;
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content:flex-start;
`;

export const BottomButton = Styled.div`
    margin-top:10px;
    width:200px;
    z-index:5;
    button{border:none;
        
         cursor:pointer;
         width:100%;
         height:40px;
         background-color:var(--color-b); 
         color:white;
         border-radius:4px;
         font-weight:bold;
         font-size:18px;
         transition:0.4s;
         box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.55);}
         

         &:hover{
            background-color:#cccccc;
        }
`;
export const RegisterPub = Styled.div `
    margin-top:10px;
    
    *{
        color:white;
        font-weight:bold;
        text-shadow: 0px 0px 4px 0px rgba(0,0,0,0.7);

        text-decoration:none;
    }
`;

export const Error = Styled.div`

    color:red;
    font-size:14px;
    text-align:center;
    margin-bottom:10px;
    
`;
