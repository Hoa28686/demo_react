// import {useState} from'react';
import {createBrowserRouter, RouterProvider} from "react-router";
import './App.css';
import BookList from './components/Books/BookList.jsx';
import Root from './pages/Root.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/book",
    element: <BookList/>,
  },
]);

const App=()=>{
  return(
    <RouterProvider router={router}/>
  )
}


export default App