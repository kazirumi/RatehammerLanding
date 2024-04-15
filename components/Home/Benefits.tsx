import React from "react";
import ImageComponent from "../Common/ImageComponent";

function Benefits() {
  return (
    <section className="bg-slate-50 ">
      <div className="container mx-auto flex lg:flex-row flex-col 2xl:gap-16 xl:gap-8 md:gap-6 gap-4 justify-center items-center py-5 2xl:py-[144px] xl:py-[104px] lg:py-[72px] sm:py-11 px-3 2xl:px-4 xl:px-8 sm:px-11 ">
        <div className="relative w-full">
          <div className="relative w-full lg:w-[480px] md:h-[360px] h-[292px]">
            <ImageComponent
              src="/assets/images/home/benefit.webp"
              alt="offers"
              objectFit={"fill"}
            />
          </div>
        </div>

        <div className="flex flex-col flex-grow xl:gap-6 md:gap-4 gap-3">
          <p className="text-lg  xl:text-3xl sm:text-2xl font-semibold leading-6 xl:leading-[44px] sm:leading-8 text-slate-900 ">
            RateHammer is available as a standalone App and as an SDK embedded
            within other Apps. Lenders and Insurers benefit from massive
            efficiencies and no conversion risk.
          </p>
          <p className="text-base xl:text-xl sm:text-lg xl:leading-[32px] sm:leading-[30px] leading-[24px] font-[400px] text-slate-900 font-century-gothic">
            RateHammer works with a select number of - mobile operators and
            super apps in various markets that are keen to truly champion their
            user base.
          </p>
          <p className="text-base xl:text-xl sm:text-lg xl:leading-[32px] sm:leading-[30px] leading-[24px] font-[400px] text-slate-900 font-century-gothic">
          more details about our solution please <span className="ml-2 underline cursor-pointer text-brand-purple-500">click here</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
