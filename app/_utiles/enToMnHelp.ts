"use client";
import { getWordsData } from "./words";

export function getMn1(findIndex: number[]): string | undefined {
  const mn = getWordsData().mnWords;
  const mnArray = mn.split("\n");
  function refresh() {
    handle();
  }
  function handle(): string | undefined {
    const randomNum = Math.floor(Math.random() * mnArray.length);
    const findIn = findIndex.indexOf(randomNum);
    if (findIn === -1) {
      findIndex.push(randomNum);
      const find = mnArray.slice(randomNum, randomNum + 1).toString();
      return find;
    } else {
      refresh();
    }
  }
  const str = handle();
  if (str) {
    return str;
  }
}
