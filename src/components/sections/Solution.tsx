import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Solution.css';

const Solution: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="solution" ref={ref} aria-labelledby="solution-headline">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label section-label--white">The Solution</span>
          <h2 id="solution-headline" style={{ color: 'var(--color-white)' }}>Meet SmartPrinter.</h2>
          <p style={{ color: 'var(--color-gray-400)' }}>
            We combine hardware, software, and a growing network to make printing effortless — available wherever people need it, whenever they need it.
          </p>
        </div>

        <div className="solution__pillars">
          <div className="solution__pillar reveal reveal-delay-1">
            <div className="solution__pillar-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="14" fill="rgba(26,155,108,0.15)" />
                <rect x="12" y="14" width="24" height="20" rx="4" fill="none" stroke="#1a9b6c" strokeWidth="2" />
                <rect x="16" y="20" width="16" height="2" rx="1" fill="#1a9b6c" />
                <rect x="16" y="25" width="10" height="2" rx="1" fill="#1a9b6c" />
                <rect x="20" y="36" width="8" height="2" rx="1" fill="#1a9b6c" />
                <rect x="22" y="34" width="4" height="4" rx="1" fill="rgba(26,155,108,0.3)" />
              </svg>
            </div>
            <h3 className="solution__pillar-title">Smart Kiosks</h3>
            <p className="solution__pillar-desc">
              Purpose-built self-service hardware with integrated screen, scanner, and paper delivery — no staff required.
            </p>
          </div>

          <div className="solution__pillar-connector" aria-hidden="true">
            <svg viewBox="0 0 40 2" fill="none">
              <line x1="0" y1="1" x2="40" y2="1" stroke="rgba(26,155,108,0.4)" strokeWidth="2" strokeDasharray="4 3" />
            </svg>
          </div>

          <div className="solution__pillar reveal reveal-delay-2">
            <div className="solution__pillar-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="14" fill="rgba(26,155,108,0.15)" />
                <rect x="16" y="10" width="16" height="28" rx="4" fill="none" stroke="#1a9b6c" strokeWidth="2" />
                <rect x="20" y="15" width="8" height="8" rx="1" fill="rgba(26,155,108,0.3)" />
                <rect x="20" y="26" width="8" height="2" rx="1" fill="#1a9b6c" />
                <circle cx="24" cy="33" r="2" fill="#1a9b6c" />
              </svg>
            </div>
            <h3 className="solution__pillar-title">Seamless Platform</h3>
            <p className="solution__pillar-desc">
              A QR-based printing platform customers use on their own device — upload, configure, pay, and print in minutes.
            </p>
          </div>

          <div className="solution__pillar-connector" aria-hidden="true">
            <svg viewBox="0 0 40 2" fill="none">
              <line x1="0" y1="1" x2="40" y2="1" stroke="rgba(26,155,108,0.4)" strokeWidth="2" strokeDasharray="4 3" />
            </svg>
          </div>

          <div className="solution__pillar reveal reveal-delay-3">
            <div className="solution__pillar-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="14" fill="rgba(26,155,108,0.15)" />
                <circle cx="14" cy="24" r="5" fill="none" stroke="#1a9b6c" strokeWidth="2" />
                <circle cx="34" cy="14" r="5" fill="none" stroke="#1a9b6c" strokeWidth="2" />
                <circle cx="34" cy="34" r="5" fill="none" stroke="#1a9b6c" strokeWidth="2" />
                <line x1="19" y1="21" x2="29" y2="17" stroke="rgba(26,155,108,0.5)" strokeWidth="1.5" />
                <line x1="19" y1="27" x2="29" y2="31" stroke="rgba(26,155,108,0.5)" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="solution__pillar-title">Growing Network</h3>
            <p className="solution__pillar-desc">
              A nationwide network of kiosks — in colleges, offices, hostels, hospitals, and public spaces across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
