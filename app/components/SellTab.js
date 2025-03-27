"use client"

import Image from "next/image"
import { useState } from "react"

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
          <div className="grid md:grid-cols-2 gap-8 pt-20">
               <div className="space-y-4">
                    <h1 className="text-2xl font-bold">Want to sell your watch or jewelry?</h1>
                    <p className="text-gray-700">
                         Get a fast, fair offer and turn your item into cash instantly. We guarantee transparency and hassle-free
                         transactions—no hidden fees, no delays.
                    </p>
                    <Image src='/assets/selltab.svg' alt="selltab" width={274} height={271} />
               </div>

               <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                         <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                   Name
                              </label>
                              <input type="text" id="name" placeholder="Full Name" className="w-full px-4 py-2 bg-gray-100 rounded-md" />
                         </div>
                         <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                   Email
                              </label>
                              <input
                                   type="email"
                                   id="email"
                                   placeholder="example@mail.com"
                                   className="w-full px-4 py-2 bg-gray-100 rounded-md"
                              />
                         </div>
                    </div>

                    <div>
                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone number
                         </label>
                         <input
                              type="tel"
                              id="phone"
                              placeholder="(+44) 123 456 7890"
                              className="w-full px-4 py-2 bg-gray-100 rounded-md"
                         />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                         <div>
                              <label htmlFor="item" className="block text-sm font-medium text-gray-700 mb-1">
                                   Item
                              </label>
                              <div className="relative">
                                   <select
                                        id="item"
                                        className="w-full px-4 py-2 bg-gray-100 rounded-md appearance-none"
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
                              <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
                                   Condition <span className="text-gray-400 inline-block ml-1">ⓘ</span>
                              </label>
                              <div className="relative">
                                   <select
                                        id="condition"
                                        className="w-full px-4 py-2 bg-gray-100 rounded-md appearance-none"
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
                         <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                              Your Price
                         </label>
                         <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                   <span className="text-gray-500">£</span>
                              </div>
                              <input type="text" id="price" className="w-full pl-8 pr-4 py-2 bg-gray-100 rounded-md" />
                         </div>
                    </div>

                    <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Upload photos of item</label>
                         <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center bg-gray-100">
                              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                   <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4h-8m-12 0H8m12 0a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                              </svg>
                              <p className="mt-1 text-sm text-gray-500">Drag an image here</p>
                         </div>
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

