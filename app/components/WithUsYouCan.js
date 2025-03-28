import Image from 'next/image'
import React from 'react'

const WithUsYouCan = () => {
     return (
          <div className='px-5 w-full'>
               <div className='mt-[96px] max-w-[1296px] mx-auto w-full'>
                    <h2 className="text-[24px] md:text-4xl font-semibold mb-6 md:mb-9 sm:text-left text-center">With Us You Can</h2>
                    <div className='w-full flex items-start gap-6'>
                         <div className='w-full flex flex-col items-start gap-6'>
                              <div className='w-full flex items-center gap-6'>
                                   <div className='bg-white rounded-[30px] max-w-[416px] min-w-[416px] pl-[24px] pt-[24px] relative h-[206px] overflow-hidden'>
                                        <div className='max-w-[201px]'>
                                             <h2 className='text-black text-[24px] font-semibold leading-[100%] mb-[15px]'>Sell</h2>
                                             <p className='text-black text-[16px] font-normal leading-[120%]'>Sell to us with confidence. Instant payment on the spot—via direct bank transfer, cash or crypto.</p>
                                        </div>
                                        <div className='absolute right-1 bottom-0'>
                                             <Image src='/assets/with-us-sell.svg' alt='sell' width={215} height={219} className='' />
                                        </div>
                                   </div>
                                   <div className='bg-white rounded-[30px] w-full max-w-[526px] pl-[24px] pt-[24px] relative h-[206px] overflow-hidden'>
                                        <div className='max-w-[271px]'>
                                             <h2 className='text-black text-[24px] font-semibold leading-[100%] mb-[15px]'>Buy</h2>
                                             <p className='text-black text-[16px] font-normal leading-[120%]'>Shop authentic luxury watches and fine jewelry. Only authenticated pieces, sourced with care and guaranteed for quality.</p>
                                        </div>
                                        <div className='absolute right-[30px] bottom-0'>
                                             <Image src='/assets/with-us-buy.svg' alt='sell' width={183} height={227} className='' />
                                        </div>
                                   </div>
                              </div>
                              <div className='w-full flex items-center gap-6'>
                                   <div className='bg-white rounded-[30px] w-full max-w-[526px] pl-[24px] pt-[24px] relative h-[206px] overflow-hidden'>
                                        <div className='max-w-[232px]'>
                                             <h2 className='text-black text-[24px] font-semibold leading-[100%] mb-[15px]'>Part Exchange</h2>
                                             <p className='text-black text-[16px] font-normal leading-[120%]'>Trade your luxury watch or jewelry for something new. Fair valuations, instant offers, and secure transactions with trusted experts.</p>
                                        </div>
                                        <div className='absolute right-0 bottom-0'>
                                             <Image src='/assets/with-us-part-exchange.svg' alt='sell' width={250} height={197} className='' />
                                        </div>
                                   </div>
                                   <div className='bg-white rounded-[30px] max-w-[416px] min-w-[416px] pl-[24px] pt-[24px] relative h-[206px] overflow-hidden'>
                                        <div className='max-w-[188px]'>
                                             <h2 className='text-black text-[24px] font-semibold leading-[100%] mb-[15px]'>Source</h2>
                                             <p className='text-black text-[16px] font-normal leading-[120%]'>We help you find rare watches and jewelry from luxury brands. Personalized service to find the perfect piece.</p>
                                        </div>
                                        <div className='absolute right-[20px] bottom-0'>
                                             <Image src='/assets/with-us-source.svg' alt='sell' width={163} height={220} className='' />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className='bg-white rounded-[30px] max-w-[306px] min-w-[306px] px-[24px] pt-[24px] pb-2.5 h-[436px]'>
                              <h2 className='text-black text-[24px] font-semibold leading-[100%] mb-[15px]'>Authenticate</h2>
                              <p className='text-black text-[16px] font-normal leading-[120%] mb-[15px]'>Ensure your watch or jewelry is 100% authentic. Expert verification, detailed assessments, and certification for guaranteed authenticity.</p>
                              <Image src='/assets/authenticateTab.svg' alt='sell' width={192} height={245} className='' />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default WithUsYouCan