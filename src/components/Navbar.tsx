
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center font-outfit">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L36.6025 10V30L20 40L3.39746 30V10L20 0Z" fill="#4D9F3F" fillOpacity="0.2"/>
            <path d="M20 5L31.6987 11.5V24.5L20 31L8.30127 24.5V11.5L20 5Z" fill="#4D9F3F"/>
            <path d="M16 16L20 13.5L24 16L26.5 20L24 24L20 26.5L16 24L13.5 20L16 16Z" fill="white"/>
          </svg>
        </div>
        <span className="text-xl font-bold text-farmnext-black">Farmnext</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-farmnext-black">
        <Link to="/" className="hover:text-farmnext-green transition-colors font-medium">Home</Link>
        <Link to="/products" className="hover:text-farmnext-green transition-colors font-medium">Products</Link>
        <Link to="/pricing" className="hover:text-farmnext-green transition-colors font-medium">Pricing</Link>
        <Link to="/about" className="hover:text-farmnext-green transition-colors font-medium">About us</Link>
      </div>

      <div>
        <Link 
          to="/get-started" 
          className="bg-farmnext-green hover:bg-farmnext-darkgreen text-white py-3 px-8 rounded-full transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
