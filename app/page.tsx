import Intro from "@/component/home/Intro";
import Image from "next/image";

export default function Home() {
  return (
    
      // <Intro/>
      <>
      <section className="absolute  m-auto left-0 right-0 container  px-4 py-4 bg-transparent">
        <div>
            <div className="flex justify-between items-center ">
                <div>
                    <Image
                    width={271}
                    height={56}
                    src={'/assets/images/logo/home/ratehammer_logo.svg'}
                    alt='rate hammer logo'
                    />
                </div>
               
                <div><button className='font-extrabold text-green-600 '>jhhjghv</button></div>
            </div>
        </div>
    </section>
      <section className="bg-bg_hero   mx-auto pt-[305px] pb-[218px] px-4  bg-transparent">
      <div>
          <div className="container flex flex-col justify-start text-red-700 ">
              <p className='text-5xl font-bold '>
              RateHammer is a Cutting-edge Smart Broker Platform
              </p>
             
              <div><button className='font-extrabold text-green-600 '>jhhjghv</button></div>
          </div>
      </div>
  </section>
      </>
      
    
  );
}
