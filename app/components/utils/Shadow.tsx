"use client";
import { headerAction } from "@/app/GlobalRedux/HeaderSlice";
import { useAppDispatch, useAppSelector } from "@/app/useState";
const Shadow = () => {
  const disPatch = useAppDispatch();
  const { shadow } = useAppSelector((state) => state.header);
  const shadowFalse = () => {
    disPatch(headerAction.setShadow(false));
    disPatch(headerAction.setSmMenu(false));
  };
  return (
    <div
      style={{ display: shadow ? "block" : "none" }}
      onClick={shadowFalse}
      className="absolute top-0 left-0 w-full h-[133.5%] z-10 bg-slate-900/30
       smScreenMax:h-[162%]"
    ></div>
  );
};

export default Shadow;
