import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
interface props{
    label:string,
    type:string,
    placeholder:string,
    name:string,
    required?:boolean,
    register:any,
    error?:FieldError,
    errorMsg?:string
}

const TextInput = ({label,type="text",placeholder,name,required=false,error,errorMsg,register}:props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>
        {label} {required && (<span className="text-red-600">&nbsp;*</span>)}
      </label>
      <input
        {...register(name)}
        name={name}
        // required={required}
        className="py-3 px-4 placeholder-slate-400 placeholder:h-6 rounded-md border border-[#E2E8F0] focus:border focus:border-brand-purple-500 focus:outline-none"
        type={type}
        placeholder={placeholder}
      ></input>
      {errorMsg && (<span className="text-xs text-red-500 ml-4">{errorMsg}</span>)}
    </div>
  );
};

export default TextInput;
