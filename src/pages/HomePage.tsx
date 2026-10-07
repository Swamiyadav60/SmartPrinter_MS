import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Traction from '../components/sections/Traction';
import AboutSection from '../components/sections/AboutSection';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import HowItWorks from '../components/sections/HowItWorks';
import ProductsSection from '../components/sections/ProductsSection';
import Features from '../components/sections/Features';
import BenefitsSection from '../components/sections/BenefitsSection';
import Security from '../components/sections/Security';
import Solutions from '../components/sections/Solutions';
import FranchiseTeaser from '../components/sections/FranchiseTeaser';
import Vision from '../components/sections/Vision';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'SmartPrinter — Smart Self-Service Printing';
  }, []);

  return (
    <>
      <Hero />
      <Traction />
      <AboutSection />
      <Problem />
      <Solution />
      <ProductsSection />
      <Features />
      <HowItWorks />
      <BenefitsSection />
      <Security />
      <Solutions />
      <FranchiseTeaser />
      <Vision />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default HomePage;
