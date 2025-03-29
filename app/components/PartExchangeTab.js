
"use client"
import Image from "next/image"
import { useState } from "react"
import ImageUploader from "./ImageUploader"
import Checkbox from "./Checkbox"
import ConditionsModal from "./ConditionsModal"

export default function PartExchangeTab() {
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
          description: false,
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
               description: !form.description.value,
          };

          setFormErrors(errors);

          const hasErrors = Object.values(errors).some(error => error);
          if (!hasErrors) {
               console.log('Form submitted successfully');
          }
     };

     const [isModalOpen, setIsModalOpen] = useState(false);

     const openModal = () => {
          setIsModalOpen(true);
     };

     const closeModal = () => {
          setIsModalOpen(false);
     };

     return (
          <div className="flex items-start justify-between lg:flex-row flex-col gap-6 pt-8 md:pt-12 md:px-4">
               <div className="space-y-4 w-full lg:max-w-[474px]">
                    <h1 className="text-[24px] md:text-4xl leading-[95%] font-semibold md:text-left text-center"> Want to Part Exchange for an Upgrade?</h1>
                    <p className="mt-2 pb-2 md:pb-8 text-black text-sm md:text-base font-normal leading-[20px] md:text-left text-center">
                         Trade your current watch for something new! Enjoy flexible exchange terms and a seamless process—maximize value without the hassle.
                    </p>
                    <div className="w-full flex items-center justify-center md:items-start md:justify-start">
                         <Image src='/assets/part-exchange.svg' alt="part-exchange" width={288} height={256} className="md:w-[288px] md:h-[256px] w-[80px] h-[80px]" />
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 pt-4 md:pt-6">
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
                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M1 4L7.5 12L14 4" stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
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
                                   <div>
                                        <div
                                             className="ml-1 text-gray-400"
                                             onClick={openModal}
                                        >
                                             <img
                                                  src="/assets/conditions.svg"
                                                  alt="conditions"
                                                  width="16"
                                                  height="16"
                                             />
                                        </div>

                                        {isModalOpen && (
                                             <div className="bg-black bg-opacity-50 top-0 fixed inset-0 z-50">
                                                  <div
                                                       className="fixed top-0 inset-0 mx-4 mb-4 z-50 flex items-center justify-center !overflow-auto scrollbar-hide"
                                                       onClick={closeModal}
                                                  >
                                                       <div
                                                            className="bg-white p-4 md:p-6 overflow-auto scrollbar-hide rounded-[30px] !mx-5 shadow-xl max-w-3xl w-full absolute md:relative top-[10%] md:top-0"
                                                            onClick={(e) => e.stopPropagation()}
                                                       >
                                                            <ConditionsModal />
                                                       </div>
                                                  </div>
                                             </div>
                                        )}
                                   </div>
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
                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M1 4L7.5 12L14 4" stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                   </div>
                              </div>
                              {formErrors.condition && (
                                   <p className="text-red-500 text-sm mt-1">It is mandatory field</p>
                              )}
                         </div>
                    </div>

                    <div className="pt-3 md:pt-6">
                         <ImageUploader />
                    </div>

                    <div className="pt-4 md:pt-6">
                         <label htmlFor="description" className="block text-sm md:text-base font-normal text-black mb-1.5 md:mb-2.5">
                              Description
                         </label>
                         <textarea
                              id="description"
                              name="description"
                              placeholder="Enter your description"
                              className={`w-full px-4 py-2.5 h-[160px] text-base bg-[#E3E8ED] rounded-[20px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                              ${formErrors.description ? 'border-[#B80000]' : 'border-transparent focus:border-[#017EFE]'}`}
                         />
                         {formErrors.description && (
                              <p className="text-[#B80000] text-sm mt-1">It is mandatory field</p>
                         )}
                    </div>

                    <div className="pt-4 md:pt-6">
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