"use client";
import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./MainSlice";
import enToMnSlice from "./EntoMnSlice";
export const store = configureStore({
  reducer: {
    main: mainSlice,
    enToMn: enToMnSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
