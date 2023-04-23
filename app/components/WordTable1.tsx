"use client";
import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { AppDispatch, RootState } from "../GlobalRedux/strore";
import { mainAction } from "../GlobalRedux/MainSlice";
import {AiFillStar , AiOutlineStar} from "react-icons/ai"

const WordTable1 = () => {
  const disPatch = useDispatch<AppDispatch>();
  const main = useSelector((state: RootState) => state.main);
  useEffect(() => {
      disPatch(mainAction.handler1())
  }, []);
  // favourite
  const favourite = function (){
    disPatch(mainAction.favouriteAdd(main.word1))

  }
  const favouriteRemove = function (){
     
  }

  const setHandler = (el: string) => {
    disPatch(mainAction.setSendWord1(el));
  };
  const addHandler = function () {
    disPatch(mainAction.addTable2());
  };
  return (
    <div className="grid grid-cols-2 gap-2 m-auto">
      <p className="group w-full relative rounded-xl p-1 bg-slate-100/70 text-center items-center overflow-hidden text-slate-900/90 font-bold text-[1rem] italic ease-in duration-500">
        {main.word1}
        {main.addButton ? (
          <button
            className="addButton group-hover:translate-x-[-0.3rem] text-black"
            onClick={addHandler}
          >
            +
          </button>
        ) : (
          ""
        )}
        {main.fav1 ? <AiOutlineStar onClick={favourite} className="favourite group-hover:translate-y-[0.3rem] group-hover:translate-x-[-50%] text-black"/> : <AiFillStar onClick={favouriteRemove} className="favourite group-hover:translate-y-[0.3rem] group-hover:translate-x-[-50%] text-black"/>}
      
      
      </p>
      <input
        type="text"
        value={main.sendWord1}
        onChange={(el) => setHandler(el.target.value)}
      />
    </div>
  );
};

export default WordTable1;
