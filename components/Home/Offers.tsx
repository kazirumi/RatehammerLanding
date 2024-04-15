import React from "react";
import ImageComponent from "../Common/ImageComponent";

function Offers() {
  return (
    <section className="bg-white ">
      <div className="container mx-auto flex lg:flex-row flex-col 2xl:gap-16 xl:gap-8 md:gap-6 gap-4 justify-center items-center py-5 2xl:py-[144px] xl:py-[104px] lg:py-[72px] sm:py-11 px-3 2xl:px-4 xl:px-8 sm:px-11 ">
        <div className="flex flex-col flex-grow xl:gap-6 md:gap-4 gap-3">
          <p className="text-lg  xl:text-3xl sm:text-2xl font-semibold leading-6 xl:leading-[44px] sm:leading-8  text-slate-900">
            RateHammer offer a fully hosted, turn-key solution to partner Mobile
            Operators and Super Apps who benefit from substantial revenue share
            with little to no investment risk.
          </p>
          <p className="font-century-gothic text-base xl:text-xl sm:text-lg xl:leading-[32px] sm:leading-[30px] leading-[24px] font-[400px] text-slate-800">
            Partners take no credit risk and have a very limited marketing/
            promotion commitment largely leveraging an existing user base.
          </p>     
        </div>

        <div className="relative w-full">
          <div className="relative w-full lg:w-[480px] md:h-[360px] h-[292px] ">
            <ImageComponent
              src="/assets/images/home/offers.webp"
              alt="offers"
              objectFit={"fill"}          
            />
          </div>
          <div className="absolute top-0 right-0 sm:w-[160px] sm:h-[158px] w-[72px] h-[71px]">
            <ImageComponent
              src="/assets/images/home/ornament.svg"
              alt="oranament"
              objectFit={"fill"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
