import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const name='Hoa';
const first_page=1997;
const demo =(
  <div>
    <h1>Hi, my name is {name} </h1>
    <p>I have {2025-first_page} years of building webpages </p>
  </div>
)
const Demo=()=>{
  return(
    <div>
    <h1>Hi, my name is {name} </h1>
    <p>I have {2025-first_page} years of building webpages </p>
  </div>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
