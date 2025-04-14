import { useState } from "react";
import BookCard from "./BookCard";
import { books } from "./booksData";

const BookList=()=>{
    const [bookData,setBookData]=useState(books);
    // const clickHandler=()=>{
    //     setFavorite(!favorite);
    //     isFavorite=!isFavorite;
    // }

    return(
        <>
            <select name="" id="">
                <option value="all">Show All</option>
                <option value="favorite">Is Favorite</option>
                <option value="notFavorite">Not favorite</option>
            </select>
            {bookData.map(b=> (
                      <BookCard
                      key={b.id}
                      {...b} />
                    ))}
        </>
    )
}
export default BookList

export function Card({name, department}){
    const departmentClass=deparment === "Engineer"
    ?'engineer': deparment === "Design"? 'design':deparment === "Executive"?'executive':'general';
    return(
        <div className={`card ${departmentClass}`} >
            <h3>{name}</h3>
            <p>Department:{department}</p>
        </div>
    )
}

