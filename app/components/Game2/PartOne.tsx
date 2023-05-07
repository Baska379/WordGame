"use client";
import React, { useEffect } from "react";
import Cricle from "./Cricle";
import { useAppDispatch, useAppSelector } from "@/app/useState";
import { game2Action } from "@/app/GlobalRedux/game2Slice";
const PartOne = () => {
  const { mnWords, mnIndex, partOneDis } = useAppSelector(
    (state) => state.game2
  );
  const disPatch = useAppDispatch();
  useEffect(() => {
    disPatch(game2Action.getGame2AllWords());
  }, []);
  const zone = "!!!";
  return (
    <div className="grid grid-rows-5 justify-center items-center gap-3">
      <Cricle
        color="bg-red-500/50 redCol"
        ids="red"
        zone={zone}
        num={`${mnIndex[0]}`}
        word={mnWords[mnIndex[0]]}
        disabled={partOneDis[mnIndex[0]]}
      />
      <Cricle
        color="bg-amber-500/50 amberCol"
        ids="amber"
        zone={zone}
        num={`${mnIndex[1]}`}
        word={mnWords[mnIndex[1]]}
        disabled={partOneDis[mnIndex[1]]}
      />
      <Cricle
        color="bg-lime-300/50 limaCol"
        ids="lime"
        zone={zone}
        num={`${mnIndex[2]}`}
        word={mnWords[mnIndex[2]]}
        disabled={partOneDis[mnIndex[2]]}
      />
      <Cricle
        color="bg-emerald-500/50 emeraldCol"
        ids="emerald"
        zone={zone}
        num={`${mnIndex[3]}`}
        word={mnWords[mnIndex[3]]}
        disabled={partOneDis[mnIndex[3]]}
      />
      <Cricle
        color="bg-purple-500/50 purpleCol"
        ids="purple"
        zone={zone}
        num={`${mnIndex[4]}`}
        word={mnWords[mnIndex[4]]}
        disabled={partOneDis[mnIndex[4]]}
      />
    </div>
  );
};

export default PartOne;
