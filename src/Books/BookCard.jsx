import './BookCard.css';
const BookCard=(props)=>{
    return(
        <div className="card">
            <h2> {props.title} </h2>
            <p>--- {props.author} --- </p>
            <p className='price'>€{props.price} </p>
            <p style={{color: props.inStock? "#53bf33":"red"}}>{props.inStock ? "In Stock": "Out of stock"} </p>
            <p>{props.genre} </p>
            <p >ID: {props.id} </p>
            { props.inStock && <button>Add to wishlist</button>}
        </div>
    )
}
export default BookCard