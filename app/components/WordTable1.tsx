"use client";
import React, { useEffect, useState } from "react";
import { mainAction } from "../GlobalRedux/MainSlice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../useState";
const WordTable1 = () => {
  const disPatch = useAppDispatch();
  const main = useAppSelector((state) => state.main);
  useEffect(() => {
    disPatch(mainAction.handler1());
  }, []);
  const favourite = function () {
    disPatch(mainAction.favouriteAdd(1));
  };
  const favouriteRemove = function () {
    disPatch(mainAction.favRemove({ word: main.word1, num: 1 }));
  };

  const setHandler = (el: string) => {
    disPatch(mainAction.setSendWord1(el));
  };
  const addHandler = function () {
    disPatch(mainAction.addTable2());
  };

  return (
    <div className="grid grid-cols-2 gap-2 m-auto">
      <p className="group w-full smScreenMax:text-[15px] smScreenMax:w-[180px] relative rounded-xl p-1 bg-slate-100/70 text-center items-center overflow-hidden text-slate-900/90 font-bold text-[1rem] italic ease-in duration-500">
        {main.word1}
        {main.addButton ? (
          <button
            className="addButton smScreenMax:bottom-[1rem] group-hover:translate-x-[-0.3rem] text-black"
            onClick={addHandler}
          >
            +
          </button>
        ) : (
          ""
        )}
        {main.fav1 ? (
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
        className="smScreenMax:text-[15px] smScreenMax:w-[180px]"
        value={main.sendWord1}
        onChange={(el) => setHandler(el.target.value)}
      />
    </div>
  );
};

export default WordTable1;
