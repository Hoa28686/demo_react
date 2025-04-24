// import {useState} from'react';

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';


const Root=()=>{
  return(
    <>
      <Header logo="HL" />
        <h1>root component</h1>
      <main  >
      </main>
      <Footer year={2025} />
    </>
  )
}


export default Root