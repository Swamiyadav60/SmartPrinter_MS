import React from 'react';
import Button from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Hero.css';

const Hero: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="hero" ref={ref} aria-labelledby="hero-headline">
      <div className="container hero__container">

        {/* Left Content - Focus on clear, confident language */}
        <div className="hero__content">
          <div className="hero__badge reveal">
            <span className="hero__badge-dot" aria-hidden="true" />
            <span className="hero__badge-text">Active network in INDIA</span>
          </div>

          <h1 className="hero__headline reveal reveal-delay-1" id="hero-headline">
            Automated printing for modern spaces.
          </h1>

          <p className="hero__sub reveal reveal-delay-2">
            Self-service printing hardware and platform designed for colleges, offices, and high-footfall areas. Fast, secure, and zero-maintenance.
          </p>

          <div className="hero__ctas reveal reveal-delay-3">
            <Button to="/contact" variant="primary" size="lg" id="hero-get-quote">
              Get a Quote
            </Button>
            <Button to="/franchise" variant="secondary" size="lg" id="hero-franchise">
              Explore Franchise
            </Button>
          </div>

          <div className="hero__utility reveal reveal-delay-3">
            <p>End user looking to print a document?</p>
            <a href="https://app.printgo.co.in" target="_self" rel="noopener noreferrer" className="hero__utility-link">
              Go to Printing Web App ↗
            </a>
          </div>
        </div>

        {/* Right Visual - image placeholder (to be updated) */}

      </div>
    </section>
  );
};

export default Hero;
