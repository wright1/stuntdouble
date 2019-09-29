import React, {useState} from 'react';
import Header from './components/header';
import ImageCard from './components/imageCard';
import Blurb from './components/blurb';
import {GlobalStyle} from './styles/globalstyle';
import {Column} from './styles/globalstyle'
import {Button} from './styles/globalstyle';
import {End} from './styles/globalstyle';
import man2 from './images/man2.jpg';
import man3 from './images/man3.jpg';
import man5 from './images/man5.jpg';
import man6 from './images/man6.jpg';
import man7 from './images/man7.jpg';
import man8 from './images/man8.jpg';





function App() {

  const [cards , setCards] = useState([ man2, man3, man5, man6, man7, man8]);
  


  const width = window.innerWidth < 450 ;

  return (
    <>
    <GlobalStyle />
      <Header />
    

     <End>END</End>
     {
       cards.map((card, i) => {
         return <ImageCard
                src={card}
                key={ 'item'+ i}
                />
       })
     }
    
  {/* Buttons are rendered conditionally */}
      {width ? null :
      (<>
      <Column>
      <Button>Hired</Button>
      <Button>Fired</Button>
      </Column>
      <Blurb />
      </>
      )
      }

  
    </>
    
  );
}

export default App;
