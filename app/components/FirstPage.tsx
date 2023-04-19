"use client";

import React, { useEffect, useRef, useState } from "react";
import WordTable1 from "./WordTable1";

const FirstPage = () => {
  const [tableNumber, setTableNumber] = useState<number>(1);
  const [tableNumber2, setTableNumber2] = useState<number>(2);
  const [tableNumber3, setTableNumber3] = useState<number>(3);
  const [askWord, setAskWord] = useState<string>("");
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
    <div className="border-solid border-black border-2 h-2/4 grid grid-cols-[28rem_2rem_3rem_1fr] gap-3 justify-center relative overflow-hidden">
      <div>
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
      </div>
      <div>2gfgggdgd</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
};

export default FirstPage;
