"use client"

import React from "react";
import TextInput from "../Input/TextInput";
import TextAreaInput from "../Input/TextAreaInput";
import BaseButton from "../Buttons/BaseButton";
import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactUsSchema= z.object({
    full_name:z.string().min(1,{message:"Full name is required"}),
    message:z.string().min(1,{message:"Message is required"}),
    phone_number:z.string().min(1,{message:"Phone number is required"}).min(9,"Phone number should be 9 digit").refine((value)=>/^\d+$/.test(value),{message:"Phone number must be digit"}),
    email:z.string().min(1,{message:"Email is required"}).email("Email must be valid"),
    company_name:z.string().min(1,{message:"Company name is required"})
    
});

type formType= z.infer<typeof contactUsSchema>;

const ContactUs = () => {
  const { register, handleSubmit, reset ,formState:{errors}} = useForm<formType>(
    {mode:"all",
      resolver:zodResolver(contactUsSchema.required())},

  );
  // console.log(errors);
  return (
    <section className="bg-contact_us_bg bg-fixed ">
      <div className="container mx-auto flex gap-16 justify-center items-center xl:py-[72px] lg:py-14 sm:py-11 py-5  2xl:px-4 xl:px-8 sm:px-11 px-3 ">
        <div className="bg-white 2xl:w-[992px] xl:w-[1008px] p-8 flex flex-col gap-8">
          <div className=" flex flex-col justify-center lg:gap-4 sm:gap-4 gap-3 text-start">
            <h1 className=" 2xl:text-4xl 2xl:leading-[52px] lg:text-4xl sm:text-3xl text-2xl font-bold  text-slate-900">
              Contact us
            </h1>
            <p className="font-normal lg:text-lg  text-base font-century-gothic text-slate-800">
              In order to understand how our unique solution can help your
              business please fill in this contact form and we will respond to
              you as soon as possible.
            </p>
            <p className="font-normal lg:text-lg  text-base text-slate-800">
              You can also email us at{" "}
              <span className="text-brand-purple-500 underline cursor-pointer">
              enquiries@ratehammer.com
              </span>
            </p>
          </div>
          <div>
            <form autoComplete="off" onSubmit={handleSubmit((data)=>console.log(data))}>
              <div className="grid grid-cols-2 gap-6">
                <TextInput
                  register={register}
                  name={"full_name"}
                  placeholder="Enter full name"
                  required={true}
                  label="Full Name"
                  type="text"
                  errorMsg={errors.full_name?.message}
                  extraClasses=" sm:col-span-1 col-span-2"
                />
                <TextInput
                  register={register}
                  name={"company_name"}
                  placeholder="Enter company name"
                  required={true}
                  label="Company"
                  type="text"
                  errorMsg={errors.company_name?.message}
                  extraClasses=" sm:col-span-1 col-span-2"
                />
                <TextInput
                  register={register}
                  name={"email"}
                  placeholder="Enter business email address"
                  required={true}
                  label="Business Email Address"
                  type="text"
                  errorMsg={errors.email?.message}
                  extraClasses=" sm:col-span-1 col-span-2"
                />
                <TextInput
                  register={register}
                  name={"phone_number"}
                  placeholder="Enter phone number"
                  required={true}
                  label="Phone Number"
                  type="text"
                  errorMsg={errors.phone_number?.message}
                  extraClasses=" sm:col-span-1 col-span-2"
                />
                <TextAreaInput
                  register={register}
                  name={"message"}
                  placeholder="Write your message here"
                  required={true}
                  label="Message"
                  extraClasses=" col-span-2 max-h-[300px]"
                  errorMsg={errors.message?.message}
                />
                <div>
                  <BaseButton
                    type="submit"
                    btn_text="Submit"
                    width=" lg:w-[192px] w-[164px] "
                    height=" lg:h-[56px] h-[48px] "
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
