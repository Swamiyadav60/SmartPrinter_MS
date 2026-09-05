import React from 'react';
import Button from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FranchiseTeaser.css';

const FranchiseTeaser: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="franchise-teaser" ref={ref}>
      <div className="container">
        <div className="franchise-teaser__inner reveal">
          <div className="franchise-teaser__content">
            <span className="section-label section-label--white">Partner With Us</span>
            <h2>Own a piece of the network.</h2>
            <p>PrintGo provides the hardware, software, and maintenance. You provide the location. Start your automated printing business today.</p>
            
            <ul className="franchise-teaser__list">
              <li>✓ Ready-to-deploy self-service kiosks</li>
              <li>✓ Built-in payment & software platform</li>
              <li>✓ Zero daily operational overhead</li>
            </ul>

            <div className="franchise-teaser__ctas">
              <Button to="/franchise" variant="accent" size="lg">Explore Franchise Model</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseTeaser;
