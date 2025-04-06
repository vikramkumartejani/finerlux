"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import ImageUploader from "../ImageUploader"
import Checkbox from "../Checkbox"
import { useTranslation } from 'react-i18next';

export default function AuthenticateTab() {
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
     });
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [submitStatus, setSubmitStatus] = useState(null);
     const [uploadedImages, setUploadedImages] = useState([]);

     const handleCheckboxChange = (key) => {
          setCheckedItems((prev) => ({
               ...prev,
               [key]: !prev[key],
          }));
     };

     const handleImagesChange = (files) => {
          setUploadedImages(files);
     };

     const validateForm = async (e) => {
          e.preventDefault();
          const form = e.target;
          const errors = {
               name: !form.name.value.trim(),
               email: !form.email.value.trim(),
               phone: !form.phone.value.trim(),
               item: !form.item.value.trim(),
          };

          setFormErrors(errors);

          if (Object.values(errors).some(Boolean)) {
               return;
          }

          // Form is valid, proceed with submission
          setIsSubmitting(true);
          
          try {
               const formData = new FormData();
               
               // Add form fields
               formData.append('name', form.name.value);
               formData.append('email', form.email.value);
               formData.append('phone', form.phone.value);
               formData.append('item', form.item.value);
               formData.append('formType', 'Authentication');
               
               // Add contact preferences
               formData.append('telephone', checkedItems.checkbox1);
               formData.append('sms', checkedItems.checkbox2);
               formData.append('emailContact', checkedItems.checkbox3);
               formData.append('whatsapp', checkedItems.checkbox4);
               
               // Add images if any
               if (uploadedImages.length > 0) {
                    uploadedImages.forEach(file => {
                         formData.append('images', file);
                    });
               }
               
               // Submit the form
               const response = await fetch('/api/submit-form', {
                    method: 'POST',
                    body: formData,
               });
               
               const result = await response.json();
               
               if (result.success) {
                    setSubmitStatus('success');
                    // Reset form
                    form.reset();
                    setCheckedItems({
                         checkbox1: false,
                         checkbox2: false,
                         checkbox3: false,
                         checkbox4: false,
                    });
                    setUploadedImages([]);
               } else {
                    setSubmitStatus('error');
               }
          } catch (error) {
               console.error('Error submitting form:', error);
               setSubmitStatus('error');
          } finally {
               setIsSubmitting(false);
          }
     };

     return (
          <div className="flex items-start justify-between lg:flex-row flex-col gap-6 pt-6 md:pt-12 md:px-4">
               <div className="space-y-3 md:space-y-4 w-full lg:max-w-[482px] px-2">
                    <h1 className="md:block hidden text-[24px] md:text-4xl leading-[95%] font-semibold md:text-left text-center">{t("tab.titleAuthenticateOne")}</h1>
                    <h1 className="block md:hidden text-[24px] md:text-4xl leading-[95%] font-semibold md:text-left text-center">{t("tab.titleAuthenticateTwo")}</h1>
                    <p className="md:block hidden md:pb-8 text-black text-sm md:text-base font-normal leading-[20px] md:text-left text-center">{t("tab.descAuthenticateOne")}</p>
                    <p className="block md:hidden md:pb-8 text-black text-sm md:text-base font-normal leading-[20px] md:text-left text-center">{t("tab.descAuthenticateTwo")}</p>
                    <div className="w-full hidden md:flex items-center justify-center md:items-start md:justify-start">
                         <Image src='/assets/authenticate.svg' alt="authenticate" width={288} height={256} className="md:w-[288px] md:h-[256px] w-[80px] h-[80px]" />
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
                    </div>

                    {/* Phone & Item */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-6">
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
                         <div>
                              <label htmlFor="item" className="block text-sm md:text-base font-normal text-black mb-2 md:mb-3">
                                   Item
                              </label>
                              <input
                                   type="text"
                                   id="item"
                                   name="item"
                                   placeholder="Enter item details"
                                   className={`w-full px-4 text-base min-h-[33px] md:h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                                   ${formErrors.item
                                             ? 'border-[#B80000]'
                                             : 'border-transparent focus:border-[#017EFE]'}`}
                              />
                              {formErrors.item && (
                                   <p className="text-[#B80000] text-sm mt-1">It is mandatory field</p>
                              )}
                         </div>
                    </div>

                    {/* Image Upload */}
                    <div className="pt-[14px] md:pt-6">
                         <ImageUploader onImagesChange={handleImagesChange} />
                    </div>

                    {/* Status message */}
                    {submitStatus === 'success' && (
                         <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                              Form submitted successfully! We'll get back to you soon.
                         </div>
                    )}
                    {submitStatus === 'error' && (
                         <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                              There was an error submitting the form. Please try again later.
                         </div>
                    )}

                    {/* Contact Preferences */}
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

                    {/* Button */}
                    <button
                         type="submit"
                         disabled={isSubmitting}
                         className={`text-base font-medium w-full ${isSubmitting ? 'bg-gray-400' : 'bg-[#017EFE] hover:bg-[#003D7B]'} transition-all duration-300 text-white h-[35px] md:h-[40px] px-4 rounded-[60px] flex items-center justify-center`}
                    >
                         {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
               </form>
          </div>
     )
}

