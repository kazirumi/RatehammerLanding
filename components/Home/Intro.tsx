import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className="bg-bg_hero ">
        <div className="container mx-auto flex flex-col gap-8 justify-center pt-[305px] pb-[218px] px-4 text-white ">
          <div className="flex flex-col gap-6 w-[1248px]">
            <p className="text-5xl font-bold w-[992px] leading-[68px] ">
              RateHammer is a Cutting-edge Smart Broker Platform
            </p>    
            <p className="text-brand-purple-100 text-2xl leading-9">
              Works with partner Mobile Operators and Super Apps allowing them
              to offer their customers the ultimate access point to a panel of
              credit and insurance suppliers.
            </p>
          </div>

          <div className="w-[1248px]">
            <p className="text-lg leading-[30px]">
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
