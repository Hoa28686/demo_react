import BookCard from "./BookCard";
import { books } from "./booksData";

const BookList=()=>{
    return(
        <>
            {books.map(b=> (
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

