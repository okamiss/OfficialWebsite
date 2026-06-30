import React from "react";

/**
 * Marquee — infinite horizontal scroller (CSS-driven, perf-friendly).
 * Children are duplicated so the loop is seamless; hover pauses it.
 * Under reduced-motion the track is static (animation disabled in CSS).
 * Used for the Hero keyword/tech-stack strip.
 */
interface MarqueeProps {
  items: string[];
  duration?: number; // seconds for one full loop
  className?: string;
  reduced?: boolean;
}

export default function Marquee({
  items,
  duration = 34,
  className = "",
  reduced = false,
}: MarqueeProps) {
  const Sep = () => (
    <span aria-hidden className="mx-6 text-electric/60">
      ◇
    </span>
  );

  const row = (
    <>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <span className="font-mono text-sm tracking-wide text-mist whitespace-nowrap">
            {it}
          </span>
          <Sep />
        </React.Fragment>
      ))}
    </>
  );

  if (reduced) {
    return (
      <div className={`marquee-mask overflow-hidden ${className}`}>
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 py-1">
          {row}
        </div>
      </div>
    );
  }

  return (
    <div className={`group/marquee marquee-mask overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        style={{ ["--marquee-dur" as string]: `${duration}s` }}
      >
        <div className="flex items-center pr-0">{row}</div>
        <div className="flex items-center pr-0" aria-hidden>
          {row}
        </div>
      </div>
    </div>
  );
}
