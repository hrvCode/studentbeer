import Styled from 'styled-components'

export const Main = Styled.div`
margin:0px;
padding:0px;
h3{
color:var(--color-y);
text-shadow:1px 1px 1px black;
}
`

export const offersContent = Styled.div`
display:flex;
flex-direction:column;

p{color:white;
}
h2{
    color:white;
}

`


export const List = Styled.div`
    list-style-type: none;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:25px 0;
    padding:0px;
    
 
    h2{
        color:white;
        font-size:20px;
        margin:10px 0px 0px 0px;
        padding:0px;
        border-bottom: 2px solid var(--color-r);
        width:250px;
    }

    li{
        display:flex;
        justify-content:flex-start;
        align-items:flex-start;
        flex-direction:column;
    }
 
`;