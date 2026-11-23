import { useState } from 'react'
import './App.css'
import HeaderPagina from './components/HeaderPagina'
import Nav from './components/NavPagina'
import Footer from './components/FooterPagina'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderPagina/>
      <Nav></Nav>
      <Footer></Footer>
    </>
  )
}

export default App
