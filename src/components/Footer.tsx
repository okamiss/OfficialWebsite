import { footer, nav } from "../data/content";
import Logo from "./Logo";
import ShinyText from "./reactbits/ShinyText";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Footer() {
  const reduced = usePrefersReducedMotion();
  return (
    <footer className="relative border-t border-[var(--c-line)] pt-16 pb-10">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo zh={footer.brand.zh} code={footer.brand.code} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              零壹是一家面向未来的技术产品工作室，专注 AI、SaaS、自动化与互动产品，帮助想法从 0 到 1 落地。
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--c-line)] px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]" />
              <ShinyText
                text={footer.tagline.toUpperCase()}
                disabled={reduced}
                speed={4}
                color="#6b7699"
                shineColor="#22d3ee"
                className="font-mono text-[0.7rem] tracking-[0.28em]"
              />
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="font-mono text-[0.7rem] uppercase tracking-widest text-faint">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-mist transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 rule-node" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs text-faint">{footer.copyright}</p>
          <div className="flex items-center gap-5">
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-mist transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
