import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroBanner from "../components/HeroBanner";
import ModernStory from "../components/ModernStory";
import ModernTeam from "../components/TeamSection";
import MissionVision from "../components/MissionVision";
import TrustIndicators from "../components/TrustIndicators";
import TrustElements from "../components/TrustElements";
import CallToActionStrip from "../components/CallToActionStrip";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-10 py-10 space-y-16">
      <div className="pt-24" /> {/* Better spacing */}
      
      <section data-aos="fade-up"><HeroBanner /></section>
      <section data-aos="fade-right"><ModernStory /></section>
      <section data-aos="zoom-in"><ModernTeam /></section>
      <section data-aos="fade-left"><MissionVision /></section>
      <section data-aos="fade-up"><TrustIndicators /></section>
      <section data-aos="fade-up" data-aos-delay="500"><TrustElements /></section>
      <section data-aos="fade-right"><CallToActionStrip /></section>
    </div>
  );
};

export default AboutPage;
