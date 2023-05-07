"use client";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const swap = () => {
    setMenu(!menu);
  };
  return (
    <div
      className="absolute smScreenMin:hidden z-[60] top-14 left-0 w-36 h-60 bg-slate-100/50 ml-3 flex flex-col gap-4
 items-center"
    >
      <button
        className="bg-slate-900/50 mt-[10px] text-white rounded-lg px-4 py-1 duration-500 GameButton"
        onClick={swap}
      >
        Game
      </button>
      <Link
        href={"/dictionary"}
        className="px-4 py-1 rounded-lg text-white bg-slate-900/50"
      >
        Dictionary
      </Link>
      <Link
        href="/favourite"
        className="px-4 py-1 rounded-lg text-white bg-slate-900/50"
      >
        Favourite
      </Link>
      {menu ? (
        <div className="absolute top-0 justify-center items-center right-[-5rem] w-[6rem] h-[5rem] font-bold bg-emerald-300/70 flex flex-col rounded-md text-[10px]">
          <p className="relative smGameMenu"></p>
          <Link
            href={"/gameOne"}
            className="m-auto rounded-lg flex-2  px-3 py-1 bg-slate-100/90"
          >
            Game 1
          </Link>
          <Link
            href={"/gameTwo"}
            className="bg-slate-100/90 m-auto  flex-2 rounded-lg px-3 py-1"
          >
            Game 2
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Menu;
