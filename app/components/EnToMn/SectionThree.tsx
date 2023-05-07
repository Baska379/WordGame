"use client";

import { useAppSelector } from "@/app/useState";

const SectionThree = () => {
  const { allWords } = useAppSelector((state) => state.enToMn);
  return (
    <div className="overflow-auto smScreenMax:text-[14px] smScreenMax:ml-3 mt-6 bg-amber-300/50 text-[1.3rem] mr-3 mb-3 shadow-[0_0_10px_2px_black] font-bold italic">
      {allWords.map((el, i) => {
        const words = el.split("---");
        return (
          <p className="ml-6 smScreenMin:ml-2">
            {words[0]} - <span>{words[1]}</span>
          </p>
        );
      })}
    </div>
  );
};

export default SectionThree;
