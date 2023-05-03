"use client";
import { enToMnAction } from "@/app/GlobalRedux/EntoMnSlice";
import { useAppDispatch, useAppSelector } from "@/app/useState";

const SectionTwo = () => {
  const disPatch = useAppDispatch();
  const { nextButton, checkButton, askEnWords } = useAppSelector(
    (state) => state.enToMn
  );
  const check = () => {
    disPatch(enToMnAction.check());
  };
  const next = () => {
    disPatch(enToMnAction.handler1());
  };
  return (
    <div className="grid grid-rows-6 relative bg-yellow-500/30 shadow-[0_0_10px_1px_black] mt-3">
      <button disabled={nextButton} onClick={next} className=" mnCheckButton">
        Дараах
      </button>
      <button disabled={checkButton} onClick={check} className="mnCheckButton">
        Шалгах
      </button>
      <button disabled={checkButton} onClick={check} className="mnCheckButton">
        Асуух
      </button>
      <div
        className="grid grid-rows-3 absolute text-center h-[20%] bg-slate-300/70 w-full top-[60%] left-0 translate-y-[-50%] text-black font-bold
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
