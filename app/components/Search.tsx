"use client";
import React, { useState } from "react";
import { getAllEnWords, getAllMnWords } from "../_utiles/check";
import { randomStr } from "../_utiles/randomString";

const Search = () => {
  const [enWord1, setenWord1] = useState<string[]>(getAllEnWords().all);
  const [mnWord1, setmnWord1] = useState<string[]>(getAllMnWords().all);
  const [listBoolean, setListBoolean] = useState<boolean>(true);
  const [findWords1, setFindWords1] = useState<string[]>([]);
  const search = function (el: any) {
    el.preventDefault();
    setFindWords1([]);
    if (el.target.value.length > 0) {
      setListBoolean(false);
      setFindWords1(
        enWord1.map((elem: string, i: number) => {
          let index: number = elem.search(el.target.value);

          let index2: number = 0;
          if (mnWord1[i] !== undefined) {
            index2 = mnWord1[i].search(el.target.value);
          }
          if (index !== -1 || index2 !== -1) {
            return elem + " - " + mnWord1[i];
          }
          return "";
        })
      );
    } else {
      setFindWords1([]);
      setListBoolean(true);
    }
  };

  return (
    <div className="flex-1 relative ">
      <div className="">
        <input
          type="text"
          placeholder="Search here"
          className="shadow-none"
          onChange={(el) => search(el)}
        />
      </div>
      <div
        className="absolute font-bold top-12 right-0 h-[28rem] w-[100%] bg-slate-100/50 overflow-auto text-black z-50"
        style={{ display: listBoolean ? "none" : "block" }}
      >
        <ul className="ml-2">
          {findWords1.map((el, i) => {
            if (el === " - " + undefined) {
              return "";
            }
            return <li key={el + randomStr() + i}>{el.toLowerCase()}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Search;
