import { hero } from "../data/content";
import HeroConsole from "./HeroConsole";
import Aurora from "./reactbits/Aurora";
import BlurText from "./reactbits/BlurText";
import ShinyText from "./reactbits/ShinyText";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pt-44 md:pb-28"
    >
      {/* react-bits Aurora — ambient WebGL backdrop (skipped for reduced motion) */}
      {!reduced && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[80%] opacity-50 [mask-image:linear-gradient(to_bottom,#000_10%,transparent_85%)]"
        >
          <Aurora
            colorStops={["#22d3ee", "#3b6dff", "#8b5cf6"]}
            amplitude={1.0}
            blend={0.6}
            speed={0.4}
          />
        </div>
      )}
      {/* grid backdrop */}
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade" />
      {/* ambient orbs */}
      <div
        className="orb anim-drift -z-10"
        style={{
          width: 520,
          height: 520,
          left: "-8%",
          top: "-12%",
          background:
            "radial-gradient(circle, rgba(59,109,255,0.28), transparent 60%)",
        }}
      />
      <div
        className="orb -z-10"
        style={{
          width: 420,
          height: 420,
          right: "-6%",
          top: "8%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.18), transparent 60%)",
        }}
      />
      {/* top fade to blend the fixed header */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-void to-transparent" />

      <div className="shell grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div className="min-w-0">
          <div
            data-reveal
            className="inline-flex items-center gap-2.5 rounded-full border border-[var(--c-line-strong)] bg-[rgba(255,255,255,0.03)] px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            {reduced ? (
              <span className="font-mono text-xs tracking-wider text-mist">
                {hero.badge}
              </span>
            ) : (
              <ShinyText
                text={hero.badge}
                speed={5}
                color="#9aa6c4"
                shineColor="#ffffff"
                className="font-mono text-xs tracking-wider"
              />
            )}
          </div>

          <h1
            data-reveal
            style={{ ["--reveal-delay" as string]: "80ms" }}
            className="mt-6 font-display text-[2.6rem] font-bold leading-[1.04] tracking-tight sm:text-6xl md:text-[4.1rem]"
          >
            <span className="block">{hero.title[0]}</span>
            <span className="block text-gradient">{hero.title[1]}</span>
            <span className="block">{hero.title[2]}</span>
          </h1>

          {reduced ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              {hero.subtitle}
            </p>
          ) : (
            <BlurText
              text={hero.subtitle}
              animateBy="letters"
              direction="bottom"
              delay={18}
              stepDuration={0.3}
              className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
            />
          )}

          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "240ms" }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {hero.keywords.map((k) => (
              <span key={k} className="tag">
                {k}
              </span>
            ))}
          </div>

          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "320ms" }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href={hero.actions.primary.href} className="btn btn-primary">
              {hero.actions.primary.label}
              <span aria-hidden>→</span>
            </a>
            <a href={hero.actions.secondary.href} className="btn btn-ghost">
              {hero.actions.secondary.label}
            </a>
          </div>
        </div>

        {/* Visual */}
        <div
          data-reveal
          className="min-w-0"
          style={{ ["--reveal-delay" as string]: "200ms" }}
        >
          <HeroConsole />
        </div>
      </div>
    </section>
  );
}
