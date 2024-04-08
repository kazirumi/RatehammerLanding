import React from "react";
import ImageComponent from "../Common/ImageComponent";

function Offers() {
  return (
    <section className="bg-white ">
      <div className="container mx-auto flex gap-16 justify-center items-center py-[144px] px-4 ">
        <div className="flex flex-col flex-grow gap-6">
          <p className="text-3xl font-semibold leading-[44px] text-slate-900">
            RateHammer offer a fully hosted, turn-key solution to partner Mobile
            Operators and Super Apps who benefit from substantial revenue share
            with little to no investment risk.
          </p>
          <p className="text-xl leading-[32px] font-[400px] text-slate-900">
            Partners take no credit risk and have a very limited marketing/
            promotion commitment largely leveraging an existing user base.
          </p>
        </div>

        <div className="relative">
          <div className="relative w-[480px] h-[360px]">
            <ImageComponent
              src="/assets/images/home/offers.webp"
              alt="offers"
              objectFit={"fill"}
            />
          </div>
          <div className="absolute top-0 right-0 w-[160px] h-[158px]">
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
