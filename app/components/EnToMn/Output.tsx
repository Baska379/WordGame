"use client";

import { enToMnAction } from "@/app/GlobalRedux/EntoMnSlice";
import { useAppDispatch, useAppSelector } from "@/app/useState";
import { useEffect } from "react";

const Output = () => {
  const disPatch = useAppDispatch();
  const { mnWord1 } = useAppSelector((state) => state.enToMn);
  useEffect(() => {
    disPatch(enToMnAction.handler1());
  }, []);
  return (
    <div className="grid grid-rows-3 items-center m-0">
      <div className="bg-black relative px-[0.5rem] py-[0.2rem] m-auto w-[70%] text-white text-center">
        <strong className="absolute top-0 left-0 ">1</strong>
        {mnWord1}
      </div>
      <div className="bg-black relative px-[0.5rem] py-[0.2rem] m-auto w-[70%] text-white text-center">
        <strong className="absolute top-0 left-0 ">2</strong>
        ddddddddddd
      </div>
      <div className="bg-black relative px-[0.5rem] py-[0.2rem] m-auto w-[70%] text-white text-center">
        <strong className="absolute top-0 left-0 ">3</strong>
        ddddddddddddd
      </div>
    </div>
  );
};

export default Output;
