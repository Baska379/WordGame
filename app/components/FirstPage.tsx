"use client";
import React, { useEffect } from "react";
// Icons
import { GiCheckMark } from "react-icons/gi";
import { VscError } from "react-icons/vsc";
// Components
import WordTable1 from "./WordTable1";
import WordTable2 from "./WordTable2";
import WordTable3 from "./WordTable3";
import Ask from "./Ask";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../GlobalRedux/strore";
import { mainAction } from "../GlobalRedux/MainSlice";

const FirstPage = () => {
  const disPatch = useDispatch<AppDispatch>();
  const main = useSelector((state: RootState) => state.main);
  const time = () => {
    setTimeout(() => {
      disPatch(mainAction.setSuccess(false));
      disPatch(mainAction.setError(false));
    }, 2000);
  };
  useEffect(() => {
    if (main.error || main.success) {
      time();
    }
  }, [main.success, main.error]);
  const handler = () => {
    disPatch(mainAction.setNextBoolean(true));
    disPatch(mainAction.setCheckBoolean(false));
    disPatch(mainAction.handler1());
    disPatch(mainAction.handler2());
    disPatch(mainAction.handler3());
  };

  const sendCheck = () => {
    disPatch(mainAction.sendCheck());
  };

  return (
    <div className="border-solid mt-[3rem] z-0 h-2/4 grid grid-cols-[28rem_2rem_3rem_1fr] grid-rows-[10rem_5rem] gap-3 justify-center relative bg-neutral-500/50 shadow-[0_0_20px_5px_rgba(0,0,0,1)] rounded-lg tall:grid-cols-[28rem_2rem_3rem] tall:grid-rows-[10rem_5rem_20rem]" >
      <div className="grid grid-rows-3 gap-5">
        <WordTable1 />
        {main.tableBoolean ? <WordTable2 /> : ""}
        {main.tableBoolean2 ? <WordTable3 /> : ""}
      </div>
      <div>
        <p className="text-base text-white text-center bg-[green] p-1 rounded-lg font-bold">
          {main.count}
        </p>
      </div>
      <div className="m-0 relative">
        <GiCheckMark
          className="text-[2rem] bg-slate-500 rounded-lg p-1 text-white absolute left-0 top-0"
          style={{ opacity: main.success ? "1" : "0" }}
        />
        <VscError
          className="absolute top-0 left-0 text-red-500 text-[2rem] bg-slate-500 rounded-lg"
          style={{ opacity: main.error ? "1" : "0" }}
        />
      </div>
      <div className="row-span-2 tall:absolute tall:left-0 tall:top-[20rem]">
        {main.list__word.map((el, index) => {
          const word: string[] = el.split("-");
          return (
            <p key={el + index.toString()} className="font-bold">
              <span className="text-black bg-white rounded-md">
                {word[0].toLowerCase()}{" "}
              </span>
              <span className="text-white bg-black ml-2 rounded-md">
                {word[1].toLowerCase()}
              </span>
            </p>
          );
        })}
      </div>
      <div className="grid grid-cols-4">
        <button
          onClick={handler}
          className="bg-teal-700 m-auto px-5 py-1 text-center rounded-t-lg disabled:bg-teal-200"
          disabled={main.nextBoolean}
        >
          next
        </button>
        <button
          className="bg-emerald-700 m-auto px-5 py-1 text-center rounded-t-lg disabled:bg-emerald-200"
          onClick={sendCheck}
          disabled={main.checkBoolean}
        >
          check
        </button>
        <Ask />
      </div>
    </div>
  );
};

export default FirstPage;
