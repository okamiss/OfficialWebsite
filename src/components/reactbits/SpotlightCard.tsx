import React, { useRef } from "react";

/**
 * SpotlightCard — a glass surface with a cursor-follow highlight.
 * Lighter than TiltedCard (no 3D tilt); pairs with the `.spotlight`
 * utility in index.css. Safe under reduced-motion (the glow is a hover
 * affordance, not motion). Renders as a <div>.
 */
interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  ...rest
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`spotlight ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
