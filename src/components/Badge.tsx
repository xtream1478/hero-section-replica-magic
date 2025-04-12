
import React from "react";
import { Clover } from "lucide-react";

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
      <Clover className="w-4 h-4 text-surti-blue" />
      <span className="text-surti-black font-times">{text}</span>
    </div>
  );
};

export default Badge;
