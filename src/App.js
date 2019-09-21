import React from 'react';
import Header from './components/header';
import ImageCard from './components/imageCard';
import {GlobalStyle} from './styles/globalstyle';
//import man1 from './images/man1.jpg';
import man2 from './images/man2.jpg';
import man3 from './images/man3.jpg';
//import man4 from './images/man4.jpg';
import man5 from './images/man5.jpg';
import man6 from './images/man6.jpg';
import man7 from './images/man7.jpg';
import man8 from './images/man8.jpg';



function App() {
  return (
    <>
    <GlobalStyle />
      <Header />
      <ImageCard src={ man8 } className='card'/>
    </>
    
  );
}

export default App;
