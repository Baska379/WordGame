"use client";

import React, { useEffect, useRef, useState } from "react";
// Icons
import {GiCheckMark} from "react-icons/gi"
import {VscError} from "react-icons/vsc"
// Components
import WordTable1 from "./WordTable1";
import WordTable2 from "./WordTable2";
import WordTable3 from "./WordTable3";
import Ask from "./Ask";

const FirstPage = () => {
  const [tableNumber, setTableNumber] = useState<number>(1);
  const [tableNumber2, setTableNumber2] = useState<number>(2);
  const [tableNumber3, setTableNumber3] = useState<number>(3);
  const [askWord, setAskWord] = useState<string>("");
  const [askWord2, setAskWord2] = useState<string>("");
  const [askWord3, setAskWord3] = useState<string>("");
  const [tableBoolean, setTableBoolean] = useState<boolean>(false);
  const [tableBoolean2, setTableBoolean2] = useState<boolean>(false);
  const [addButton, setAddButton] = useState<boolean>(true);
  const [addButton1, setAddButton1] = useState<boolean>(true);
  const [sendWord1, setSendWord1] = useState<string>("");
  const [sendWord2, setSendWord2] = useState<string>("");
  const [sendWord3, setSendWord3] = useState<string>("");
  const [findEn, setfindEn] = useState<string | null>(null);
  const [findEn2, setfindEn2] = useState<string | null>(null);
  const [findEn3, setfindEn3] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [nextBoolean, setNextBoolean] = useState<boolean>(false);
  const [checkBoolean, setcheckBoolean] = useState<boolean>(false);
  const [list__word, setList__Word] = useState<string[]>([]);
  const wordTableRef = useRef(null);
  const wordTable2Ref = useRef(null);
  const wordTable3Ref = useRef(null);
  useEffect(() => {
    handler();
  }, []);

  const handler = () => {
    // wordTableRef.current?.handler();
    // wordTable2Ref.current?.table2();
    // wordTable3Ref.current?.table3();
    setcheckBoolean(false);
    setNextBoolean(true);
  };
  return (
    <div className="border-solid mt-[3rem] z-0 h-2/4 grid grid-cols-[28rem_2rem_3rem_1fr] grid-rows-[10rem_5rem] gap-3 justify-center relative bg-neutral-500/50 shadow-[0_0_20px_5px_rgba(0,0,0,1)] rounded-lg">
      <div className="grid grid-rows-3 gap-5">
        <WordTable1
          ref={wordTableRef}
          addButton={addButton}
          setAddButton={setAddButton}
          setTableBoolean={setTableBoolean}
          setSendWord1={setSendWord1}
          sendWord1={sendWord1}
          setfindEn={setfindEn}
          setAskWord={setAskWord}
        />
                {tableBoolean ? (
          <WordTable2
            ref={wordTable2Ref}
            setTableBoolean2={setTableBoolean2}
            addButton1={addButton1}
            setAddButton1={setAddButton1}
            setTableBoolean={setTableBoolean}
            setAddButton={setAddButton}
            setSendWord2={setSendWord2}
            sendWord2={sendWord2}
            setfindEn2={setfindEn2}
            setAskWord2={setAskWord2}
          />
        ) : (
          ""
        )}
                {tableBoolean2 ? (
          <WordTable3
            ref={wordTable3Ref}
            setTableBoolean2={setTableBoolean2}
            setAddButton1={setAddButton1}
            setSendWord3={setSendWord3}
            sendWord3={sendWord3}
            setfindEn3={setfindEn3}
            setAskWord3={setAskWord3}
          />
        ) : (
          ""
        )}
      </div>
      <div>
      <p className="text-base text-white text-center bg-[green] p-1 rounded-lg font-bold">{count}</p>
      </div>
      <div className="m-0 relative">
        <GiCheckMark
          className="text-[2rem] bg-slate-500 rounded-lg p-1 text-white absolute left-0 top-0"
          style={{ opacity: success ? "1" : "0" }}
        />
        <VscError className="absolute top-0 left-0 text-red-500 text-[2rem] bg-slate-500 rounded-lg" 
        style={{ opacity: error ? "1" : "0" }} 
        />

      </div>
      <div className="row-span-2">
        {list__word.map((el, index) => {
          const word: string[] = el.split("-");
          return (
            <p key={el + index.toString()} className="word__list">
              <span className="en">{word[0].toLowerCase()}</span>
              <span className="mn">{word[1].toLowerCase()}</span>
            </p>
          );
        })}
      </div>
          <div className="grid grid-cols-4">
        
        <button onClick={handler} className="bg-teal-500 m-auto px-5 py-1 text-center rounded-t-lg" disabled={nextBoolean}>
          next
        </button>
        <button className="bg-emerald-500 m-auto px-5 py-1 text-center rounded-t-lg" 
        // onClick={sendCheck} 
        disabled={checkBoolean}>
          check
        </button>
        <Ask askWord={askWord} askWord2={askWord2} tableBoolean={tableBoolean} tableBoolean2={tableBoolean2} askWord3={askWord3}/>
      
          </div>
    </div>
  );
};

export default FirstPage;
