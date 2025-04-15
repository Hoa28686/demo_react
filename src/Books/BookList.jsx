import { useState } from "react";
import BookCard from "./BookCard";
import { books } from "./booksData";

const BookList=()=>{
    const [bookData,setBookData]=useState(books);
    const [searchValue,setsearchValue]=useState("");
    const searchHandle=(e)=>{
        setsearchValue(e.target.value);
    }
    const toggleStock=(id)=>{
        console.log(id);
        let updatedBooks =bookData.map(b=>{
            (b.id==id)&&(b.inStock= !b.inStock)
            return b;
        
    })
        setBookData(updatedBooks);     
    }
    
    const toggleFavorite=(id)=>{
        console.log(id);
        // let updatedBooks =bookData.map(b=> b.id===id ? {...b, isFavorite: !b.isFavorite}:b)
        // setBookData(prevBooks=>updatedBooks);     
        setBookData(prevBooks=>prevBooks.map(b=> b.id===id ? {...b, isFavorite: !b.isFavorite}:b));     
    }
    
    const EventHandler=(id)=>{
        console.log('read more is click', id);
    }

    return(
        <>
            {/* <select name="" id="">
                <option value="all">Show All</option>
                <option value="favorite">Is Favorite</option>
                <option value="notFavorite">Not favorite</option>
            </select> */}
            {/* name="search" is use to identidy form element when a form is submitted */}
            <div>
                <label htmlFor="search">Search</label>
                <input type="text" id="search" name="search"  value={searchValue} onChange={searchHandle}/>
            <p>You search for: {searchValue} </p>
            </div>
            <div className="flex">
            {(bookData.filter(b=> b.title.toLowerCase().includes(searchValue)))
            .map(b=> (
                      <BookCard
                      key={b.id}
                      {...b}
                      onEventHandler={EventHandler}
                      onToggleStock={toggleStock}
                      onToggleFavorite={toggleFavorite}/>
                    ))}
            </div>
            
        </>
    )
}
export default BookList

export function Card({name, department}){
    const departmentClass=department === "Engineer"
    ?'engineer': department === "Design"? 'design':department === "Executive"?'executive':'general';
    return(
        <div className={`card ${departmentClass}`} >
            <h3>{name}</h3>
            <p>Department:{department}</p>
        </div>
    )
}

