"use client"
import Image from "next/image"
import { useState } from "react"
import ImageUploader from "./ImageUploader"
import Checkbox from "./Checkbox"

export default function SellTab() {
     const [checkedItems, setCheckedItems] = useState({
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
     });

     const [formErrors, setFormErrors] = useState({
          name: false,
          email: false,
          phone: false,
          item: false,
          condition: false,
          price: false
     });

     const handleCheckboxChange = (key) => {
          setCheckedItems((prev) => ({
               ...prev,
               [key]: !prev[key],
          }));
     };

     const validateForm = (e) => {
          e.preventDefault();
          const form = e.target;
          const errors = {
               name: !form.name.value.trim(),
               email: !form.email.value.trim(),
               phone: !form.phone.value.trim(),
               item: !form.item.value,
               condition: !form.condition.value,
               price: !form.price.value.trim()
          };

          setFormErrors(errors);

          const hasErrors = Object.values(errors).some(error => error);
          if (!hasErrors) {
               console.log('Form submitted successfully');
          }
     };

     return (
          <div className="flex items-start justify-between lg:flex-row flex-col gap-6 pt-5 md:px-4">
               <div className="space-y-4 w-full lg:max-w-[474px]">
                    <h1 className="text-[24px] md:text-4xl leading-[95%] font-semibold md:text-left text-center">Want to sell your watch<span className="md:block hidden"> or jewelry?</span>?</h1>
                    <p className="mt-2 pb-2 md:pb-8 text-black text-sm md:text-base font-normal leading-[20px] md:text-left text-center">
                         Get a fast, fair offer and turn your item into cash instantly. <span className="md:block hidden">We guarantee transparency and hassle-free
                         transactions—no hidden fees, no delays.</span>
                    </p>
                    <div className="w-full flex items-center justify-center">
                         <Image src='/assets/selltab.svg' alt="selltab" width={274} height={271} className="md:w-[274px] md:h-[271px] w-[80px] h-[80px]" />
                    </div>
               </div>

               <form onSubmit={validateForm} className="space-y-2.5 md:space-y-4 min-w-full lg:min-w-[500px] xl:min-w-[636px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4">
                         <div>
                              <label htmlFor="name" className="block text-sm md:text-base font-normal text-black mb-1.5 md:mb-2.5">
                                   Name
                              </label>
                              <input
                                   type="text"
                                   id="name"
                                   name="name"
                                   placeholder="Full Name"
                                   className={`w-full px-4 text-base min-h-[33px] md:min-h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                                   ${formErrors.name
                                             ? 'border-[#B80000]'
                                             : 'border-transparent focus:border-[#017EFE]'}`}
                              />
                              {formErrors.name && (
                                   <p className="text-[#B80000] text-sm mt-1">It is mandatory field</p>
                              )}
                         </div>
                         <div>
                              <label htmlFor="email" className="block text-sm md:text-base font-normal text-black mb-1.5 md:mb-2.5">
                                   Email
                              </label>
                              <input
                                   type="email"
                                   id="email"
                                   name="email"
                                   placeholder="example@mail.com"
                                   className={`w-full px-4 text-base min-h-[33px] md:h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                                   ${formErrors.email
                                             ? 'border-[#B80000]'
                                             : 'border-transparent focus:border-[#017EFE]'}`}
                              />
                              {formErrors.email && (
                                   <p className="text-[#B80000] text-sm mt-1">It is mandatory field</p>
                              )}
                         </div>
                    </div>

                    <div>
                         <label htmlFor="phone" className="block text-sm md:text-base font-normal text-black mb-1.5 md:mb-2.5">
                              Phone number
                         </label>
                         <input
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="(+44) 123 456 7890"
                              className={`w-full px-4 text-base min-h-[33px] md:h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                              ${formErrors.phone
                                        ? 'border-[#B80000]'
                                        : 'border-transparent focus:border-[#017EFE]'}`}
                         />
                         {formErrors.phone && (
                              <p className="text-[#B80000] text-sm mt-1">It is mandatory field</p>
                         )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 pt-4 md:pt-10">
                         <div>
                              <label htmlFor="item" className="block text-sm md:text-base font-normal text-black mb-1.5 md:mb-2.5">
                                   Item
                              </label>
                              <div className="relative">
                                   <select
                                        id="item"
                                        name="item"
                                        className={`w-full px-4 text-base min-h-[33px] md:h-[42px] bg-[#E3E8ED] appearance-none rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                                        ${formErrors.item
                                                  ? 'border-red-500 bg-red-50'
                                                  : 'border-transparent focus:border-[#017EFE]'}`}
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
                              {formErrors.item && (
                                   <p className="text-red-500 text-sm mt-1">It is mandatory field</p>
                              )}
                         </div>

                         <div>
                              <label htmlFor="condition" className="flex items-center gap-1 text-sm md:text-base font-normal text-black mb-1.5 md:mb-2.5">
                                   Condition
                                   <span className="relative group ml-1 inline-block text-gray-400">
                                        <img src="/assets/conditions.svg" alt="conditions" width="16" height="16" />
                                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg">
                                             Additional info about conditions
                                        </span>
                                   </span>
                              </label>
                              <div className="relative">
                                   <select
                                        id="condition"
                                        name="condition"
                                        className={`w-full px-4 text-base min-h-[33px] md:h-[42px] bg-[#E3E8ED] appearance-none rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                                        ${formErrors.condition
                                                  ? 'border-red-500 bg-red-50'
                                                  : 'border-transparent focus:border-[#017EFE]'}`}
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
                              {formErrors.condition && (
                                   <p className="text-red-500 text-sm mt-1">It is mandatory field</p>
                              )}
                         </div>
                    </div>

                    <div>
                         <label htmlFor="price" className="block text-sm md:text-base font-normal text-black mb-1.5 md:mb-2.5">
                              Your Price
                         </label>
                         <div className="relative">
                              <div className="">
                                   <div className="absolute top-[6px] md:top-[9px] left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="text-gray-500">£</span>
                                   </div>
                                   <input
                                        type="text"
                                        id="price"
                                        name="price"
                                        className={`w-full px-4 pl-7 text-base min-h-[36px] md:h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                                   ${formErrors.price
                                                  ? 'border-[#B80000] '
                                                  : 'border-transparent focus:border-[#017EFE]'}`}
                                   />
                              </div>
                              {formErrors.price && (
                                   <p className="text-[#B80000] text-sm mt-1">It is mandatory field</p>
                              )}
                         </div>
                    </div>

                    <div className="pt-3 md:pt-0">
                         <ImageUploader />
                    </div>

                    <div className="pt-4 md:pt-10">
                         <p className="text-sm md:text-base font-normal text-black mb-2">I am happy to be contacted by</p>
                         <div className="flex flex-wrap gap-3 md:gap-4">
                              <label className="inline-flex items-center">
                                   <Checkbox title="Telephone" checked={checkedItems.checkbox1} onChange={() => handleCheckboxChange("checkbox1")} />
                              </label>
                              <label className="inline-flex items-center">
                                   <Checkbox title="SMS" checked={checkedItems.checkbox2} onChange={() => handleCheckboxChange("checkbox2")} />
                              </label>
                              <label className="inline-flex items-center">
                                   <Checkbox title="Email" checked={checkedItems.checkbox3} onChange={() => handleCheckboxChange("checkbox3")} />
                              </label>
                              <label className="inline-flex items-center">
                                   <Checkbox title="Whatsapp" checked={checkedItems.checkbox4} onChange={() => handleCheckboxChange("checkbox4")} />
                              </label>
                         </div>
                    </div>

                    <button
                         type="submit"
                         className="!mt-5 text-base font-medium w-full bg-[#017EFE] hover:bg-[#003D7B] transition-all duration-300 text-white h-[35px] md:h-[40px] px-4 rounded-[60px]"
                    >
                         Submit
                    </button>
               </form>
          </div>
     )
}