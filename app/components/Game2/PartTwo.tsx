"use client";
import React from "react";
import Cricle from "./Cricle";
import { useAppSelector } from "@/app/useState";

const PartTwo = () => {
  const { enWords, enIndex, partTwoDis } = useAppSelector(
    (state) => state.game2
  );
  const n: number[] = [0, 1, 2, 3, 4];
  const zone = "@@@";
  return (
    <div className="grid grid-rows-5 justify-center items-center gap-3">
      <Cricle
        color="bg-pink-500/50 pinkCol"
        ids="pink"
        zone={zone}
        num={`${enIndex[0]}`}
        word={enWords[enIndex[n[0]]]}
        disabled={partTwoDis[enIndex[n[0]]]}
      />
      <Cricle
        color="bg-rose-500/50 roseCol"
        ids="rose"
        zone={zone}
        num={`${enIndex[1]}`}
        word={enWords[enIndex[n[1]]]}
        disabled={partTwoDis[enIndex[n[1]]]}
      />
      <Cricle
        color="bg-sky-500/50 skyCol"
        ids="sky"
        zone={zone}
        num={`${enIndex[2]}`}
        word={enWords[enIndex[n[2]]]}
        disabled={partTwoDis[enIndex[n[2]]]}
      />
      <Cricle
        color="bg-fuchsia-700/50 fuchsiaCol"
        ids="fuchsia"
        zone={zone}
        num={`${enIndex[3]}`}
        word={enWords[enIndex[n[3]]]}
        disabled={partTwoDis[enIndex[n[3]]]}
      />
      <Cricle
        color="bg-yellow-800/50 yellowCol"
        ids="yellow"
        zone={zone}
        num={`${enIndex[4]}`}
        word={enWords[enIndex[n[4]]]}
        disabled={partTwoDis[enIndex[n[4]]]}
      />
    </div>
  );
};

export default PartTwo;
