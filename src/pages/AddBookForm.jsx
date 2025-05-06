import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./AddBookForm.css";
import axios from "axios";

const AddBookForm = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    genre: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target; //destructuring
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const newBook = {
      ...formData,
      price: parseFloat(formData.price),
      id: Date.now().toString,
      isFavorite: false,
      inStock: true,
    };

    //call function from parent
    axios
      .post("http://localhost:3001/books", newBook)
      .then((res) => console.log(res));
    // onAddBook(newBook);

    setFormData({ title: "", author: "", price: "", genre: "" });
    console.log(newBook);

    navigate("/book");
  };
  return (
    <>
      <form onSubmit={handleAdd} className="add-book-form">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title..."
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author..."
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            step="any"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price..."
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Enter genre..."
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBookForm;
