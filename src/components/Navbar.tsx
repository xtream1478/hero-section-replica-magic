
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center font-times">
      <div className="flex items-center gap-2">
        <div className="h-14">
          <img
            src="/lovable-uploads/1eb94bba-b569-48b3-be2b-e9c254a37955.png"
            alt="Surti Fincorp Logo"
            className="h-full"
          />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-farmnext-black">
        <Link to="/" className="hover:text-surti-blue transition-colors font-times">Home</Link>
        <Link to="/products" className="hover:text-surti-blue transition-colors font-times">Products</Link>
        <Link to="/pricing" className="hover:text-surti-blue transition-colors font-times">Pricing</Link>
        <Link to="/about" className="hover:text-surti-blue transition-colors font-times">About us</Link>
      </div>

      <div>
        <Link 
          to="/get-started" 
          className="bg-surti-blue hover:bg-surti-green text-white py-3 px-8 rounded-full transition-colors duration-300 font-times shadow-md hover:shadow-lg"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
