"use client";
import React, { useEffect } from "react";
import { mainAction } from "../GlobalRedux/MainSlice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useAppDispatch , useAppSelector } from "../useState";

const WordTable = () => {
  const disPatch = useAppDispatch();
  const main = useAppSelector((state) => state.main);

  useEffect(() => {
    disPatch(mainAction.handler2());
  }, []);

  const favourite = function () {
    disPatch(mainAction.favouriteAdd(2));
  };
  const favouriteRemove = function () {
    disPatch(mainAction.favRemove({ word: main.word2, num: 2 }));
  };

  const setHandler = (el: string) => {
    disPatch(mainAction.setSendWord2(el));
  };
  function addHandler() {
    disPatch(mainAction.addTable3());
  }
  function minusHandler() {
    disPatch(mainAction.minusTable2());
  }
  return (
    <div className="grid grid-cols-2 gap-2 m-auto">
      <p className="group w-full relative rounded-xl p-1 bg-slate-100/70 text-center items-center text-slate-900/90 font-bold text-[1rem] italic overflow-hidden ease-in duration-500">
        {main.word2}
        <button
          className="minusButton group-hover:translate-x-[0.5rem] text-black"
          onClick={minusHandler}
        >
          -
        </button>
        {main.addButton2 ? (
          <button
            className="addButton group-hover:translate-x-[-0.3rem]"
            onClick={addHandler}
          >
            +
          </button>
        ) : (
          ""
        )}
        {main.fav2 ? (
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
        value={main.sendWord2}
        onChange={(el) => setHandler(el.target.value)}
      />
    </div>
  );
};

export default WordTable;
