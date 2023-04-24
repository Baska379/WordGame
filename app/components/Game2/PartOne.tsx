"use client";
import React from "react";
import Cricle from "./Cricle";

const PartOne = () => {
  return (
    <div className="grid grid-rows-5 justify-center items-center gap-3">
      <Cricle color="bg-red-500/50 redCol" />
      <Cricle color="bg-amber-500/50 amberCol" />
      <Cricle color="bg-lime-300/50 limaCol" />
      <Cricle color="bg-emerald-500/50 emeraldCol" />
      <Cricle color="bg-purple-500/50 purpleCol" />
    </div>
  );
};

export default PartOne;
