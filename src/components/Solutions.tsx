import { solutions } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index={solutions.index}
          eyebrow={solutions.eyebrow}
          title={solutions.title}
          subtitle={solutions.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {solutions.items.map((s, i) => (
            <article
              key={s.no}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
              className="card-hover group surface relative flex flex-col rounded-3xl p-7 sm:p-8"
            >
              {/* big ghost numeral */}
              <span className="pointer-events-none absolute right-5 top-3 font-mono text-6xl font-bold text-white/[0.04] transition-colors group-hover:text-white/[0.07]">
                {s.no}
              </span>

              <span className="eyebrow">Solution {s.no}</span>
              <h3 className="mt-4 max-w-[14rem] font-display text-xl font-semibold leading-snug">
                {s.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-mist">
                <span className="text-faint">适合：</span>
                {s.fit}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-[var(--c-line)] pt-5">
                {s.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-center gap-2.5 text-sm text-mist"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="shrink-0 text-cyan"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
