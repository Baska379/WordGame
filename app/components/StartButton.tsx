"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainAction } from "../GlobalRedux/MainSlice";
import { useAppDispatch } from "../useState";
import { useEffect } from "react";
const StartButton = () => {
  const disPatch = useAppDispatch();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      disPatch(mainAction.setFooterBoolean(false));
      disPatch(mainAction.setHeaderBoolean(false));
    }
  }, []);
  const start = () => {
    disPatch(mainAction.setFooterBoolean(true));
    disPatch(mainAction.setHeaderBoolean(true));
  };
  return (
    <div className="flex items-center justify-center h-full">
      <Link
        href={"/gameOne"}
        onClick={start}
        className="border-black px-10 py-3  bg-sky-500 font-bold tracking-widest hover:bg-sky-700/70 duration-300"
      >
        start
      </Link>
    </div>
  );
};

export default StartButton;
