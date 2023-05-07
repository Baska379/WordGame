"use client";
import { enToMnAction } from "@/app/GlobalRedux/EntoMnSlice";
import { useAppDispatch, useAppSelector } from "@/app/useState";
import { BsFillSendCheckFill } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import { useEffect } from "react";

const EnInput = () => {
  const disPatch = useAppDispatch();
  const { enWord1, enWord2, enWord3, successOrErrorTime, allTrue } =
    useAppSelector((state) => state.enToMn);
  const errorEmblem: string =
    "absolute w-8 h-8  p-1 top-[10%] duration-700 bg-slate-950/50 rounded-lg right-[5px] text-rose-700 text-[1.5rem]";
  const successEmblem: string =
    "absolute w-8 h-8  p-2 top-[10%] duration-700 bg-slate-950/50 rounded-lg right-[5px] text-lime-500 text-[1.5rem]";

  const handler1 = (el: string) => {
    disPatch(enToMnAction.inputWord1(el));
  };
  const handler2 = (el: string) => {
    disPatch(enToMnAction.inputWord2(el));
  };
  const handler3 = (el: string) => {
    disPatch(enToMnAction.inputWord3(el));
  };

  useEffect(() => {
    time();
  }, [successOrErrorTime]);

  const time = () => {
    setTimeout(() => {
      disPatch(enToMnAction.timeEnd());
    }, 5000);
  };
  return (
    <div className="grid grid-rows-3 items-center m-0 bg-yellow-100/30 shadow-[0_0_5px_3px_black]">
      <div className="text-center relative duration-700">
        {allTrue[0] ? (
          <BsFillSendCheckFill
            className={successEmblem}
            style={{ opacity: successOrErrorTime ? "1" : "0" }}
          />
        ) : (
          <BiError
            className={errorEmblem}
            style={{ opacity: successOrErrorTime ? "1" : "0" }}
          />
        )}
        <strong className="absolute smScreenMax:hidden text-white top-[5px] left-[1.5rem]">
          1
        </strong>
        <input
          value={enWord1}
          onChange={(el) => handler1(el.target.value)}
          type="text"
          placeholder="Үг оруулана уу"
          className="bg-slate-200/30 smScreenMax:placeholder:text-[1rem] smScreenMax:w-[95%] placeholder:text-start placeholder:text-slate-100 font-bold px-[0.5rem] py-[0.2rem] m-auto w-[70%] text-black text-center"
        />
      </div>
      <div className="text-center relative duration-700">
        {successOrErrorTime ? (
          allTrue[1] ? (
            <BsFillSendCheckFill
              className={successEmblem}
              style={{ opacity: successOrErrorTime ? "1" : "0" }}
            />
          ) : (
            <BiError
              className={errorEmblem}
              style={{ opacity: successOrErrorTime ? "1" : "0" }}
            />
          )
        ) : (
          ""
        )}
        <strong className="absolute smScreenMax:hidden text-white top-[5px] left-[1.5rem]">
          2
        </strong>
        <input
          value={enWord2}
          onChange={(el) => handler2(el.target.value)}
          type="text"
          placeholder="Үг оруулана уу"
          className="bg-slate-200/30 smScreenMax:placeholder:text-[1rem] smScreenMax:w-[95%] placeholder:text-start placeholder:text-slate-100 px-[0.5rem] py-[0.2rem] m-auto w-[70%] text-black font-bold text-center"
        />
      </div>
      <div className="text-center relative duration-700">
        {successOrErrorTime ? (
          allTrue[2] ? (
            <BsFillSendCheckFill
              className={successEmblem}
              style={{ opacity: successOrErrorTime ? "1" : "0" }}
            />
          ) : (
            <BiError
              className={errorEmblem}
              style={{ opacity: successOrErrorTime ? "1" : "0" }}
            />
          )
        ) : (
          ""
        )}
        <strong className="absolute smScreenMax:hidden text-white top-[5px] left-[1.5rem]">
          3
        </strong>
        <input
          value={enWord3}
          onChange={(el) => handler3(el.target.value)}
          type="text"
          placeholder="Үг оруулана уу"
          className=" px-[0.5rem] py-[0.2rem] smScreenMax:w-[95%] smScreenMax:placeholder:text-[1rem] placeholder:text-start placeholder:text-slate-100 m-auto w-[70%] bg-slate-200/30 text-black font-bold text-center"
        />
      </div>
    </div>
  );
};

export default EnInput;
