// import {useState} from'react';
import './App.css';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import BookList from './Books/BookList.jsx';

const App=()=>{
  return(
    <>
      <Header logo="HL" />
        <h1>Demo App</h1>
      <main  >
        <BookList/>
      </main>
      <Footer year={2025} />
    </>
  )
}


export default App