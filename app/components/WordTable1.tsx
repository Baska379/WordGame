// "use client";
// import React, { useEffect, useState } from "react";
// import { useDispatch , useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../GlobalRedux/strore";
// import { mainAction } from "../GlobalRedux/MainSlice";

// const WordTable1 = () => {
//   const disPatch = useDispatch<AppDispatch>();
//   const main = useSelector((state: RootState) => state.main);
//   useEffect(() => {
//     handler();
//   }, []);
//   const refresh = () => {
//     handler();
//   };

//   const handler = () => {
//     disPatch(mainAction.handler1());
//   };

//   const setHandler = (el: string) => {
//     disPatch(mainAction.setSendWord1(el));
//   };
//   const addHandler = function () {
//     disPatch(mainAction.addTable2());
//   };
//   return (
//     <div className="grid grid-cols-2 gap-2 m-auto">
//       <p className="group w-full relative rounded-xl p-1 bg-black text-center items-center text-white font-bold text-[1rem] italic overflow-hidden ease-in duration-500">
//         {main.word1}
//         {main.addButton ? (
//           <button
//             className="addButton group-hover:translate-x-[-0.3rem]"
//             // onClick={addHandler}
//           >
//             +
//           </button>
//         ) : (
//           ""
//         )}
//       </p>
//       <input
//         type="text"
//         value={main.sendWord1}
//         // onChange={(el) => setHandler(el.target.value)}
//       />
//     </div>
//   );
// };

// export default WordTable1;
