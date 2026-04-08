import React, { useState, useEffect } from "react";
import {
  Nav,
  Hero,
  Agents,
  Chain,
  Industry,
  Compliance,
  CTA,
  Footer,
  globalStyles
} from "./components";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="ascoyo-root">
      <Nav scrolled={scrolled} />
      <main>
        <Hero />
        <Agents />
        <Chain />
        <Industry />
        <Compliance />
        <CTA />
      </main>
      <Footer />
      <style>{globalStyles}</style>
    </div>
  );
};

export default App;
