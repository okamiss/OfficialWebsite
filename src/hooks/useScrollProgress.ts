import { useEffect } from "react";

/**
 * Drives the top scroll-progress bar by writing 0→1 into the `--scroll`
 * CSS variable on <html>. rAF-throttled; passive scroll listener.
 * The bar itself is hidden under reduced-motion (see index.css).
 */
export function useScrollProgress() {
  useEffect(() => {
    let raf = 0;
    const root = document.documentElement;

    const update = () => {
      raf = 0;
      const max = root.scrollHeight - root.clientHeight;
      const p = max > 0 ? root.scrollTop / max : 0;
      root.style.setProperty("--scroll", String(Math.min(1, Math.max(0, p))));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
