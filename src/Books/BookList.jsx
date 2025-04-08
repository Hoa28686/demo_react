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

export function Card(props){
    const departmentClass=props.deparment === "Engineer"
    ?'engineer': props.deparment === "Design"? 'design':props.deparment === "Executive"?'executive':'general';
    return(
        <div className={`card ${departmentClass}`} >
            <h3>{props.name}</h3>
            <p>Department:{props.department}</p>
        </div>
    )
}

