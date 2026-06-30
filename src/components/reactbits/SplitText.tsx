import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

/**
 * SplitText — reveals a heading char-by-char (or word-by-word) when it
 * scrolls into view. Renders plain text instantly for reduced-motion.
 * Preserves line breaks by splitting on words; spaces are non-breaking.
 */
interface SplitTextProps {
  text: string;
  className?: string;
  splitBy?: "chars" | "words";
  delay?: number; // ms between items
  duration?: number; // s per item
  y?: number;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  reduced?: boolean;
  startDelay?: number; // s before the first item
}

export default function SplitText({
  text,
  className = "",
  splitBy = "chars",
  delay = 28,
  duration = 0.6,
  y = 36,
  as = "span",
  reduced = false,
  startDelay = 0,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const Tag = as as React.ElementType;

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((word, wi) => {
        const units = splitBy === "chars" ? Array.from(word) : [word];
        // global index offset so stagger flows across words
        const offset =
          words.slice(0, wi).reduce((a, w) => a + (splitBy === "chars" ? w.length : 1), 0) +
          wi;
        return (
          <span
            key={wi}
            aria-hidden
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {units.map((u, ui) => {
              const idx = offset + ui;
              return (
                <motion.span
                  key={ui}
                  style={{ display: "inline-block", willChange: "transform, opacity" }}
                  initial={{ y, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y, opacity: 0 }}
                  transition={{
                    duration,
                    ease: [0.16, 1, 0.3, 1],
                    delay: startDelay + (idx * delay) / 1000,
                  }}
                >
                  {u}
                </motion.span>
              );
            })}
            {wi < words.length - 1 && " "}
          </span>
        );
      })}
    </Tag>
  );
}
