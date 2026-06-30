import { products } from "../data/content";
import SectionHeading from "./SectionHeading";

const accentMap: Record<string, string> = {
  electric: "rgba(59,109,255,0.55)",
  cyan: "rgba(34,211,238,0.55)",
  violet: "rgba(139,92,246,0.55)",
};

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden py-24 md:py-32"
    >
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
          {products.items.map((p, i) => (
            <article
              key={p.no}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 2) * 100}ms` }}
              className="card-hover group surface relative flex flex-col overflow-hidden rounded-3xl p-7 sm:p-8"
            >
              {/* top accent line */}
              <span
                className="absolute inset-x-0 top-0 h-px opacity-60"
                style={{
                  background: `linear-gradient(to right, transparent, ${
                    accentMap[p.accent]
                  }, transparent)`,
                }}
              />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-faint">
                    PRODUCT / {p.no}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-snug sm:text-2xl">
                    {p.name}
                  </h3>
                </div>
                <span
                  className="shrink-0 rounded-full px-3 py-1 font-mono text-[0.66rem] tracking-wide"
                  style={{
                    color: "#cdd6f4",
                    border: `1px solid ${accentMap[p.accent]}`,
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  {p.type}
                </span>
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-mist sm:text-[0.95rem]">
                {p.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
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
