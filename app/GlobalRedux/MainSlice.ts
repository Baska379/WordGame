"use client";
import { createSlice } from "@reduxjs/toolkit";
import {
  assistent,
  getAllEnWords,
  table1Check,
  table2Check,
  table3Check,
} from "../_utiles/check";
import { MainState } from "../type";

const initialState: MainState = {
  tableNumber: 1,
  tableNumber2: 2,
  tableNumber3: 3,
  askWord: "",
  askWord2: "",
  askWord3: "",
  tableBoolean: false,
  tableBoolean2: false,
  addButton: true,
  addButton2: false,
  sendWord1: "",
  sendWord2: "",
  sendWord3: "",
  findEn: "",
  findEn2: "",
  findEn3: "",
  count: 0,
  success: false,
  error: false,
  nextBoolean: true,
  checkBoolean: false,
  list__word: [],
  word1: "",
  word2: "",
  word3: "",
  saveIndex1: [],
  saveIndex2: [],
  saveIndex3: [],
  duplicationTable1: false,
  duplicationTable2: false,
  duplicationTable3: false,
  favourite1: [],
  favourite2: [],
  favourite3: [],
  fav1: true,
  fav2: true,
  fav3: true,
  favouriteWords: [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setNextBoolean: (s, a) => {
      s.nextBoolean = a.payload;
    },
    setCheckBoolean: (s, a) => {
      s.checkBoolean = a.payload;
    },
    setSuccess: (s, a) => {
      s.success = a.payload;
    },
    setError: (s, a) => {
      s.error = a.payload;
    },
    sendCheck: (s) => {
      const errorFun = () => {
        s.error = true;
        const find = assistent(s.findEn, s.tableNumber);
        console.log(find.toString());
        if (s.tableBoolean === true) {
          const find2 = assistent(s.findEn2, s.tableNumber2);
          console.log(find2.toString());
        }
        if (s.tableBoolean2 === true) {
          const find3 = assistent(s.findEn3, s.tableNumber3);
          console.log(find3.toString());
        }
      };
      if (s.tableBoolean === false && s.tableBoolean2 === false) {
        const result: boolean = table1Check(s.sendWord1, s.findEn);
        if (result === true) {
          const find = assistent(s.findEn, s.tableNumber).toString();
          s.list__word.push(s.findEn + ": - " + find);
          s.count++;
          s.success = true;
          s.nextBoolean = false;
          s.error = false;
          s.checkBoolean = true;
        } else {
          errorFun();
        }
      }
      if (s.tableBoolean === true && s.tableBoolean2 === false) {
        const result: boolean = table1Check(s.sendWord1, s.findEn);
        const result2: boolean = table2Check(s.sendWord2, s.findEn2);
        if (result === true && result2 === true) {
          const find = assistent(s.findEn, s.tableNumber).toString();
          const find2 = assistent(s.findEn2, s.tableNumber2).toString();
          s.list__word.push(s.findEn + ": - " + find);
          s.list__word.push(s.findEn2 + ": - " + find2);
          s.count = s.count + 2;
          s.success = true;
          s.error = false;
          s.nextBoolean = false;
          s.checkBoolean = true;
        } else {
          errorFun();
        }
      }
      if (s.tableBoolean2 === true && s.tableBoolean === true) {
        const result: boolean = table1Check(s.sendWord1, s.findEn);
        const result2: boolean = table2Check(s.sendWord2, s.findEn2);
        const result3: boolean = table3Check(s.sendWord3, s.findEn3);
        if (result === true && result2 === true && result3 === true) {
          const find = assistent(s.findEn, s.tableNumber).toString();
          const find2 = assistent(s.findEn2, s.tableNumber2).toString();
          const find3 = assistent(s.findEn3, s.tableNumber3).toString();
          s.list__word.push(s.findEn + ": - " + find);
          s.list__word.push(s.findEn2 + ": - " + find2);
          s.list__word.push(s.findEn3 + ": - " + find3);
          s.count = s.count + 3;
          s.success = true;
          s.error = false;
          s.nextBoolean = false;
          s.checkBoolean = true;
        } else {
          errorFun();
        }
      }
      if (s.tableBoolean2 === true && s.tableBoolean === false) {
        const result: boolean = table1Check(s.sendWord1, s.findEn);
        const result3: boolean = table3Check(s.sendWord3, s.findEn3);
        if (result === true && result3 === true) {
          const find = assistent(s.findEn, s.tableNumber).toString();
          const find3 = assistent(s.findEn3, s.tableNumber3).toString();
          s.list__word.push(s.findEn + ": - " + find);
          s.list__word.push(s.findEn3 + ": - " + find3);
          s.count = s.count + 2;
          s.success = true;
          s.error = false;
          s.nextBoolean = false;
          s.checkBoolean = true;
        } else {
          errorFun();
        }
      }
    },
    handler1: (s) => {
      const refresh = () => {
        handle();
      };
      const handle = () => {
        s.sendWord1 = "";
        const enWord: string[] = getAllEnWords().en1.split("\n");
        const num: number = enWord.length;
        const rand: number = Math.floor(Math.random() * num);
        const find = s.saveIndex1.indexOf(rand);
        if (find === -1) {
          s.saveIndex1.push(rand);
          const find = enWord
            .slice(rand, rand + 1)
            .toString()
            .toLowerCase();
          s.findEn = find;
          s.word1 = find;
          s.askWord = find;
          if (s.favouriteWords.filter((el) => el === find).length === 1) {
            s.fav1 = false;
          }
        } else {
          refresh();
        }
      };
      handle();
    },
    setSendWord1: (s, a) => {
      s.sendWord1 = a.payload;
    },
    addTable2: (s) => {
      s.addButton = false;
      s.tableBoolean = true;
      s.addButton2 = true;
    },
    handler2: (s) => {
      const refresh = () => {
        handle();
      };
      const handle = () => {
        s.sendWord2 = "";
        const enWord: string[] = getAllEnWords().en2.split("\n");
        const num: number = enWord.length;
        const rand: number = Math.floor(Math.random() * num);
        const find = s.saveIndex2.indexOf(rand);
        if (find === -1) {
          s.saveIndex2.push(rand);
          const find = enWord.slice(rand, rand + 1).toString();
          s.findEn2 = find;
          s.askWord2 = find;
          s.word2 = find;
        } else {
          refresh();
        }
      };

      handle();
    },
    setSendWord2: (s, a) => {
      s.sendWord2 = a.payload;
    },
    addTable3: (s) => {
      s.addButton2 = false;
      s.tableBoolean2 = true;
    },
    minusTable2: (s) => {
      s.addButton = true;
      s.tableBoolean = false;
    },
    handler3: (s) => {
      const refresh = () => {
        handle();
      };
      const handle = () => {
        s.sendWord3 = "";
        const enWord: string[] = getAllEnWords().en3.split("\n");
        const num: number = enWord.length;
        const rand: number = Math.floor(Math.random() * num);
        const find = s.saveIndex3.indexOf(rand);
        if (find === -1) {
          s.saveIndex3.push(rand);
          const find = enWord.slice(rand, rand + 1).toString();
          s.findEn3 = find;
          s.askWord3 = find;
          s.word3 = find;
        } else {
          refresh();
        }
        handle();
      };
    },
    setSendWord3: (s, a) => {
      s.sendWord3 = a.payload;
    },

    minusTable3: (s) => {
      s.addButton2 = true;
      s.tableBoolean2 = false;
    },

    // Favourite

    favouriteAdd: (s, a) => {
      let truth = false;
      const mnWord = assistent(a.payload, 1).toString();
      s.favouriteWords.forEach((el, index) => {
        if (el === a.payload) {
          truth = true;
        }
      });
      if (!truth) {
        s.favouriteWords.push(a.payload);
        s.favourite1.push(a.payload + "@@@" + mnWord);
        s.fav1 = false;
      }
    },
    favouriteRemove: (s, a) => {
      s.favourite1.splice(a.payload, 1);
    },
  },
});

export const mainAction = mainSlice.actions;
export default mainSlice.reducer;
