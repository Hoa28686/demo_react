// import {useState} from'react';
import {createBrowserRouter, RouterProvider} from "react-router";
import './App.css';
import BookList from './components/Books/BookList.jsx';
import Root from './pages/Root.jsx'
import About from './pages/About.jsx'
import AddBook from './pages/AddBook.jsx'
import AddBookForm from "./components/AddBookForm/AddBookForm.jsx";

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
  {
    path: "/add-book",
    element: <AddBook/>
  }
]);

const App=()=>{
  return(
    <RouterProvider router={router}/>
  )
}


export default App