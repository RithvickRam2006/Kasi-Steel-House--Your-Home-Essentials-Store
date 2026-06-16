import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Coins, HeartHandshake, Image } from "lucide-react";

const REASONS = [
  { icon: Award, title: "Quality Products", desc: "Handpicked items you can trust for durability and value." },
  { icon: Coins, title: "Affordable Prices", desc: "Fair pricing that respects your budget every single day." },
  { icon: HeartHandshake, title: "Friendly Service", desc: "A warm smile and helpful advice every time you visit." },
  { icon: Image, title: "Wide Variety", desc: "All home essentilas under one roof." },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
            style={{ letterSpacing: "0.2em" }}
          >
            Why Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-5xl text-foreground"
            style={{ letterSpacing: "-0.04em" }}
          >
            Why Choose Us
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group bg-card rounded-2xl p-8 text-center border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                <item.icon size={32} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3
                className="font-heading font-semibold text-lg text-foreground mb-3"
                style={{ letterSpacing: "-0.02em" }}
              >
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}