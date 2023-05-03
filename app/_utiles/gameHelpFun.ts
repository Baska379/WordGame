"use client";
import { getAllEnWords, getAllMnWords } from "./check";
import { GetWordsType } from "../game2Types";
export const getWords = function (index: number[], line: number): GetWordsType {
  const en: string[] = getAllEnWords().all;
  const mn: string[] = getAllMnWords().all;
  const getMN: string[] = [];
  const getEn: string[] = [];
  const inDex: number[] = index;
  const refresh = () => {
    handler();
  };
  const handler = () => {
    const randomPoint: number = Math.floor(Math.random() * en.length);
    const findIn: number = index.indexOf(randomPoint);
    if (findIn === -1) {
      inDex.push(randomPoint);
      getMN.push(mn[randomPoint]);
      getEn.push(en[randomPoint]);
    }
    if (getMN.length < line) {
      refresh();
    }
  };
  handler();
  return { mn: getMN, en: getEn, index: inDex };
};
