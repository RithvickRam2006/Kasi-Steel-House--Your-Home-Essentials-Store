import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutimage from "@/pictures/thatha2.jpg";

const ABOUT_IMAGE = aboutimage;

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background w-full overflow-hidden">
      <div ref={ref} className="w-full max-w-full mx-auto px-4 sm:px-6 overflow-hidden min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start justify-items-center md:justify-items-stretch text-center md:text-left min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl w-full max-w-full md:max-w-[560px] mx-auto min-w-0"
          >
            <motion.img
              src={ABOUT_IMAGE}
              alt="Inside our shop"
              className="w-full h-[400px] md:h-[560px] object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <p
              className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
              style={{ letterSpacing: "0.2em" }}
            >
              Our Story
            </p>
            <h2
              className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6 leading-tight"
              style={{ letterSpacing: "-0.04em" }}
            >
             Your Home Essentials Partner Since 1975
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              What started as a small roadside vendor has grown into a beloved family-run store. For about 50 years, we've been dedicated to providing quality everyday essentials at fair prices — from kitchen tools to school supplies, cleaning products to home décor.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Our mission is simple: to make every home better with quality essentials and reliable service. We strive to be the store you can always count on—offering durable products, honest prices, and a welcoming experience for every customer. Whether you're shopping for your kitchen, home, or daily needs, we're here to help you find exactly what you need with confidence.

            </p>
            <div className="flex gap-12">
              <div>
                <p className="font-heading font-bold text-3xl text-primary" style={{ letterSpacing: "-0.04em" }}>50+</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">Years Serving</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl text-primary" style={{ letterSpacing: "-0.04em" }}>20K+</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">Happy Customers</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl text-primary" style={{ letterSpacing: "-0.04em" }}>100+</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">Products</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}