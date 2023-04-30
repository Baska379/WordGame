"use client";
import React from "react";
import Cricle from "./Cricle";
import { useAppSelector } from "@/app/useState";
const PartOne = () => {
  const { mnWords, mnIndex } = useAppSelector((state) => state.game2);
  const zone = "!!!";
  return (
    <div className="grid grid-rows-5 justify-center items-center gap-3">
      <Cricle
        color="bg-red-500/50 redCol"
        ids="red"
        zone="!!!"
        word={mnWords[mnIndex[0]]}
      />
      <Cricle
        color="bg-amber-500/50 amberCol"
        ids="amber"
        zone="!!!"
        word={mnWords[mnIndex[1]]}
      />
      <Cricle
        color="bg-lime-300/50 limaCol"
        ids="lime"
        zone="!!!"
        word={mnWords[mnIndex[2]]}
      />
      <Cricle
        color="bg-emerald-500/50 emeraldCol"
        ids="emerald"
        zone="!!!"
        word={mnWords[mnIndex[3]]}
      />
      <Cricle
        color="bg-purple-500/50 purpleCol"
        ids="purple"
        zone="!!!"
        word={mnWords[mnIndex[4]]}
      />
    </div>
  );
};

export default PartOne;
