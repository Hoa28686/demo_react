import { useState } from "react";
import { books } from "./data/booksData.js";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import "./App.css";
import BookList from "./components/Books/BookList.jsx";
import Root from "./pages/Root.jsx";
import About from "./pages/About.jsx";
import AddBookForm from "./pages/AddBookForm.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Example } from "./pages/Example.jsx";
import Todos from "./pages/Todos.jsx";

const App = () => {
  const [bookData, setBookData] = useState(books);

  const addBookHandler = (newBook) => {
    setBookData((prev) => [
      ...prev,
      { ...newBook, id: Date.now(), isFavorite: false, inStock: true },
    ]);
    console.log(bookData);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/about", element: <About /> },
        {
          path: "/book",
          element: <BookList bookData={bookData} setBookData={setBookData} />,
        },
        {
          path: "/add-book",
          element: <AddBookForm onAddBook={addBookHandler} />,
        },
        { path: "/*", element: <NotFound /> },
        { path: "/example", element: <Example /> },
        { path: "/todos", element: <Todos/> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
