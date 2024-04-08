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
      <div className="container mx-auto flex gap-16 justify-center items-center py-[72px]  px-4 ">
        <div className="bg-white w-[992px] p-8 flex flex-col gap-8">
          <div className=" flex flex-col justify-center lg:gap-4 sm:gap-4 xs:gap-3 text-start">
            <h1 className="text-5xl 2xl:text-4xl 2xl:leading-[52px] lg:text-4xl sm:text-3xl xs:text-2xl font-bold  text-slate-900">
              Contact us
            </h1>
            <p className="font-normal lg:text-lg sm:text-xl xs:text-base text-slate-800">
              In order to understand how our unique solution can help your
              business please fill in this contact form and we will respond to
              you as soon as possible.
            </p>
            <p className="font-normal lg:text-lg sm:text-xl xs:text-base text-slate-800">
              You can also email us at{" "}
              <span className="text-brand-purple-500 underline cursor-pointer">
                enquiries@baskefy.com
              </span>
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit((data)=>console.log(data))}>
              <div className="grid grid-cols-2 gap-6">
                <TextInput
                  register={register}
                  name={"full_name"}
                  placeholder="Enter full name"
                  required={true}
                  label="Full Name"
                  type="text"
                  errorMsg={errors.full_name?.message}
                />
                <TextInput
                  register={register}
                  name={"company_name"}
                  placeholder="Enter company name"
                  required={true}
                  label="Company"
                  type="text"
                  errorMsg={errors.company_name?.message}
                />
                <TextInput
                  register={register}
                  name={"email"}
                  placeholder="Enter business email address"
                  required={true}
                  label="Business Email Address"
                  type="text"
                  errorMsg={errors.email?.message}
                />
                <TextInput
                  register={register}
                  name={"phone_number"}
                  placeholder="Enter phone number"
                  required={true}
                  label="Phone Number"
                  type="text"
                  errorMsg={errors.phone_number?.message}
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
                    width="w-[192px]"
                    height="h-[56px]"
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
