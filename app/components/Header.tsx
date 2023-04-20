'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { Link } from "react-router-dom";
// // Words
// import enWords1 from "../words/englishWords";
// import mnWords1 from "../words/mongolWords";
// import { findAllEnwords } from "../public/check";
const Header = () => {
//   const [enWord1, setenWord1] = useState<string[]>(findAllEnwords());
//   const [mnWord1, setmnWord1] = useState<string[]>(mnWords1.split("\n"));
  const [listBoolean, setListBoolean] = useState<boolean>(true);
  const [findWords1, setFindWords] = useState<string[]>([]);
  const num = function (): string {
    return (Math.ceil(Math.random() * 10000) * 1000).toString(32);
  };

  const search = function (el:any) {
    el.preventDefault();
    setFindWords([]);
    if (el.target.value.length > 0) {
      setListBoolean(false);
    //   setFindWords(
    //     enWord1.map((elem, i) => {
    //       let index: number = elem.search(el.target.value);
    //       let index2: number = mnWord1[i].search(el.target.value);
    //       if (index !== -1 || index2 !== -1) {
    //         return elem + " - " + mnWord1[i].toLowerCase();
    //       }
    //     })
    //   );
    } else {
      setFindWords([]);
      setListBoolean(true);
    }
  };
  return (
    <div className="flex fixed flex-row top-0 left-0 w-full">
      <div className="flex-1">
        <Link href={"/"} className="">
          Game
        </Link>

        <Link href={"/dictionary"} className="">
          Dictionary
        </Link>
      </div>
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search here"
          className=""
          onChange={search}
        />
        {/* <button className={css.search__button}>Search</button> */}
      </div>
      <div
        className="flex-2"
        style={{ display: listBoolean ? "none" : "block" }}
      >
        <ul>
          {findWords1.map((el, index) => (
            <li key={el + num()}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
