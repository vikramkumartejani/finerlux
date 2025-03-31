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
          imageUrl: "/assets/watch1.png",
          backsideImageUrl: "/assets/watch1-backside.png",
     },
     {
          id: 2,
          brand: "Rolex",
          model: "Submariner",
          reference: "116610 LN",
          year: 2018,
          condition: "Papers, Box",
          discount: 17,
          price: 8700,
          originalPrice: 9140,
          imageUrl: "/assets/watch6.png",
          backsideImageUrl: "/assets/watch6-backside.png",
     },
     {
          id: 3,
          brand: "Rolex",
          model: "Submariner",
          reference: "116610 LN",
          year: 2018,
          condition: "Papers, Box",
          discount: 0,
          price: 9140,
          originalPrice: 9140,
          imageUrl: "/assets/watch4.png",
          backsideImageUrl: "/assets/watch4-backside.png",
     },
     {
          id: 4,
          brand: "Rolex",
          model: "Submariner",
          reference: "116610 LN",
          year: 2018,
          condition: "Papers, Box",
          discount: 16,
          price: 8700,
          originalPrice: 9140,
          imageUrl: "/assets/watch5.png",
          backsideImageUrl: "/assets/watch5-backside.png",
     },
     {
          id: 5,
          brand: "Rolex",
          model: "Submariner",
          reference: "116610 LN",
          year: 2018,
          condition: "Papers, Box",
          discount: 0,
          price: 9140,
          originalPrice: 9140,
          imageUrl: "/assets/watch3.png",
          backsideImageUrl: "/assets/watch3-backside.png",
     },
]

const NewArrivals = () => {
     return (
          <div className="mt-[24px] md:mt-[48px] w-full max-w-[1296px] mx-auto px-[9px] sm:px-5">
               <h2 className="text-[22px] md:text-4xl font-semibold leading-[34px] mb-3 md:mb-9">New Arrivals</h2>

               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
                    {newArrivalsData.map((watch) => (
                         <div key={watch.id}>
                              <div className="bg-white rounded-[24px] sm:rounded-[30px] p-[12px] sm:p-[18px] w-full">
                                   <div className="w-full h-[168px] sm:h-[248px] relative flex items-center justify-center group">
                                        <img
                                             src={watch.imageUrl || "/placeholder.svg"}
                                             alt={`${watch.brand} ${watch.model}`}
                                             draggable="false"
                                             loading="lazy"
                                             className="w-full h-full !object-contain rounded-[20px] !aspect-square transition-opacity duration-500 group-hover:opacity-0 absolute top-0 left-0"
                                        />

                                        {/* Backside image (shown on hover) */}
                                        <img
                                             src={watch.backsideImageUrl || "/placeholder.svg"}
                                             alt={`${watch.brand} ${watch.model} - Back View`}
                                             draggable="false"
                                             loading="lazy"
                                             className="w-full h-full rounded-[20px] !object-contain !aspect-square transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                                        />
                                        {watch.discount > 0 && (
                                             <div className="bg-[#60FF7D] rounded-lg sm:rounded-[13px] p-2 sm:py-[10px] px-[9px] absolute w-fit top-0 left-0">
                                                  <h2 className="text-black text-xs sm:text-[14px] leading-[17px] font-normal">-{watch.discount}%</h2>
                                             </div>
                                        )}
                                   </div>
                                   <div className="mt-[8px] sm:mt-[12px] space-y-1.5 sm:space-y-3">
                                        <h3 className="text-black font-normal !leading-[9px] sm:!leading-[12px] text-xs sm:text-[16px]">{watch.brand}</h3>
                                        <h2 className="text-black font-semibold !leading-[10px] sm:!leading-[15px] text-[14px] sm:text-[20px]">{watch.model}</h2>
                                        <p className="text-black text-xs !leading-[9px] sm:!leading-[12px] font-normal sm:text-[16px]">{watch.reference}</p>
                                   </div>
                                   <div className="mt-[8px] sm:mt-[12px] w-full flex items-center justify-start">
                                        <div className="w-fit bg-[#ECF0F3] p-[8px] sm:p-[9px] rounded-xl">
                                             <h3 className="text-[#000000] text-[10px] sm:text-[14px] font-normal !leading-[7px] sm:!leading-[10px]">Year {watch.year}</h3>
                                             <div className="mt-[8px] sm:mt-[12px] flex items-center gap-3">
                                                  <h3 className="flex items-center gap-2 text-black text-[10px] sm:text-[14px] sm:!leading-[10px] !leading-[7px]">
                                                       Box {watch.condition.includes("Box") ? <Right /> : <Cross />}
                                                  </h3>
                                                  <h3 className="flex items-center gap-2 text-black text-[10px] sm:text-[14px] sm:!leading-[10px] !leading-[7px]">
                                                       Papers {watch.condition.includes("Papers") ? <Right /> : <Cross />}
                                                  </h3>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="mb-[11px] mt-[8px] sm:my-[12px] flex items-center justify-start gap-2 sm:gap-[18px]">
                                        <h3 className={`text-[16px] sm:text-[24px] sm:!leading-[29px] !leading-[19px] font-semibold ${watch.discount > 0 ? "text-[#017EFE]" : "text-black"}`}>
                                             {watch.price}$
                                        </h3>
                                        {watch.discount > 0 && (
                                             <del className="text-[#828282] text-xs sm:text-[16px] sm:!leading-[19px] leading-none font-normal">{watch.originalPrice}$</del>
                                        )}
                                   </div>
                                   <div className="flex items-center justify-start">
                                        <button className="bg-[#017EFE] hover:bg-[#003D7B] transition-all duration-300 h-[35px] sm:h-[39px] rounded-[60px] flex items-center justify-center px-10 text-white font-medium text-[12px] sm:text-[16px] sm:!leading-[19px] leading-[100%] w-fit">
                                             Buy
                                        </button>
                                   </div>

                              </div>
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default NewArrivals

