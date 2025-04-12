
import React from "react";
import { Clover } from "lucide-react";

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white">
      <Clover className="w-4 h-4 text-farmnext-green" />
      <span className="text-farmnext-black">{text}</span>
    </div>
  );
};

export default Badge;
