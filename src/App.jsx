// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>🍉React🥬</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import './App.css';
import Box, {Orange, Grape} from './Box.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const App=()=>{
  return(
    <div>
      <Header logo="HL" />
      <main className='flex'>
        <Box name="Conan" title="student" age="23" />
        <Box name="Ran" title="student" age="23" />
        <Box name="Mori" title="Detective" age="60" />
        <Grape/>
        <Orange/>
      </main>
      <Footer year={2025} />
    </div>
  )
}


export default App