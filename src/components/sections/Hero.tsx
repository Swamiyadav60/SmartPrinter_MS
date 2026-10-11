import React from 'react';
import Button from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import heroImage from '../../assets/hero.png';
import './Hero.css';

const Hero: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="hero" ref={ref} aria-labelledby="hero-headline">
      {/* Background Ambient Glow & Grid */}
      <div className="hero__grid-pattern" aria-hidden="true" />
      <div className="hero__bg-glow hero__bg-glow--green" aria-hidden="true" />
      <div className="hero__bg-glow hero__bg-glow--amber" aria-hidden="true" />

      <div className="container hero__container">
        {/* Left Side — Typography & CTAs */}
        <div className="hero__content">
          <div className="hero__badge reveal">
            <span className="hero__badge-dot" aria-hidden="true" />
            <span className="hero__badge-text">India's #1 Self-Service Printing Network</span>
          </div>

          <h1 className="hero__headline reveal reveal-delay-1" id="hero-headline">
            Smart Printing.<br />
            <span className="hero__headline-highlight">Made Simple.</span>
          </h1>

          <p className="hero__sub reveal reveal-delay-2">
            India's premier 24/7 automated self-service printing kiosks. Upload files from your phone via QR code, select print options, pay cashless, and collect instantly with 100% data privacy.
          </p>

          <div className="hero__ctas reveal reveal-delay-3">
            <Button href="https://smartprinter.in" variant="primary" size="lg" id="hero-print-now">
              Print Document Now ↗
            </Button>
            <Button to="/contact" variant="secondary" size="lg" id="hero-partner-with-us">
              Partner With Us
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero__metrics reveal reveal-delay-3">
            <div className="hero__metric-item">
              <span className="hero__metric-val hero__metric-val--green">24 / 7</span>
              <span className="hero__metric-lbl">Kiosk Uptime</span>
            </div>
            <div className="hero__metric-divider" />
            <div className="hero__metric-item">
              <span className="hero__metric-val hero__metric-val--amber">100%</span>
              <span className="hero__metric-lbl">Cashless UPI</span>
            </div>
            <div className="hero__metric-divider" />
            <div className="hero__metric-item">
              <span className="hero__metric-val hero__metric-val--dark">0 Sec</span>
              <span className="hero__metric-lbl">File Retention</span>
            </div>
          </div>
        </div>

        {/* Right Side Visual — Kiosk & Floating Stat Cards */}
        <div className="hero-image-wrap fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="hero-image-bg" />
          <div className="hero-image-gradient" />
          <div className="hero-floating-card card-1 float-anim">
            <div className="fc-icon">⚡</div>
            <div className="fc-text">
              <div className="fc-val">₹40,000</div>
              <div className="fc-lbl">per kiosk</div>
            </div>
          </div>
          <div className="hero-floating-card card-2 float-anim-delayed">
            <div className="fc-icon">📈</div>
            <div className="fc-text">
              <div className="fc-val">100%</div>
              <div className="fc-lbl">Passive — We Handle All</div>
            </div>
          </div>
          <div className="hero-floating-card card-3 float-anim">
            <div className="fc-icon">🏆</div>
            <div className="fc-text">
              <div className="fc-val">8 months</div>
              <div className="fc-lbl">Avg. Payback Period</div>
            </div>
          </div>
          <img src={heroImage} alt="Smart Printer Smart Kiosk" className="hero-image" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
