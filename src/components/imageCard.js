import React, {useRef} from 'react';
import {Wrapper} from '../styles/globalstyle';




const ImageCard = ({src}) => {

    //varibles created
    let startingPoint = useRef(0);


    //ref created to allow me to access DOM node of component
    const cardRef = React.createRef();
    const threshold = window.innerWidth / 3;

//--------------------------------Swipe Functions---------------------------------------

    //first function to run when user touches screen
    const firstTouchPoint = (e) =>{

        let touch = e.targetTouches[0];
        let touchpoint = Math.round(touch.clientX);
        
      
        startingPoint = touchpoint;
        window.addEventListener('touchmove', swipe );
      
      };

      //second function runs as user is swiping screen
      const swipe = (e) => {

        let presentPoint = Math.round(e.targetTouches[0].clientX);
        let swipeDirection = presentPoint - startingPoint;
         
      //moving of the image left/right
        cardRef.current.style.transform = `translateX(${swipeDirection}px)`;
      
        //attaching the apropriate word
        if (swipeDirection < -20){
          cardRef.current.childNodes[1].innerHTML = 'DISLIKE';
          
        }else if (swipeDirection > 20){
    
          cardRef.current.childNodes[1].innerHTML = 'LIKED';
        } else {
      
          cardRef.current.childNodes[1].innerHTML = ''
      
        }
        window.addEventListener('touchend', end)  
  

     }

//last function runs as users finger leaves the screen
const end = (e) => {
  
    window.removeEventListener('touchmove', swipe);
      
    const endpoint = e.changedTouches[e.changedTouches.length-1].pageX


    if(endpoint < startingPoint && endpoint < threshold){
       
        cardRef.current.remove()
      
      }
       
      if(endpoint > startingPoint && endpoint > (window.innerWidth/2)+threshold){
      
        cardRef.current.remove()
        
       }
       
 }
//----------------------------------------------Swipe functions end---------------------


    return(
        <>
        <Wrapper ref={ cardRef } >
        <div>
            <img src={ src }
        
            onTouchStart={(e) => firstTouchPoint(e) }
             />
        </div> 
        <span></span>
        </Wrapper>
        </>
    )
}

export default ImageCard