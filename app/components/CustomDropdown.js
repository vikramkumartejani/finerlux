 "use client"
import React, { useState, useEffect, useRef } from 'react';

const CustomDropdown = ({ options, defaultValue, onChange }) => {
     const [isOpen, setIsOpen] = useState(false);
     const [selectedOption, setSelectedOption] = useState(defaultValue || options[0]);
     const dropdownRef = useRef(null);

     const handleOptionClick = (option) => {
          setSelectedOption(option);
          setIsOpen(false);
          if (onChange) onChange(option);
     };

     // Close dropdown when clicking outside
     useEffect(() => {
          const handleClickOutside = (event) => {
               if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
               }
          };

          document.addEventListener('mousedown', handleClickOutside);
          return () => {
               document.removeEventListener('mousedown', handleClickOutside);
          };
     }, []);

     return (
          <div className="relative w-full max-w-xs" ref={dropdownRef}>
               {/* Selected value display */}
               <div
                    className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
               >
                    <span className="text-gray-700">{selectedOption}</span>
                    <svg
                         className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
               </div>

               {/* Dropdown options */}
               {isOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                         {options.map((option, index) => (
                              <div
                                   key={index}
                                   className="px-4 py-2 cursor-pointer hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                                   onClick={() => handleOptionClick(option)}
                              >
                                   {option === selectedOption && (
                                        <span className="inline-block mr-2 text-blue-500">✓</span>
                                   )}
                                   {option}
                              </div>
                         ))}
                    </div>
               )}
          </div>
     );
};

 export default CustomDropdown