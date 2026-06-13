"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle matrix-style falling glyph background, rendered on canvas.
 * Honors prefers-reduced-motion (renders nothing / static) and pauses when
 * the tab is hidden to keep the main thread free.
 */
export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const glyphs = "01<>{}[]/\\=+*ABCDEF$#@λΣ".split("");
    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * height) / fontSize) * -1
      );
    };
    resize();

    let raf = 0;
    let last = 0;
    const interval = 70; // ms between frames — slow, ambient

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < interval) return;
      last = t;

      ctx.fillStyle = "rgba(10, 14, 20, 0.10)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px var(--font-jetbrains, monospace)`;

      for (let i = 0; i < drops.length; i++) {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const lead = Math.random() > 0.975;
        ctx.fillStyle = lead ? "rgba(180, 255, 200, 0.9)" : "rgba(34, 197, 94, 0.28)";
        ctx.fillText(char, x, y);
        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    raf = requestAnimationFrame(draw);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        last = 0;
        raf = requestAnimationFrame(draw);
      }
    };

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-[0.35]"
    />
  );
}
