import { useState } from 'react'
import './App.css'

import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-[100vh] bg-black text-white overflow-x-hidden">
         <Header />
      </div>
    </>
  )
}

export default App
