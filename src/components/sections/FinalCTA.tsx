import React from 'react';
import Button from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FinalCTA.css';

const FinalCTA: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="final-cta" ref={ref} aria-labelledby="final-cta-headline">
      <div className="container">
        <div className="final-cta__inner reveal">
          <h2 id="final-cta-headline" className="final-cta__headline">
            Ready to make printing smarter?
          </h2>
          <p className="final-cta__sub">
            Whether you want to deploy a kiosk, become a franchise partner, or simply try PrintGo — we're here to help.
          </p>
          <div className="final-cta__buttons">
            <Button to="/contact" variant="primary" size="lg" id="final-cta-quote">
              Get a Quote
              <svg className="btn__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
            <Button to="/franchise" variant="secondary" size="lg" id="final-cta-franchise">
              Become a Franchise Partner
            </Button>
            <Button href="https://print.smartprinter.in" variant="ghost" size="lg" id="final-cta-print">
              Print Now ↗
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
