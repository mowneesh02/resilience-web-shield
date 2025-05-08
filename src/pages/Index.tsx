
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StrategySection from "../components/StrategySection";
import FeatureSection from "../components/FeatureSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StrategySection />
        <FeatureSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
