"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetWordsType } from "../game2Types";
import { getWords } from "../_utiles/gameHelpFun";
interface Game2Type {
  enWords: string[];
  mnWords: string[];
  index: number[];
  enWord: string;
  mnWord: string;
  gameStart: boolean;
  mnIndex: number[];
  enIndex: number[];
  lineNumber: number;
  partOneDis: boolean[];
  partTwoDis: boolean[];
}
interface CheckType {
  title: string;
  word: string;
}
const initialState: Game2Type = {
  enWords: [],
  mnWords: [],
  index: [],
  enWord: "",
  mnWord: "",
  gameStart: false,
  mnIndex: [],
  enIndex: [],
  lineNumber: 5,
  partOneDis: [],
  partTwoDis: [],
};

const game2Slice = createSlice({
  name: "game2",
  initialState,
  reducers: {
    getGame2AllWords: (s) => {
      const getWord: GetWordsType = getWords(s.index);
      s.enWords = getWord.en;
      s.mnWords = getWord.mn;
      s.index = getWord.index;
      for (let i = 0; i <= 50; i++) {
        const num = Math.floor(Math.random() * s.lineNumber);
        const num2 = Math.floor(Math.random() * s.lineNumber);
        const index: number = s.enIndex.indexOf(num);
        const index2: number = s.mnIndex.indexOf(num2);
        if (index === -1) s.enIndex.push(num);
        if (index2 === -1) s.mnIndex.push(num2);
      }
      for (let i = 0; i <= 4; i++) {
        s.partOneDis.push(false);
      }
      for (let i = 0; i <= 4; i++) {
        s.partTwoDis.push(false);
      }
    },
    zero: (s) => {
      s.enWords = [];
      s.mnWords = [];
      s.enIndex = [];
      s.mnIndex = [];
      s.partOneDis = [];
      s.partTwoDis = [];
      for (let i = 0; i <= 4; i++) {
        s.partOneDis.push(false);
      }
      for (let i = 0; i <= 4; i++) {
        s.partTwoDis.push(false);
      }
    },
    check: (s, a: PayloadAction<CheckType>) => {
      if (a.payload.title === "!!!") {
        s.mnWord = a.payload.word;
        if (s.enWord.length > 1) {
          const index: number = s.mnWords.findIndex(
            (el) => el === a.payload.word
          );
          const index2: number = s.enWords.findIndex((el) => el === s.enWord);
          if (index2 === index) {
            s.mnWords.splice(index, 1, "");
            s.enWords.splice(index, 1, "");
            s.enWord = "";
            s.mnWord = "";
            s.gameStart = true;
          }
        }
      }
      if (a.payload.title === "@@@") {
        s.enWord = a.payload.word;
        if (s.mnWord.length > 1) {
          const index: number = s.enWords.findIndex(
            (el) => el === a.payload.word
          );
          const index2: number = s.mnWords.findIndex((el) => el === s.mnWord);
          if (index2 === index) {
            s.mnWords.splice(index, 1, "");
            s.enWords.splice(index, 1, "");
            s.enWord = "";
            s.mnWord = "";
            s.gameStart = true;
          }
        }
      }
    },
    gameStartFalse: (s) => {
      s.gameStart = false;
    },
  },
});

export const game2Action = game2Slice.actions;
export default game2Slice.reducer;
