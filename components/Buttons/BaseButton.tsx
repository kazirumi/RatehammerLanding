import React from "react";
import { twMerge } from "tailwind-merge";

type buttonProps = {
  btn_text: string;
  btn_color?: string;
  height: string;
  width: string;
  type?:'button'|'submit'|'reset'
};
const BaseButton = ({ btn_text, btn_color, height, width,type="button" }: buttonProps) => {
  return <button type={type} className={twMerge("bg-brand-purple-500 px-3 sm:px-4 lg:px-6 py-2 lg:py-4 sm:py-3 sm:text-base text-sm text-white "+height+ " "+width,btn_color) }>{btn_text}</button>;
};

export default BaseButton;
