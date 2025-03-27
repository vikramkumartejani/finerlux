import { useState } from "react";

const Dropdown = ({ options, selected, setSelected }) => {
     const [isOpen, setIsOpen] = useState(false);

     return (
          <div className="relative w-full">
               <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-full bg-gray-100 text-gray-600 focus:ring-2 focus:ring-blue-500"
               >
                    {selected ? selected.label : "-Select-"}

                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M1 4L7.5 12L14 4" stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

               </button>

               {/* Dropdown List */}
               {isOpen && (
                    <ul className="absolute w-full mt-1 bg-gray-100 border border-gray-300 rounded-2xl shadow-lg z-10">
                         {options.map((option) => (
                              <li
                                   key={option.value}
                                   onClick={() => {
                                        setSelected(option);
                                        setIsOpen(false);
                                   }}
                                   className="p-3 cursor-pointer hover:bg-gray-200 rounded-2xl first:rounded-t-2xl last:rounded-b-2xl"
                              >
                                   {option.label}
                              </li>
                         ))}
                    </ul>
               )}
          </div>
     );
};

export default Dropdown;
