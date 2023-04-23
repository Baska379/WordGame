"use client";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../GlobalRedux/strore";
import { useDispatch } from "react-redux";
import { mainAction } from "../GlobalRedux/MainSlice";
import { randomStr } from "../_utiles/randomString";
const Favourites = () => {
  const disPatch = useDispatch<AppDispatch>();
  const { favourite } = useSelector((state: RootState) => state.main);

  const favouriteRemove = function (index: number) {
    disPatch(mainAction.favouriteRemove(index));
  };
  return (
    <div className="mt-12 ">
      <ul className="font-bold text-[2rem] italic w-full flex flex-col">
        {favourite.map((el, index) => {
          const en: string[] = el.split("@@@");
          return (
            <li
              key={el + randomStr()}
              className="w-auto inline p-2 rounded-lg bg-slate-50/30"
            >
              {en[0]}{" "}
              <span className="text-[2rem] text-white m-0 p-0 h-[5px]">-</span>{" "}
              {en[1]}
              <span>
                <AiOutlineStar
                  onClick={() => favouriteRemove(index)}
                  className="cursor-pointer inline text-blue-500"
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favourites;
