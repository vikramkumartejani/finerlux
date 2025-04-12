"use client";
import Cross from "../SvgIcons/Cross";
import Right from "../SvgIcons/Right";
import { useTranslation } from "react-i18next";
import { scrollToHomeFormSection } from "../utils/navigation";
import Image from "next/image";

const newArrivalsData = [
  {
    id: 1,
    brand: "Rolex",
    model: "Daytona",
    reference: "126500LN",
    year: 2022,
    condition: "Papers, Box",
    discount: 0,
    price: "15,150",
    originalPrice: "15,150",
    // imageUrl: "/assets/rolex-daytona-116500ln-panda-cover.webp",
    // backsideImageUrl: "/assets/rolex-daytona-116500ln-panda-closeup.webp",
  },
  {
    id: 2,
    brand: "Rolex",
    model: "GMT-Master II",
    reference: "126720VTNR",
    year: 2023,
    condition: "Papers, Box",
    discount: 5,
    price: "12,700",
    originalPrice: "13,335",
    // imageUrl: "/assets/rolex-gmt-master-2-126720vtnr-sprite-cover.webp",
    // backsideImageUrl: "/assets/rolex-gmt-master-2-126720vtnr-sprite-closeup.webp",
  },
  {
    id: 3,
    brand: "Rolex",
    model: "GMT-Master II",
    reference: "126711CHNR",
    year: 2021,
    condition: "Papers, Box",
    discount: 4,
    price: "13,900",
    originalPrice: "14,456",
    // imageUrl: "/assets/rolex-gmt-master-2-126711chnr-rootbeer-cover.webp",
    // backsideImageUrl: "/assets/rolex-gmt-master-2-126711chnr-rootbeer-closeup.webp",
  },
  {
    id: 4,
    brand: "Rolex",
    model: "GMT-Master II",
    reference: "126710BLRO",
    year: 2022,
    condition: "Papers, Box",
    discount: 3,
    price: "15,100",
    originalPrice: "15,553",
    // imageUrl: "/assets/rolex-gmt-master-2-126710blro-pepsi-cover.webp",
    // backsideImageUrl: "/assets/rolex-gmt-master-2-126710blro-pepsi-close.webp",
  },
  {
    id: 5,
    brand: "Rolex",
    model: "GMT-Master II",
    reference: "126710BLNR",
    year: 2024,
    condition: "Papers, Box",
    discount: 0,
    price: "12,380",
    originalPrice: "12,380",
    // imageUrl: "/assets/rolex-gmt-master-2-126710blnr-batgirl-cover.webp",
    // backsideImageUrl: "/assets/rolex-gmt-master-2-126710blnr-batgirl-closeup.webp",
  },
];

