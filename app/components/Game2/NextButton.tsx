"use client";
import { game2Action } from "@/app/GlobalRedux/game2Slice";
import { useAppDispatch } from "@/app/useState";
import React from "react";
const NextButton = () => {
  const disPatch = useAppDispatch();
  const next = () => {
    disPatch(game2Action.zero());
    disPatch(game2Action.getGame2AllWords());
    disPatch(game2Action.setEndBoolean(false));
  };
  return (
    <div className="bg-white smScreenMax:top-[100%] smScreenMax:text-[15px] m-auto absolute top-[90%] left-[50%] translate-x-[-50%]">
      <button
        className="cursor-pointer m-auto px-5 py-2 bg-fuchsia-700/70 font-bold"
        onClick={next}
      >
        Next
      </button>
    </div>
  );
};

export default NextButton;
