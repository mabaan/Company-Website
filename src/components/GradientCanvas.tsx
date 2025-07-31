"use client";

import { useEffect, useRef } from "react";

export default function GradientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    let t = 0;
    function draw() {
      resize();
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      t += 0.6;
      ctx.clearRect(0, 0, w, h);

      // "Bold & Dark" color scheme
      const grad = ctx.createLinearGradient(
        Math.cos(t * 0.008) * w * 0.3 + w * 0.5,
        0,
        w,
        Math.sin(t * 0.012) * h * 0.3 + h * 0.7
      );
      grad.addColorStop(0.00, "#e41f26");   // Red
      grad.addColorStop(0.28, "#1570EF");   // Lively blue accent
      grad.addColorStop(0.52, "#003b71");   // Deep company blue
      grad.addColorStop(0.74, "#f3f6f9");   // White/gray for softness
      grad.addColorStop(1.00, "#e41f26");   // Red (loop)

      // Curved/slanted bottom cut
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(w, 0);
      ctx.lineTo(w, h * 0.60);
      ctx.quadraticCurveTo(
        w * 0.5,
        h * 0.75 + Math.sin(t * 0.01) * 32,
        0,
        h * 0.82
      );
      ctx.closePath();
      ctx.clip();

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
