import { useEffect, useRef } from "react";

/**
 * ClickSpark — emits a tiny burst of sparks at the pointer on click.
 * Full-viewport canvas overlay (pointer-events: none). Self-disables
 * for reduced-motion. A subtle activetheory-style micro-delight.
 */
interface ClickSparkProps {
  colors?: string[];
  sparkCount?: number;
  size?: number;
  duration?: number; // ms
  reduced?: boolean;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  start: number;
  color: string;
}

export default function ClickSpark({
  colors = ["#22d3ee", "#3b6dff", "#8b5cf6"],
  sparkCount = 9,
  size = 13,
  duration = 420,
  reduced = false,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let sparks: Spark[] = [];
    let raf = 0;

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparks = sparks.filter((s) => now - s.start < duration);
      sparks.forEach((s) => {
        const t = (now - s.start) / duration;
        const e = ease(t);
        const dist = e * 26;
        const x1 = s.x + Math.cos(s.angle) * dist;
        const y1 = s.y + Math.sin(s.angle) * dist;
        const x2 = s.x + Math.cos(s.angle) * (dist + size * (1 - e));
        const y2 = s.y + Math.sin(s.angle) * (dist + size * (1 - e));
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = 1 - t;
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
      if (sparks.length) {
        raf = requestAnimationFrame(draw);
      } else {
        raf = 0;
      }
    };

    const onClick = (e: MouseEvent) => {
      const now = performance.now();
      for (let i = 0; i < sparkCount; i++) {
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          angle: (Math.PI * 2 * i) / sparkCount,
          start: now,
          color: colors[i % colors.length],
        });
      }
      if (!raf) raf = requestAnimationFrame(draw);
    };

    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [colors, sparkCount, size, duration, reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55]"
    />
  );
}
