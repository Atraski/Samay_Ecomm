import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
   <footer className="bg-[#26263A] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div>
          <img src="/logo.png" alt="Samay Logo" className="w-24 mb-4" />
          <p className="text-sm text-gray-300">
            With 25+ years of experience in luxury timekeeping, Samay Watches
            epitomizes precision and elegance.
          </p>
        </div>

        {/* Top Menu */}
        <div>
          <h3 className="font-semibold mb-4">Top Menu</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">All Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Repair & Service</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Stores</a></li>
          </ul>
        </div>

        {/* Delivery & Returns */}
        <div>
          <h3 className="font-semibold mb-4">Delivery & Returns</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Cancellation Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
          </ul>
        </div>

        {/* Need Help */}
        <div>
          <h3 className="font-semibold mb-4">Need Help?</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <FaLocationDot className="mt-1" />
              <span>
                Shop No.5, New Market, Bara Gole Chakkar, Kamla Nagar, New Delhi-110007
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone />
              <span>+91 8448138426</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <span>rajesh@samaywatch.com</span>
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Social Media</h4>
            <div className="flex gap-4 text-lg">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2025 Samaywatch.com. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 md:mt-0 p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          ↑
        </button>
      </div>
    </footer>
  )
}

export default Footer