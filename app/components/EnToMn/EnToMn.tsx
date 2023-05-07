"use client";
import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

const EnToMn = () => {
  return (
    <div className="grid grid-cols-[30%_15%_1fr] smScreenMax:grid-rows-3 smScreenMax:grid-cols-1 w-full h-[30rem] gap-3 smScreenMax:mt-0 mt-[9rem] bg-white bg-[url('./img/bg2.jpg')] tall:mt-0  bg-cover bg-no-repeat bg-center">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default EnToMn;
