import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Route,Routes} from "react-router-dom";
import Register from './pages/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <route path="/" extract element={<Register />}/>
    </Routes>
    
          
    </>
      )
}

export default App
