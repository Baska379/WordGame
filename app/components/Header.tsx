"use client";
import React, { useState } from "react";
import Link from "next/link";
import Search from "./Search";
const Header = () => {
  const [menu , setMenu] = useState<boolean>(false)
  const swap = () => {
    setMenu(!menu)
  }
  return (
    <div className="flex fixed flex-row top-0 left-0 w-full z-50 bg-emerald-300/50">
      <div className="flex-1 items-center justify-start flex gap-2 relative group">
        <button className="bg-slate-50/50 text-black rounded-lg px-4 py-1" onClick={swap}>Game</button>
        <Link
          href={"/dictionary"}
          className="px-4 py-1 rounded-lg text-black bg-slate-50/50"
        >
          Dictionary
        </Link>
        {menu ?        <div className="absolute top-11 justify-center items-center left-0 w-[8rem] h-[8rem] font-bold bg-emerald-300/70 flex flex-col rounded-md">
          
          <Link
  href={"/"}
  className="m-auto rounded-lg flex-2 px-4 py-1 bg-slate-100/90"
>
  Game 1
</Link>
          <Link
  href={"/gameTwo"}
  className="bg-slate-100/90 m-auto  flex-2 rounded-lg px-4 py-1"
>
  Game 2
</Link>
</div> : ""}
 
      </div>
      <Search />
    </div>
  );
};

export default Header;
