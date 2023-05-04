"use client";
import { enToMnAction } from "@/app/GlobalRedux/EntoMnSlice";
import { useAppDispatch, useAppSelector } from "@/app/useState";
import { useEffect } from "react";
const Output = () => {
  const disPatch = useAppDispatch();
  const { mnWord1, mnWord2, mnWord3 } = useAppSelector((state) => state.enToMn);
  useEffect(() => {
    disPatch(enToMnAction.handler1());
  }, []);
  const inputStyle: string =
    "bg-slate-900/30 relative font-bold  px-[0.5rem] shadow-[0_0_5px_1px_black] py-[0.2rem] m-auto w-[70%] text-black text-center smScreenMax:w-[95%]";
  return (
    <div className="grid grid-rows-3 items-center m-0 bg-yellow-100/30 shadow-[0_0_5px_3px_black]">
      <div className={inputStyle}>
        <strong className="absolute top-0 left-0 ">1</strong>
        {mnWord1.split(", ").map((el, index) => {
          let word = "";
          if (index === 0) word = el;
          return word;
        })}
      </div>
      <div className={inputStyle}>
        <strong className="absolute top-0 left-0 ">2</strong>
        {mnWord2.split(", ").map((el, index) => {
          let word = "";
          if (index === 0) word = el;
          return word;
        })}
      </div>
      <div className={inputStyle}>
        <strong className="absolute top-0 left-0 ">3</strong>
        {mnWord3.split(", ").map((el, index) => {
          let word = "";
          if (index === 0) word = el;
          return word;
        })}
      </div>
    </div>
  );
};

export default Output;
