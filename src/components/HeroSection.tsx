
import React from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";

const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`${className || ""}`}>
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" rx="16" fill="#4D9F3F" fillOpacity="0.1"/>
      <path d="M53 27C47.6667 27 37 31 37 49C37 49 45 45 53 53C61 45 69 49 69 49C69 31 58.3333 27 53 27Z" fill="#4D9F3F"/>
      <path d="M53 39C53 45 49 49 49 49C49 43 53 39 53 39Z" fill="white"/>
    </svg>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <div className="w-full relative pt-14 pb-24 px-6 md:px-12 lg:px-24 font-times">
      {/* Left leaf icon */}
      <LeafIcon className="absolute left-24 top-[30%] hidden lg:block transform -rotate-12" />
      
      {/* Right leaf icon */}
      <LeafIcon className="absolute right-24 bottom-24 hidden lg:block transform rotate-12" />
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <Badge text="Innovative Financial Solutions" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-farmnext-black leading-tight font-times">
          Modernizing Finance <br />
          with <span className="text-surti-green">Smart Solutions</span>
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl mx-auto max-w-3xl mb-12 leading-relaxed font-times">
          Unlocking the potential of modern financial services by integrating innovative technologies 
          that boost efficiency, improve sustainability, and empower businesses to thrive in 
          an evolving landscape.
        </p>
        
        <div className="mt-10">
          <Link 
            to="/get-started" 
            className="bg-surti-green hover:bg-surti-blue text-white py-3.5 px-10 rounded-full transition-all duration-300 font-times text-lg shadow-md hover:shadow-lg hover:scale-105 transform"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
