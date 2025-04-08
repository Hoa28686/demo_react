// import {useState} from'react';
import './App.css';
import Box, {Orange, Grape} from './Box/Box.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import { persons } from './personsData.js';


const App=()=>{
  // const [persons, setEmployee]=useState(persons);
  return(
    <div >
      <Header logo="HL" />
      <main className='flex'>
        {persons.map(p=> (
          <Box key={p.id} id={p.id} name={p.name} title={p.title} age={p.age} animal={p.animal} salary={p.salary} />
        ))}
        <Grape/>
        <Orange/>
      </main>
      <Footer year={2025} />
    </div>
  )
}


export default App