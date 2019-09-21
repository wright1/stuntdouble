import React from 'react';
import styled from 'styled-components';


const Wrap = styled.div`
width: 100vw;
height: 12vh;
display: flex;
line-height: 10vh;
border-radius: 5px;
border-bottom: 0.4px solid #BBC8DE; 
box-shadow: 0px 9px 5px 0px rgba(232,238,241,1);
>h1{
    font-family: 'Oswald', sans-serif;
    font-size: 3em;
    margin: 0.3em;
    vertical-align: middle;
    color: #000C66;
}
>span{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4em;
    position: absolute;
    left: 9.5em;
    top: 1em;
    color: #050A30;   
}
`


const Header = () => {
    return(
        <Wrap>
            <h1>MAXIMUM</h1>
            <span>stunt doubles</span>
        </Wrap>

    )
}

export default Header