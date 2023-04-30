"use client";
import React from "react";
import Cricle from "./Cricle";
import { useAppSelector } from "@/app/useState";

const PartTwo = () => {
  const { enWords, enIndex } = useAppSelector((state) => state.game2);
  return (
    <div className="grid grid-rows-5 justify-center items-center gap-3">
      <Cricle
        color="bg-pink-500/50 pinkCol"
        ids="pink"
        zone="@@@"
        word={enWords[enIndex[0]]}
      />
      <Cricle
        color="bg-rose-500/50 roseCol"
        ids="rose"
        zone="@@@"
        word={enWords[enIndex[1]]}
      />
      <Cricle
        color="bg-sky-500/50 skyCol"
        ids="sky"
        zone="@@@"
        word={enWords[enIndex[2]]}
      />
      <Cricle
        color="bg-fuchsia-700/50 fuchsiaCol"
        ids="fuchsia"
        zone="@@@"
        word={enWords[enIndex[3]]}
      />
      <Cricle
        color="bg-yellow-800/50 yellowCol"
        ids="yellow"
        zone="@@@"
        word={enWords[enIndex[4]]}
      />
    </div>
  );
};

export default PartTwo;
