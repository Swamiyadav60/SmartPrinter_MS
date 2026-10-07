import React, { useEffect } from 'react';
import Button from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PageStyles.css';
import './FranchisePage.css';

const franchisePoints = [
  {
    icon: '⚡',
    title: 'Ready to Deploy',
    desc: 'SmartPrinter kiosks arrive pre-configured and ready to operate — minimal setup required on your end.',
  },
  {
    icon: '📱',
    title: 'Technology Included',
    desc: 'The printing platform, payment processing, and remote monitoring software are all built in.',
  },
  {
    icon: '🔧',
    title: 'Ongoing Support',
    desc: 'Our team provides technical support and guidance to keep your kiosk running smoothly.',
  },
  {
    icon: '📍',
    title: 'You Own the Location',
    desc: 'You bring the space. We bring the kiosk and technology. A simple, powerful combination.',
  },
  {
    icon: '🎯',
    title: 'Growing Network Effect',
    desc: 'As the SmartPrinter network grows, your kiosk benefits from increased brand recognition.',
  },
  {
    icon: '🏆',
    title: 'Proven Model',
    desc: 'Already deployed at B.Tech colleges in Hyderabad and Warangal — a validated model in real-world locations.',
  },
];

const targetPartners = [
  { label: 'Entrepreneurs', desc: 'Looking to own a technology-driven business with low operational complexity.' },
  { label: 'Existing Print Shops', desc: 'Upgrade your Xerox or printing business with self-service automation.' },
  { label: 'Colleges & Universities', desc: 'Provide students with 24/7 on-campus printing without staff overhead.' },
  { label: 'Hostel & PG Owners', desc: 'Add a high-demand amenity that residents use daily.' },
  { label: 'Corporate Parks', desc: 'Serve employees in office complexes and business districts.' },
  { label: 'Institutions', desc: 'Schools, hospitals, government offices, and public venues.' },
];

const FranchisePage: React.FC = () => {
  const heroRef = useScrollReveal();
  const whyRef = useScrollReveal();
  const whoRef = useScrollReveal();
  const termsRef = useScrollReveal();

  useEffect(() => {
    document.title = 'Franchise & Partnerships — SmartPrinter';
  }, []);

  return (
    <>
      {/* Franchise Hero */}
      <section className="franchise-hero" ref={heroRef} aria-labelledby="franchise-hero-headline">
        <div className="container">
          <div className="franchise-hero__content">
            <span className="section-label section-label--white reveal">Franchise Opportunity</span>
            <h1 id="franchise-hero-headline" className="franchise-hero__headline reveal reveal-delay-1">
              Build the next generation<br />of printing businesses.
            </h1>
            <p className="franchise-hero__sub reveal reveal-delay-2">
              SmartPrinter provides entrepreneurs, institutions, and businesses with a proven self-service printing kiosk — complete with technology and support. You bring the location; we bring everything else.
            </p>
            <div className="franchise-hero__ctas reveal reveal-delay-3">
              <Button to="/contact" variant="primary" size="lg" id="franchise-hero-cta">
                Become a SmartPrinter Partner
                <svg className="btn__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
              <Button to="/contact" variant="ghost" size="lg" id="franchise-hero-demo">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why SmartPrinter */}
      <section className="franchise-why" ref={whyRef} aria-labelledby="franchise-why-headline">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Why SmartPrinter</span>
            <h2 id="franchise-why-headline">What you get with a SmartPrinter franchise.</h2>
            <p>A complete, ready-to-operate printing business in a compact kiosk — backed by technology and a growing national network.</p>
          </div>
          <div className="franchise-why__grid">
            {franchisePoints.map((p, i) => (
              <div key={p.title} className={`franchise-why__card reveal reveal-delay-${Math.min(i % 3 + 1, 3)}`}>
                <div className="franchise-why__icon" aria-hidden="true">{p.icon}</div>
                <h3 className="franchise-why__title">{p.title}</h3>
                <p className="franchise-why__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Partner */}
      <section className="franchise-who" ref={whoRef} aria-labelledby="franchise-who-headline">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label section-label--white">Who It's For</span>
            <h2 id="franchise-who-headline" style={{ color: 'var(--color-white)' }}>Who can become a partner?</h2>
            <p style={{ color: 'var(--color-gray-400)' }}>SmartPrinter franchise is open to a wide range of partners — individuals and institutions alike.</p>
          </div>
          <div className="franchise-who__grid">
            {targetPartners.map((tp, i) => (
              <div key={tp.label} className={`franchise-who__card reveal reveal-delay-${Math.min(i % 3 + 1, 3)}`}>
                <h3 className="franchise-who__card-title">{tp.label}</h3>
                <p className="franchise-who__card-desc">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Terms Note */}
      <section className="franchise-terms" ref={termsRef} aria-labelledby="franchise-terms-headline">
        <div className="container">
          <div className="franchise-terms__inner reveal">
            <div className="franchise-terms__icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h2 id="franchise-terms-headline">Investment &amp; commercial terms</h2>
            <p>
              Investment amounts, revenue structures, and commercial terms are discussed directly with our team after an initial conversation. We tailor the partnership to match your location and goals.
            </p>
            <Button to="/contact" variant="primary" size="lg" id="franchise-terms-cta">
              Get in Touch to Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FranchisePage;
