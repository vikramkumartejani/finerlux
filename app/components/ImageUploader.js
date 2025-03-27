import Image from "next/image";
import React, { useState } from "react";

const ImageUploader = () => {
     const [images, setImages] = useState([]);
     const [isDragOver, setIsDragOver] = useState(false);

     const handleDrop = (event) => {
          event.preventDefault();
          setIsDragOver(false);
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
                    onDragEnter={(e) => {
                         e.preventDefault();
                         setIsDragOver(true);
                    }}
                    onDragLeave={(e) => {
                         e.preventDefault();
                         setIsDragOver(false);
                    }}
                    onDragOver={(e) => {
                         e.preventDefault();
                         setIsDragOver(true);
                    }}
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
                                   <div className="relative flex items-center justify-center">
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
                                   <p className="mt-5 ml-1 text-base font-normal text-black">
                                        Drag an image here
                                   </p>
                              </label>
                         </div>
                    ) : (
                         <div className="flex items-start w-full gap-3">
                              {images.map((src, index) => (
                                   <div key={index} className="relative group">
                                        <Image
                                             src={src}
                                             alt="preview"
                                             priority
                                             width={80}
                                             height={80}
                                             className="h-16 w-16 rounded-lg object-cover"
                                        />
                                        <button className="h-5 w-5 absolute -top-2 -right-2 bg-white text-[#828282] text-sm rounded-md"
                                             onClick={() => handleRemove(index)}>
                                             ✕
                                        </button>
                                   </div>
                              ))}
                              <label htmlFor="file-upload" className="h-16 w-16 flex items-center justify-center bg-white border border-[#828282] rounded-[14px] cursor-pointer">
                                   <Image src='/assets/plus.svg' alt="plus" width={30} height={30} />
                              </label>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default ImageUploader;