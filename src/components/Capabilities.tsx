import { capabilities as cap } from "../data/content";
import SectionHeading from "./SectionHeading";
import TiltedCard from "./reactbits/TiltedCard";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const accents = [
  { rgb: "59,109,255", text: "text-electric" }, // electric
  { rgb: "34,211,238", text: "text-cyan" }, // cyan
  { rgb: "139,92,246", text: "text-violet" }, // violet
  { rgb: "255,182,72", text: "text-amber" }, // amber
];

export default function Capabilities() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="capabilities" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index={cap.index}
          eyebrow={cap.eyebrow}
          title={cap.title}
          subtitle={cap.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cap.items.map((item, i) => {
            const a = accents[i % accents.length];
            return (
              <div
                key={item.no}
                data-reveal="scale"
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              >
                <TiltedCard
                  reduced={reduced}
                  className="group glass spotlight relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
                >
                  {/* per-accent corner glow on hover */}
                  <span
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle, rgba(${a.rgb},0.5), transparent 65%)`,
                    }}
                  />
                  {/* top accent line */}
                  <span
                    className="absolute inset-x-0 top-0 h-px opacity-70"
                    style={{
                      background: `linear-gradient(to right, transparent, rgba(${a.rgb},0.7), transparent)`,
                    }}
                  />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-faint transition-colors group-hover:text-ink">
                      {item.no}
                    </span>
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-lg border border-[var(--c-line)] ${a.text} transition-all duration-300 group-hover:scale-110`}
                      style={{ borderColor: `rgba(${a.rgb},0.3)` }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                    {item.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span key={t} className="font-mono text-[0.66rem] text-faint">
                        #{t}
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
