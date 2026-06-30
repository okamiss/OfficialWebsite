import Header from "./components/Header";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Products from "./components/Products";
import Solutions from "./components/Solutions";
import Stats from "./components/Stats";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="relative min-h-screen">
      {/* page-wide ambient vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-50"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(59,109,255,0.10), transparent 55%)",
        }}
      />

      <Header />
      <main>
        <Hero />
        {/* thin section divider between hero and the rest */}
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
