import { capabilities as cap } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Capabilities() {
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
          {cap.items.map((item, i) => (
            <article
              key={item.no}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              className="card-hover group surface relative flex flex-col rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-faint transition-colors group-hover:text-cyan">
                  {item.no}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--c-line)] text-cyan transition-all group-hover:border-cyan/40 group-hover:bg-[rgba(34,211,238,0.08)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
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
                  <span
                    key={t}
                    className="font-mono text-[0.66rem] text-faint"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
