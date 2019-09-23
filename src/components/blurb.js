import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
width: 30vw;
height: 50vh;
position: absolute;
justify-content: center;
align-items: center;
margin-left: 60vw;
top: 23vh;
`

const Span = styled.span`
font-size: 2em;
font-family: 'Oswald', sans-serife;
`
const Text = styled.p`
font-size: 1.5em;
font-family: 'Open Sans';
font-weight: 300;
`

const Blurb = () => {

    const width = window.innerwidth < 450;

    return(
        <>
        { width? null:
        (<Div>
            <Text>
            <Span>W</Span>ith a history of safe, professional and award winning work, Maximum has a proven track record of providing the international film and television industry with the very best in stunt performers and stunt co-ordinators.
            </Text>
        </Div>) 
        }
        </>
    )
}

export default Blurb