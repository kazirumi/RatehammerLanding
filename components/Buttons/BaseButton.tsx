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
  return <button type={type} className={twMerge("bg-brand-purple-500 px-6 py-4 text-base text-white "+height+ " "+width,btn_color) }>{btn_text}</button>;
};

export default BaseButton;
