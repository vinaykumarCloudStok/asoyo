import React, { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Agents } from "./components/Agents";
import { Chain } from "./components/Chain";
import { Industry } from "./components/Industry";
import { Compliance } from "./components/Compliance";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { globalStyles } from "./components/styles";


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
      <Hero />
      <Agents />
      <Chain />
      <Industry />
      <Compliance />
      <CTA />
      <Footer />
      <style>{globalStyles}</style>
    </div>
  );
};

export default App;
