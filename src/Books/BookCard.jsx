import './BookCard.css';
const BookCard=({title, author, price, inStock, genre,id})=>{
    return(
        <div className="card">
            <h2> {title} </h2>
            <p>--- {author} --- </p>
            <p className='price'>€{price} </p>
            <p style={{color: inStock? "#53bf33":"red"}}>{inStock ? "In Stock": "Out of stock"} </p>
            <p>{genre} </p>
            <p >ID: {id} </p>
            { inStock && <button>Add to wishlist</button>}
        </div>
    )
}
export default BookCard