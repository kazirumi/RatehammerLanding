import Image from "next/image";
import React from "react";
import ImageComponent from "../Common/ImageComponent";

const ThankYou = ({ onClick }: { onClick: React.MouseEventHandler }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950 bg-opacity-50  flex items-center justify-center">
      <div className="flex min-h-screen touch-none items-center justify-center text-center">
        <div
          className="relative flex lg:min-h-[284px] lg:w-[580px] sm:min-h-[248px] sm:w-[462px] xs:min-h-[228px] xs:w-[284px] flex-col lg:gap-3 xs:gap-[10px] justify-center items-center overflow-y-hidden  bg-white p-8 text-start shadow-xl"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute right-5 top-5 cursor-pointer"
            onClick={onClick}
          >
            <Image
              src="/assets/icons/cross.svg"
              width={24}
              height={24}
              alt="Close icon"
            />
          </div>
          <div className="relative lg:w-[80px] lg:h-[80px] sm:w-[72px] sm:h-[72px] xs:w-[64px] xs:h-[64px]">
            <ImageComponent
              src="/assets/icons/checked.svg"
              alt="magento"
              objectFit={"fill"}
            />
          </div>
              
          
          <h1 className="font-bold text-green-500 lg:text-4xl sm:text-3xl xs:text-2xl">Thank You!</h1>
          <p className="lg:text-xl sm:text-lg xs:text-base sm: text-center text-slate-700 font-[400px]">
            We appreciate that you&apos;ve taken the time to write to us.
            We&apos;ll get back to you very soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
