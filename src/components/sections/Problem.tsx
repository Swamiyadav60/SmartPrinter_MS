import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Problem.css';

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Long queues',
    desc: 'Students and employees lose time waiting in line — especially during peak hours before deadlines.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Limited availability',
    desc: 'Traditional print shops close after hours. There is no printing option when you need it most.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Operational dependency',
    desc: 'Businesses rely on staff availability and manual processes — leading to inconsistency and errors.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Privacy concerns',
    desc: 'Handing your document to a stranger raises real concerns about confidential or personal content.',
  },
];

const Problem: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="problem" ref={ref} aria-labelledby="problem-headline">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">The Problem</span>
          <h2 id="problem-headline">Printing shouldn't involve a queue.</h2>
          <p>Conventional printing has barely changed — but your time and privacy are more valuable than ever.</p>
        </div>

        <div className="problem__grid">
          {problems.map((p, i) => (
            <div key={p.title} className={`problem__card reveal reveal-delay-${i + 1}`}>
              <div className="problem__icon" aria-hidden="true">{p.icon}</div>
              <h3 className="problem__card-title">{p.title}</h3>
              <p className="problem__card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
