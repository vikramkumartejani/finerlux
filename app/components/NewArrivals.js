"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules"
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
          <div className="mt-28 w-full pl-5 md:pl-0">
               <div className="max-w-[1296px] mx-auto">
                    <h2 className="text-4xl font-semibold mb-9">New Arrivals</h2>
               </div>

               <div className="w-full overflow-hidden">
                    <Swiper
                         spaceBetween={20}
                         slidesPerView="auto"
                         modules={[FreeMode, Mousewheel, Autoplay]}
                         className="mySwiper"
                         wrapperClass="!flex"
                    >
                         {newArrivalsData.map((watch) => (
                              <SwiperSlide key={watch.id} className="!w-[306px] !max-w-[306px] flex-shrink-0">
                                   <div className="bg-white rounded-[30px] p-[18px] h-full">
                                        <div className="w-full relative">
                                             <Image
                                                  src={watch.imageUrl || "/placeholder.svg"}
                                                  alt={`${watch.brand} ${watch.model}`}
                                                  width={270}
                                                  height={248}
                                                  draggable="false"
                                             />
                                             {watch.discount > 0 && (
                                                  <div className="bg-[#60FF7D] rounded-[13px] p-2.5 absolute w-fit top-0 left-0">
                                                       <h2 className="text-black text-sm font-normal">-{watch.discount}%</h2>
                                                  </div>
                                             )}
                                        </div>
                                        <div className="mt-[18px]">
                                             <h3 className="text-black font-normal text-base">{watch.brand}</h3>
                                             <h2 className="text-black font-semibold text-[24px]">{watch.model}</h2>
                                             <p className="text-black text-base font-normal">{watch.reference}</p>
                                        </div>
                                        <div className="mt-[18px] w-fit bg-[#ECF0F3] p-2.5 rounded-xl">
                                             <h3 className="text-[#000000] text-sm font-normal">Year {watch.year}</h3>
                                             <div className="mt-2 flex items-center gap-3">
                                                  <h3 className="flex items-center gap-2 text-black text-sm">
                                                       Papers {watch.condition.includes("Papers") ? <Right /> : <Cross />}
                                                  </h3>
                                                  <h3 className="flex items-center gap-2 text-black text-sm">
                                                       Box {watch.condition.includes("Box") ? <Right /> : <Cross />}
                                                  </h3>
                                             </div>
                                        </div>
                                        <div className="mt-[18px] flex items-center gap-4">
                                             <h3 className={`text-[24px] font-semibold ${watch.discount > 0 ? "text-[#017EFE]" : "text-black"}`}>
                                                  {watch.price}$
                                             </h3>
                                             {watch.discount > 0 && (
                                                  <del className="text-[#828282] text-[16px] font-normal">{watch.originalPrice}$</del>
                                             )}
                                        </div>
                                        <button className="bg-[#017EFE] hover:bg-[#003D7B] transition-all duration-300 mt-[18px] h-[39px] rounded-[60px] flex items-center justify-center px-10 text-white font-medium text-base w-fit">
                                             Contact
                                        </button>
                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </div>
          </div>
     )
}

export default NewArrivals

