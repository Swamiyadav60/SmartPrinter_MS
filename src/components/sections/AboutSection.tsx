import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="about-section" id="about" ref={ref} aria-labelledby="about-headline">
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal">
            <span className="section-label">About SmartPrinter</span>
            <h2 id="about-headline">Pioneering Automated Printing Infrastructure Across India</h2>
            <p className="about-lead">
              SmartPrinter is India's leading self-service printing technology startup, replacing outdated Xerox shops with intelligent, 24/7 automated printing kiosks.
            </p>
            <p className="about-text">
              We bridge the gap between digital documents on mobile devices and physical printouts. By combining compact, industrial-grade printing hardware with an instant QR-code cloud platform, SmartPrinter enables students, employees, and visitors to print documents in seconds — without queues, cash, or staff intervention.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat__num">100%</span>
                <span className="about-stat__label">Self-Service</span>
              </div>
              <div className="about-stat">
                <span className="about-stat__num">24/7</span>
                <span className="about-stat__label">Uptime Availability</span>
              </div>
              <div className="about-stat">
                <span className="about-stat__num">&lt; 2 min</span>
                <span className="about-stat__label">Average Print Time</span>
              </div>
            </div>
          </div>

          <div className="about-cards reveal reveal-delay-2">
            <div className="about-card">
              <div className="about-card__icon" aria-hidden="true">🎯</div>
              <h3>Mission</h3>
              <p>To make document printing as accessible, fast, and secure as sending a text message — placed in every high-footfall location in India.</p>
            </div>
            <div className="about-card">
              <div className="about-card__icon" aria-hidden="true">🔒</div>
              <h3>Privacy Commitment</h3>
              <p>Zero human exposure guarantee. Your documents remain strictly private, encrypted, and automatically deleted right after printing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
