"use client";
import { useAppSelector } from "@/app/useState";

const EndGame = () => {
  const { endBoolean } = useAppSelector((state) => state.game2);
  return (
    <div
      style={{ display: endBoolean ? "block" : "none" }}
      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  z-50 text-[5rem]  bg-stone-50/10 rounded-2xl shadow-[0px_0px_10px_1px_white] "
    >
      <p className="text-slate-100">End</p>
    </div>
  );
};

export default EndGame;
