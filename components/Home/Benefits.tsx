import React from "react";
import ImageComponent from "../Common/ImageComponent";

function Benefits() {
  return (
    <section className="bg-slate-50 ">
      <div className="container mx-auto flex gap-16 justify-center items-center py-[104px] px-4 ">
        <div className="relative">
          <div className="relative w-[480px] h-[360px]">
            <ImageComponent
              src="/assets/images/home/benefit.webp"
              alt="offers"
              objectFit={"fill"}
            />
          </div>
        </div>

        <div className="flex flex-col flex-grow gap-6">
          <p className="text-3xl font-semibold leading-[44px] text-slate-900">
            RateHammer is available as a standalone App and as an SDK embedded
            within other Apps. Lenders and Insurers benefit from massive
            efficiencies and no conversion risk.
          </p>
          <p className="text-xl leading-[32px] font-[400px] text-slate-900">
            RateHammer works with a select number of - mobile operators and
            super apps in various markets that are keen to truly champion their
            user base.
          </p>
          <p className="text-xl leading-[32px] font-[400px] text-slate-900">
          more details about our solution please <span className="ml-2 underline cursor-pointer text-brand-purple-500">click here</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
