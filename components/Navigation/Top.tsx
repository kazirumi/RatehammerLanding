import Image from "next/image";
import BaseButton from "../Buttons/BaseButton";

const Top = () => {
  return (
    <section className="absolute container m-auto left-0 right-0   px-4 py-4 bg-transparent">
      <div>
        <div className="flex justify-between items-center ">
          <div>
            <Image
              width={271}
              height={56}
              src={"/assets/images/logo/home/ratehammer_logo.svg"}
              alt="rate hammer logo"
            />
          </div>

          <div>
            <BaseButton
            btn_text="Contact us"
            height="h-[56px]"
            width="w-[138px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
