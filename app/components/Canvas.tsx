"use client";
import { useEffect, useRef } from "react";

import { dashInit } from "../_utiles/dashLink";
import { useAppDispatch, useAppSelector } from "../useState";
import { g2Dash } from "../GlobalRedux/DashSlice";
import { game2Action } from "../GlobalRedux/game2Slice";
interface DashReturnType {
  boo: boolean;
  xTime: number;
}
const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { x1, x2, y1, y2 } = useAppSelector((state) => state.g2Dash);
  const { gameStart } = useAppSelector((state) => state.game2);
  const disPatch = useAppDispatch();
  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    if (!context) return;
    if (gameStart) {
      const bool: DashReturnType = dashInit(
        context,
        y1,
        x1,
        y2,
        x2,
        canvas.width,
        canvas.height
      );

      if (bool.boo) {
        disPatch(g2Dash.zero());
        disPatch(game2Action.gameStartFalse());
      }
    }
  }, [gameStart]);

  return <canvas ref={canvasRef} id="canvas" />;
};
export default Canvas;
