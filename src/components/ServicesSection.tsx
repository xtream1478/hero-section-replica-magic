
import React from "react";
import { 
  TrendingUp, 
  Heart, 
  Building, 
  Home, 
  User, 
  Briefcase,
  Gem, 
  Truck, 
  Sprout,
  RefreshCw,
  Mail,
  Phone,
  Shield,
  BadgeAlert,
  Factory,
  Plane, 
  MonitorSmartphone,
  Users
} from "lucide-react";

const ServiceCategory = ({ title, items }: { title: string; items: Array<{ text: string; icon?: React.ReactNode }> }) => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-4 font-times text-surti-black">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            <div className="text-surti-green mt-1">
              {item.icon}
            </div>
            <span className="font-times text-gray-700">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
      <h3 className="text-2xl font-bold mb-6 font-times text-surti-black flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-surti-green" />
        Contact
      </h3>
      <div className="space-y-4 font-times">
        <p className="font-bold text-lg">Surti Fincorp 📈</p>
        <p>Nihar Pradipbhai Shah</p>
        <p className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-surti-green" />
          9510118280
        </p>
        <p className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-surti-green" />
          surtifincorp@gmail.com
        </p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const financialServices = [
    { text: "Stock Market", icon: <TrendingUp size={18} /> },
    { text: "IPO", icon: <Building size={18} /> },
    { text: "FD", icon: <Building size={18} /> },
    { text: "NPS", icon: <Building size={18} /> },
    { text: "PMS", icon: <Building size={18} /> },
    { text: "AIF", icon: <Building size={18} /> },
    { text: "Bond", icon: <Building size={18} /> },
    { text: "Loans", icon: <Building size={18} /> },
    { text: "SIP in Stock Market", icon: <TrendingUp size={18} /> },
    { text: "Derivatives", icon: <TrendingUp size={18} /> },
    { text: "NCDs", icon: <Building size={18} /> },
    { text: "Mutual Fund Advisor (SIP & Lumpsum)", icon: <TrendingUp size={18} /> },
    { text: "Goal Planning 🎯", icon: <TrendingUp size={18} /> },
  ];

  const insuranceServices = [
    { text: "Term Plan", icon: <Shield size={18} /> },
    { text: "Life Insurance ❤️", icon: <Heart size={18} /> },
    { text: "Mediclaim 🏥", icon: <Shield size={18} /> },
    { text: "General Insurance 🚗🏍️", icon: <Shield size={18} /> },
    { text: "Fire Insurance 🔥", icon: <Shield size={18} /> },
    { text: "Marine Insurance 🚢", icon: <Shield size={18} /> },
    { text: "Factory, Warehouse Insurance 🏭", icon: <Factory size={18} /> },
    { text: "Travel Insurance ✈️", icon: <Plane size={18} /> },
    { text: "Cyber Security Insurance 🖥️", icon: <MonitorSmartphone size={18} /> },
    { text: "Directors & Officers Liability", icon: <Users size={18} /> },
  ];

  const loanServices = [
    { text: "Home Loan 🏡", icon: <Home size={18} /> },
    { text: "Personal Loan 🤵", icon: <User size={18} /> },
    { text: "Loan Against Property", icon: <Building size={18} /> },
    { text: "Business Loan 💼", icon: <Briefcase size={18} /> },
    { text: "Gold Loan 🪙", icon: <Gem size={18} /> },
    { text: "Commercial Vehicle Loan 🚜", icon: <Truck size={18} /> },
    { text: "Agriculture Loan 👨🌾", icon: <Sprout size={18} /> },
    { text: "Re-finance", icon: <RefreshCw size={18} /> },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 font-times">
          Our <span className="text-surti-green">Services</span>
        </h2>
        
        <ServiceCategory title="Financial Services" items={financialServices} />
        <ServiceCategory title="Insurance Agent" items={insuranceServices} />
        <ServiceCategory title="Loan Services" items={loanServices} />
        
        <div className="mt-16">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
