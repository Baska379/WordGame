"use client";
import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./MainSlice";
import enToMnSlice from "./EntoMnSlice";
import dashSlice from "./DashSlice";
import game2Slice from "./game2Slice";
import headerSlice from "./HeaderSlice";
export const store = configureStore({
  reducer: {
    main: mainSlice,
    enToMn: enToMnSlice,
    g2Dash: dashSlice,
    game2: game2Slice,
    header: headerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
