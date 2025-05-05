// import {useState} from'react';

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { Outlet } from 'react-router';


const Root=()=>{
  return(
    <>
      <Header logo="HL" />
      <main  >
        <Outlet/>
      </main>
      <Footer year={2025} />
    </>
  )
}


export default Root