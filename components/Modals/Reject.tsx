import Image from "next/image";
import React from "react";
import ImageComponent from "../Common/ImageComponent";

const Reject = ({ onClick }: { onClick: React.MouseEventHandler }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950 bg-opacity-50 font-century-gothic flex items-center justify-center">
      <div className="flex min-h-screen touch-none items-center justify-center text-center">
        <div
          className="relative flex lg:min-h-[284px] lg:w-[580px] sm:min-h-[248px] sm:w-[462px] xs:min-h-[228px] xs:w-[284px] flex-col lg:gap-3 xs:gap-[10px] justify-center items-center overflow-y-hidden bg-white p-8 text-start shadow-xl"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute right-3 top-3 cursor-pointer"
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
              src="/assets/icons/cross-circle-red.svg"
              alt="magento"
              objectFit={"fill"}
            />
          </div>
     
          <h1 className="font-bold text-[#fd0d0d] lg:text-4xl sm:text-3xl xs:text-2xl">Failed!</h1>
          <p className="lg:text-xl sm:text-lg xs:text-base text-center text-slate-700">
            Something went wrong, faild to send email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reject;
