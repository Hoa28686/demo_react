// import {useState} from'react';

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import AddBookForm from '../components/AddBookForm/AddBookForm.jsx';

const About=()=>{
  return(
    <>
      <Header logo="HL" />
        <h1>Add a new book</h1>
      <main  >
        <AddBookForm/>
      </main>
      <Footer year={2025} />
    </>
  )
}


export default About