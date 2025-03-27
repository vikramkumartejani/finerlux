"use client"

import Image from "next/image"
import { useState } from "react"
import ImageUploader from "./ImageUploader"

export default function SellTab() {
     const [contactMethods, setContactMethods] = useState({
          telephone: false,
          sms: false,
          email: false,
          whatsapp: false,
     })

     const toggleContactMethod = (method) => {
          setContactMethods((prev) => ({
               ...prev,
               [method]: !prev[method],
          }))
     }

     return (
          <div className="flex items-start justify-between pt-5">
               <div className="space-y-4 max-w-[474px]">
                    <h1 className="text-4xl leading-[95%] font-semibold">Want to sell your watch or jewelry?</h1>
                    <p className="mt-2 pb-8 text-black text-base font-normal leading-[20px]">
                         Get a fast, fair offer and turn your item into cash instantly. We guarantee transparency and hassle-free
                         transactions—no hidden fees, no delays.
                    </p>
                    <Image src='/assets/selltab.svg' alt="selltab" width={274} height={271} />
               </div>

               <div className="space-y-4 w-full max-w-[636px]">
                    <div className="grid grid-cols-2 gap-4">
                         <div>
                              <label htmlFor="name" className="block text-base font-normal text-black mb-2.5">
                                   Name
                              </label>
                              <input
                                   type="text"
                                   id="name"
                                   placeholder="Full Name"
                                   className="w-full px-4 h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border border-transparent focus:border-[#017EFE] transition-colors duration-300"
                              />


                         </div>
                         <div>
                              <label htmlFor="email" className="block text-base font-normal text-black mb-2.5">
                                   Email
                              </label>
                              <input
                                   type="email"
                                   id="email"
                                   placeholder="example@mail.com"
                                   className="w-full px-4 h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border border-transparent focus:border-[#017EFE] transition-colors duration-300"
                              />
                         </div>
                    </div>

                    <div>
                         <label htmlFor="phone" className="block text-base font-normal text-black mb-2.5">
                              Phone number
                         </label>
                         <input
                              type="tel"
                              id="phone"
                              placeholder="(+44) 123 456 7890"
                              className="w-full px-4 h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border border-transparent focus:border-[#017EFE] transition-colors duration-300"
                         />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-10">
                         <div>
                              <label htmlFor="item" className="block text-base font-normal text-black mb-2.5">
                                   Item
                              </label>
                              <div className="relative">
                                   <select
                                        id="item"
                                        className="w-full px-4 h-[42px] bg-[#E3E8ED] appearance-none rounded-[30px] placeholder:text-[#828282] text-black outline-none border border-transparent focus:border-[#017EFE] transition-colors duration-300"
                                        defaultValue="Watch"
                                   >
                                        <option>Watch</option>
                                        <option>Jewelry</option>
                                        <option>Other</option>
                                   </select>
                                   <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                             <path
                                                  fillRule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clipRule="evenodd"
                                             />
                                        </svg>
                                   </div>
                              </div>
                         </div>
                         <div>
                              <label htmlFor="condition" className="flex items-center gap-1 text-base font-normal text-black mb-2.5">
                                   Condition <span className="text-gray-400 inline-block ml-1"><Image src='/assets/conditions.svg' alt="conditions" width={16} height={16} /></span>
                              </label>
                              <div className="relative">
                                   <select
                                        id="condition"
                                        className="w-full px-4 h-[42px] bg-[#E3E8ED] appearance-none rounded-[30px] placeholder:text-[#828282] text-black outline-none border border-transparent focus:border-[#017EFE] transition-colors duration-300"
                                        defaultValue="Good"
                                   >
                                        <option>Excellent</option>
                                        <option>Good</option>
                                        <option>Fair</option>
                                        <option>Poor</option>
                                   </select>
                                   <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                             <path
                                                  fillRule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clipRule="evenodd"
                                             />
                                        </svg>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div>
                         <label htmlFor="price" className="block text-base font-normal text-black mb-2.5">
                              Your Price
                         </label>
                         <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                   <span className="text-gray-500">£</span>
                              </div>
                              <input
                                   type="text"
                                   id="price"
                                   className="w-full px-4 pl-7 h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border border-transparent focus:border-[#017EFE] transition-colors duration-300"
                              />
                         </div>
                    </div>

                    <div>
                         <ImageUploader/>
                    </div>

                    <div>
                         <p className="text-sm font-medium text-gray-700 mb-2">I am happy to be contacted by</p>
                         <div className="flex flex-wrap gap-4">
                              <label className="inline-flex items-center">
                                   <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300"
                                        checked={contactMethods.telephone}
                                        onChange={() => toggleContactMethod("telephone")}
                                   />
                                   <span className="ml-2 text-gray-700">Telephone</span>
                              </label>
                              <label className="inline-flex items-center">
                                   <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300"
                                        checked={contactMethods.sms}
                                        onChange={() => toggleContactMethod("sms")}
                                   />
                                   <span className="ml-2 text-gray-700">SMS</span>
                              </label>
                              <label className="inline-flex items-center">
                                   <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300"
                                        checked={contactMethods.email}
                                        onChange={() => toggleContactMethod("email")}
                                   />
                                   <span className="ml-2 text-gray-700">Email</span>
                              </label>
                              <label className="inline-flex items-center">
                                   <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300"
                                        checked={contactMethods.whatsapp}
                                        onChange={() => toggleContactMethod("whatsapp")}
                                   />
                                   <span className="ml-2 text-gray-700">Whatsapp</span>
                              </label>
                         </div>
                    </div>

                    <button
                         type="submit"
                         className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors"
                    >
                         Submit
                    </button>
               </div>
          </div>
     )
}

