"use client";
import React from "react";
import PartOne from "../components/Game2/PartOne";
import PartTwo from "../components/Game2/PartTwo";
import NextButton from "../components/Game2/NextButton";
import Canvas from "../components/Canvas";
import Providers from "../components/Providers";
import EndGame from "../components/Game2/EndGame";

const Game2 = () => {
  return (
    <Providers>
      <div>
        <div className="grid grid-rows-[70%_30%] w-full h-[100vh] ">
          <Canvas />
          <div className="mt-12 grid grid-cols-2 relative duration-500">
            <PartOne />
            <PartTwo />
            <EndGame />
          </div>
          <div className="">
            <NextButton />
          </div>
        </div>
      </div>
    </Providers>
  );
};

export default Game2;
