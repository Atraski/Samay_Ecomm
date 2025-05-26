import React ,{useState}from 'react';
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Carousal from './components/Carousal'
import MarqueeScroll from './components/MarqueeScroll'
import BestSellerSection from './components/BestSellerSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-[100vh]">
        <Navbar />
        <Carousal />
        <MarqueeScroll />
        <BestSellerSection />
        
         <Footer />
      </div>  
    </>
  );
}

export default App
