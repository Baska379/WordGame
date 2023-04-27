import React from "react";

const EnInput = () => {
  return (
    <div className="grid grid-rows-3 items-center m-0">
      <div className="text-center relative">
        <input
          type="text"
          placeholder="Үг оруулана уу"
          className="bg-black px-[0.5rem] py-[0.2rem] m-auto w-[70%] text-white text-center"
        />
      </div>
      <div className="text-center">
        <input
          type="text"
          placeholder="Үг оруулана уу"
          className="bg-black px-[0.5rem] py-[0.2rem] m-auto w-[70%] text-white text-center"
        />
      </div>
      <div className="text-center">
        <input
          type="text"
          placeholder="Үг оруулана уу"
          className="bg-black px-[0.5rem] py-[0.2rem] m-auto w-[70%] text-white text-center"
        />
      </div>
    </div>
  );
};

export default EnInput;
