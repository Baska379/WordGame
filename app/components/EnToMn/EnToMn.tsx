import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";


const EnToMn = () => {
  return (
    <div className="grid grid-cols-[30%_15%_55%] w-full h-[30rem] gap-3 mt-[9rem] bg-white bg-[url('./img/bg2.jpg')] bg-cover bg-no-repeat bg-center">
      <SectionOne />
      <SectionTwo />
      <div></div>
    </div>
  );
};

export default EnToMn;
