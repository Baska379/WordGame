"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/strore";
import { askfindWord, askfindWord2, askfindWord3 } from "../_utiles/check";
const Ask = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [findWord, setFindWord] = useState<string>("");
  const [findWord2, setFindWord2] = useState<string>("");
  const [findWord3, setFindWord3] = useState<string>("");
  const main = useSelector((state: RootState) => state.main);
  const find = function () {
    setFindWord(askfindWord(main.askWord));
    if (main.tableBoolean) {
      setFindWord2(askfindWord2(main.askWord2));
    }
    if (main.tableBoolean2) {
      setFindWord3(askfindWord3(main.askWord3));
    }
    setVisible(false);
    time();
  };
  const time = function () {
    setTimeout(() => {
      setVisible(true);
    }, 3000);
  };
  return (
    <button
      className="bg-purple-700 col-span-2 relative overflow-visible m-auto px-5 py-1 text-center rounded-t-lg"
      onClick={find}
    >
      <span
        className="hiddenSpan text-white bg-black h-8 top-12 z-30"
        style={{
          opacity: visible ? "0" : "1",
          width: `${findWord.length + 1}vmax`,
        }}
      >
        1. {findWord}
      </span>
      {main.tableBoolean ? (
        <span
          className=""
          style={{
            opacity: visible ? "0" : "1",
            width: `${findWord2.length + 1}vmax`,
          }}
        >
          2. {findWord2}
        </span>
      ) : (
        ""
      )}
      {main.tableBoolean2 ? (
        <span
          className=""
          style={{
            opacity: visible ? "0" : "1",
            width: `${findWord3.length + 1}vmax`,
          }}
        >
          3. {findWord3}
        </span>
      ) : (
        ""
      )}
      Ask
    </button>
  );
};

export default Ask;
