import React,{useState} from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const AddBookForm = ({onAddBook}) => {
    const [formData,setFormData]=useState({
        title:'',
        author:'',
        price:'',
        genre:'',
    });
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const {name,value}=e.target; //destructuring
        setFormData(prev=>({...prev, [name]: value}))
    }
    const handleAdd=(e)=>{
        e.preventDefault();
        const newBook={...formData, price: parseFloat(formData.price)}

         //call function from parent
        onAddBook(newBook);

        setFormData({title:'',author:'',price:'', genre:'',})
        navigate('/book');
        console.log(newBook);

    
       
    }
  return (
    <>
    <Header logo="HL" />

     
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
    <Footer year={2025} />
    </>
  )
}

export default AddBookForm;