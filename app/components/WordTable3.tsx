"use client";
import React, { useEffect } from "react";
import { useAppDispatch , useAppSelector } from "../useState";
import { mainAction } from "../GlobalRedux/MainSlice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const WordTable3 = () => {
  const disPatch = useAppDispatch();
  const main = useAppSelector((state) => state.main);

  useEffect(() => {
    disPatch(mainAction.handler3());
  }, []);
  const favourite = function () {
    disPatch(mainAction.favouriteAdd(3));
  };
  const favouriteRemove = function () {
    disPatch(mainAction.favRemove({ word: main.word3, num: 3 }));
  };

  const setHandler = (el: string) => {
    disPatch(mainAction.setSendWord3(el));
  };
  const minusButton = function () {
    disPatch(mainAction.minusTable3());
  };
  return (
    <div className="grid grid-cols-2 gap-2 m-auto">
      <p className="group w-full relative rounded-xl p-1 bg-slate-100/70 text-center items-center text-slate-900/90 font-bold text-[1rem] italic overflow-hidden duration-500">
        {main.word3}
        <button
          className="minusButton group-hover:translate-x-[0.5rem] text-black"
          onClick={minusButton}
        >
          -
        </button>
        {main.fav3 ? (
          <AiOutlineStar
            onClick={favourite}
            className="favourite group-hover:translate-y-[0.3rem] group-hover:translate-x-[-50%] text-black"
          />
        ) : (
          <AiFillStar
            onClick={favouriteRemove}
            className="favourite group-hover:translate-y-[0.3rem] group-hover:translate-x-[-50%] text-black"
          />
        )}
      </p>
      <input
        type="text"
        value={main.sendWord3}
        onChange={(el) => setHandler(el.target.value)}
      />
    </div>
  );
};

export default WordTable3;
