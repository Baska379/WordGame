"use client";
import { enToMnAction } from "@/app/GlobalRedux/EntoMnSlice";
import { useAppDispatch, useAppSelector } from "@/app/useState";

const SectionTwo = () => {
  const disPatch = useAppDispatch();
  const { nextButton, checkButton, askEnWords, askWords } = useAppSelector(
    (state) => state.enToMn
  );
  const check = () => {
    disPatch(enToMnAction.check());
  };
  const next = () => {
    disPatch(enToMnAction.handler1());
  };
  const askButton = () => {
    disPatch(enToMnAction.setAskWords(true));
    time();
  };
  const time = () => {
    setTimeout(() => {
      disPatch(enToMnAction.setAskWords(false));
    }, 5000);
  };
  return (
    <div className="smScreenMax:grid-cols-2 smScreenMax:grid-rows-2 duration-500 grid grid-rows-6 relative bg-yellow-500/30 shadow-[0_0_10px_1px_black] mt-3">
      <button disabled={nextButton} onClick={next} className=" mnCheckButton">
        Дараах
      </button>
      <button disabled={checkButton} onClick={check} className="mnCheckButton">
        Шалгах
      </button>
      <button onClick={askButton} className="mnCheckButton">
        Асуух
      </button>

      <div
        style={{ opacity: askWords ? "1" : "0" }}
        className="grid grid-rows-3 duration-500 smScreenMax:h-[7rem] smScreenMax:w-[10rem] smScreenMax:top-[130%] smScreenMax:gap-5 absolute text-center h-[20%] bg-slate-300/70 w-full top-[60%] left-0 translate-y-[-50%]  text-black font-bold
       "
      >
        <p>{askEnWords[0]}</p>
        <p>{askEnWords[1]}</p>
        <p>{askEnWords[2]}</p>
      </div>
    </div>
  );
};

export default SectionTwo;
