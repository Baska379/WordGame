"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Dash {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}
const initialState: Dash = {
  x1: 0,
  x2: 0,
  y1: 0,
  y2: 0,
};
type Zone = {
  x: number;
  y: number;
  x2: number;
  title: string;
};
const dashSlice = createSlice({
  name: "dash",
  initialState,
  reducers: {
    setPart: (s, a: PayloadAction<Zone>) => {
      if (a.payload.title === "!!!") {
        s.x1 = a.payload.x;
        s.y1 = a.payload.y;
      }
      if (a.payload.title === "@@@") {
        s.x2 = a.payload.x2;
        s.y2 = a.payload.y;
      }
    },
    zero: (s) => {
      s.x1 = 0;
      s.x2 = 0;
      s.y1 = 0;
      s.y2 = 0;
    },
  },
});

export const g2Dash = dashSlice.actions;
export default dashSlice.reducer;
