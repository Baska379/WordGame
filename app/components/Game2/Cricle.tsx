"use client";
import { game2Action } from "@/app/GlobalRedux/game2Slice";
import { g2Dash } from "../../GlobalRedux/DashSlice";
import { useAppDispatch } from "@/app/useState";
interface PropsType {
  color: string;
  ids: string;
  zone: string;
  word: string;
  disabled: boolean;
  num: string;
}
interface EventType extends EventTarget {
  id: string;
  title: string;
  name: string;
}
const Cricle = (props: PropsType) => {
  const disPatch = useAppDispatch();
  const typeSend = (event: EventTarget) => {
    const dom: HTMLElement | null = document.getElementById(
      (event as EventType).id
    );
    if (!dom) return;
    const domRect: DOMRect = dom.getBoundingClientRect();
    disPatch(
      g2Dash.setPart({
        x: domRect.right,
        y: (domRect.bottom - domRect.top) / 2 + domRect.top,
        x2: domRect.left,
        title: (event as EventType).title,
      })
    );

    disPatch(
      game2Action.check({
        title: (event as EventType).title,
        word: props.word,
        num: (event as EventType).name,
      })
    );
  };
  return (
    <div
      className={`text-white cursor-pointer font-bold text-[1.1rem] w-[10rem] h-[4rem] flex gap-5 self-center justify-center  text-center  items-center `}
    >
      <button
        title={props.zone}
        name={props.num}
        id={`@@@${props.ids}@@@`}
        onClick={(event) => typeSend(event.target)}
        disabled={props.disabled}
        className={`w-full h-full rounded-[40%] overflow-visible smScreenMax:w-[70%] smScreenMax:text-[13px] smScreenMax:h-[70%] ${props.color}`}
      >
        {props.word.split(", ")[0]}
      </button>
    </div>
  );
};

export default Cricle;
