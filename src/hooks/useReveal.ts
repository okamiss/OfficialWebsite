import { useEffect } from "react";

/**
 * Adds `.is-visible` to every `[data-reveal]` element as it enters the
 * viewport. Uses a shared IntersectionObserver, plus a scroll-driven
 * viewport sweep as a robust fallback (covers programmatic scrolls and
 * edge timing where the observer's initial callback is missed).
 * Reduced-motion users get content shown immediately.
 */
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealAll = () =>
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));

    if (reduce || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    document
      .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
      .forEach((el) => io.observe(el));

    // Fallback sweep: reveal anything already within the viewport that the
    // observer hasn't flagged yet (rAF-throttled, passive listeners).
    let raf = 0;
    const sweep = () => {
      raf = 0;
      const vh = window.innerHeight;
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.92 && r.bottom > 0) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(sweep);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    sweep();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
