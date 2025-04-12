
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top black bar */}
      <div className="w-full h-3 bg-farmnext-black"></div>
      
      {/* Main content */}
      <div className="container mx-auto">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Index;
