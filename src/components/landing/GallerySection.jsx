import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import exterior from "@/pictures/front.jpg";
import interior from "@/pictures/inside .jpg";
import stone from "@/pictures/stone.jpg";
import tool from "@/pictures/tooll.jpg";
import dea from "@/pictures/fea.jpg";
import best from "@/pictures/best.jpg";
import key from "@/pictures/gift.jpg";
import vel from "@/pictures/velaku.jpg";
import statue from "@/pictures/statue.jpg";
import book from "@/pictures/books.jpg";

const GALLERY_ITEMS = [
  { src: exterior, label: "Shop Exterior", tall: false },
  { src: interior, label: "Shop Interior", tall: true },
  { src: tool, label: "Tools", tall: false },
  { src: dea, label: "Featured Products", tall: true },
  { src: best, label: "Best Sellers", tall: false },
  { src: vel, label: "Oil Lamps", tall: false },
  { src: stone, label: "Customer Favorites", tall: true },
  { src: statue, label: "Sculpture", tall: true },
  { src: book, label: "Stationery", tall: true },
  { src: key, label: "Gift Sets", tall: false },
];

function GalleryItem({ item, index, inView, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
        item.tall ? "row-span-2" : ""
      }`}
      onClick={() => onClick(item)}
    >
      <img
        src={item.src}
        alt={item.label}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-50"
        style={{ minHeight: item.tall ? "420px" : "200px" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-xs font-medium uppercase tracking-wider rounded-full">
          {item.label}
        </span>
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
    </motion.div>
  );
}

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
            style={{ letterSpacing: "0.2em" }}
          >
            Visual Archive
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-5xl text-foreground"
            style={{ letterSpacing: "-0.04em" }}
          >
            Inside Our Shop
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[220px]">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryItem
              key={item.label}
              item={item}
              index={i}
              inView={inView}
              onClick={setLightbox}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightbox.src}
              alt={lightbox.label}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm uppercase tracking-widest">
              {lightbox.label}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}