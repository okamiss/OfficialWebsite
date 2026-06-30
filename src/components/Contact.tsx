import { contact } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--c-line-strong)] bg-[var(--color-abyss)] px-7 py-16 text-center sm:px-12 sm:py-20">
          {/* grid + glow backdrop */}
          <div className="absolute inset-0 -z-0 bg-grid bg-grid-fade opacity-70" />
          <div
            className="orb"
            style={{
              width: 560,
              height: 360,
              left: "50%",
              top: "-20%",
              transform: "translateX(-50%)",
              opacity: 0.5,
              background:
                "radial-gradient(circle, rgba(59,109,255,0.5), transparent 60%)",
            }}
          />

          <div className="relative mx-auto max-w-2xl">
            <div data-reveal className="flex items-center justify-center gap-3">
              <span className="font-mono text-xs text-faint">
                {contact.index}
              </span>
              <span className="h-px w-8 bg-[var(--c-line-strong)]" />
              <span className="eyebrow">{contact.eyebrow}</span>
            </div>

            <h2
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
              className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
            >
              {contact.title}
            </h2>

            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "160ms" }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
            >
              {contact.body}
            </p>

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "240ms" }}
              className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <a href={contact.actions.primary.href} className="btn btn-primary">
                {contact.actions.primary.label}
                <span aria-hidden>→</span>
              </a>
              <a
                href={contact.actions.secondary.href}
                className="btn btn-ghost"
              >
                {contact.actions.secondary.label}
              </a>
            </div>

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "320ms" }}
              className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--c-line)] bg-[var(--c-line)] sm:grid-cols-3"
            >
              {contact.channels.map((c) => (
                <div key={c.k} className="bg-[var(--color-panel)] px-5 py-4">
                  <div className="font-mono text-[0.66rem] uppercase tracking-widest text-faint">
                    {c.k}
                  </div>
                  <div className="mt-1.5 text-sm text-ink">{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
