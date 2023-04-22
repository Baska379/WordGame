"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../GlobalRedux/strore";

import { mainAction } from "../GlobalRedux/MainSlice";

const WordTable3 = () => {
  const disPatch = useDispatch<AppDispatch>();
  const main = useSelector((state: RootState) => state.main);

  useEffect(() => {
    if(main.duplicationTable3 === false){
      handler();
    }
    
  }, [main.duplicationTable3]);
  const handler = () => {
    disPatch(mainAction.handler3());
  };

  const setHandler = (el: string) => {
    disPatch(mainAction.setSendWord3(el));
  };
  const minusButton = function () {
    disPatch(mainAction.minusTable3());
  };
  return (
    <div className="grid grid-cols-2 gap-2 m-auto">
      <p className="group w-full relative rounded-xl p-1 bg-black text-center items-center text-white font-bold text-[1rem] italic overflow-hidden ease-in duration-500">
        {main.word3}
        <button
          className="minusButton group-hover:translate-x-[0.5rem]"
          onClick={minusButton}
        >
          -
        </button>
      </p>
      <input
        type="text"
        value={main.sendWord3}
        onChange={(el) => setHandler(el.target.value)}
      />
    </div>
  );
};

export default WordTable3;
