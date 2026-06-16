import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/pictures/back.jpg";

const HERO_IMAGE = heroImage;

export default function HeroSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden w-full max-w-full min-w-0">
      <div className="absolute inset-0 overflow-hidden w-full">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ scale: 1.1 }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
          <img
            src={HERO_IMAGE}
            alt="Storefront at golden hour"
            className="block w-full h-full min-w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-sm font-medium uppercase tracking-widest mb-6"
          style={{ letterSpacing: "0.2em" }}
        >
          Your Trusted Home Essentials Store
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading font-black text-white leading-none mb-6"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", letterSpacing: "-0.04em" }}
        >
          KASI STEEL<span className="text-primary"> HOUSE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Quality products for everyday life — curated with care for our community since 1975.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#about")}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Visit Our Store
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-sm uppercase tracking-widest rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollTo("#about")}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-widest" style={{ letterSpacing: "0.2em" }}>
            Scroll
          </span>
          <ChevronDown size={20} className="text-white/50" />
        </div>
      </motion.div>
    </section>
  );
}