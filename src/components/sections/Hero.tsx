import React from 'react';
import Button from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import heroImg from '../../assets/hero.png';
import './Hero.css';

const Hero: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="hero" ref={ref} aria-labelledby="hero-headline">
      {/* Background Soft Glow Gradients */}
      <div className="hero__bg-glow hero__bg-glow--mint" aria-hidden="true" />
      <div className="hero__bg-glow hero__bg-glow--cream" aria-hidden="true" />

      <div className="container hero__container">
        {/* Left Side — Typography & CTAs */}
        <div className="hero__content">
          <div className="hero__badge reveal">
            <span className="hero__badge-icon">⚡</span>
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
            <Button href="https://app.smartprinter.in" variant="accent" size="lg" id="hero-print-now">
              Print Document Now ↗
            </Button>
            <Button to="/contact" variant="primary" size="lg" id="hero-partner-with-us">
              Partner With Us
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero__metrics reveal reveal-delay-3">
            <div className="hero__metric-item">
              <span className="hero__metric-val text-smart-teal">24 / 7</span>
              <span className="hero__metric-lbl">Kiosk Uptime</span>
            </div>
            <div className="hero__metric-divider" />
            <div className="hero__metric-item">
              <span className="hero__metric-val text-smart-orange">100%</span>
              <span className="hero__metric-lbl">Cashless UPI</span>
            </div>
            <div className="hero__metric-divider" />
            <div className="hero__metric-item">
              <span className="hero__metric-val text-smart-navy">0 Sec</span>
              <span className="hero__metric-lbl">File Retention</span>
            </div>
          </div>
        </div>

        {/* Right Side — Device & Kiosk Presentation Mockup */}
        <div className="hero__visual reveal reveal-delay-2">
          <div className="hero__device-frame">

            {/* Kiosk App Header */}
            <div className="hero__device-header">
              <div className="hero__device-brand">
                <span className="hero__device-dot hero__device-dot--teal" />
                <span className="hero__device-title">SmartPrinter Kiosk v3.2</span>
              </div>
              <span className="hero__device-badge">● LIVE NETWORK</span>
            </div>

            {/* Kiosk Screen UI Display */}
            <div className="hero__device-screen">

              {/* Main Image or Interactive Graphics */}
              <div className="hero__screen-preview">
                <img 
                  src={heroImg} 
                  alt="SmartPrinter Automated Kiosk" 
                  className="hero__screen-img" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />

                {/* QR Instant Print Card Overlay */}
                <div className="hero__qr-card">
                  <div className="hero__qr-code">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="8" height="8" rx="2" fill="#0B132B"/>
                      <rect x="4" y="4" width="4" height="4" fill="#00C4B4"/>
                      <rect x="14" y="2" width="8" height="8" rx="2" fill="#0B132B"/>
                      <rect x="16" y="4" width="4" height="4" fill="#FF5E00"/>
                      <rect x="2" y="14" width="8" height="8" rx="2" fill="#0B132B"/>
                      <rect x="4" y="16" width="4" height="4" fill="#00C4B4"/>
                      <rect x="14" y="14" width="4" height="4" fill="#0B132B"/>
                      <rect x="18" y="18" width="4" height="4" fill="#FF5E00"/>
                      <rect x="14" y="18" width="4" height="4" fill="#00C4B4"/>
                    </svg>
                  </div>
                  <div className="hero__qr-text">
                    <p className="hero__qr-title">Scan QR to Print</p>
                    <p className="hero__qr-sub">No app download required</p>
                  </div>
                </div>

                {/* Status Float Badge */}
                <div className="hero__status-float">
                  <span className="hero__status-icon">🖨️</span>
                  <div>
                    <p className="hero__status-title">High Speed Printing</p>
                    <p className="hero__status-sub">B&W & Color Laser Output</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Hardware Tray Preview */}
            <div className="hero__device-footer">
              <span className="hero__slot-indicator">⚡ Instant Cashless Dispense Tray</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
