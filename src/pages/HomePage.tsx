import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Traction from '../components/sections/Traction';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import HowItWorks from '../components/sections/HowItWorks';
import Features from '../components/sections/Features';
import Security from '../components/sections/Security';
import ProductShowcase from '../components/sections/ProductShowcase';
import Solutions from '../components/sections/Solutions';
import FranchiseTeaser from '../components/sections/FranchiseTeaser';
import Vision from '../components/sections/Vision';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'PrintGo — A Smarter Way to Print';
  }, []);

  return (
    <>
      <Hero />
      <Traction />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Security />
      <ProductShowcase />
      <Solutions />
      <FranchiseTeaser />
      <Vision />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default HomePage;
