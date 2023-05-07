"use client";
export function dashInit(
  context: CanvasRenderingContext2D,
  y: number,
  x: number,
  y2: number,
  x2: number,
  w: number,
  h: number
) {
  var request: number;
  const ctx: CanvasRenderingContext2D = context;
  var xSpeed: number = 10;
  var ySize: number = y2 - y;
  var xSize: number = x2 - x;
  var yTime: number = (ySize / xSize) * xSpeed;
  var timeE: number = Math.floor((xSize + xSpeed) / xSpeed) * xSpeed;
  var time: number = 0;
  var xTime: number = xSize / xSpeed;
  const dash = new Dash(ctx, y, x, y2, x2, yTime, xSpeed);
  function animate() {
    time += xSpeed;
    dash.update();
    dash.draw();
    request = requestAnimationFrame(animate);
    if (time === timeE) {
      cancelAnimationFrame(request);
      ctx.clearRect(1, 1, w, h);
    }
  }
  animate();

  return { boo: true, xTime: xTime };
}

class Dash {
  ctx;
  y: number;
  x: number;
  y2: number;
  x2: number;
  wid;
  yTime: number;
  xTime: number;
  constructor(
    ctx: CanvasRenderingContext2D,
    y: number,
    x: number,
    y2: number,
    x2: number,
    yTime: number,
    xTime: number
  ) {
    this.ctx = ctx;
    this.y = y;
    this.x = x;
    this.x2 = x2;
    this.y2 = y2;
    this.wid = 1;
    this.yTime = yTime;
    this.xTime = xTime;
  }
  update() {
    this.x += this.xTime;
    this.y += this.yTime;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x - this.xTime, this.y - this.yTime, 10, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fillStyle = "rgba(255 , 255, 255, 0.5)";
    this.ctx.fill();
  }
}
