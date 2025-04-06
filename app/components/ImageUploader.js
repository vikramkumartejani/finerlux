import Image from "next/image";
import React, { useState, useRef } from "react";

const ImageUploader = ({ onImagesChange, disabled }) => {
     const [images, setImages] = useState([]);
     const [hoveredIndex, setHoveredIndex] = useState(null);
     const fileInputRef = useRef(null);

     const handleDrop = (event) => {
          event.preventDefault();
          if (disabled) return;
          const files = Array.from(event.dataTransfer.files);
          handleFiles(files);
     };

     const handleFiles = (files) => {
          const imageFiles = files.filter((file) => file.type.startsWith("image/"));
          const newImageFiles = [...images];
          
          imageFiles.forEach(file => {
               // Create a preview URL for display
               const previewUrl = URL.createObjectURL(file);
               newImageFiles.push({
                    file,
                    preview: previewUrl
               });
          });
          
          setImages(newImageFiles);
          
          // Pass the actual file objects to the parent component
          if (onImagesChange) {
               onImagesChange(newImageFiles.map(img => img.file));
          }
     };

     const handleRemove = (index) => {
          const updatedImages = [...images];
          // Revoke the object URL to avoid memory leaks
          URL.revokeObjectURL(updatedImages[index].preview);
          updatedImages.splice(index, 1);
          setImages(updatedImages);
          
          // Pass the updated file objects to the parent component
          if (onImagesChange) {
               onImagesChange(updatedImages.map(img => img.file));
          }
     };

     return (
          <div>
               <label className="block text-base font-normal text-black mb-2 md:mb-3">Upload photos of item</label>
               <div
                    className={`h-[165px] md:min-h-[191px] rounded-[20px] md:rounded-[30px] p-3 md:p-4 flex flex-col items-start justify-start bg-[#E3E8ED] `}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
               >
                    <input
                         type="file"
                         className="hidden"
                         id="file-upload"
                         ref={fileInputRef}
                         multiple
                         accept="image/*"
                         onChange={(e) => handleFiles(Array.from(e.target.files))}
                         disabled={disabled}
                    />
                    {images.length === 0 ? (
                         <div className="w-full h-full flex flex-col items-center justify-center">
                              <div
                                   className="w-[100px] h-[100px] cursor-pointer group"
                                   onClick={() => !disabled && fileInputRef.current.click()}
                              >
                                   <Image
                                        src="/assets/file-upload.svg"
                                        alt="upload"
                                        width={100}
                                        height={100}
                                        className="group-hover:hidden"
                                   />
                                   <Image
                                        src="/assets/file-upload-hover.svg"
                                        alt="upload"
                                        width={100}
                                        height={100}
                                        className="hidden group-hover:block"
                                   />
                              </div>
                              <p className="text-[#828282] text-sm md:text-base font-normal mt-2">
                                   Drag and drop files here or click to upload
                              </p>
                         </div>
                    ) : (
                         <div className="w-full h-full flex flex-wrap gap-2 md:gap-3 overflow-y-auto scrollbar-hide">
                              {images.map((image, index) => (
                                   <div
                                        key={index}
                                        className="relative h-16 w-16 md:w-20 md:h-20"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                   >
                                        <Image
                                             src={image.preview}
                                             alt={`uploaded-${index}`}
                                             fill
                                             className="object-cover rounded-[14px]"
                                        />
                                        {(hoveredIndex === index || window.innerWidth < 768) && (
                                             <button
                                                  className="absolute -top-2 -right-2 bg-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md hover:bg-red-100 transition-colors duration-200
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
                                   className="h-16 w-16 md:w-20 md:h-20 flex items-center justify-center bg-white border border-[#828282] hover:border-[#017EFE] rounded-[14px] cursor-pointer group"
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