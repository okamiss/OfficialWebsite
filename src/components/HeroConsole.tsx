import CountUp from "./reactbits/CountUp";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * Signature visual: an abstract "AI 控制台 / 数据面板".
 * Built entirely from CSS + SVG (no images). It dramatizes the 0 → 1
 * transformation that defines the 零壹 brand.
 */
export default function HeroConsole() {
  const reduced = usePrefersReducedMotion();
  const bars = [0.4, 0.7, 0.5, 0.9, 0.62, 0.8, 0.45, 0.72, 0.55, 0.85, 0.5, 0.68];

  const metrics = [
    { k: "Deploy", to: 100, decimals: 0, suffix: "%" },
    { k: "Latency", to: 42, decimals: 0, suffix: "ms" },
    { k: "Uptime", to: 99.9, decimals: 1, suffix: "%" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      {/* glow behind panel */}
      <div
        className="orb anim-drift"
        style={{
          width: 360,
          height: 360,
          right: -40,
          top: -50,
          background:
            "radial-gradient(circle, rgba(59,109,255,0.55), transparent 60%)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 280,
          height: 280,
          left: -50,
          bottom: -40,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.5), transparent 60%)",
        }}
      />

      {/* Floating mini chip — top right */}
      <div
        className="anim-float glass absolute -right-3 -top-6 z-20 hidden rounded-2xl p-3 sm:block"
        style={{ animationDelay: "-2s" }}
      >
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-[rgba(34,211,238,0.12)] font-mono text-xs font-bold text-cyan">
            AI
          </span>
          <div className="leading-tight">
            <div className="text-[0.65rem] text-mist">Model</div>
            <div className="font-mono text-xs text-ink">RAG · online</div>
          </div>
          <span className="ml-1 h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(34,211,238,0.8)]" />
        </div>
      </div>

      {/* Main console */}
      <div className="anim-float surface relative z-10 overflow-hidden rounded-3xl">
        {/* scanline */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent"
            style={{ animation: "scan 5.5s linear infinite" }}
          />
        </div>

        {/* window bar */}
        <div className="flex items-center justify-between border-b border-[var(--c-line)] px-5 py-3.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-[0.7rem] tracking-widest text-faint">
            01://console
          </span>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          {/* The 0 → 1 transform */}
          <div className="flex items-center justify-between rounded-2xl border border-[var(--c-line)] bg-[rgba(255,255,255,0.02)] px-5 py-4">
            <div className="text-center">
              <div className="font-mono text-4xl font-bold text-faint">0</div>
              <div className="mt-1 text-[0.6rem] uppercase tracking-widest text-faint">
                idea
              </div>
            </div>
            <div className="relative mx-3 h-px flex-1">
              <div className="absolute inset-0 bg-gradient-to-r from-faint/30 via-electric to-violet" />
              <svg
                className="absolute -right-1 -top-1.5 text-violet"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center">
              <div className="font-mono text-4xl font-bold text-gradient">1</div>
              <div className="mt-1 text-[0.6rem] uppercase tracking-widest text-cyan">
                product
              </div>
            </div>
          </div>

          {/* equalizer / data bars */}
          <div className="flex h-24 items-end gap-1.5 rounded-2xl border border-[var(--c-line)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 origin-bottom rounded-sm"
                style={{
                  height: `${h * 100}%`,
                  background:
                    "linear-gradient(to top, rgba(59,109,255,0.25), #22d3ee)",
                  animation: "pulse-bar 2.4s ease-in-out infinite",
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}
          </div>

          {/* metric rows — react-bits CountUp drives the rolling numbers */}
          <div className="grid grid-cols-3 gap-3">
            {metrics.map((m) => (
              <div
                key={m.k}
                className="rounded-xl border border-[var(--c-line)] bg-[rgba(255,255,255,0.02)] px-3 py-2.5"
              >
                <div className="font-mono text-base font-bold text-ink">
                  {reduced ? (
                    m.to.toFixed(m.decimals)
                  ) : (
                    <CountUp to={m.to} duration={1.6} />
                  )}
                  {m.suffix}
                </div>
                <div className="mt-0.5 text-[0.62rem] text-faint">{m.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating mini chip — bottom left */}
      <div
        className="anim-float glass absolute -bottom-5 -left-3 z-20 hidden rounded-2xl px-4 py-3 sm:block"
        style={{ animationDelay: "-4s" }}
      >
        <div className="font-mono text-[0.6rem] tracking-widest text-faint">
          BUILD
        </div>
        <div className="mt-0.5 font-display text-sm font-semibold">
          <span className="text-gradient">zero → one</span>
        </div>
      </div>
    </div>
  );
}
