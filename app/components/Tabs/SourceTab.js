"use client"
import Image from "next/image"
import { useState } from "react"
import Checkbox from "../Checkbox"
import ImageUploader from "../ImageUploader";
import { useTranslation } from 'react-i18next';

export default function SourceTab() {
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
               description: !form.description.value.trim(),
          };

          setFormErrors(errors);

          const hasErrors = Object.values(errors).some(error => error);
          if (!hasErrors) {
               console.log('Form submitted successfully');
          }
     };

     return (
          <div className="flex items-start justify-between lg:flex-row flex-col gap-6 pt-6 md:pt-12 md:px-4">
               <div className="space-y-3 md:space-y-4 w-full lg:max-w-[482px] px-2">
                    <h1 className="md:block hidden text-[24px] md:text-4xl leading-[95%] font-semibold md:text-left text-center">{t("tab.titleSourceOne")}</h1>
                    <h1 className="block md:hidden text-[24px] md:text-4xl leading-[95%] font-semibold md:text-left text-center">{t("tab.titleSourceTwo")}</h1>
                    <p className="md:block hidden md:pb-8 text-black text-sm md:text-base font-normal leading-[20px] md:text-left text-center">{t("tab.descSourceOne")}</p>
                    <p className="block md:hidden md:pb-8 text-black text-sm md:text-base font-normal leading-[20px] md:text-left text-center">{t("tab.descSourceTwo")}</p>
                    <div className="w-full hidden md:flex items-center justify-center md:items-start md:justify-start">
                         <Image src='/assets/sourcetab.svg' alt="source" width={247} height={307} className="md:w-[247px] md:h-[307px] w-[80px] h-[80px]" />
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

                    {/* Image Upload */}
                    <div className="pt-[14px] md:pt-6">
                         <ImageUploader />
                         <div className="pt-[14px] md:pt-6">
                              <label htmlFor="description" className="block text-sm md:text-base font-normal text-black mb-2 md:mb-3">
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



