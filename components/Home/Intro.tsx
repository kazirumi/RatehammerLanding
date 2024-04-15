import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className="bg-bg_hero ">
        <div className="container mx-auto flex flex-col gap-3 lg:gap-5 md:gap-6 xl:gap-8 justify-center pt-[88px] 2xl:pt-[305px] xl:pt-[228px] lg:pt-[176px] md:pt-[120px] sm:pt-[104px] pb-6 2xl:pb-[218px] xl:pb-[140px] lg:pb-[88px] md:pb-[48px] sm:pb-[32px] px-3 2xl:px-4 xl:px-8  sm:px-11 text-white ">
          <div className="flex flex-col gap-6 2xl:w-[1248px]">
            <p className="text-2xl xl:text-5xl md:text-4xl sm:text-3xl font-bold 2xl:w-[992px] xl:leading-[68px] md:leading-[52px] sm:leading-[36px] leading-8 ">
              RateHammer is a Cutting-edge Smart Broker Platform
            </p>    
            <p className="text-brand-purple-100 text-base xl:text-2xl md:text-xl sm:text-lg  font-[400px] font-century-gothic leading-6 xl:leading-9 md:leading-8 sm:leading-[30px]">
              Works with partner Mobile Operators and Super Apps allowing them
              to offer their customers the ultimate access point to a panel of
              credit and insurance suppliers.
            </p>
          </div>

          <div className="2xl:w-[1248px]">
            <p className=" text-[14px] xl:text-lg sm:text-base font-century-gothic  leading-5 xl:leading-[30px] md:leading-6 font-[400px]">
              RateHammer provides a highly optimized and simple application
              process. RateHammer also offers a totally unique Dynamic
              Eligibility Universe so consumers can truly explore their
              potential before making any commitments to any suppliers.
              RateHammer provides lenders and other suppliers a unique
              opportunity to compete for customers.
            </p>
          </div>
        </div>
    </section>
  );
};

export default Intro;
