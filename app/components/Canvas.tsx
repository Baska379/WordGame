"use client";

import { useEffect, useRef } from "react";
interface ParticleType {
  x: number;
  y: number;
  color: string;
  radius: number;
  speed: number;
  directionAngle: number;
  vector: { x: number; y: number };
}
export interface OptionsType {
  particleColor: string;
  lineColor: string;
  particleAmount: number;
  defaultRadius: number;
  variantRadius: number;
  defaultSpeed: number;
  variantSpeed: number;
  linkRadius: number;
}
interface Vecor {
  x: number;
  y: number;
}
const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  var w: number;
  var h: number;
  var id: number;
  var loopId: number = 0;
  var particles: Particle<ParticleType>[] = [];
  var canvas: HTMLCanvasElement | null;
  var context: CanvasRenderingContext2D | null;
  var options: OptionsType = {
    particleColor: "rgba(255 , 255, 255)",
    lineColor: "rgba(0,181,255)",
    particleAmount: 100,
    defaultRadius: 10,
    variantRadius: 10,
    defaultSpeed: 1,
    variantSpeed: 1,
    linkRadius: 100,
  };
  var rgb = options.lineColor.match(/\d+/g);
  useEffect(() => {
    canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }
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
      for (var i = 0; i < options.particleAmount; i++) {
        particles.push(new Particle<ParticleType>());
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
        var opacity = 1 - distance / options.linkRadius;
        if (opacity > 0) {
          if (!context) {
            return;
          }
          context.lineWidth = 0.5;
          if (!rgb) {
            return;
          }
          context.strokeStyle =
            "rgba(" +
            rgb[0] +
            "," +
            rgb[1] +
            "," +
            rgb[2] +
            "," +
            opacity +
            ")";
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(hubs[i].x, hubs[i].y);
          context.closePath();
          context.stroke();
        }
      }
    }
    function checkDistance(x1: number, y1: number, x2: number, y2: number) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
  }, []);

  class Particle<ParticleType> {
    x: number = Math.random() * w;
    y: number = Math.random() * h;
    color: string = options.particleColor;
    radius: number =
      options.defaultRadius + Math.random() * options.variantRadius;
    speed: number = options.defaultSpeed + Math.random() * options.variantSpeed;
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
      if (this.x >= w || this.x <= 0) {
        this.vector.x *= -1;
      }
      if (this.y >= h || this.y <= 0) {
        this.vector.y *= -1;
      }
      if (this.x > w) this.x = w;
      if (this.y > h) this.y = h;
      if (this.x < 0) this.x = 0;
      if (this.y < 0) this.y = 0;
    };

    draw: () => void = function (this: Particle<ParticleType>) {
      if (!context) {
        return;
      }
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    };
  }

  return <canvas ref={canvasRef} id="canvas" />;
};
export default Canvas;
