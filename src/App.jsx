// import {useState} from'react';
import {createBrowserRouter, RouterProvider} from "react-router";
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import BookList from './components/Books/BookList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

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