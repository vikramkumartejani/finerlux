"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/mousewheel"
import Image from "next/image"
import Cross from "../SvgIcons/Cross"
import Right from "../SvgIcons/Right"

// Import watch data
const newArrivalsData = [
     {
          id: 1,
          brand: "Rolex",
          model: "Submariner",
          reference: "116610 LN",
          year: 2018,
          condition: "Papers, Box",
          discount: 5,
          price: 8700,
          originalPrice: 9140,
          imageUrl: "/assets/watch.svg",
     },
     {
          id: 2,
          brand: "Rolex",
          model: "Submariner",
          reference: "116610 LN",
          year: 2018,
          condition: "Papers, Box",
          discount: 0,
          price: 9140,
          originalPrice: 9140,
          imageUrl: "/assets/watch.svg",
     },
     {
          id: 3,
          brand: "Rolex",
          model: "Submariner",
          reference: "116610 LN",
          year: 2018,
          condition: "Papers, Box",
          discount: 17,
          price: 8700,
          originalPrice: 9140,
          imageUrl: "/assets/watch.svg",
     },
     {
          id: 4,
          brand: "Rolex",
          model: "Submariner",
          reference: "116610 LN",
          year: 2018,
          condition: "Papers, Box",
          discount: 0,
          price: 9140,
          originalPrice: 9140,
          imageUrl: "/assets/watch.svg",
     },
     {
          id: 5,
          brand: "Rolex",
          model: "Submariner",
          reference: "116610 LN",
          year: 2018,
          condition: "Papers, Box",
          discount: 16,
          price: 8700,
          originalPrice: 9140,
          imageUrl: "/assets/watch.svg",
     },
     {
          id: 6,
          brand: "Rolex",
          model: "Submariner",
          reference: "116610 LN",
          year: 2018,
          condition: "Papers, Box",
          discount: 0,
          price: 9140,
          originalPrice: 9140,
          imageUrl: "/assets/watch.svg",
     },
]

