import React, {
    useEffect,
    useState,
    forwardRef,
  } from "react";
//   import englishWords3 from "../words/englishWords3";
  interface Props {
    setTableBoolean2: React.Dispatch<React.SetStateAction<boolean>>;
    setAddButton1: React.Dispatch<React.SetStateAction<boolean>>;
    setSendWord3: React.Dispatch<React.SetStateAction<string>>;
    sendWord3: string;
    setfindEn3: React.Dispatch<React.SetStateAction<string | null>>;
    setAskWord3: React.Dispatch<React.SetStateAction<string>>;
  }
  const WordTable3 = forwardRef((props: Props, ref) => {
    const [word, setWord] = useState<string>("");
    const [saveIndex, setSaveIndex] = useState<number[]>([]);
    const refresh = () => {
      handler();
    };
    useEffect(() => {
      handler();
    }, []);
    const handler = () => {
      props.setSendWord3("");
      const enWord =""
    //    englishWords3.split("\n");
      const num: number = enWord.length;
      const rand: number = Math.floor(Math.random() * num);
      const find = saveIndex.indexOf(rand);
      if (find === -1) {
        saveIndex.push(rand);
        setSaveIndex(saveIndex);
        const find = enWord.slice(rand, rand + 1);
        props.setfindEn3(find.toString());
        props.setAskWord3(find.toString());
        setWord(find.toString());
      } else {
        refresh();
      }
    };
  
    const setHandler = (el: any) => {
      props.setSendWord3(el);
    };
    const minusButton = function () {
      props.setTableBoolean2(false);
      props.setAddButton1(true);
    };
    return (
      <div className="grid grid-cols-2 gap-2 m-auto">
      <p className="group w-full relative rounded-xl p-1 bg-black text-center items-center text-white font-bold text-[1rem] italic overflow-hidden ease-in duration-500">
        
          {word}
          <button className="minusButton group-hover:translate-x-[0.5rem]" onClick={minusButton}>
            -
          </button>
        </p>
        <input
          type="text"
          value={props.sendWord3}
          onChange={(el) => setHandler(el.target.value)}
        />
      </div>
    );
  });
  
  export default WordTable3;
  