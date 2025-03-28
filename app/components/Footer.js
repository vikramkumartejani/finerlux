import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Instagram from '../SvgIcons/Instagram'
import Whatsapp from '../SvgIcons/Whatsapp'
import Telegram from '../SvgIcons/Telegram'

const Footer = () => {
     return (
          <div className='pt-[50px] !pb-0 w-full mx-auto max-w-full'>
               <div className='flex items-center justify-center ml-20'>
                    <Image src='/assets/footer-image.svg' alt='footer' width={121} height={210} />
               </div>
               <div className="relative max-w-[1120px] w-full mx-auto h-full">
                    <img
                         src="/assets/footer-bg.svg"
                         alt="404 Background"
                         className="-ml-6 flex justify-items-end items-end justify-end h-full w-full"
                    />

                    <div className="px-5 w-full absolute pt-10 pb-[56px] top-0 left-0 h-full flex flex-col items-center">
                         <h2 className='text-[#000000] text-[40px] leading-[95%] font-semibold'>We help watch collectors do more of what they love.</h2>
                         <div className='mt-[110px] w-full max-w-[1100px] mx-auto gap-8 grid grid-cols-2 lg:flex items-start justify-between'>
                              <ul className='lg:w-[240px]'>
                                   <li className='text-black text-[24px] font-semibold mb-6'>Contacts</li>
                                   <li className='text-black text-[18px] font-normal mb-[18px]'>Hatton Garden, London</li>
                                   <li className='text-black text-[18px] font-normal mb-[18px]'>info@finerlux.com</li>
                                   <li className='text-black text-[18px] font-normal'>+44 123 456 7890</li>
                              </ul>

                              <ul className='lg:max-w-[140px] order-1'>
                                   <li className='text-black text-[24px] font-semibold mb-6'>Services</li>
                                   <li className='text-black text-[18px] font-normal mb-[18px]'>Part exchange</li>
                                   <li className='text-black text-[18px] font-normal mb-[18px]'>Authenticate</li>
                                   <li className='text-black text-[18px] font-normal mb-[18px]'>Source</li>
                                   <li className='text-black text-[18px] font-normal'>Buy/Sell</li>
                              </ul>

                              <ul className='lg:w-[240px]'>
                                   <li className='text-black text-[24px] font-semibold mb-6'>Privacy</li>
                                   <li className='text-black text-[18px] font-normal mb-[18px]'>Terms & Conditions</li>
                                   <li className='text-black text-[18px] font-normal'>Privacy policy</li>
                              </ul>

                              <div className='lg:max-w-[306px]'>
                                   <div className='w-full'>
                                        <label htmlFor="item" className="block text-sm md:text-base font-normal text-black mb-1.5 md:mb-3">
                                             Currency
                                        </label>
                                        <div className="relative w-full">
                                             <select
                                                  id="currency"
                                                  name="currency"
                                                  className='w-full lg:w-[306px] px-4 focus:border-[#017EFE] text-base min-h-[33px] md:h-[42px] bg-white appearance-none rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300'
                                             >
                                                  <option>GBP</option>
                                                  <option>PKR</option>
                                                  <option>USD</option>
                                             </select>
                                             <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <path d="M1 4L7.5 12L14 4" stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                                  </svg>

                                             </div>
                                        </div>
                                   </div>

                                   <div className='w-full mt-6'>
                                        <label htmlFor="item" className="block text-sm md:text-base font-normal text-black mb-1.5 md:mb-3">
                                        Language
                                        </label>
                                        <div className="relative w-full">
                                             <select
                                                  id="language"
                                                  name="language"
                                                  className='w-full lg:w-[306px] px-4 focus:border-[#017EFE] text-base min-h-[33px] md:h-[42px] bg-white appearance-none rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300'
                                             >
                                                  <option>English</option>
                                                  <option>URDU</option>
                                                  <option>HINDI</option>
                                             </select>
                                             <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <path d="M1 4L7.5 12L14 4" stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                                  </svg>

                                             </div>
                                        </div>
                                   </div>

                                   <div className='mt-6 flex items-center gap-[30px]'>
                                        <Link href='/'><Instagram/></Link>
                                        <Link href='/'><Whatsapp/></Link>
                                        <Link href='/'><Telegram/></Link>
                                   </div>
                              </div>
                         </div>
                         <h2 className='mt-[95px] text-center text-[#000000] text-[18px] font-normal'>All rights reserved</h2>
                    </div>
               </div>
          </div>
     )
}

export default Footer