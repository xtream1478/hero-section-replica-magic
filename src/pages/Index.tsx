
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-times">
      {/* Top black bar with more rounded bottom corners */}
      <div className="w-full h-3 bg-surti-green rounded-b-lg"></div>
      
      {/* Main content */}
      <div className="container mx-auto">
        <Navbar />
        <HeroSection />
        <ServicesSection />
      </div>
    </div>
  );
};

export default Index;
