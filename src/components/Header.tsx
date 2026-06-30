import { useEffect, useState } from "react";
import { nav } from "../data/content";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          ? "border-b border-[var(--c-line)] bg-[rgba(5,8,20,0.72)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between md:h-18">
        <Logo zh={nav.brand.zh} code={nav.brand.code} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-mist transition-colors duration-300 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={nav.actions.secondary.href} className="btn btn-ghost !py-2.5 !px-4 text-sm">
            {nav.actions.secondary.label}
          </a>
          <a href={nav.actions.primary.href} className="btn btn-primary !py-2.5 !px-4 text-sm">
            {nav.actions.primary.label}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--c-line-strong)] lg:hidden"
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
              className="border-b border-[var(--c-line)] py-3.5 font-display text-lg text-mist transition-colors hover:text-ink"
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
