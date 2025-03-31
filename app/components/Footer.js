"use client";
import React, { useState, useEffect, Suspense } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Instagram from '../SvgIcons/Instagram';
import Whatsapp from '../SvgIcons/Whatsapp';
import Telegram from '../SvgIcons/Telegram';
import { useTranslation } from "react-i18next";
import dynamic from 'next/dynamic';

// Dynamically import the LanguageDropdown with SSR disabled
const LanguageDropdown = dynamic(() => import('./LanguageDropdown'), {
     ssr: false,
     loading: () => <div className="h-[42px] w-full bg-gray-100 rounded-[30px] animate-pulse"></div>
});

const Footer = () => {
     const [isClient, setIsClient] = useState(false);

     // Use a fallback text until translation is ready
     const fallbackTranslation = {
          "footer.headline": "Quality diamonds and precious gems",
          "footer.rights": "© 2023 FinerLux. All rights reserved",
          "footer.designBy": "Design by Studio"
     };

     const { t, ready } = useTranslation();
     const [currentLang, setCurrentLang] = useState("en");

     useEffect(() => {
          setIsClient(true);
          const storedLang = localStorage.getItem("selectedLanguage");
          const langFromPath = window.location.pathname.split("/")[1];
          const finalLang = storedLang || (langFromPath === "ru" ? "ru" : "en");
          setCurrentLang(finalLang);
     }, []);

     // Translate function that uses fallback if translations aren't ready
     const safeT = (key) => {
          if (ready) return t(key);
          return fallbackTranslation[key] || key;
     };

     return (
          <div className="w-full">
               {/* Content */}
               <div className="relative z-10 pt-[95px] md:pt-[46px] !pb-0 w-full mx-auto max-w-full">
                    <div className='flex items-center justify-center ml-10 md:ml-20 mb-[25px]'>
                         <Image src='/assets/footer-image.svg' alt='footer' width={121} height={210} className='md:w-[121px] md:h-[210px] w-[94px] h-[164px]' />
                    </div>
                    <div className="relative max-w-[1120px] w-full mx-auto h-full">
                         {/* Background for desktop */}
                         <div
                              className="hidden lg:block absolute inset-0 z-10 w-full h-full bg-no-repeat bottom-0 -ml-5"
                              style={{ backgroundImage: "url('/assets/footer-bg.svg')" }}
                         />
                         {/* Background for mobile */}
                         <div
                              className="lg:hidden absolute inset-0 z-10 w-full h-full bg-no-repeat bg-cover"
                              style={{ backgroundImage: "url('/assets/footer-bg-mobile.svg')" }}
                         />
                         <div className="px-5 w-full relative top-0 z-50 left-0 h-full flex flex-col items-center">
                              <h2 className='text-[#000000] max-w-[603px] text-[32px] md:text-[40px] leading-[95%] font-semibold text-center'>
                                   {safeT("footer.headline")}
                              </h2>
                              <div className='mt-12 lg:mt-[83px] w-full max-w-[1100px] mx-auto gap-8 grid grid-cols-1 sm:grid-cols-2 lg:flex items-start justify-between'>
                                   <ul className='lg:w-[240px]'>
                                        <li className='text-black text-[18px] md:text-[24px] font-semibold mb-3 lg:mb-6'>Contacts</li>
                                        <li className='text-black text-[14px] md:text-[18px] font-normal mb-[12px] lg:mb-[18px]'>Hatton Garden, London</li>
                                        <li className='text-black text-[14px] md:text-[18px] font-normal mb-[12px] lg:mb-[18px]'>info@finerlux.com</li>
                                        <li className='text-black text-[14px] md:text-[18px] font-normal'>+44 123 456 7890</li>
                                   </ul>

                                   <ul className='lg:w-[140px]'>
                                        <li className='text-black text-[18px] md:text-[24px] font-semibold mb-3 lg:mb-6'>Services</li>
                                        <li className='text-black text-[14px] md:text-[18px] font-normal mb-[12px] lg:mb-[18px]'>Part exchange</li>
                                        <li className='text-black text-[14px] md:text-[18px] font-normal mb-[12px] lg:mb-[18px]'>Authenticate</li>
                                        <li className='text-black text-[14px] md:text-[18px] font-normal mb-[12px] lg:mb-[18px]'>Source</li>
                                        <li className='text-black text-[14px] md:text-[18px] font-normal'>Buy/Sell</li>
                                   </ul>

                                   <ul className='lg:w-[240px]'>
                                        <li className='text-black text-[18px] md:text-[24px] font-semibold mb-3 lg:mb-6'>Privacy</li>
                                        <li className='text-black text-[14px] md:text-[18px] font-normal mb-[12px] lg:mb-[18px]'>Terms & Conditions</li>
                                        <li className='text-black text-[14px] md:text-[18px] font-normal'>Privacy policy</li>
                                   </ul>

                                   <div className='lg:max-w-[306px]'>
                                        <div className='w-full'>
                                             <label htmlFor="currency" className="block text-sm md:text-base font-normal text-black mb-1.5 md:mb-3">
                                                  Currency
                                             </label>
                                             <div className="relative w-full">
                                                  <select
                                                       id="currency"
                                                       name="currency"
                                                       className='w-full lg:w-[306px] px-4 focus:border-[#017EFE] text-base min-h-[33px] md:h-[42px] bg-white appearance-none rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300'
                                                  >
                                                       <option>GBP</option>
                                                       <option>USD</option>
                                                       <option>EUR</option>
                                                  </select>
                                                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                       <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 4L7.5 12L14 4" stroke="#828282" strokeLinecap="round" strokeLinejoin="round" />
                                                       </svg>
                                                  </div>
                                             </div>
                                        </div>

                                        {isClient && (
                                             <div className='w-full mt-3 md:mt-6'>
                                                  <Suspense fallback={<div className="h-[42px] w-full bg-gray-100 rounded-[30px] animate-pulse"></div>}>
                                                       <LanguageDropdown />
                                                  </Suspense>
                                             </div>
                                        )}

                                        <div className='mt-6 flex items-center gap-4 md:gap-[30px]'>
                                             <Link href='/'><Instagram /></Link>
                                             <Link href='/'><Whatsapp /></Link>
                                             <Link href='/'><Telegram /></Link>
                                        </div>
                                   </div>
                              </div>
                              <h2 className='lg:pb-11 mt-12 lg:mt-[95px] text-center text-[#000000] text-[14px] md:text-[18px] font-normal'>
                                   {safeT("footer.rights")}
                              </h2>
                              <h2 className='pb-6 pt-[15px] md:pb-11 text-center text-[#000000] text-[14px] font-normal lg:hidden block'>
                                   {safeT("footer.designBy")}
                              </h2>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Footer;


