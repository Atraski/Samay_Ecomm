// components/Navbar.jsx
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import {assets} from '../assets/assets'

const Navbar=()=> {
  const [cartCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-6">
          <FaSearch className="text-xl cursor-pointer" />

          <ul className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <li><a href="#" className="border-b-2 border-black">HOME</a></li>
            <li className="relative group">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-gray-700"
              >
                COLLECTIONS
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg py-2 px-4 text-sm z-10">
                  <a href="#" className="block py-1">Men's</a>
                  <a href="#" className="block py-1">Women's</a>
                  <a href="#" className="block py-1">Limited Edition</a>
                </div>
              )}
            </li>
            <li><a href="#">ALL PRODUCTS</a></li>
          </ul>
        </div>

        {/* Logo center */}
        <div>
          <img src={assets.samay_logo} alt="Samay Logo" className="h-10" />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">REPAIR & SERVICE</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">STORES</a></li>
          </ul>

          <FaUser className="text-xl cursor-pointer" />
          <div className="relative">
            <FaShoppingBag className="text-xl cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
