import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
    min-height: 100%;
    margin: 0;
    padding: 0;
}
html{
    height: 100%;
}
`

export const Button = styled.button`
cursor: pointer;
width: 8em;
height: 5em;
margin-left: 40vw;   
margin-top: 15vh;
color: #000C66;
font-family: 'Oswald', sans-serif;
font-size: 1.2em;
background-color: rgba(225,217,209,0.3);
border: 5px solid #000C66;
border-radius: 4px;
outline: none;
box-shadow: 8px 12px 5px 0px rgba(217,228,236,0.5);
transition: 0.5s all ease-out;

 &:hover {
    
    background-color: #10BC10;    
 }

 &:active {
    transform: translateY(5px);
}
`

export const Wrapper = styled.section`
width: 30vw;
height: 55vh;
display: flex;
margin-left: 3em;
margin-top: 5em;
position: absolute;
left:auto;
right: auto;
align-items: center;
justify-content: center;
 
>div{
    width: 60vw;
    height: 55vh;
    
    >img{
        
        max-height: 100%;
        max-height: 100%;
        border-radius: 5px;
        object-fit: cover;
        box-shadow: 11px 8px 5px 0px rgba(217,228,236,1);
    }
    >span{
        font-family: 'Oswald', sans-serif;
    }
}
`


