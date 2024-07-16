import { useState } from 'react'

import './App.css'
import { Feature, Navbar } from './components'
import Shorten from './components/features/Shorten'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Feature />
    </>
  )
}

export default App
