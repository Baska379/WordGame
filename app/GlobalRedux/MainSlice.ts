"use client";
import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { assistent, table1Check } from "../_utiles/check";
export interface MainState {
  tableNumber: number;
  tableNumber2: number;
  tableNumber3: number;
  askWord: string;
  askWord2: string;
  askWord3: string;
  tableBoolean: boolean;
  tableBoolean2: boolean;
  addButton: boolean;
  addButton2: boolean;
  sendWord1: string;
  sendWord2: string;
  sendWord3: string;
  findEn: string | null;
  findEn2: string | null;
  findEn3: string | null;
  count: number;
  success: boolean;
  error: boolean;
  nextBoolean: boolean;
  checkBoolean: boolean;
  list__word: string[];
}

const initialState: MainState = {
  tableNumber: 1,
  tableNumber2: 2,
  tableNumber3: 3,
  askWord: "",
  askWord2: "",
  askWord3: "",
  tableBoolean: false,
  tableBoolean2: false,
  addButton: false,
  addButton2: false,
  sendWord1: "",
  sendWord2: "",
  sendWord3: "",
  findEn: "",
  findEn2: "",
  findEn3: "",
  count: 0,
  success: false,
  error: false,
  nextBoolean: false,
  checkBoolean: false,
  list__word: [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setNextBoolean: (s, a) => {
      s.nextBoolean = a.payload;
    },
    setCheckBoolean: (s, a) => {
      s.checkBoolean = a.payload;
    },
    sendCheck: (s, a) => {
      if (s.tableBoolean === false && s.tableBoolean2 === false) {
        const result: boolean = table1Check(s.sendWord1, s.findEn);
        if (result === true) {
          const find = assistent(s.findEn, s.tableNumber).toString();
          s.list__word.push(s.findEn + ": - " + find);
          s.count++;
          s.success = true;
          a.payload.time();
          //   time();
          s.nextBoolean = false;
          s.error = false;
          s.checkBoolean = true;
        } else {
          a.payload.errorFun();
          // errorFun();
        }
      }
    },
  },
});

export const mainAction = mainSlice.actions;
export default mainSlice.reducer;
