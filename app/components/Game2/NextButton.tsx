"use client";
import { game2Action } from "@/app/GlobalRedux/game2Slice";
import { useAppDispatch } from "@/app/useState";
import React from "react";
const NextButton = () => {
  const disPatch = useAppDispatch();
  const next = () => {
    disPatch(game2Action.zero());
    disPatch(game2Action.getGame2AllWords());
  };
  return (
    <div className="bg-white m-auto">
      <button className="cursor-pointer m-auto" onClick={next}>
        Hello
      </button>
    </div>
  );
};

export default NextButton;
