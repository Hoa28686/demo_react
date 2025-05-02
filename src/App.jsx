import {useState} from'react';
import { books } from './data/booksData.js';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router";
import './App.css';
import BookList from './components/Books/BookList.jsx';
import Root from './pages/Root.jsx'
import About from './pages/About.jsx'
import AddBookForm from './pages/AddBookForm.jsx';




const App=()=>{
  const [bookData, setBookData] = useState(books);
  
  const addBookHandler=(newBook)=>{
    setBookData(prev=>([...prev,
      {...newBook,id: Date.now(),isFavorite:false,inStock:true}]))
    console.log(bookData);
  }

  const router = createBrowserRouter([
    {path: "/", element: <Root/>},
    {path: "/about",element: <About/>},
    {path: "/book",element: <BookList bookData={bookData} setBookData={setBookData}/>},
    {path: "/add-book",element: <AddBookForm onAddBook={addBookHandler}/>}
  ]);
  return(
    <RouterProvider router={router}/>
  )
}


export default App