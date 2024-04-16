import Image from "next/image";
import BaseButton from "../Buttons/BaseButton";
import ImageComponent from "../Common/ImageComponent";
import Link from "next/link";

const Top = () => {
  return (
    <section className="absolute container mx-auto inset-x-0  px-3 2xl:px-4 xl:px-8  sm:px-11 py-3 lg:py-4 bg-transparent">
      <div>
        <div className="flex justify-between items-center ">
          <div>
            <div className="relative lg:w-[271px] lg:h-[56px] sm:w-[232px] sm:h-[48px] ">
              <ImageComponent
                src="/assets/images/logo/home/ratehammer_logo.svg"
                alt="rate hammer logo"
                objectFit={"fill"}
              />
            </div>
            <div className="relative sm:hidden w-[42px] h-10 ">
              <ImageComponent
                src="/assets/images/logo/home/LogoWithoutText.svg"
                alt="rate hammer logo"
                objectFit={"fill"}
              />
            </div>
          </div>

          <div>
            <Link href="#contact-us">
              <BaseButton
                btn_text="Contact us"
                height="lg:h-[56px] sm:h-[48px] h-[40px]"
                width="lg:w-[138px] sm:w-[122px] w-[102px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
