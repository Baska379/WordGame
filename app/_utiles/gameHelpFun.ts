"use client";
import { getAllEnWords, getAllMnWords } from "./check";
import { GetWordsType } from "../game2Types";
export const getWords = function (index: number[]): GetWordsType {
  const en: string[] = getAllEnWords().all;
  const mn: string[] = getAllMnWords().all;
  const getMN: string[] = [];
  const getEn: string[] = [];
  const inDex: number[] = index;
  for (let i = 0; i <= 4; i++) {
    const randomPoint: number = Math.floor(Math.random() * en.length);
    inDex.push(randomPoint);
    getMN.push(mn[randomPoint]);
    getEn.push(en[randomPoint]);
  }
  return { mn: getMN, en: getEn, index: inDex };
};
