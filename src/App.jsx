import { useState } from 'react'
import './App.css'
import Nav from './components/NavPagina'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav></Nav>
    </>
  )
}

export default App
