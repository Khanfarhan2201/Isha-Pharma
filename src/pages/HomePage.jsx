import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import IshaPreloader from "../components/Preloader";

import HeroBanner from "../components/HeroBanner";
// import FeaturedProducts from "../components/FeaturedProducts";
import CategoryWiseProducts from "../components/categories";
import ProductDetailsSection from "../components/ProductDetailsSection";
import WhyChooseIshaPharma from "../components/WhyChooseIshaPharma";
import TrustIndicators from "../components/TrustIndicators";
import TestimonialsPartners from "../components/TestimonialsPartners";
import HealthTipsBlog from "../components/HealthTipsBlog";
import AboutTeaser from "../components/isha-intro";
import CallToActionStrip from "../components/CallToActionStrip";
import NewsTicker from "../components/NewsTicker";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import SafetyAlerts from "../components/safety/SafetyAlerts";
import GlobalPresence from "../components/global/GlobalPresence";
import FloatingInquiry from "../components/cta/FloatingInquiry";
import TopProductsSwiper from "../components/SwiperCards";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setLoading(false), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
        <IshaPreloader />
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 md:px-10 py-10 space-y-16">
        <div className="pt-24" />
      <section data-aos="fade-up"><HeroBanner /></section>

      {/* <section data-aos="zoom-in"><FeaturedProducts /></section> */}

      <section data-aos="zoom-in"><TopProductsSwiper /></section>

      <section data-aos="fade-left"><CategoryWiseProducts /></section>

      <section data-aos="fade-right"><ProductDetailsSection /></section>

      <section data-aos="zoom-in-up"><WhyChooseIshaPharma /></section>

      <section data-aos="fade-up"><GlobalPresence /></section>

      <section data-aos="zoom-in"><TrustIndicators /></section>

      <section data-aos="fade-down"><SafetyAlerts /></section>

      <section data-aos="fade-up"><TestimonialsPartners /></section>

      <section data-aos="fade-left"><HealthTipsBlog /></section>

      <section data-aos="fade-right"><AboutTeaser /></section>

      <section data-aos="zoom-in-up"><CallToActionStrip /></section>

      <section data-aos="fade-up"><NewsTicker /></section>

      <section data-aos="zoom-in"><FloatingInquiry /></section>

      <section data-aos="fade-up"><ContactSection /></section>

      <section data-aos="fade-down"><FAQSection /></section>
    </div>
  );
};

export default HomePage;
