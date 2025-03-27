import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
     return (
          <div className='pt-[50px] w-full mx-auto max-w-full'>
               <div className='flex items-center justify-center ml-20'>
                    <Image src='/assets/footer-image.svg' alt='footer' width={121} height={210} />
               </div>
               <div className="relative max-w-[960px] w-full mx-auto -mt-0">
                    <Image
                         src="/assets/not-found-page-bg.webp"
                         alt="404 Background"
                         width={960}
                         height={500}
                         className="w-full"
                         priority
                    />

                    {/* Content */}
                    <div className="absolute top-10 left-0 w-full h-full flex flex-col items-center">
                         <h2 className='text-[#000000] text-[40px] leading-[95%] font-semibold'>We help watch collectors do more of what they love.</h2>
                    </div>
               </div>
          </div>
     )
}

export default Footer