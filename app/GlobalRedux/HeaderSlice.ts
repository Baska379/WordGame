"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface HeaderType {
  shadow: boolean;
  smMenu: boolean;
}
const initialState: HeaderType = {
  shadow: false,
  smMenu: false,
};
const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setShadow: (s, a: PayloadAction<boolean>) => {
      s.shadow = a.payload;
    },
    setSmMenu: (s, a: PayloadAction<boolean>) => {
      s.smMenu = a.payload;
    },
  },
});

export const headerAction = headerSlice.actions;
export default headerSlice.reducer;
