"use client";
import React from "react";
import Link from "next/link";
import Search from "./Search";
const Header = () => {
  return (
    <div className="flex fixed flex-row top-0 left-0 w-full z-50 bg-emerald-300/50">
      <div className="flex-1 items-center justify-start flex gap-2">
        <Link
          href={"/"}
          className="bg-slate-50/50 text-black rounded-lg px-4 py-1"
        >
          Game
        </Link>

        <Link
          href={"/dictionary"}
          className="px-4 py-1 rounded-lg text-black bg-slate-50/50"
        >
          Dictionary
        </Link>
      </div>
      <Search />
    </div>
  );
};

export default Header;
