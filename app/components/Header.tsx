"use client";
import React, { useState } from "react";
import Link from "next/link";
import Search from "./Search";
import { useAppDispatch, useAppSelector } from "../useState";
import { game2Action } from "../GlobalRedux/game2Slice";
import { TiThMenuOutline } from "react-icons/ti";
import Menu from "./Menu";
import { headerAction } from "../GlobalRedux/HeaderSlice";
const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [color, setColor] = useState<string>("bg-emerald-300/50");
  const disPatch = useAppDispatch();
  const { smMenu } = useAppSelector((state) => state.header);
  const move = (event: React.MouseEvent) => {
    if (menu) {
      setMenu(false);
    }
  };
  const swap = () => {
    setMenu(!menu);
  };
  const colorSwap = () => {
    disPatch(game2Action.zero());
    disPatch(game2Action.getGame2AllWords());
    setColor("bg-black");
  };
  const colorSwap2 = () => {
    setColor("bg-emerald-300/50");
  };
  const selectMenu = () => {
    disPatch(headerAction.setSmMenu(!smMenu));
    disPatch(headerAction.setShadow(!smMenu));
  };

  return (
    <div className={`flex fixed flex-row top-0 left-0 w-full z-50 ${color}`}>
      <div
        onMouseLeave={(even) => move(even)}
        className="flex-1 items-center justify-start flex gap-2 relative"
      >
        <TiThMenuOutline
          className="h-full cursor-pointer w-8 smScreenMin:hidden"
          onClick={selectMenu}
        />
        <div className=" duration-500" style={{ opacity: smMenu ? "1" : "0" }}>
          {smMenu ? <Menu /> : ""}
        </div>

        <button
          className="bg-slate-50/50 smScreenMax:hidden text-black rounded-lg px-4 py-1 duration-500 GameButton"
          onClick={swap}
        >
          Game
        </button>
        <Link
          href={"/dictionary"}
          className="px-4 py-1 rounded-lg text-black smScreenMax:hidden bg-slate-50/50"
        >
          Dictionary
        </Link>
        <Link
          href="/favourite"
          className="px-4 py-1 smScreenMax:hidden rounded-lg text-black bg-slate-50/50"
        >
          Favourite
        </Link>
        {menu ? (
          <div className="absolute top-10 justify-center items-center left-0 w-[8rem] h-[8rem] font-bold bg-emerald-300/70 flex flex-col rounded-md">
            <Link
              href={"/"}
              className="m-auto rounded-lg flex-2 px-4 py-1 bg-slate-100/90"
              onClick={colorSwap2}
            >
              Game 1
            </Link>
            <Link
              href={"/gameTwo"}
              className="bg-slate-100/90 m-auto  flex-2 rounded-lg px-4 py-1"
              onClick={colorSwap}
            >
              Game 2
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <Search />
    </div>
  );
};

export default Header;
