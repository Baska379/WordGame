// "use client";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../GlobalRedux/strore";
// import { AppDispatch } from "../GlobalRedux/strore";
// import { mainAction } from "../GlobalRedux/MainSlice";

// const WordTable = () => {
//   const disPatch = useDispatch<AppDispatch>();
//   const main = useSelector((state: RootState) => state.main);
//   const refresh = () => {
//     handler();
//   };
//   useEffect(() => {
//     handler();
//   }, []);
//   const handler = () => {
//     disPatch(mainAction.handler2());
//   };

//   const setHandler = (el: string) => {
//     disPatch(mainAction.setSendWord2(el));
//   };
//   function addHandler() {
//     disPatch(mainAction.addTable3());
//   }
//   function minusHandler() {
//     disPatch(mainAction.minusTable2());
//   }
//   return (
//     <div className="grid grid-cols-2 gap-2 m-auto">
//       <p className="group w-full relative rounded-xl p-1 bg-black text-center items-center text-white font-bold text-[1rem] italic overflow-hidden ease-in duration-500">
//         {main.word2}
//         <button
//           className="minusButton group-hover:translate-x-[0.5rem]"
//           // onClick={minusHandler}
//         >
//           -
//         </button>
//         {main.addButton2 ? (
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
//         value={main.sendWord2}
//         // onChange={(el) => setHandler(el.target.value)}
//       />
//     </div>
//   );
// };

// export default WordTable;
