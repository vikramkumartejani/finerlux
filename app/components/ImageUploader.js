import Image from "next/image";
import React, { useState } from "react";

const ImageUploader = () => {
     const [images, setImages] = useState([]);
     const [hoveredIndex, setHoveredIndex] = useState(null);

     const handleDrop = (event) => {
          event.preventDefault();
          const files = Array.from(event.dataTransfer.files);
          handleFiles(files);
     };

     const handleFiles = (files) => {
          const imageFiles = files.filter((file) => file.type.startsWith("image/"));
          const newImages = imageFiles.map((file) => URL.createObjectURL(file));
          setImages((prev) => [...prev, ...newImages]);
     };

     const handleRemove = (index) => {
          setImages((prev) => prev.filter((_, i) => i !== index));
     };

     return (
          <div>
               <label className="block text-base font-normal text-black mb-2.5">Upload photos of item</label>
               <div
                    className={` max-h-[191px] min-h-[191px] rounded-[30px] p-4 flex flex-col items-start justify-start bg-[#E3E8ED] `}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
               >
                    <input
                         type="file"
                         className="hidden"
                         id="file-upload"
                         multiple
                         accept="image/*"
                         onChange={(e) => handleFiles(Array.from(e.target.files))}
                    />
                    {images.length === 0 ? (
                         <div className="flex items-center w-full justify-center text-center flex-col group">
                              <label htmlFor="file-upload" className="cursor-pointer">
                                   <div className="mt-2 relative flex items-center justify-center">
                                        <Image
                                             src='/assets/file-upload.svg'
                                             width={100}
                                             height={100}
                                             alt="file upload"
                                             className="absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                                        />
                                        <Image
                                             src='/assets/file-upload-hover.svg'
                                             width={100}
                                             height={100}
                                             alt="file upload hover"
                                             className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                   </div>
                                   <p className="mt-4 ml-1 text-base font-normal text-black">
                                        Drag an image here
                                   </p>
                              </label>
                         </div>
                    ) : (
                         <div className="flex items-start w-full gap-3">
                              {images.map((src, index) => (
                                   <div
                                        key={index}
                                        className="relative group"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                   >
                                        <Image
                                             src={src}
                                             alt="preview"
                                             priority
                                             width={80}
                                             height={80}
                                             className="h-16 w-16 rounded-lg object-cover"
                                        />
                                        {hoveredIndex === index && (
                                             <button
                                                  className="
                                                       h-[24px] w-[24px] 
                                                       absolute flex items-center justify-center 
                                                       -top-2 -right-2 
                                                       bg-white text-[#828282] hover:text-[#B80000] 
                                                       transition-all duration-300 
                                                       border border-[#828282] hover:border-[#B80000] 
                                                       text-sm rounded-md
                                                       animate-fadeIn
                                                  "
                                                  onClick={() => handleRemove(index)}
                                             >
                                                  ✕
                                             </button>
                                        )}
                                   </div>
                              ))}
                              <label
                                   htmlFor="file-upload"
                                   className="h-16 w-16 flex items-center justify-center bg-white border border-[#828282] hover:border-[#017EFE] rounded-[14px] cursor-pointer group"
                              >
                                   <svg
                                        className="text-[#828282] group-hover:text-[#017EFE]"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                   >
                                        <path
                                             d="M16 1V31M1 16L31 16"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                        />
                                   </svg>
                              </label>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default ImageUploader;