import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Instagram, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CONTACT_INFO = [
  { icon: MapPin, label: "Address", value: "Pillars Gate, Vadasery, Nagercoil, 629001" },
  { icon: Phone, label: "Phone", value: "+91 70106 76076", href: "tel:+917010676076" },
  {
    icon: Instagram,
    label: "Instagram",
    value: "kasi_steel_house_nagercoil",
    href: "https://www.instagram.com/kasi_steel_house_nagercoil?igsh=MTI2a2toZjc1a3VsMg==",
  },
  { icon: Clock, label: "Hours", value: "Mon–Sun: 9:30 AM – 9 PM ; Tue: Holiday" },
];


export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
            style={{ letterSpacing: "0.2em" }}>
            
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-5xl text-foreground"
            style={{ letterSpacing: "-0.04em" }}>
            
            Contact & Visit Us
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-foreground rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            
            <h3 className="font-heading font-bold text-2xl text-background mb-8" style={{ letterSpacing: "-0.03em" }}>
              Find Us Here
            </h3>
            <div className="space-y-6">
              {CONTACT_INFO.map((item) =>
              <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-background/50 text-xs uppercase tracking-widest mb-1" style={{ letterSpacing: "0.15em" }}>
                      {item.label}
                    </p>
                    <p className="text-background/90 text-sm leading-relaxed">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-border/50 bg-muted min-h-[320px] flex items-center justify-center">
            
            <iframe
              title="Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.143937699255!2d77.42828887477052!3d8.188251991843286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f12f45f9e26b%3A0xd34c7422d9cd0e7!2sKasi%20Steel%20House!5e0!3m2!1sen!2sin!4v1781370075359!5m2!1sen!2sin"
              className="w-full h-full min-h-[320px] grayscale contrast-125"
              loading="lazy"
              allowFullScreen />
            
          </motion.div>
        </div>

        


























































        
      </div>
    </section>);

}