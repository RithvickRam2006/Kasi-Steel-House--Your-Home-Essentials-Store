import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ChefHat,
  Baby,
  PenTool,
  Home,
  Box,
  SprayCan,
  Wrench,
  Gift,
  Award,
} from "lucide-react";

const CATEGORIES = [
  { icon: ChefHat, title: "Kitchen & Utensils", desc: "Essential cookware and tools for every meal" },
  { icon: Baby, title: "Toys & Kids Items", desc: "Fun and safe products for little ones" },
  { icon: PenTool, title: "Stationery", desc: "Pens, notebooks, and office essentials" },
  { icon: Home, title: "Home Essentials", desc: "Everything to keep your home running smooth" },
  { icon: SprayCan, title: "Cleaning Supplies", desc: "Keep every corner spotless and fresh" },
  { icon: Wrench, title: "Daily Utility Items", desc: "Handy tools for everyday tasks" },
  { icon: Award, title: "Statues & Decor", desc: "Handcrafted statues and decorative accents for every space" },
  { icon: Gift, title: "Gift Items", desc: "Perfect presents and gift-ready selections for every occasion" },
];

function CategoryCard({ item, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
        <item.icon size={28} className="text-primary" strokeWidth={1.5} />
      </div>
      <h3
        className="font-heading font-semibold text-lg text-foreground mb-2"
        style={{ letterSpacing: "-0.02em" }}
      >
        {item.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {item.desc}
      </p>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-primary/10 transition-all duration-500" />
    </motion.div>
  );
}

export default function OfferSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="offer" className="py-24 md:py-32 bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
            style={{ letterSpacing: "0.2em" }}
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-5xl text-foreground"
            style={{ letterSpacing: "-0.04em" }}
          >
            Curated Categories
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((item, i) => (
            <CategoryCard key={item.title} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}