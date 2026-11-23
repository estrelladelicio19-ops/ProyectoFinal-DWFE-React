import { useState } from 'react'
import './App.css'
import HeaderPagina from './components/HeaderPagina'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderPagina/>
    </>
  )
}

export default App
