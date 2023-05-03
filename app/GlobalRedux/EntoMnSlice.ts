"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { checkInputEn, getMn } from "../_utiles/enToMnHelp";
import { GetWordsType } from "../game2Types";
interface EnToMn {
  mnWord1: string;
  mnWord2: string;
  mnWord3: string;
  findIndex: number[];
  enWord1: string;
  enWord2: string;
  enWord3: string;
  allTrue: boolean[];
  lineNumber: number;
  nextButton: boolean;
  checkButton: boolean;
  successOrErrorTime: boolean;
  askEnWords: string[];
}
const initialState: EnToMn = {
  mnWord1: "",
  mnWord2: "",
  mnWord3: "",
  findIndex: [],
  enWord1: "",
  enWord2: "",
  enWord3: "",
  allTrue: [],
  lineNumber: 3,
  nextButton: true,
  checkButton: false,
  successOrErrorTime: false,
  askEnWords: [],
};
export const enToMnSlice = createSlice({
  name: "enToMn",
  initialState,
  reducers: {
    handler1: (s) => {
      s.allTrue = [];
      const mn1: GetWordsType = getMn(s.findIndex, s.lineNumber);
      s.findIndex = mn1.index;
      s.askEnWords = mn1.en;
      s.mnWord1 = mn1.mn[0];
      s.allTrue.push(false);
      s.mnWord2 = mn1.mn[1];
      s.allTrue.push(false);
      s.mnWord3 = mn1.mn[2];
      s.allTrue.push(false);
      s.checkButton = false;
      s.nextButton = true;
    },
    inputWord1: (s, a: PayloadAction<string>) => {
      s.enWord1 = a.payload;
    },
    inputWord2: (s, a: PayloadAction<string>) => {
      s.enWord2 = a.payload;
    },
    inputWord3: (s, a: PayloadAction<string>) => {
      s.enWord3 = a.payload;
    },
    check: (s) => {
      s.successOrErrorTime = true;
      const mn1 = checkInputEn(s.mnWord1, s.enWord1);
      if (mn1) s.allTrue[0] = true;
      const mn2 = checkInputEn(s.mnWord2, s.enWord2);
      if (mn2) s.allTrue[1] = true;
      const mn3 = checkInputEn(s.mnWord3, s.enWord3);
      if (mn2) s.allTrue[2] = true;
      if (mn1 && mn2 && mn3) {
        s.nextButton = false;
        s.checkButton = true;
        s.enWord1 = "";
        s.enWord2 = "";
        s.enWord3 = "";
      }
    },
    timeEnd: (s) => {
      s.successOrErrorTime = false;
    },
  },
});

export const enToMnAction = enToMnSlice.actions;
export default enToMnSlice.reducer;
