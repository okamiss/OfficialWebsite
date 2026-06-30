import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="shell grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: oversized 0 → 1 mark (the signature, restated) */}
        <div
          data-reveal
          className="relative grid aspect-square w-full max-w-sm place-items-center self-center justify-self-center rounded-3xl border border-[var(--c-line)] bg-grid"
        >
          <div
            className="orb"
            style={{
              width: 260,
              height: 260,
              opacity: 0.4,
              background:
                "radial-gradient(circle, rgba(139,92,246,0.5), transparent 60%)",
            }}
          />
          <div className="relative flex items-center gap-4 font-mono font-bold">
            <span className="text-7xl text-faint sm:text-8xl">0</span>
            <span className="anim-spin-slow text-3xl text-cyan">✦</span>
            <span className="text-7xl text-gradient sm:text-8xl">1</span>
          </div>
          <span className="absolute bottom-6 font-mono text-[0.7rem] tracking-[0.35em] text-faint">
            FROM ZERO TO ONE
          </span>
        </div>

        {/* Right: copy */}
        <div>
          <div data-reveal className="flex items-center gap-3">
            <span className="font-mono text-xs text-faint">{about.index}</span>
            <span className="h-px w-8 bg-[var(--c-line-strong)]" />
            <span className="eyebrow">{about.eyebrow}</span>
          </div>

          <h2
            data-reveal
            style={{ ["--reveal-delay" as string]: "80ms" }}
            className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            {about.title}
          </h2>

          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "160ms" }}
            className="mt-6 text-base leading-relaxed text-mist sm:text-lg"
          >
            {about.body}
          </p>

          <dl
            data-reveal
            style={{ ["--reveal-delay" as string]: "240ms" }}
            className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--c-line)] bg-[var(--c-line)] sm:grid-cols-3"
          >
            {about.pillars.map((p) => (
              <div key={p.k} className="bg-[var(--color-panel)] p-5">
                <dt className="font-mono text-[0.66rem] uppercase tracking-widest text-cyan">
                  {p.k}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-ink">{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
