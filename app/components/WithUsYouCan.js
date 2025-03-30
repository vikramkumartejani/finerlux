"use client"
import Image from 'next/image'
import React from 'react'

const WithUsYouCan = () => {
     const conditionOptions = ["Excellent", "Good", "Fair", "Poor"];

     const handleChange = (selected) => {
          console.log("Selected option:", selected);
     };
     return (
          <div className='px-5 w-full'>
               <div className='mt-[60px] max-w-[1296px] mx-auto w-full'>
                    <h2 className="text-[24px] md:text-[36px] font-semibold !leading-[95%] mb-6 md:mb-9">With Us You Can</h2>
                    <div className='w-full flex xl:flex-row flex-col items-start gap-3 sm:gap-6'>
                         <div className='w-full flex flex-col items-start gap-3 sm:gap-6'>
                              <div className='w-full flex items-center lg:flex-row flex-col gap-3 sm:gap-6'>
                                   <div className='bg-white rounded-[20px] sm:rounded-[30px] w-full xl:max-w-[416px] xl:min-w-[416px] pl-[24px] pt-[24px] relative h-[150px] sm:h-[206px] overflow-hidden'>
                                        <div className='max-w-[184px] sm:max-w-[300px] lg:max-w-[201px] '>
                                             <h2 className='text-black text-[18px] sm:text-[24px] font-semibold !leading-[100%] mb-3 sm:mb-[15px]'>Sell</h2>
                                             <p className='text-black text-[14px] sm:text-[16px] font-normal !leading-[120%]'>Sell to us with confidence. Instant payment on the spot—via direct bank transfer, cash or crypto.</p>
                                        </div>
                                        <div className='absolute -right-2.5 sm:right-1 bottom-0'>
                                             <Image src='/assets/with-us-sell.svg' alt='sell' width={215} height={219} className='sm:w-[215px] sm:h-[219px] w-[150px] h-[154px]' />
                                        </div>
                                   </div>

                                   <div className='bg-white rounded-[20px] sm:rounded-[30px] w-full xl:max-w-[526px] pl-[24px] pt-[24px] relative h-[167px] sm:h-[206px] overflow-hidden'>
                                        <div className='max-w-[184px] sm:max-w-[300px] lg:max-w-[250px] xl:max-w-[271px]'>
                                             <h2 className='text-black text-[18px] sm:text-[24px] font-semibold !leading-[100%] mb-3 sm:mb-[15px]'>Buy</h2>
                                             <p className='text-black text-[14px] sm:text-[16px] font-normal !leading-[120%]'>Shop authentic luxury watches and fine jewelry. Only authenticated pieces, sourced with care and guaranteed for quality.</p>
                                        </div>
                                        <div className='absolute right-[4px] sm:right-[30px] -bottom-[4px] sm:bottom-0'>
                                             <Image src='/assets/with-us-buy.svg' alt='sell' width={183} height={227} className='sm:block hidden' />
                                             <Image src='/assets/buytab.svg' alt='sell' width={116} height={145} className='block sm:hidden' />
                                        </div>
                                   </div>
                              </div>

                              <div className='w-full flex items-center lg:flex-row flex-col gap-3 sm:gap-6'>
                                   <div className='bg-white rounded-[20px] sm:rounded-[30px] w-full xl:max-w-[526px] pl-[24px] pt-[24px] relative h-[184px] sm:h-[206px] overflow-hidden'>
                                        <div className='max-w-[174px] sm:max-w-[300px] lg:max-w-[232px]'>
                                             <h2 className='text-black text-[18px] sm:text-[24px] font-semibold !leading-[100%] mb-3 sm:mb-[15px]'>Part Exchange</h2>
                                             <p className='text-black text-[14px] sm:text-[16px] font-normal !leading-[120%]'>Trade your luxury watch or jewelry for something new. Fair valuations, instant offers, and secure transactions with trusted experts.</p>
                                        </div>
                                        <div className='absolute -right-3 sm:right-0 bottom-8 sm:bottom-0'>
                                             <Image src='/assets/with-us-part-exchange.svg' alt='sell' width={250} height={197} className='sm:block hidden' />
                                             <Image src='/assets/part-exchange.svg' alt='sell' width={133} height={118} className='sm:hidden block' />
                                        </div>
                                   </div>

                                   <div className='bg-white rounded-[20px] sm:rounded-[30px] w-full xl:max-w-[416px] xl:min-w-[416px] pl-[24px] pt-[24px] relative h-[167px] sm:h-[206px] overflow-hidden'>
                                        <div className='max-w-[155px] sm:max-w-[300px] lg:max-w-[280px] xl:max-w-[188px]'>
                                             <h2 className='text-black text-[18px] sm:text-[24px] font-semibold !leading-[100%] mb-3 sm:mb-[15px]'>Source</h2>
                                             <p className='text-black text-[14px] sm:text-[16px] font-normal !leading-[120%]'>We help you find rare watches and jewelry from luxury brands. Personalized service to find the perfect piece.</p>
                                        </div>
                                        <div className='absolute -right-2 sm:right-[20px] -bottom-3 sm:bottom-0'>
                                             <Image src='/assets/with-us-source.svg' alt='sell' width={163} height={220} className='sm:block hidden' />
                                             <Image src='/assets/sourcetab.svg' alt='sell' width={140} height={140} className='block sm:hidden' />
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className='bg-white rounded-[20px] sm:rounded-[30px] w-full lg:w-1/2 xl:max-w-[306px] xl:min-w-[306px] overflow-hidden pl-[24px] lg:px-[24px] pt-[24px] pb-2.5 h-[201px] lg:h-fit xl:h-[436px] flex xl:flex-col flex-row justify-between relative'>
                              <div className='xl:max-w-full max-w-[170px] sm:max-w-[300px]'>
                                   <h2 className='text-black text-[18px] sm:text-[24px] font-semibold !leading-[100%] mb-3 sm:mb-[15px]'>Authenticate</h2>
                                   <p className='text-black text-[14px] sm:text-[16px] font-normal !leading-[120%] mb-[15px]'>Ensure your watch or jewelry is 100% authentic. Expert verification, detailed assessments, and certification for guaranteed authenticity.</p>
                              </div>
                              <Image src='/assets/authenticateTab.svg' alt='sell' width={192} height={245} className='xl:w-[192px] xl:h-[245px] w-[120px] h-[153px] sm:w-[150px] sm:h-[170px] absolute lg:static right-1 sm:right-4' />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default WithUsYouCan