import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import OfferSection from "../components/landing/OfferSection";
import GallerySection from "../components/landing/GallerySection";
import WhyChooseSection from "../components/landing/WhyChooseSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OfferSection />
      <GallerySection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}