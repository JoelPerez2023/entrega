import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <ItemListContainer texto='Prueba'/>
    </>
  )
}

export default App
