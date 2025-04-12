"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { scrollToHomeFormSection } from "../utils/navigation";

export const LiveChatButton = () => {
  return (
    <button
      className="fixed right-6 bottom-6 md:right-8 md:bottom-8 rounded-[30px] h-[41px] md:h-[47px] w-[95px] md:w-[118px] 
                 text-sm md:text-base font-normal md:font-medium bg-[#60FF7D] text-black z-50 
                 animate-subtleBounce hover:animate-none transition-transform"
    >
      Live Chat
    </button>
  );
};

export const Content = ({ loading }) => {
  const { t } = useTranslation();

  return (
    <div className="tag w-full md:text-left text-center md:w-[560px] z-30 rounded-tr-[30px] md:absolute bottom-0 bg-[#ECF0F3] md:p-8 pr-4 md:pb-[28px]">
      {loading ? (
        <div className="h-[18px] w-[90%] bg-gray-300 rounded animate-pulse mb-3 mx-auto md:mx-0" />
      ) : (
        <p className="text-[14px] md:text-[18px] font-normal leading-[100%] md:leading-[115%] mt-3 md:mt-0">
          {t("hero.description")}
        </p>
      )}
      <div className="px-8 md:px-0 mt-3 md:mt-[24px] flex items-center flex-wrap md:flex-nowrap justify-center md:justify-start gap-3 md:gap-6">
        {loading
          ? [...Array(3)].map((_, i) => (
              <div key={i} className="h-[39px] w-[100px] bg-gray-300 rounded-full animate-pulse" />
            ))
          : <>
              <button
                onClick={() => scrollToHomeFormSection("buy")}
                className="bg-[#017EFE] w-fit px-8 md:px-10 rounded-[60px] text-white text-[12px] md:text-[16px] font-medium h-[35px] md:h-[39px] transition duration-300 hover:bg-[#003D7B]"
              >
                {t("hero.buyBtn")}
              </button>
              <button
                onClick={() => scrollToHomeFormSection("sell")}
                className="bg-[#017EFE] w-fit px-8 md:px-10 rounded-[60px] text-white text-[12px] md:text-[16px] font-medium h-[35px] md:h-[39px] transition duration-300 hover:bg-[#003D7B]"
              >
                {t("hero.sellBtn")}
              </button>
              <Link
                href="#withusyoucan"
                className="flex items-center justify-center !leading-[19px] w-fit px-8 md:px-10 rounded-[60px] text-[#017EFE] text-[12px] md:text-[16px] font-medium h-[35px] md:h-[39px] transition duration-300 hover:text-white hover:bg-[#017EFE] border-2 border-[#017EFE]"
              >
                {t("hero.learnMoreBtn")}
              </Link>
            </>
        }
      </div>
    </div>
  );
};

export const MobileContent = ({ loading }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full md:text-left text-center md:w-[560px] z-30 rounded-tr-[30px] md:absolute bottom-0 bg-[#ECF0F3] md:p-8 md:pb-[28px]">
      {loading ? (
        <div className="h-[18px] w-[90%] bg-gray-300 rounded animate-pulse mb-3 mx-auto md:mx-0" />
      ) : (
        <p className="text-[14px] md:text-[18px] font-normal leading-[100%] md:leading-[115%] mt-3 md:mt-0">
          {t("hero.description")}
        </p>
      )}
      <div className="px-8 md:px-0 mt-3 md:mt-[24px] flex items-center flex-wrap md:flex-nowrap justify-center md:justify-start gap-3 md:gap-6">
        {loading
          ? [...Array(3)].map((_, i) => (
              <div key={i} className="h-[39px] w-[100px] bg-gray-300 rounded-full animate-pulse" />
            ))
          : <>
              <button
                onClick={() => scrollToHomeFormSection("buy")}
                className="bg-[#017EFE] w-fit px-8 md:px-10 rounded-[60px] text-white text-[12px] md:text-[16px] font-medium h-[35px] md:h-[39px] transition duration-300 hover:bg-[#003D7B]"
              >
                {t("hero.buyBtn")}
              </button>
              <button
                onClick={() => scrollToHomeFormSection("sell")}
                className="bg-[#017EFE] w-fit px-8 md:px-10 rounded-[60px] text-white text-[12px] md:text-[16px] font-medium h-[35px] md:h-[39px] transition duration-300 hover:bg-[#003D7B]"
              >
                {t("hero.sellBtn")}
              </button>
              <Link
                href="#withusyoucan"
                className="flex items-center justify-center !leading-[19px] w-fit px-8 md:px-10 rounded-[60px] text-[#017EFE] text-[12px] md:text-[16px] font-medium h-[35px] md:h-[39px] transition duration-300 hover:text-white hover:bg-[#017EFE] border-2 border-[#017EFE]"
              >
                {t("hero.learnMoreBtn")}
              </Link>
            </>
        }
      </div>
    </div>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-5 mt-[35px]">
      <div className="card max-w-[1360px] w-full mx-auto bg-white hidden md:flex items-center justify-between rounded-[45px] h-[622px] relative overflow-hidden">
        <div
          className="absolute inset-0 object-cover bg-no-repeat bg-center pt-20"
          style={{
            backgroundImage:
              "url('/assets/finerlux-rabbit-full-logo-blue.svg')",
          }}
        ></div>

        <div className="w-full pl-8 pt-[100px] lg:pt-[135px] z-30">
          {loading ? (
            <div className="w-[300px] h-[40px] bg-gray-300 rounded animate-pulse" />
          ) : (
            <h1 className="max-w-[530px] text-[40px] !leading-[95%] font-semibold">
              {t("hero.title")}
            </h1>
          )}
        </div>

        <Content loading={loading} />

        <div className="w-5/6 h-full -ml-28">
          {loading ? (
            <div className="w-full h-full bg-gray-200 rounded animate-pulse" />
          ) : (
            <Image
              src="/assets/hero-watch.webp"
              alt="Rolex GMT-Master II"
              className="relative z-10 h-full !object-contain"
              width={500}
              height={500}
              priority
            />
          )}
        </div>

        <LiveChatButton />
      </div>

      {/* Mobile View */}
      <div className="md:hidden block">
        <div className="h-[265px] min-w-full bg-white rounded-[30px] relative flex items-end justify-end">
          {loading ? (
            <div className="w-full h-full bg-gray-200 rounded animate-pulse" />
          ) : (
            <>
              <Image
                src="/assets/mobile.svg"
                alt="mobile"
                width={331}
                height={267}
                priority
                className="w-full h-full"
              />
              <div className="absolute z-40 flex items-end justify-end right-2 top-0 h-full w-fit">
                <Image
                  src="/assets/hero-watch.webp"
                  alt="hero-watch"
                  width={265}
                  height={500}
                  className="h-full !bg-contain w-full"
                />
              </div>
            </>
          )}
          <LiveChatButton />
        </div>
        {loading ? (
          <div className="h-[26px] w-[200px] mx-auto mt-6 bg-gray-300 rounded animate-pulse" />
        ) : (
          <h2 className="mt-6 text-center text-[22px] leading-[95%] font-semibold">
            {t("hero.title")}
          </h2>
        )}
        <MobileContent loading={loading} />
      </div>
    </div>
  );
};

export default Hero;
