import Header from "./components/Header";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Products from "./components/Products";
import Solutions from "./components/Solutions";
import Stats from "./components/Stats";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/reactbits/Particles";
import ClickSpark from "./components/reactbits/ClickSpark";
import { useReveal } from "./hooks/useReveal";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

export default function App() {
  useReveal();
  useScrollProgress();
  const reduced = usePrefersReducedMotion();

  return (
    <div className="relative min-h-dvh">
      {/* ── Immersive ambient layer (fixed, behind everything) ── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-50">
        {/* flowing multi-hue mesh */}
        <div className="absolute inset-0 mesh-bg opacity-70" />
        {/* deep vignette to anchor the void base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(130% 90% at 50% -10%, transparent 40%, rgba(5,8,20,0.7) 100%)",
          }}
        />
        {/* drifting WebGL particle dust */}
        {!reduced && (
          <div className="absolute inset-0 opacity-60">
            <Particles />
          </div>
        )}
      </div>

      {/* top scroll-progress bar */}
      <div aria-hidden className="scroll-progress" />

      {/* global click micro-spark */}
      <ClickSpark reduced={reduced} />

      <Header />
      <main>
        <Hero />
        <div className="shell">
          <div className="rule-node" />
        </div>
        <Capabilities />
        <Products />
        <Solutions />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
