import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";
interface props{
    label:string,
    type:string,
    placeholder:string,
    name:string,
    required?:boolean,
    register:any,
    error?:FieldError,
    errorMsg?:string,
    extraClasses:string
}

const TextInput = ({label,type="text",placeholder,name,required=false,error,errorMsg,register,extraClasses=""}:props) => {
  return (
    <div className={twMerge(" relative flex flex-col font-century-gothic gap-2 ",(extraClasses && extraClasses))}>
      <label htmlFor={name} className=" sm:text-base text-sm">
        {label} {required && (<span className="text-red-600">&nbsp;*</span>)}
      </label>
      <input
        {...register(name)}
        name={name}
        // required={required}
        className="sm:text-base text-sm py-3 px-4 placeholder-slate-400 placeholder:h-6 rounded-md border border-[#E2E8F0] focus:border focus:border-brand-purple-500 focus:outline-none"
        type={type}
        placeholder={placeholder}
      ></input>
      {errorMsg && (<span className="absolute -bottom-5 text-xs text-red-500 ml-4">{errorMsg}</span>)}
    </div>
  );
};

export default TextInput;
