import { products } from "../data/content";
import SectionHeading from "./SectionHeading";
import TiltedCard from "./reactbits/TiltedCard";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const accentRgb: Record<string, string> = {
  electric: "59,109,255",
  cyan: "34,211,238",
  violet: "139,92,246",
};

export default function Products() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="products" className="relative overflow-hidden py-24 md:py-32">
      {/* subtle section glow */}
      <div
        className="orb -z-10"
        style={{
          width: 600,
          height: 600,
          left: "50%",
          top: "10%",
          transform: "translateX(-50%)",
          opacity: 0.25,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.4), transparent 60%)",
        }}
      />
      <div className="shell">
        <SectionHeading
          index={products.index}
          eyebrow={products.eyebrow}
          title={products.title}
          subtitle={products.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {products.items.map((p, i) => {
            const rgb = accentRgb[p.accent] ?? accentRgb.electric;
            return (
              <div
                key={p.no}
                data-reveal="scale"
                style={{ ["--reveal-delay" as string]: `${(i % 2) * 110}ms` }}
              >
                <TiltedCard
                  reduced={reduced}
                  max={6}
                  className="group glass spotlight relative flex h-full flex-col overflow-hidden rounded-3xl p-7 sm:p-8"
                >
                  {/* per-accent corner glow */}
                  <span
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                    style={{
                      background: `radial-gradient(circle, rgba(${rgb},0.7), transparent 65%)`,
                    }}
                  />
                  {/* top accent line */}
                  <span
                    className="absolute inset-x-0 top-0 h-px opacity-70"
                    style={{
                      background: `linear-gradient(to right, transparent, rgba(${rgb},0.8), transparent)`,
                    }}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs text-faint">
                        PRODUCT / {p.no}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-semibold leading-snug sm:text-2xl">
                        {p.name}
                      </h3>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-3 py-1 font-mono text-[0.66rem] tracking-wide text-ink"
                      style={{
                        border: `1px solid rgba(${rgb},0.5)`,
                        background: `rgba(${rgb},0.08)`,
                      }}
                    >
                      {p.type}
                    </span>
                  </div>

                  <p className="relative mt-5 flex-1 text-sm leading-relaxed text-mist sm:text-[0.95rem]">
                    {p.desc}
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </TiltedCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
