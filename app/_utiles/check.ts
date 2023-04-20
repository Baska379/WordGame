import { getWordsData } from "@/lib/words";
export interface AllEnWords {
  en1: string;
  en2: string;
  en3: string;
  all: string[];
}
export interface AllMNWords {
  mn1: string;
  mn2: string;
  mn3: string;
  all: string[];
}
export const table1Check = (
  sendWord1: string,
  findEn: string | null
): boolean => {
  const mnWord: string[] = getWordsData().mnWords.toLowerCase().split("\n");
  const enWord: string[] = getWordsData().enWords.toLowerCase().split("\n");
  if (findEn !== null) {
    const enIndex: number = enWord.indexOf(findEn);
    const find: string = mnWord.slice(enIndex, enIndex + 1).toString();
    if (find.split(", ").length > 1) {
      const two = find.split(", ");
      two.forEach((el: string) => {
        if (el === sendWord1.toLowerCase()) {
          return true;
        }
      });
    } else if (sendWord1.toLowerCase() === find) {
      return true;
    } else {
      return false;
    }
  }

  return false;
};
export const table2Check = (
  sendWord2: string,
  findEn2: string | null
): boolean => {
  const mnWord: string[] = getWordsData().mnWords2.toLowerCase().split("\n");
  const enWord: string[] = getWordsData().enWords2.toLowerCase().split("\n");
  if (findEn2 !== null) {
    const enIndex: number = enWord.indexOf(findEn2);
    const find: string = mnWord.slice(enIndex, enIndex + 1).toString();
    if (find.split(", ").length > 1) {
      const two = find.split(", ");
      two.forEach((el: string) => {
        if (el === sendWord2.toLowerCase()) {
          return true;
        }
      });
    } else if (sendWord2.toLowerCase() === find) {
      return true;
    } else {
      return false;
    }
  }

  return false;
};
export const table3Check = (
  sendWord3: string,
  findEn3: string | null
): boolean => {
  const mnWord: string[] = getWordsData().mnWords3.toLowerCase().split("\n");
  const enWord: string[] = getWordsData().enWords3.toLowerCase().split("\n");
  if (findEn3 !== null) {
    const enIndex: number = enWord.indexOf(findEn3);
    const find: string = mnWord.slice(enIndex, enIndex + 1).toString();
    if (find.split(", ").length > 1) {
      const two = find.split(", ");
      two.forEach((el: string) => {
        if (el === sendWord3.toLowerCase()) {
          return true;
        }
      });
    } else if (sendWord3.toLowerCase() === find) {
      return true;
    } else {
      return false;
    }
  }

  return false;
};

export const assistent = function (
  findEn: string | null,
  list: number
): string[] {
  if (list === 1) {
    const mnWord: string[] = getWordsData().mnWords.split("\n");
    const enWord: string[] = getWordsData().enWords.split("\n");
    if (findEn !== null) {
      const enIndex: number = enWord.indexOf(findEn);
      const find: string[] = mnWord.slice(enIndex, enIndex + 1);
      return find;
    }
  }
  if (list === 2) {
    const mnWord2: string[] = getWordsData().mnWords2.split("\n");
    const enWord2: string[] = getWordsData().enWords2.split("\n");
    if (findEn !== null) {
      const enIndex2: number = enWord2.indexOf(findEn);
      const find2: string[] = mnWord2.slice(enIndex2, enIndex2 + 1);
      return find2;
    }
  }
  if (list === 3) {
    const mnWord3: string[] = getWordsData().mnWords3.split("\n");
    const enWord3: string[] = getWordsData().enWords3.split("\n");
    if (findEn !== null) {
      const enIndex3: number = enWord3.indexOf(findEn);
      const find3: string[] = mnWord3.slice(enIndex3, enIndex3 + 1);
      return find3;
    }
  }
  return [];
};

export const askfindWord = function (ask: string): string {
  const mnWords = getWordsData().mnWords.toLowerCase().split("\n");
  const enWords = getWordsData().enWords.toLowerCase().split("\n");
  const index: number = enWords.indexOf(ask);
  return mnWords.slice(index, index + 1).toString();
};

export function getAllEnWords(): AllEnWords {
  const all: string[] = getWordsData().enWords.split("\n");
  getWordsData()
    .enWords2.split("\n")
    .forEach((el) => {
      all.push(el);
    });
  getWordsData()
    .enWords3.split("\n")
    .forEach((el) => {
      all.push(el);
    });
  return {
    en1: getWordsData().enWords,
    en2: getWordsData().enWords2,
    en3: getWordsData().enWords3,
    all: all,
  };
}
export function getAllMnWords(): AllMNWords {
  const all: string[] = getWordsData().mnWords.split("\n");
  getWordsData()
    .mnWords2.split("\n")
    .forEach((el) => {
      all.push(el);
    });
  getWordsData()
    .mnWords3.split("\n")
    .forEach((el) => {
      all.push(el);
    });
  return {
    mn1: getWordsData().mnWords,
    mn2: getWordsData().mnWords2,
    mn3: getWordsData().mnWords3,
    all: all,
  };
}
