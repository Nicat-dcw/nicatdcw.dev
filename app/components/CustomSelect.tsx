"use client";

import React, { useState } from "react";

interface CustomSelectProps {
  id: string;
  value: string;
  onChange: (newValue: string) => void;
  options: string[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ id, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const getOptionLabel = (option: string): string => {
    switch (option) {
      case "bg-black":
        return "Default";
      case "bg-gradient-to-r from-black via-gray-800 to-gray-800":
        return "Glory";
      case "DeathStar":
        return "Death Star";
      default:
        return option;
    }
  };

  return (
    <div className="relative w-32">
      <div
        id={id}
        onClick={toggleDropdown}
        className="block hover:border-blue-500 px-3 py-2 text-base text-stone-200 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm cursor-pointer"
      >
        {getOptionLabel(value) || "Select an option"}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 bg-stone-950 w-48 rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-3 py-2 text-base text-stone-200 hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              {getOptionLabel(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;