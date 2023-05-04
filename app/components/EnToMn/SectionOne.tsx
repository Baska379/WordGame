"use client";
import React from "react";
import Output from "./Output";
import EnInput from "./EnInput";

const SectionOne = () => {
  return (
    <div className="grid grid-rows-2 gap-8 mt-3 ml-3 smScreenMax:gap-1 smScreenMax:grid-cols-2 smScreenMax:grid-rows-1">
      <Output />
      <EnInput />
    </div>
  );
};

export default SectionOne;
