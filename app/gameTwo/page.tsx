"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../GlobalRedux/strore";
import PartOne from "../components/Game2/PartOne";
import PartTwo from "../components/Game2/PartTwo";
import NextButton from "../components/Game2/NextButton";
const Game2 = () => {
  return (
    <Provider store={store}>
      <div className="grid grid-rows-[70%_30%] bg-black w-full h-full">
        <div className="mt-12 grid grid-cols-2 h-[70%]">
          <PartOne />
          <PartTwo />
        </div>
        <div className="h-[30%]">
          <NextButton />
        </div>
      </div>
    </Provider>
  );
};

export default Game2;
