import React, { useEffect } from 'react';
import Features from '../components/sections/Features';
import Security from '../components/sections/Security';
import HowItWorks from '../components/sections/HowItWorks';
import FinalCTA from '../components/sections/FinalCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PageStyles.css';

const FeaturesPage: React.FC = () => {
  const ref = useScrollReveal();

  useEffect(() => {
    document.title = 'Features — PrintGo';
  }, []);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero page-hero--soft" ref={ref} aria-labelledby="features-page-headline">
        <div className="container page-hero__content">
          <span className="section-label reveal">Features</span>
          <h1 id="features-page-headline" className="page-hero__title reveal reveal-delay-1">
            Designed for convenience.<br />Built for trust.
          </h1>
          <p className="page-hero__sub reveal reveal-delay-2">
            PrintGo combines hardware, software, and security to deliver a seamless self-service printing experience — anywhere, any time.
          </p>
        </div>
      </section>

      <Features />
      <Security />
      <HowItWorks />
      <FinalCTA />
    </>
  );
};

export default FeaturesPage;