const NewArrivals = () => {
     return (
          <div className="mt-[60px] w-full px-5 md:px-0">
               <div className="max-w-[1296px] mx-auto">
                    <h2 className="text-[24px] md:text-4xl font-semibold leading-[34px] mb-6 md:mb-9">New Arrivals</h2>
               </div>

               <div className="w-full overflow-hidden sm:block hidden">
                    <Swiper
                         spaceBetween={20}
                         slidesPerView="auto"
                         modules={[Autoplay]}
                         className="mySwiper"
                    // wrapperClass="!flex"
                    >
                         {newArrivalsData.map((watch) => (
                              <SwiperSlide key={watch.id} className="w-[207px] max-w-[207px] sm:w-[284px] sm:max-w-[284px] flex-shrink-0">
                                   <div className="bg-white rounded-[20px] sm:rounded-[30px] p-3 sm:p-[18px] h-full">
                                        <div className="w-full relative">
                                             <Image
                                                  src={watch.imageUrl || "/placeholder.svg"}
                                                  alt={`${watch.brand} ${watch.model}`}
                                                  width={248}
                                                  height={248}
                                                  draggable="false"
                                                  className="w-full sm:w-[248px] sm:h-[248px]"
                                             />
                                             {watch.discount > 0 && (
                                                  <div className="bg-[#60FF7D] rounded-lg sm:rounded-[13px] p-2 sm:p-2.5 absolute w-fit top-0 left-0">
                                                       <h2 className="text-black text-xs sm:text-sm font-normal">-{watch.discount}%</h2>
                                                  </div>
                                             )}
                                        </div>
                                        <div className="mt-3 sm:mt-[12px] space-y-3 sm:text-left text-center">
                                             <h3 className="text-black font-normal !leading-[12px] text-sm md:text-[16px]">{watch.brand}</h3>
                                             <h2 className="text-black font-semibold !leading-[17px] text-[18px] sm:text-[24px]">{watch.model}</h2>
                                             <p className="text-black text-sm !leading-[12px] md:text-[16px] font-normal">{watch.reference}</p>
                                        </div>
                                        <div className="mt-[12px] w-full flex items-center justify-center sm:justify-start">
                                             <div className="w-fit bg-[#ECF0F3] p-[9px] rounded-xl">
                                                  <h3 className="text-[#000000] text-xs sm:text-[14px] font-normal !leading-[10px] sm:text-left text-center">Year {watch.year}</h3>
                                                  <div className="mt-3 flex items-center gap-2 sm:gap-3">
                                                       <h3 className="flex items-center gap-1 sm:gap-2 text-black text-xs sm:text-[14px] !leading-[10px]">
                                                            Papers {watch.condition.includes("Papers") ? <Right /> : <Cross />}
                                                       </h3>
                                                       <h3 className="flex items-center gap-1 sm:gap-2 text-black text-xs sm:text-[14px] !leading-[10px]">
                                                            Box {watch.condition.includes("Box") ? <Right /> : <Cross />}
                                                       </h3>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="my-[12px] flex items-center sm:justify-start justify-center gap-2 sm:gap-[18px]">
                                             <h3 className={`text-[18px] !leading-[29px] sm:text-[24px] font-semibold ${watch.discount > 0 ? "text-[#017EFE]" : "text-black"}`}>
                                                  {watch.price}$
                                             </h3>
                                             {watch.discount > 0 && (
                                                  <del className="text-[#828282] text-sm sm:text-[16px] leading-none font-normal">{watch.originalPrice}$</del>
                                             )}
                                        </div>
                                        <div className="flex items-center justify-center sm:justify-start">
                                             <button className="bg-[#017EFE] hover:bg-[#003D7B] transition-all duration-300 h-[39px] rounded-[60px] flex items-center justify-center px-10 text-white font-medium text-[16px] leading-none w-fit">
                                                  <h3 className="sm:block hidden">Contact</h3>
                                                  <h3 className="sm:hidden block">Buy</h3>
                                             </button>
                                        </div>

                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </div>

               <div className="sm:hidden grid grid-cols-2 gap-3">
                    {newArrivalsData.map((watch) => (
                         <SwiperSlide key={watch.id} className="">
                              <div className="bg-white rounded-[20px] sm:rounded-[30px] p-3 sm:p-[18px] h-full">
                                   <div className="w-full relative">
                                        <Image
                                             src={watch.imageUrl || "/placeholder.svg"}
                                             alt={`${watch.brand} ${watch.model}`}
                                             width={248}
                                             height={248}
                                             draggable="false"
                                             className="w-full sm:w-[248px] sm:h-[248px]"
                                        />
                                        {watch.discount > 0 && (
                                             <div className="bg-[#60FF7D] rounded-lg sm:rounded-[13px] p-2 sm:p-2.5 absolute w-fit top-0 left-0">
                                                  <h2 className="text-black text-xs sm:text-sm font-normal">-{watch.discount}%</h2>
                                             </div>
                                        )}
                                   </div>
                                   <div className="mt-3 sm:mt-[12px] space-y-3">
                                        <h3 className="text-black font-normal !leading-[12px] text-sm">{watch.brand}</h3>
                                        <h2 className="text-black font-semibold !leading-[17px] text-[18px]">{watch.model}</h2>
                                        <p className="text-black text-sm !leading-[12px]font-normal">{watch.reference}</p>
                                   </div>
                                   <div className="mt-[12px] w-full flex items-center justify-start">
                                        <div className="w-fit bg-[#ECF0F3] p-[9px] rounded-xl">
                                             <h3 className="text-[#000000] text-xs sm:text-[14px] font-normal !leading-[10px]">Year {watch.year}</h3>
                                             <div className="mt-3 flex items-center gap-2 sm:gap-3">
                                                  <h3 className="flex items-center gap-1 sm:gap-2 text-black text-xs !leading-[10px]">
                                                       Papers {watch.condition.includes("Papers") ? <Right /> : <Cross />}
                                                  </h3>
                                                  <h3 className="flex items-center gap-1 sm:gap-2 text-black text-xs !leading-[10px]">
                                                       Box {watch.condition.includes("Box") ? <Right /> : <Cross />}
                                                  </h3>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="my-[12px] flex items-center justify-start gap-2 sm:gap-[18px]">
                                        <h3 className={`text-[18px] !leading-[29px] font-semibold ${watch.discount > 0 ? "text-[#017EFE]" : "text-black"}`}>
                                             {watch.price}$
                                        </h3>
                                        {watch.discount > 0 && (
                                             <del className="text-[#828282] text-sm leading-none font-normal">{watch.originalPrice}$</del>
                                        )}
                                   </div>
                                   <div className="flex items-center justify-start">
                                        <button className="bg-[#017EFE] hover:bg-[#003D7B] transition-all duration-300 h-[39px] rounded-[60px] flex items-center justify-center px-10 text-white font-medium text-[16px] leading-none w-fit">
                                             <h3 className="sm:block hidden">Contact</h3>
                                             <h3 className="sm:hidden block">Buy</h3>
                                        </button>
                                   </div>

                              </div>
                         </SwiperSlide>
                    ))}
               </div>
          </div>
     )
}

export default NewArrivals

