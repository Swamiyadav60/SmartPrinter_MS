import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Features.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '24/7 Self-Service',
    desc: 'Print at any hour — no staff needed, no waiting for the shop to open.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <line x1="14" y1="14" x2="14" y2="14.01" />
        <line x1="17" y1="14" x2="21" y2="14" />
        <line x1="14" y1="17" x2="14" y2="21" />
        <line x1="17" y1="21" x2="21" y2="21" />
        <line x1="21" y1="17" x2="21" y2="17.01" />
      </svg>
    ),
    title: 'QR Access',
    desc: 'Simply scan the QR on the kiosk — your phone becomes the control interface.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Mobile Printing',
    desc: 'Upload documents directly from your phone — no USB drives, no laptops required.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: 'Online Payment',
    desc: 'Pay via UPI or card — fully cashless, instant confirmation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Double-Sided Printing',
    desc: 'Print on both sides of the page — saving paper and reducing costs.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Privacy-Focused',
    desc: 'Your documents are never seen by staff. They are encrypted, transferred securely, and deleted automatically.',
  },
];

const Features: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="features" ref={ref} aria-labelledby="features-headline">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Features</span>
          <h2 id="features-headline">Built for convenience. Designed for trust.</h2>
          <p>Every aspect of PrintGo is designed to make printing faster, easier, and more private for everyone.</p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <div key={f.title} className={`features__card reveal reveal-delay-${Math.min(i + 1, 5)}`}>
              <div className="features__icon" aria-hidden="true">{f.icon}</div>
              <h3 className="features__card-title">{f.title}</h3>
              <p className="features__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
