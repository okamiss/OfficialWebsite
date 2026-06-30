import { useEffect, useState } from "react";
import { nav } from "../data/content";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link of the section currently in view.
  useEffect(() => {
    const ids = nav.links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--c-line)] bg-[rgba(5,8,20,0.66)] backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between md:h-18">
        <Logo zh={nav.brand.zh} code={nav.brand.code} />

        {/* Desktop nav — glass pill with active indicator */}
        <nav className="hidden items-center gap-0.5 rounded-full border border-[var(--c-line)] bg-[rgba(255,255,255,0.025)] px-1.5 py-1.5 backdrop-blur-md lg:flex">
          {nav.links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors duration-300 ${
                  isActive ? "text-ink" : "text-mist hover:text-ink"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full border border-[var(--c-line-strong)] bg-[rgba(34,211,238,0.08)] shadow-[inset_0_0_18px_-8px_rgba(34,211,238,0.9)]" />
                )}
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={nav.actions.secondary.href}
            className="btn btn-ghost !py-2.5 !px-4 text-sm"
          >
            {nav.actions.secondary.label}
          </a>
          <a
            href={nav.actions.primary.href}
            className="btn btn-primary !py-2.5 !px-4 text-sm"
          >
            {nav.actions.primary.label}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--c-line-strong)] bg-[rgba(255,255,255,0.03)] lg:hidden"
        >
          <div className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-ink transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-ink transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-[var(--c-line)] bg-[rgba(5,8,20,0.96)] backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="shell flex flex-col py-4">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`border-b border-[var(--c-line)] py-3.5 font-display text-lg transition-colors ${
                active === l.href ? "text-ink" : "text-mist hover:text-ink"
              }`}
            >
              {l.label}
            </a>
          ))}
          <div className="mt-4 flex gap-3">
            <a
              href={nav.actions.secondary.href}
              onClick={() => setOpen(false)}
              className="btn btn-ghost flex-1"
            >
              {nav.actions.secondary.label}
            </a>
            <a
              href={nav.actions.primary.href}
              onClick={() => setOpen(false)}
              className="btn btn-primary flex-1"
            >
              {nav.actions.primary.label}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
