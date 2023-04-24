"use client";
import React from "react";
interface PropsType {
  color: string;
}
const Cricle = (props: PropsType) => {
  return (
    <div
      className={`text-white font-bold text-[1.1rem] w-[10rem] h-[4rem] flex gap-5 self-center justify-center rounded-[40%] text-center  items-center ${props.color}`}
    >
      granddaughter
    </div>
  );
};

export default Cricle;
