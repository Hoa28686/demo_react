import { useState } from "react";
import BookCard from "./BookCard";
import { books } from "../../data/booksData";
import "./BookList.css";
import AddBookForm from "../AddBookForm/AddBookForm";

const BookList = ({bookData,setBookData}) => {
  const [searchValue, setsearchValue] = useState("");

  const changePrice = (id, newPrice) => {
      setBookData((prevbook) =>
          prevbook.map((b) => (b.id === id)
          ? (b.price!== newPrice && newPrice!='')
          ?{ ...b, price: parseFloat(newPrice).toFixed(2) } : b:b));
    
    // let newPrice = parseFloat(newPrice).toFixed(2);
  };

  const searchHandle = (e) => {
    setsearchValue(e.target.value);
    const searchText = searchValue.toLowerCase().trim();
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const cardText = card.textContent.toLowerCase();
      cardText.includes(searchText)
        ? (card.style.display = "block")
        : (card.style.display = "none");
    });
  };
  const toggleStock = (id) => {
    console.log(id);
    let updatedBooks = bookData.map((b) => {
      b.id == id && (b.inStock = !b.inStock);
      return b;
    });
    setBookData(updatedBooks);
  };

  const toggleFavorite = (id) => {
    console.log(id);
    setBookData((prevBooks) =>
      prevBooks.map((b) =>
        b.id === id ? { ...b, isFavorite: !b.isFavorite } : b
      )
    );
  };

  const EventHandler = (id) => {
    console.log("read more is click", id);
  };

  return (
    <>
      {/* <select name="" id="">
                <option value="all">Show All</option>
                <option value="favorite">Is Favorite</option>
                <option value="notFavorite">Not favorite</option>
            </select> */}
      {/* name="search" is use to identidy form element when a form is submitted */}
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          name="search"
          value={searchValue}
          onChange={searchHandle}
        />
        <p>You search for: {searchValue.toLowerCase().trim()} </p>
      </div>
      <div className="listDisplay">
        {bookData
          //   .filter((b) => b.title.toLowerCase().includes(searchValue))
          .map((b) => (
            <BookCard
              key={b.id}
              {...b}
              onChangePrice={changePrice} //this function need to get newPrice from BookCard, so pass value in BookCard.jsx 
              onEventHandler={EventHandler}
              onToggleStock={toggleStock}
              onToggleFavorite={toggleFavorite} 
            />
            
          ))}
      </div>
    </>
  );
};
export default BookList;
