import Link from "next/link";
import React from "react";

function Offices() {
  // const addresses=[
  //     {
  //         name:'London',
  //         imageName:'lodon',
  //         address:'8 Beverley Road, London, United Kingdom, SW13 0LX'
  //     },
  //     {
  //         name:'Riyadh',
  //         imageName:'riyadh',
  //         address:'Eastern Ring Branch Rd, Ash Shuhada, Ghirnatah, Riyadh 13241, Saudi Arabia'
  //     },
  //     {
  //         name:'Dhaka ',
  //         imageName:'dhaka',
  //         address:'16-A/2 (3rd Floor), Ring Road,Mohammadpur Dhaka-1207 Bangladesh.'
  //     }

  // ];
  return (
    <>
    {/* <div className="h-auto w-full  bg-gradient-to-r from-[#FFFFFF] via-[#94A3B8] to-[#FFFFFF] p-[1px]">
    </div> */}
        <section className="bg-white py-11  2xl:py-[72px] 2xl:px-0  xl:px-8 xl:py-14 lg:px-9 lg:py-14 sm:p-11 xs:py-5 xs:px-3  font-mulish">
        <div className="container mx-auto xl:flex-row gap-8 2xl:gap-32">
          <div className="flex flex-col justify-center items-center 2xl:gap-8 lg:gap-6 xs:gap-5">
            <div className="flex flex-row justify-center 2xl:text-5xl lg:text-4xl sm:text-3xl xs:text-2xl font-mulish font-bold">
              Offices
            </div>
            <div className="flex lg:flex-row xs:flex-col justify-center items-center 2xl:gap-8 lg:gap-6 sm:gap-4 xs:gap-3">
   
              {/* //card item starts here */}
              <div className="2xl:w-[480px] xl:w-[384px] xl:h-[462px] lg:w-[296px] lg:h-[418px] md:w-[680px] md:h-[160px] sm:w-auto sm:h-[160px] xs:w-[296px] xs:h-[232px] flex lg:flex-col sm:flex-row xs:flex-col border lg:rounded-2xl sm:rounded-xl xs:rounded-lg overflow-x-hidden overflow-y-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.1997620850602!2d46.64417037620636!3d24.78861234812711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3147882ce6f%3A0xd319e8aa68c993ea!2s7259%20Jabal%20Ashaqir%2C%20As%20Sahafah%2C%20Riyadh%2013315%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sbd!4v1703825367063!5m2!1sen!2sbd"
                  width="100%"
                  height="324px"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="xl:h-[324px] lg:h-[256px] lg:w-full sm:w-[240px] sm:h-[160px] xs:h-28"
                ></iframe>
                {/* <img
                  src="/assets/images/home/london.png"
                  alt="Laptop"
                  className="h-[324px] w-full rounded-t-md object-cover"
                /> */}
                <div className="flex flex-col sm:gap-[18px] xs:gap-3  md:p-5 sm:p-6 xs:p-3 xl:h-[138px] lg:h-[162px] lg:min-w-full md:min-w-[440px] sm:min-h-[160px] xs:min-h-[120px] bg-slate-200">
                  <h1 className="inline-flex items-center font-bold lg:text-2xl sm:text-xl xs:text-lg">
                    London  {" "}
                  </h1>
                  <div className=" flex gap-[10px]">
   
                    <img className=" w-6 h-6" src="/assets/images/home/location.png" alt="location" />
                    <p className="h-12 sm:text-base xs:text-sm  text-slate-700">
                      8 Beverley Road, London, United Kingdom, SW13 0LX
                    </p>
   
                  </div>
                </div>
              </div>
   
              <div className="2xl:w-[480px] xl:w-[384px] xl:h-[462px] lg:w-[296px] lg:h-[418px] md:w-[680px] md:h-[160px] sm:w-auto sm:h-[160px] xs:w-[296px] xs:h-[232px] flex lg:flex-col sm:flex-row xs:flex-col border lg:rounded-2xl sm:rounded-xl xs:rounded-lg overflow-x-hidden overflow-y-hidden">
              <Link href="https://www.google.com/maps/place/Media365+Limited/@23.768054,90.3560851,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c1e5280a3149:0x625fd2bcd25924aa!8m2!3d23.7680491!4d90.35866!16s%2Fg%2F11fkwcw9jx?entry=ttu" passHref={true}>
   
                <img
                  src="/assets/images/home/dhaka.webp"
                  alt="dhaka office"
                  className=" xl:h-[300px] lg:h-[256px]  lg:w-full sm:min-w-[240px] sm:h-[160px] xs:w-[296px] xs:h-28  rounded-t-md object-cover"
                />
                </Link>
                <div className="flex flex-col sm:gap-[18px] xs:gap-3 md:p-5 sm:p-6 xs:p-3 xl:h-[138px] lg:h-[162px] lg:min-w-full  md:min-w-[440px] sm:min-h-[160px] xs:h-[120px]  bg-slate-200">
                  <h1 className="inline-flex items-center font-bold lg:text-2xl sm:text-xl xs:text-lg">
                    Dhaka  {" "}
                  </h1>
                  
                  <div className=" flex gap-[10px]">
                  <img className=" w-6 h-6" src="/assets/images/home/location.png" alt="location" />
   
                    <p className=" sm:text-base xs:text-sm text-slate-700">
                      16-A/2 (3rd Floor), Ring Road,Mohammadpur Dhaka-1207 Bangladesh.
                    </p>
   
                  </div>
                </div>
              </div>
   
              <div className="2xl:w-[480px] xl:w-[384px] xl:h-[462px] lg:w-[296px] lg:h-[418px] md:w-[680px] md:h-[160px] sm:w-auto sm:h-[160px] xs:w-[296px] xs:h-[232px] flex lg:flex-col sm:flex-row xs:flex-col  lg:rounded-2xl sm:rounded-xl xs:rounded-lg overflow-x-hidden overflow-y-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.1997620850602!2d46.64417037620636!3d24.78861234812711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3147882ce6f%3A0xd319e8aa68c993ea!2s7259%20Jabal%20Ashaqir%2C%20As%20Sahafah%2C%20Riyadh%2013315%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sbd!4v1703825367063!5m2!1sen!2sbd"
                  width="100%"
                  height="324px"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="xl:h-[324px] lg:h-[256px] lg:w-full sm:w-[240px] sm:h-[160px] xs:h-28"
                ></iframe>
                {/* <img
                  src="/assets/images/home/london.png"
                  alt="Laptop"
                  className="h-[324px] w-full rounded-t-md object-cover"
                /> */}
                <div className="flex flex-col sm:gap-[18px] xs:gap-3  md:p-5 sm:p-6 xs:p-3 xl:h-[138px] lg:h-[162px] lg:min-w-full md:min-w-[440px] sm:min-h-[160px] xs:h-[120px] bg-slate-200 ">
                  <h1 className="inline-flex items-center font-bold lg:text-2xl sm:text-xl xs:text-lg">
                    Riyadh  {" "}
                  </h1>
                  <div className="flex gap-[10px]">
   
                    <img className=" w-6 h-6" src="/assets/images/home/location.png" alt="location" />
                    <p className=" sm:text-base xs:text-sm text-slate-700">
                      Eastern Ring Branch Rd, Ash Shuhada, Ghirnatah, Riyadh 13241, Saudi Arabia
                    </p>
   
                  </div>
                </div>
              </div>
   
              
   
            </div>
          </div>
        </div>
      </section>
    </>
    
    
  );
}

export default Offices;
