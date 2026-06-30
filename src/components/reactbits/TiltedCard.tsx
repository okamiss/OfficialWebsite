import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/**
 * TiltedCard — 3D pointer-tilt wrapper for floating glass cards.
 * Also drives the CSS spotlight vars (--mx/--my) on the same element.
 * No tilt under reduced-motion; renders a static container instead.
 */
interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  max?: number; // max tilt deg
  scale?: number;
  reduced?: boolean;
  style?: React.CSSProperties;
}

export default function TiltedCard({
  children,
  className = "",
  max = 8,
  scale = 1.012,
  reduced = false,
  style,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 220, damping: 22 });
  const sry = useSpring(ry, { stiffness: 220, damping: 22 });
  const rotateX = useTransform(srx, (v) => `${v}deg`);
  const rotateY = useTransform(sry, (v) => `${v}deg`);

  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 2 * max);
    rx.set((0.5 - py) * 2 * max);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
