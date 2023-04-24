"use client";
import React from "react";
import Cricle from "./Cricle";

const PartTwo = () => {
  return (
    <div className="grid grid-rows-5 justify-center items-center gap-3">
      <Cricle color="bg-pink-500/50 pinkCol" />
      <Cricle color="bg-rose-500/50 roseCol" />
      <Cricle color="bg-sky-500/50 skyCol" />
      <Cricle color="bg-fuchsia-700/50 fuchsiaCol" />
      <Cricle color="bg-yellow-800/50 yellowCol" />
    </div>
  );
};

export default PartTwo;
