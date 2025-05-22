import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Carousal from './components/Carousal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-[100vh] bg-black text-white overflow-x-hidden">
         <Navbar />
         <Carousal />
      </div>
    </>
  )
}

export default App
