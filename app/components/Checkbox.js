import { useState } from "react";

const Checkbox = ({ checked, onChange }) => {
     const [isHovered, setIsHovered] = useState(false);

     return (
          <label className="cursor-pointer">
               <input
                    type="checkbox"
                    className="hidden"
                    checked={checked}
                    onChange={onChange}
               />
               <div
                    className={`border bg-[#F5F8FF] ${checked ? "border-[#017EFE]" : "border-[#828282]"} transition-all duration-300 group w-[25px] h-[25px] rounded-md flex items-center justify-center`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
               >
                    {checked ? (
                         <svg
                              className="text-[#017EFE]"
                              width="17"
                              height="11"
                              viewBox="0 0 18 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                         >
                              <path
                                   d="M1 3.75L7.5 10.25L17 0.75"
                                   stroke="currentColor"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                              />
                         </svg>
                    ) : (
                         isHovered && (
                              <svg
                                   className="text-[#828282]"
                                   width="17"
                                   height="11"
                                   viewBox="0 0 18 11"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <path
                                        d="M1 3.75L7.5 10.25L17 0.75"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                              </svg>
                         )
                    )}
               </div>
          </label>
     );
};

export default Checkbox;
