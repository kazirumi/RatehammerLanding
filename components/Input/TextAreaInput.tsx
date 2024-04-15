import React from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";
interface props{
    label:string,
    extraClasses?:string,
    placeholder:string,
    name:string,
    required?:boolean,
    register:any,
    error?:FieldError,
    errorMsg?:string
}

const TextAreaInput = ({label,placeholder,name,required=false,error,errorMsg,extraClasses,register}:props) => {
  return (
    <div className={twMerge(" relative flex flex-col font-century-gothic gap-2 ", (extraClasses && extraClasses)) }>
      <label htmlFor={name}>
        {label} {required && (<span className="text-red-600">&nbsp;*</span>)}
      </label>
      <textarea
        {...register(name)}
        name={name}
        // required={required}
        className={"py-3 px-4 placeholder-slate-400 placeholder:h-6 min-h-[136px] rounded-md border border-[#E2E8F0] focus:border focus:border-brand-purple-500 focus:outline-none "
                  }
        placeholder={placeholder}
      ></textarea>
      {errorMsg && (<span className="absolute -bottom-5 text-xs text-red-500 ml-4">{errorMsg}</span>)}

    </div>
  );
};

export default TextAreaInput;
