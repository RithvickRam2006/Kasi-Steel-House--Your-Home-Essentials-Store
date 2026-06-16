import React, { useState, useEffect } from "react";
import { ArrowUp, Facebook, Instagram, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What We Offer", href: "#offer" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: Instagram, href: "https://www.instagram.com/kasi_steel_house_nagercoil?igsh=MTI2a2toZjc1a3VsMg==", label: "Instagram" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-foreground text-background/70 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <p className="font-heading font-bold text-xl text-background mb-4" style={{ letterSpacing: "-0.04em" }}>
                <span className="text-primary">Kasi Steel </span>House
              </p>
              <p className="text-sm leading-relaxed text-background/50">
                Your trusted neighborhood store for quality everyday essentials. Serving our community with care since 1975.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-background/40 mb-4" style={{ letterSpacing: "0.15em" }}>
                Quick Links
              </p>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-background/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-background/40 mb-4" style={{ letterSpacing: "0.15em" }}>
                Contact
              </p>
              <p className="text-sm text-background/60 mb-2">Pillars Gate, Balamore Road, Vadasery</p>
              <p className="text-sm text-background/60 mb-2">Nagercoil 629001</p>
              <p className="text-sm text-background/60 mb-4">+91 70106 76076</p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 text-center">
            <p className="text-xs text-background/40 uppercase tracking-wider">
              © {new Date().getFullYear()} Kasi Steel House. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/25 flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}