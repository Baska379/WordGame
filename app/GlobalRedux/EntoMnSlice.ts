"use client";
import { createSlice } from "@reduxjs/toolkit";
import { getMn1 } from "../_utiles/enToMnHelp";
interface EnToMn {
  mnWord1: string;
  mnWord2: string;
  mnWord3: string;
  findIndex: number[];
}
const initialState: EnToMn = {
  mnWord1: "",
  mnWord2: "",
  mnWord3: "",
  findIndex: [],
};
export const enToMnSlice = createSlice({
  name: "enToMn",
  initialState,
  reducers: {
    handler1: (s) => {
      const mn = getMn1(s.findIndex);
      if (mn) {
        s.mnWord1 = mn;
      }
    },
  },
});

export const enToMnAction = enToMnSlice.actions;
export default enToMnSlice.reducer;
