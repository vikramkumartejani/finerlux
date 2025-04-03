"use client"
import Image from "next/image"
import { useState } from "react"
import ImageUploader from "../ImageUploader"
import Checkbox from "../Checkbox"
import ConditionsModal from "./ConditionsModal"
import { useTranslation } from 'react-i18next';

export default function SellTab() {
     const { t } = useTranslation();
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

     const [isModalOpen, setIsModalOpen] = useState(false);

     const openModal = () => {
          setIsModalOpen(true);
     };

     const closeModal = () => {
          setIsModalOpen(false);
     };

     return (
          <div className="flex items-start justify-between lg:flex-row flex-col gap-6 pt-6 md:pt-12 md:px-4">
               <div className="space-y-3 md:space-y-4 w-full lg:max-w-[482px] px-2">
                    <h1 className="md:block hidden text-[24px] md:text-4xl leading-[95%] font-semibold md:text-left text-center">{t("tab.titleSellOne")}</h1>
                    <p className="md:block hidden md:pb-8 text-black text-sm md:text-base font-normal leading-[20px] md:text-left text-center">{t("tab.descSellOne")}</p>
                    <h1 className="block md:hidden text-[24px] md:text-4xl leading-[95%] font-semibold md:text-left text-center">{t("tab.titleSellTwo")}</h1>
                    <p className="block md:hidden md:pb-8 text-black text-sm md:text-base font-normal leading-[20px] md:text-left text-center">{t("tab.descSellTwo")}</p>
                    <div className="w-full hidden md:flex items-center justify-center md:items-start md:justify-start">
                         <Image src='/assets/selltab.svg' alt="selltab" width={274} height={271} className="md:w-[274px] md:h-[271px] w-[80px] h-[80px]" />
                    </div>
               </div>

               <form onSubmit={validateForm} className="space-y-2.5 md:space-y-6 min-w-full lg:min-w-[500px] xl:min-w-[636px]">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-6">
                         <div>
                              <label htmlFor="name" className="block text-sm md:text-base font-normal text-black mb-2 md:mb-3">
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
                              <label htmlFor="email" className="block text-sm md:text-base font-normal text-black mb-2 md:mb-3">
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

                         {/* Phone Number */}
                         <div>
                              <label htmlFor="phone" className="block text-sm md:text-base font-normal text-black mb-2 md:mb-3">
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
                    </div>

                    {/* Condition & Item */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-6 pt-4 md:pt-6">
                         <div>
                              <label htmlFor="item" className="block text-sm md:text-base font-normal text-black mb-2 md:mb-3">
                                   Item
                              </label>
                              <div className="relative">
                                   <select
                                        id="item"
                                        name="item"
                                        className={`w-full px-4 text-base min-h-[33px] md:h-[42px] bg-[#E3E8ED] appearance-none rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                                        ${formErrors.item
                                                  ? 'border-[#B80000]  bg-red-50'
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
                                   <p className="text-[#B80000] text-sm mt-1">It is mandatory field</p>
                              )}
                         </div>

                         <div>
                              <label htmlFor="condition" className="flex items-center gap-1 text-sm md:text-base font-normal text-black mb-2 md:mb-3">
                                   Condition
                                   <div>
                                        <div
                                             className="ml-1 text-gray-400 cursor-pointer"
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
                                             <div className="bg-black bg-opacity-50 top-0 fixed inset-0 z-[9999]">
                                                  <div
                                                       className="fixed top-0 inset-0 mx-4 mb-4 !z-[10000] flex items-center rounded-[30px] justify-center !overflow-auto scrollbar-hide"
                                                       onClick={closeModal}
                                                  >

                                                       <div
                                                            className="bg-white p-4 md:p-6 overflow-auto scrollbar-hide rounded-[30px] !mx-5 shadow-xl max-w-3xl w-full absolute md:relative top-4 md:top-0"
                                                            onClick={(e) => e.stopPropagation()}
                                                       >
                                                            <button
                                                                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                                                                 onClick={closeModal}
                                                                 aria-label="Close modal"
                                                            >
                                                                 <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      width="24"
                                                                      height="24"
                                                                      viewBox="0 0 24 24"
                                                                      fill="none"
                                                                      stroke="currentColor"
                                                                      strokeWidth="2"
                                                                      strokeLinecap="round"
                                                                      strokeLinejoin="round"
                                                                 >
                                                                      <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                      <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                 </svg>
                                                            </button>
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
                                                  ? 'border-[#B80000] bg-red-50'
                                                  : 'border-transparent focus:border-[#017EFE]'}`}
                                        defaultValue="Good"
                                        onClick={(e) => {
                                             if (isModalOpen) {
                                                  e.preventDefault();
                                             }
                                        }}
                                   >
                                        <option>New</option>
                                        <option>Unworn</option>
                                        <option>Very Good</option>
                                        <option>Good</option>
                                        <option>Fair</option>
                                        <option>Incomplete</option>
                                   </select>
                                   <div className="absolute inset-y-0 right-0 flex items-center pr-3 ">
                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M1 4L7.5 12L14 4" stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                   </div>
                              </div>
                              {formErrors.condition && (
                                   <p className="text-[#B80000] text-sm mt-1">It is mandatory field</p>
                              )}
                         </div>

                         {/* Price */}
                         <div>
                              <label htmlFor="price" className="block text-sm md:text-base font-normal text-black mb-2 md:mb-3">
                                   Your Price
                              </label>
                              <div className="relative">
                                   <div className=" group">
                                        <div className="absolute top-[6px] md:top-[9px] left-0 pl-4 flex items-center pointer-events-none">
                                             <span className="text-[#828282] text-[18px] !leading-[22px] group-hover:text-black">£</span>
                                        </div>
                                        <input
                                             type="text"
                                             id="price"
                                             name="price"
                                             className={`w-full px-4 pl-7 text-base min-h-[36px] md:h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                                   ${formErrors.price
                                                       ? 'border-[#B80000] '
                                                       : 'border-transparent focus:border-[#017EFE] group-hover:border-[#017EFE]'}`}
                                        />
                                   </div>
                                   {formErrors.price && (
                                        <p className="text-[#B80000] text-sm mt-1">It is mandatory field</p>
                                   )}
                              </div>
                         </div>
                    </div>

                    {/* Image Upload */}
                    <div className="pt-[14px] md:pt-6">
                         <ImageUploader />
                    </div>

                    {/* Social Media */}
                    <div className="pt-[14px] md:pt-6 pb-[14px] md:pb-0">
                         <p className="text-sm md:text-base font-normal text-black mb-3">I am happy to be contacted by</p>
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

                    {/* button */}
                    <button
                         type="submit"
                         className="text-base font-medium w-full bg-[#017EFE] hover:bg-[#003D7B] transition-all duration-300 text-white h-[35px] md:h-[40px] px-4 rounded-[60px]"
                    >
                         Submit
                    </button>
               </form>
          </div>
     )
}