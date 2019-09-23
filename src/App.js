import React, {useState} from 'react';
import Header from './components/header';
import ImageCard from './components/imageCard';
import Blurb from './components/blurb';
import {GlobalStyle} from './styles/globalstyle';
import {Button} from './styles/globalstyle';
//import {Row} from './styles/globalstyle';
//import man1 from './images/man1.jpg';
import man2 from './images/man2.jpg';
import man3 from './images/man3.jpg';
//import man4 from './images/man4.jpg';
import man5 from './images/man5.jpg';
import man6 from './images/man6.jpg';
import man7 from './images/man7.jpg';
import man8 from './images/man8.jpg';





function App() {

  const [cards , setCards] = useState([ man2, man3, man5, man6, man7, man8]);


  const width = window.innerWidth < 450 ;

  const cat = () => {
    console.log('daisy')
  }
  return (
    <>
    <GlobalStyle />
      <Header />
    


     {
       cards.map((card, i) => {
         return <ImageCard 
                src={card}
                key={ 'item'+ i}
                />
       })
     }
    
  
      {width ? null :
      (<>
      <Button>Hired</Button>
      <Button>Fired</Button>
      <Blurb />
      </>
      )
      }
  
    </>
    
  );
}

export default App;
