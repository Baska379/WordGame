"use client";
import { createSlice } from "@reduxjs/toolkit";
import {
  assistent,
  getAllEnWords,
  table1Check,
  table2Check,
  table3Check,
} from "../_utiles/check";

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
  success1: false,
  success2: false,
  success3: false,
  error1: false,
  error2: false,
  error3: false,
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
  favourite: [],
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
    setSuccessFalse: (s) => {
      s.success1 = false;
      s.success2 = false;
      s.success3 = false;
    },
    setErrorFalse: (s) => {
      s.error1 = false;
      s.error2 = false;
      s.error3 = false;
    },
    sendCheck: (s) => {
      let err: boolean = false;
      let err2: boolean = false;
      let err3: boolean = false;
      let s1: boolean = false;
      let s2: boolean = false;
      let s3: boolean = false;
      const errorFun = () => {
        s.error1 = err;
        s.error2 = err2;
        s.error3 = err3;
        s.success1 = s1;
        s.success2 = s2;
        s.success3 = s3;
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
          s.success1 = true;
          s.nextBoolean = false;
          s.error1 = false;
          s.checkBoolean = true;
        } else {
          err = true;
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
          s.success1 = true;
          s.error1 = false;
          s.success2 = true;
          s.error2 = false;
          s.nextBoolean = false;
          s.checkBoolean = true;
        } else {
          if (!result && result2) {
            err = true;
            s2 = true;
          }
          if (result && !result2) {
            s1 = true;
            err2 = true;
          }
          if (!result && !result2) {
            err = true;
            err2 = true;
          }
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
          s.success1 = true;
          s.error1 = false;
          s.success2 = true;
          s.error2 = false;
          s.success3 = true;
          s.error3 = false;
          s.nextBoolean = false;
          s.checkBoolean = true;
        } else {
          if (result && !result2 && !result3) {
            s1 = true;
            err2 = true;
            err3 = true;
          }
          if (result && result2 && !result3) {
            s1 = true;
            s2 = true;
            err3 = true;
          }
          if (!result && result2 && !result3) {
            err = true;
            s2 = true;
            err3 = true;
          }
          if (!result && result2 && result3) {
            err = true;
            s2 = true;
            s3 = true;
          }
          if (!result && !result2 && result3) {
            err = true;
            err2 = true;
            s3 = true;
          }
          if (result && !result2 && result3) {
            s1 = true;
            err2 = true;
            s3 = true;
          }
          if (!result && !result2 && !result3) {
            err = true;
            err2 = true;
            err3 = true;
          }
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
          s.success1 = true;
          s.error1 = false;
          s.success3 = true;
          s.error3 = false;
          s.nextBoolean = false;
          s.checkBoolean = true;
        } else {
          if (result && !result3) {
            s1 = true;
            err3 = true;
          }
          if (!result && result3) {
            err = true;
            s3 = true;
          }
          if (!result && !result3) {
            err = true;
            err3 = true;
          }
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
        const findIndex = s.saveIndex1.indexOf(rand);
        if (findIndex === -1) {
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
          } else {
            s.fav1 = true;
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
        const findIndex = s.saveIndex2.indexOf(rand);
        if (findIndex === -1) {
          s.saveIndex2.push(rand);
          const find = enWord.slice(rand, rand + 1).toString();
          s.findEn2 = find;
          s.askWord2 = find;
          s.word2 = find;
          if (s.favouriteWords.filter((el) => el === find).length === 1) {
            s.fav2 = false;
          } else {
            s.fav2 = true;
          }
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
        const findIndex = s.saveIndex3.indexOf(rand);
        if (findIndex === -1) {
          s.saveIndex3.push(rand);
          const find = enWord.slice(rand, rand + 1).toString();
          s.findEn3 = find;
          s.askWord3 = find;
          s.word3 = find;
          if (s.favouriteWords.filter((el) => el === find).length === 1) {
            s.fav3 = false;
          } else {
            s.fav3 = true;
          }
        } else {
          refresh();
        }
      };
      handle();
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
      if (a.payload === s.tableNumber) {
        let truth = false;
        const mnWord = assistent(s.word1, a.payload).toString();
        s.favouriteWords.forEach((el, index) => {
          if (el === s.word1) {
            truth = true;
          }
        });
        if (!truth) {
          s.favouriteWords.push(s.word1);
          s.favourite.push(s.word1 + "@@@" + mnWord);
          s.fav1 = false;
        }
      }
      if (a.payload === s.tableNumber2) {
        let truth = false;
        const mnWord = assistent(s.word2, a.payload).toString();
        s.favouriteWords.forEach((el, index) => {
          if (el === s.word2) {
            truth = true;
          }
        });
        if (!truth) {
          s.favouriteWords.push(s.word2);
          s.favourite.push(s.word2 + "@@@" + mnWord);
          s.fav2 = false;
        }
      }
      if (a.payload === s.tableNumber3) {
        let truth = false;
        const mnWord = assistent(s.word3, a.payload).toString();
        s.favouriteWords.forEach((el, index) => {
          if (el === s.word3) {
            truth = true;
          }
        });
        if (!truth) {
          s.favouriteWords.push(s.word3);
          s.favourite.push(s.word3 + "@@@" + mnWord);
          s.fav3 = false;
        }
      }
    },
    favouriteRemove: (s, a) => {
      s.favourite.splice(a.payload, 1);
      s.favouriteWords.splice(a.payload, 1);
    },
    favRemove: (s, a) => {
      if (s.tableNumber === a.payload.num) {
        if (s.favouriteWords.length > 0) {
          s.favouriteWords.splice(s.favouriteWords.indexOf(a.payload.word), 1);
          s.favourite.splice(s.favouriteWords.indexOf(a.payload.word), 1);
          s.fav1 = true;
        }
      }
      if (s.tableNumber2 === a.payload.num) {
        if (s.favouriteWords.length > 0) {
          s.favouriteWords.splice(s.favouriteWords.indexOf(a.payload.word), 1);
          s.favourite.splice(s.favouriteWords.indexOf(a.payload.word), 1);
          s.fav2 = true;
        }
      }
      if (s.tableNumber3 === a.payload.num) {
        if (s.favouriteWords.length > 0) {
          s.favouriteWords.splice(s.favouriteWords.indexOf(a.payload.word), 1);
          s.favourite.splice(s.favouriteWords.indexOf(a.payload.word), 1);
          s.fav3 = true;
        }
      }
    },
  },
});

export const mainAction = mainSlice.actions;
export default mainSlice.reducer;
