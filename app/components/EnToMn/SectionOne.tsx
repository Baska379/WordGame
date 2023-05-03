"use client";
import React from "react";
import Output from "./Output";
import EnInput from "./EnInput";

const SectionOne = () => {
  return (
    <div className="grid grid-rows-2 gap-8 mt-3 ml-3">
      <Output />
      <EnInput />
    </div>
  );
};

export default SectionOne;
