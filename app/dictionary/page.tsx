"use client";
import React, { useState } from "react";
import { getAllEnWords, getAllMnWords } from "../_utiles/check";
import { randomStr } from "../_utiles/randomString";
const Dictionary = () => {
  const [page1, setPage1] = useState<boolean>(true);
  const [page2, setPage2] = useState<boolean>(false);
  const [page3, setPage3] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [nextButton, setNextButton] = useState<boolean>(true);
  const [backButton, setBackButton] = useState<boolean>(false);
  const next = () => {
    setPageNumber(2);
    setBackButton(true);
    setPage1(false);
    setPage2(true);
    if (pageNumber === 2) {
      setPage3(true);
      setPage2(false);
      setPageNumber(3);
      setNextButton(false);
    }
  };
  const back = () => {
    if (pageNumber === 2) {
      setBackButton(false);
      setPage2(false);
      setPage1(true);
      setPageNumber(1);
    }
    if (pageNumber === 3) {
      setPage3(false);
      setPage2(true);
      setPageNumber(2);
      setNextButton(true);
    }
  };
  return (
    <div className="  dictionary w-full z-0 h-full relative overflow-auto flex bg-[url('./img/dictionary.jpg')] bg-cover bg-no-repeat bg-center bg-scroll">
      {page1 ? (
        <>
          <div className="mt-10 text-white font-bold text-xl smScreenMax:text-[14px]">
            <ul>
              {getAllEnWords()
                .en1.split("\n")
                .map((el, index) => (
                  <li
                    key={el + randomStr()}
                    className="bg-green-300/30 rounded-md mt-1"
                  >
                    {index + 1}: {el.toLowerCase()}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-10 text-white font-bold text-xl smScreenMax:text-[14px]">
            <ul>
              {getAllMnWords()
                .mn1.split("\n")
                .map((el, index) => (
                  <li
                    key={el + randomStr()}
                    className="rounded-md mt-1 bg-amber-500/30"
                  >
                    {index + 1}: {el.toLowerCase()}
                  </li>
                ))}
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
      {page2 ? (
        <>
          <div className="mt-10 text-white font-bold text-xl smScreenMax:text-[14px]">
            <ul>
              {getAllEnWords()
                .en2.split("\n")
                .map((el, index) => (
                  <li
                    key={el + randomStr()}
                    className="bg-green-300/30 rounded-md mt-1"
                  >
                    {index + 1}: {el.toLowerCase()}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-10 text-white font-bold text-xl smScreenMax:text-[14px]">
            <ul>
              {getAllMnWords()
                .mn2.split("\n")
                .map((el, index) => (
                  <li
                    key={el + randomStr()}
                    className="rounded-md mt-1 bg-amber-500/30"
                  >
                    {index + 1}: {el.toLowerCase()}
                  </li>
                ))}
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
      {page3 ? (
        <>
          <div className="mt-10 text-white font-bold text-xl smScreenMax:text-[14px]">
            <ul>
              {getAllEnWords()
                .en3.split("\n")
                .map((el, index) => (
                  <li
                    key={el + randomStr()}
                    className="bg-green-300/30 rounded-md mt-1"
                  >
                    {index + 1}: {el.toLowerCase()}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-10 text-white font-bold text-xl smScreenMax:text-[14px]">
            <ul>
              {getAllMnWords()
                .mn3.split("\n")
                .map((el, index) => (
                  <li
                    key={el + randomStr()}
                    className="rounded-md mt-1 bg-amber-500/30"
                  >
                    {index + 1}: {el.toLowerCase()}
                  </li>
                ))}
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
      <button
        onClick={next}
        style={{ display: nextButton ? "block" : "none" }}
        className="fixed bottom-0 font-bold right-0 rounded-lg bg-slate-50/90 px-4 py-1"
      >
        Next Page
      </button>
      <button
        onClick={back}
        style={{ display: backButton ? "block" : "none" }}
        className="fixed bottom-0 font-bold left-0 rounded-lg bg-slate-50/50 px-4 py-1"
      >
        Back Page {pageNumber - 1}
      </button>
    </div>
  );
};

export default Dictionary;
