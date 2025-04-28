import React,{useState} from 'react';


const AddBookForm = ({onAddBook}) => {
    const [formData,setFormData]=useState({
        title:'',
        author:'',
        price:'',
        genre:'',
    });
    const handleChange=(e)=>{
        const {name,value}=e.target; //destructuring
        setFormData(prev=>({...prev, [name]: value}))
        console.log(formData);
    }
    const handleAdd=(e)=>{
        e.preventDefault();
        const newBook={
            title:title,
            author:author,
            price:parseFloat(price),
            genre:genre,
        }
        console.log(newBook);

    
        //call function from parent
        onAddBook(newBook);

        setTitle('');
        setAuthor('');
        setPrice('');
        setGenre('');
    }
  return (
    <form onSubmit={handleAdd} >
        <div>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Enter title..."/>
        </div>
        <div>
        <label htmlFor="author">Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange}  placeholder="Enter author..."/>
        </div>
        <div>
        <label htmlFor="price">Price:</label>
        <input type="number" step='any' name="price" value={formData.price} onChange={handleChange}  placeholder="Enter price..."/>
        </div>
        <div>
        <label htmlFor="genre">Genre:</label>
        <input type="text" name="genre" value={formData.genre} onChange={handleChange}  placeholder="Enter genre..."/>
        </div>
        <button type='submit'>Add Book</button>
    </form>
  )
}

export default AddBookForm;