
import React from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";

const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`${className || ""}`}>
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" rx="12" fill="#4D9F3F" fillOpacity="0.1"/>
      <path d="M53 27C47.6667 27 37 31 37 49C37 49 45 45 53 53C61 45 69 49 69 49C69 31 58.3333 27 53 27Z" fill="#4D9F3F"/>
      <path d="M53 39C53 45 49 49 49 49C49 43 53 39 53 39Z" fill="white"/>
    </svg>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <div className="w-full relative pt-10 pb-20 px-6 md:px-12 lg:px-24">
      {/* Left leaf icon */}
      <LeafIcon className="absolute left-24 top-[30%] hidden lg:block transform -rotate-12" />
      
      {/* Right leaf icon */}
      <LeafIcon className="absolute right-24 bottom-24 hidden lg:block transform rotate-12" />
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <Badge text="Best Agrotech network" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-farmnext-black">
          Revolutionizing Farming <br />
          with <span className="text-farmnext-green">Smart Solutions</span>
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl mx-auto max-w-3xl mb-10">
          Unlocking the potential of modern agriculture by integrating innovative technologies 
          that boost crop productivity, improve sustainability, and empower farmers to thrive in 
          an evolving landscape.
        </p>
        
        <div className="mt-10">
          <Link 
            to="/get-started" 
            className="bg-farmnext-green hover:bg-farmnext-darkgreen text-white py-3 px-8 rounded-full transition-colors duration-300"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
