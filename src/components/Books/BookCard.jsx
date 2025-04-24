import { useState } from "react";
import "./BookCard.css";
import { createBrowserRouter } from "react-router-dom";
const BookCard = ({
  title,
  author,
  price,
  inStock,
  genre,
  id,
  isFavorite,
  onEventHandler,
  onToggleStock,
  onToggleFavorite,
  onChangePrice,
}) => {
  // const clickHandler=()=>{
  //     setFavorite(!favorite);
  //     isFavorite=!isFavorite;
  // }
  const [isEditing, setIsediting]=useState(false);
  const handleSave=()=>{
    onChangePrice(id,newPrice);
    setIsediting(false);
    console.log('Save is click');
    
  }
  const [newPrice, setNewPrice] = useState(price);
  const eventHandler = () => {
    console.log("WOW");
  };
  return (
    <div className="card">
      <div className="favorite" onClick={() => onToggleFavorite(id)}>
        {isFavorite ? "⭐" : "★"}
      </div>
      <h2> {title} </h2>

      <p>--- {author} --- </p>
      {isEditing ?
       (
        <div>
        <input type="text" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)} />
        <button onClick={handleSave}>Save</button>
  
          </div>
       ):
       ( <div>
        <span className="price">€ {price}</span>
        <button onClick={()=>setIsediting(true)}>Edit</button>
      </div>
      )
       
}
      {/* <button onClick={()=>onToggleStock(id)}>Change Stock</button>
            <button onClick={()=>onToggleFavorite(id)}>Change favorite</button> */}
      <p
        style={{ color: inStock ? "#53bf33" : "red" }}
        onClick={() => onToggleStock(id)}
      >
        {inStock ? "In Stock" : "Out of stock"}{" "}
      </p>

      <p>{genre} </p>
      <p>ID: {id} </p>

      <div className="bookcard-buttons">
        {inStock && (
          <button className="wishList" onClick={eventHandler}>
            Add to wishlist
          </button>
        )}
        <button onClick={() => onEventHandler(id)}>Read more</button>
        {isEditing?
        (
          <button onClick={handleSave}>Save</button>
        ):(
          <button onClick={()=>setIsediting(true)}>Edit</button>
        )
      }
      </div>
    </div>
  );
};
export default BookCard;

