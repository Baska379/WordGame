"use client";
import { GetWordsType } from "../game2Types";
import { getAllEnWords, getAllMnWords } from "./check";
import { getWords } from "./gameHelpFun";

export function getMn(findIndex: number[], line: number): GetWordsType {
  const words: GetWordsType = getWords(findIndex, line);
  return words;
}

export function checkInputEn(mn: string, en: string) {
  const enWords: string[] = getAllEnWords().all;
  const mnWords: string[] = getAllMnWords().all;
  const index: number = enWords.findIndex((el) => el === en);
  const findMn = mnWords.find((el, i) => {
    if (i === index) {
      return el;
    }
  });
  if (!findMn) return false;
  if (index === -1) false;
  if (findMn === mn) return true;
  return false;
}
