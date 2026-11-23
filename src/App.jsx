import { useState } from 'react'
import './App.css'
import HeaderPagina from './components/HeaderPagina'
import Nav from './components/NavPagina'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderPagina/>
      <Nav></Nav>
    </>
  )
}

export default App
