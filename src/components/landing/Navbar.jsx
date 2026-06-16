import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What We Offer", href: "#offer" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href, delay = 0) => {
    const doScroll = () => {
      const el = document.querySelector(href);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    if (delay) setTimeout(doScroll, delay);
    else doScroll();
  };

  const handleDesktopClick = (href) => {
    scrollToSection(href);
  };

  const handleMobileClick = (href) => {
    setMobileOpen(false);
    scrollToSection(href, 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
          className="font-heading font-bold tracking-tight transition-all duration-300"
          style={{ fontSize: scrolled ? "1.25rem" : "1.5rem", letterSpacing: "-0.04em" }}
        >
          <span className="text-primary">Kasi Steel </span>
          <span className="text-foreground">House</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleDesktopClick(link.href); }}
              className="relative px-4 py-2 text-sm font-medium tracking-wide uppercase group"
              style={{ letterSpacing: "0.1em" }}
            >
              <span className={`transition-colors duration-300 ${
                activeSection === link.href.slice(1) ? "text-primary" : "text-foreground/70 group-hover:text-foreground"
              }`}>
                {link.label}
              </span>
              <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left ${
                activeSection === link.href.slice(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </a>
          ))}
        </div>



        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleMobileClick(link.href); }}
                  className={`py-3 text-sm font-medium uppercase tracking-widest transition-colors ${
                    activeSection === link.href.slice(1) ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}