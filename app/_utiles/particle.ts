"use client";
export interface ParticleType {
  x: number;
  y: number;
  color: string;
  radius: number;
  speed: number;
  directionAngle: number;
  vector: { x: number; y: number };
}
interface Vecor {
  x: number;
  y: number;
}
export interface OptionsType {
  particleColor: string;
  defaultRadius: number;
  variantRadius: number;
  defaultSpeed: number;
  variantSpeed: number;
}

export function init(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d");
  var w: number;
  var h: number;
  var id: number;
  var loopId: number = 0;
  var particles: Particle<ParticleType>[] = [];
  var option = {
    lineColor: "rgba(0,181,255)",
    particleAmount: 100,
    linkRadius: 100,
  };
  var rgb = option.lineColor.match(/\d+/g);
  resizeReset();
  initailiseElements();
  startAnimation();
  function resizeReset() {
    if (!canvas) {
      return;
    }
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  function initailiseElements() {
    for (var i = 0; i < option.particleAmount; i++) {
      if (!context) return;
      particles.push(new Particle<ParticleType>(context, w, h));
    }
  }
  function startAnimation() {
    loopId = requestAnimationFrame(animationLoop);
  }
  function animationLoop() {
    if (!context) {
      return;
    }
    context.clearRect(1, 1, w, h);
    drawScene();
    id = requestAnimationFrame(animationLoop);
  }
  function drawScene() {
    drawLine();
    drawParticle();
  }
  function drawParticle() {
    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
  }
  function drawLine() {
    for (var i = 0; i < particles.length; i++) {
      linkPoints(particles[i], particles);
    }
  }
  function linkPoints(
    point: Particle<ParticleType>,
    hubs: Particle<ParticleType>[]
  ) {
    for (var i = 0; i < hubs.length; i++) {
      var distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
      var opacity = 1 - distance / option.linkRadius;
      if (opacity > 0) {
        if (!context) {
          return;
        }
        context.lineWidth = 0.5;
        if (!rgb) {
          return;
        }
        context.strokeStyle =
          "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + opacity + ")";
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(hubs[i].x, hubs[i].y);
        context.closePath();
        context.stroke();
      }
    }
    function checkDistance(x1: number, y1: number, x2: number, y2: number) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
  }
}
class Particle<ParticleType> {
  context;
  options: OptionsType = {
    particleColor: "rgba(255 , 255, 255)",
    defaultRadius: 1,
    variantRadius: 1,
    defaultSpeed: 1,
    variantSpeed: 1,
  };
  width;
  height;
  x;
  y;
  constructor(context: CanvasRenderingContext2D, w: number, h: number) {
    this.context = context;
    this.width = w;
    this.height = h;
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
  }
  color: string = this.options.particleColor;
  radius: number =
    this.options.defaultRadius + Math.random() * this.options.variantRadius;
  speed: number =
    this.options.defaultSpeed + Math.random() * this.options.variantSpeed;
  directionAngle: number = Math.floor(Math.random() * 360);
  vector: Vecor = {
    x: Math.cos(this.directionAngle) * this.speed,
    y: Math.sin(this.directionAngle) * this.speed,
  };

  update: () => void = function (this: Particle<ParticleType>) {
    this.border();
    this.x += this.vector.x;
    this.y += this.vector.y;
  };

  border: () => void = function (this: Particle<ParticleType>) {
    if (this.x >= this.width || this.x <= 0) {
      this.vector.x *= -1;
    }
    if (this.y >= this.height || this.y <= 0) {
      this.vector.y *= -1;
    }
    if (this.x > this.width) this.x = this.width;
    if (this.y > this.height) this.y = this.height;
    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
  };

  draw: () => void = function (this: Particle<ParticleType>) {
    if (!this.context) {
      return;
    }
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.context.closePath();
    this.context.fillStyle = this.color;
    this.context.fill();
  };
}
