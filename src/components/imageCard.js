import React from 'react';
import styled from 'styled-components';
import {Wrapper} from '../styles/globalstyle'

// const Wrapper = styled.section`
// width: 30vw;
// height: 55vh;
// display: flex;
// margin-left: 3em;
// margin-top: 5em;
// position: absolute;
// left:auto;
// right: auto;
// align-items: center;
// justify-content: center;
 
// >div{
//     width: 60vw;
//     height: 55vh;
    
//     >img{
        
//         max-height: 100%;
//         max-height: 100%;
//         border-radius: 5px;
//         object-fit: cover;
//         box-shadow: 11px 8px 5px 0px rgba(217,228,236,1);
//     }
//     >span{
//         font-family: 'Oswald', sans-serif;
//     }
// }
// `

const ImageCard = ({src}) => {
    return(
        <Wrapper>
        <div>
            <img src={ src } />
        </div>
        <span></span>
        </Wrapper>
    )
}

export default ImageCard