const NewArrivals = () => {
  const { t } = useTranslation();

  const handleBuyClick = (watch) => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("buyFormProduct");
      sessionStorage.removeItem("buyFormData");
    }

    const prefillText = `Item: ${watch.brand} ${watch.model}\nBrand: ${
      watch.brand || "N/A"
    }\nModel: ${watch.model || "N/A"}\nReference: ${
      watch.reference || "N/A"
    }\nYear: ${watch.year || "N/A"}\nCondition: ${
      watch.condition || "N/A"
    }\nPrice: £${watch.price}`;

    if (typeof window !== "undefined") {
      sessionStorage.setItem("buyFormProduct", JSON.stringify(watch));
      sessionStorage.setItem("buyFormData", prefillText);

      sessionStorage.setItem("setActiveHomeTab", "buy");
    }

    scrollToHomeFormSection("buy");
  };

  return (
    <div className="px-[9px] sm:px-5">
      <div className="mt-[24px] md:mt-[48px] w-full max-w-[1296px] mx-auto">
        <h2 className="pl-[11px] sm:pl-0 text-[22px] md:text-[36px] font-semibold !leading-[34px] mb-3 md:mb-6">
          {t("newArrivals.title")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
          {newArrivalsData.map((watch) => (
            <div key={watch.id}>
              <div className="bg-white rounded-[24px] sm:rounded-[30px] p-[12px] sm:p-[18px] w-full">
                <div className="w-full h-[168px] sm:h-[248px] relative flex items-center justify-center group">
                  <Image
                    src={watch.imageUrl || "/placeholder.svg"}
                    alt={`${watch.brand} ${watch.model}`}
                    width={400}
                    height={500}
                    draggable="false"
                    priority
                    className="w-full h-full !object-cover rounded-[20px] !aspect-square opacity-100 group-hover:opacity-0 absolute top-0 left-0"
                  />

                  {/* Backside image (shown on hover) */}
                  <Image
                    src={watch.backsideImageUrl || "/placeholder.svg"}
                    alt={`${watch.brand} ${watch.model} - Back View`}
                    draggable="false"
                    width={400}
                    height={500}
                    priority
                    className="w-full sm:w-[204px] h-[168px] sm:h-[248px] rounded-[20px] !object-cover opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                  />

                  {watch.discount > 0 && (
                    <div className="bg-[#60FF7D] rounded-lg sm:rounded-[13px] p-2 sm:py-[10px] px-[9px] absolute w-fit top-0 left-0">
                      <h2 className="text-black text-xs sm:text-[14px] leading-[17px] font-normal">
                        -{watch.discount}%
                      </h2>
                    </div>
                  )}
                </div>

                <div className="mt-[8px] sm:mt-[12px] space-y-1.5 sm:space-y-3">
                  <h3 className="text-black font-normal !leading-[9px] sm:!leading-[12px] text-xs sm:text-[16px]">
                    {watch.brand}
                  </h3>
                  <h2 className="text-black font-semibold !leading-[10px] sm:!leading-[15px] text-[14px] sm:text-[20px]">
                    {watch.model}
                  </h2>
                  <p className="text-black text-xs !leading-[9px] sm:!leading-[12px] font-normal sm:text-[16px]">
                    {watch.reference}
                  </p>
                </div>
                <div className="mt-[8px] sm:mt-[12px] w-full flex items-center justify-start">
                  <div className="w-fit bg-[#ECF0F3] p-[8px] sm:p-[9px] rounded-xl">
                    <h3 className="text-[#000000] text-[10px] sm:text-[14px] font-normal !leading-[7px] sm:!leading-[10px]">
                      {t("newArrivals.year")} {watch.year}
                    </h3>
                    <div className="mt-[8px] sm:mt-[12px] flex items-center gap-3">
                      <h3 className="flex items-center gap-2 text-black text-[10px] sm:text-[14px] sm:!leading-[10px] !leading-[7px]">
                        {t("newArrivals.box")}{" "}
                        {watch.condition.includes("Box") ? (
                          <Right />
                        ) : (
                          <Cross />
                        )}
                      </h3>
                      <h3 className="flex items-center gap-2 text-black text-[10px] sm:text-[14px] sm:!leading-[10px] !leading-[7px]">
                        {t("newArrivals.papers")}{" "}
                        {watch.condition.includes("Papers") ? (
                          <Right />
                        ) : (
                          <Cross />
                        )}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="mb-[11px] mt-[8px] sm:my-[12px] flex items-center justify-start gap-2 sm:gap-[18px]">
                  <h3
                    className={`text-[16px] sm:text-[24px] sm:!leading-[29px] !leading-[19px] font-semibold ${
                      watch.discount > 0 ? "text-[#017EFE]" : "text-black"
                    }`}
                  >
                    {watch.price}£
                  </h3>
                  {watch.discount > 0 && (
                    <del className="text-[#828282] text-xs sm:text-[16px] sm:!leading-[19px] leading-none font-normal">
                      {watch.originalPrice}£
                    </del>
                  )}
                </div>
                <div className="flex items-center justify-start">
                  <button
                    onClick={() => handleBuyClick(watch)}
                    className="bg-[#017EFE] hover:bg-[#003D7B] transition-all duration-300 h-[35px] sm:h-[39px] rounded-[60px] flex items-center justify-center px-10 text-white font-medium text-[12px] sm:text-[16px] sm:!leading-[19px] leading-[100%] w-fit"
                  >
                    {t("newArrivals.buy")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
