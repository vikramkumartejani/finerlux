'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const LiveChatButton = () => {
     return (
          <button className="absolute right-1 md:right-[45px] z-40 -bottom-4 md:bottom-[168px] rounded-[30px] h-[41px] md:h-[47px] w-[95px] md:w-[118px] text-sm md:text-base font-normal md:font-medium bg-[#60FF7D] text-black">
               Live Chat
          </button>
     )
}

export const Content = () => {
     const { t } = useTranslation();
     const [currentLang, setCurrentLang] = useState("en");

     useEffect(() => {
          const storedLang = localStorage.getItem("selectedLanguage");
          const langFromPath = window.location.pathname.split("/")[1];
          const finalLang = storedLang || (langFromPath === "ru" ? "ru" : "en");
          setCurrentLang(finalLang);
     }, []);
     return (
          <div className='w-full md:text-left text-center md:w-[560px] z-30 rounded-tr-[30px] md:absolute bottom-0 bg-[#ECF0F3] md:p-8 pr-4 md:pb-[28px]'>
               <p className='text-[14px] md:text-[18px] font-normal leading-[100%] md:leading-[114.99999999999999%] mt-3 md:mt-0'>{t("hero.description")}</p>
               <div className='px-8 md:px-0 mt-3 md:mt-[24px] flex items-center flex-wrap md:flex-nowrap justify-center md:justify-start gap-3 md:gap-6'>
                    <button className='bg-[#017EFE] w-fit px-8 md:px-10 rounded-[60px] text-white text-[12px] md:text-[16px] font-medium h-[35px] md:h-[39px] transition duration-300 hover:bg-[#003D7B]'>{t("hero.buyBtn")}</button>
                    <button className='bg-[#017EFE] w-fit px-8 md:px-10 rounded-[60px] text-white text-[12px] md:text-[16px] font-medium h-[35px] md:h-[39px] transition duration-300 hover:bg-[#003D7B]'>{t("hero.sellBtn")}</button>
                    <Link href={`/${currentLang}#withusyoucan`} className='flex items-center justify-center !leading-[19px] w-fit px-8 md:px-10 rounded-[60px] text-[#017EFE] text-[12px] md:text-[16px] font-medium h-[35px] md:h-[39px] transition duration-300 hover:text-white hover:bg-[#017EFE] border-2 border-[#017EFE]'>{t("hero.learnMoreBtn")}</Link>
               </div>
          </div>
     )
}

const Hero = () => {
     const { t } = useTranslation();
     return (
          <div className="px-5 mt-[35px]">
               <div className="max-w-[1360px] w-full mx-auto bg-white hidden md:flex items-center justify-between rounded-[45px] h-[622px] relative overflow-hidden">
                    {/* Background Image */}
                    <div
                         className="absolute inset-0 object-cover bg-no-repeat bg-center pt-20 opacity-15"
                         style={{
                              backgroundImage: "url('/assets/finerlux-rabbit-full-logo-blue.svg')",
                              backgroundSize: "65%",
                         }}
                    ></div>

                    <div className='w-full pl-8 pt-[100px] lg:pt-[135px]'>
                         <h1 className='max-w-[500px] text-[40px] !leading-[95%] font-semibold'>{t("hero.title")}</h1>
                    </div>

                    <Content />

                    <div className='w-5/6 h-full -ml-28'>
                         <Image
                              src="/assets/hero-watch.webp"
                              alt="Rolex GMT-Master II"
                              className="relative z-10 h-full !object-contain"
                              width={500}
                              height={500}
                              loading='lazy'
                         />
                    </div>

                    <LiveChatButton />
               </div>

               {/* Mobile View */}
               <div className='md:hidden block'>
                    <div className='h-[265px] w-full bg-white rounded-[30px] relative flex items-end justify-end'>
                         <div className='w-full h-full'>
                              <Image src='/assets/mobile.svg' priority alt='mobil' className='w-full h-full !object-contain' width={500} height={500} />
                         </div>
                         <div className='absolute z-40 flex items-end justify-end right-2 top-0 h-full w-fit'>
                              <Image src="/assets/hero-watch.webp" alt='hero-watch' width={500} height={500} className='h-full !bg-contain w-fit' />
                         </div>
                         <LiveChatButton />
                    </div>
                    <h2 className='mt-6 text-center text-[22px] leading-[95%] font-semibold'>{t("hero.title")}</h2>
                    <Content />
               </div>
          </div>
     );
};

export default Hero;
