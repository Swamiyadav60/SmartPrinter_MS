import React from 'react';
import Button from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Vision.css';

const Vision: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="vision" ref={ref} aria-labelledby="vision-headline">
      <div className="container">
        <div className="vision__inner reveal">
          <span className="section-label section-label--white">Our Vision</span>
          <h2 id="vision-headline" className="vision__headline">
            We're building India's largest<br />
            <span className="vision__headline-accent">self-service printing network.</span>
          </h2>
          <p className="vision__sub">
            Starting with Hyderabad, we are expanding city by city — placing PrintGo kiosks wherever people need fast, private, and accessible printing. Join the network as a franchise partner and be part of this movement.
          </p>
          <div className="vision__ctas">
            <Button to="/contact" variant="primary" size="lg" id="vision-quote">
              Get a Quote
            </Button>
            <Button to="/franchise" variant="ghost" size="lg" id="vision-franchise">
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
