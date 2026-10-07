import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './BenefitsSection.css';

const benefits = [
  {
    icon: '⚡',
    title: 'Zero Staff Overhead',
    desc: 'Fully automated operations — no receptionist, operator, or attendant needed to manage printing.'
  },
  {
    icon: '💳',
    title: '100% Cashless Payments',
    desc: 'Integrated digital UPI, GPay, Paytm, and card payments with real-time transaction reconciliation.'
  },
  {
    icon: '🔒',
    title: 'Bank-Grade Privacy',
    desc: 'End-to-end encrypted file transfers and instant auto-deletion post printing guarantee total confidentiality.'
  },
  {
    icon: '📈',
    title: 'High Passive Revenue',
    desc: 'Generates continuous income for franchise partners and location owners from high daily printing volume.'
  },
  {
    icon: '🛠️',
    title: 'Remote Telemetry & Support',
    desc: 'Smart sensors monitor paper levels, toner status, and hardware health with automated maintenance dispatch.'
  },
  {
    icon: '🌙',
    title: '24/7 Uninterrupted Uptime',
    desc: 'Provides students and professionals with round-the-clock printing access, even past shop business hours.'
  }
];

const BenefitsSection: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="benefits-section" id="benefits" ref={ref} aria-labelledby="benefits-headline">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Why SmartPrinter</span>
          <h2 id="benefits-headline">Key Benefits for Locations &amp; Partners</h2>
          <p>Engineered to eliminate operational friction and maximize convenience for every stakeholder.</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, idx) => (
            <div key={b.title} className={`benefit-card reveal reveal-delay-${(idx % 3) + 1}`}>
              <div className="benefit-card__icon" aria-hidden="true">{b.icon}</div>
              <h3 className="benefit-card__title">{b.title}</h3>
              <p className="benefit-card__desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
