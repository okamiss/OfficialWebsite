import { stats } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 md:py-32">
      <div className="shell">
        <div className="overflow-hidden rounded-[1.75rem] border border-[var(--c-line)] bg-[var(--color-abyss)]">
          {/* banner head */}
          <div className="relative border-b border-[var(--c-line)] bg-grid px-7 py-10 sm:px-12 sm:py-12">
            <div
              className="orb -z-0"
              style={{
                width: 420,
                height: 280,
                right: "-4%",
                top: "-30%",
                opacity: 0.4,
                background:
                  "radial-gradient(circle, rgba(59,109,255,0.45), transparent 60%)",
              }}
            />
            <div className="relative">
              <SectionHeading
                index={stats.index}
                eyebrow={stats.eyebrow}
                title={stats.title}
              />
            </div>
          </div>

          {/* metric grid */}
          <div className="grid grid-cols-1 divide-y divide-[var(--c-line)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {stats.items.map((s, i) => (
              <div
                key={s.key}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="group relative px-7 py-9 transition-colors hover:bg-[rgba(255,255,255,0.015)] sm:px-9 sm:[&:not(:nth-child(odd))]:border-l sm:[&:not(:nth-child(odd))]:border-[var(--c-line)] lg:border-l lg:border-[var(--c-line)] lg:first:border-l-0"
              >
                <div className="font-mono text-4xl font-bold leading-none text-gradient sm:text-5xl">
                  {s.key}
                </div>
                <div className="mt-4 font-display text-sm font-semibold tracking-wide text-ink">
                  {s.label}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {s.desc}
                </p>
                <span className="mt-5 block h-px w-10 bg-gradient-to-r from-cyan to-transparent transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
