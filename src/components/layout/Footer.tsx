import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../ui/Button';
import './Footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/features', label: 'Features' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/franchise', label: 'Franchise' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="PrintGo Home">
            <span className="footer__logo-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#2563EB" />
                <rect x="7" y="10" width="18" height="13" rx="2.5" fill="white" opacity="0.95" />
                <rect x="10" y="14" width="12" height="1.8" rx="0.9" fill="#2563EB" />
                <rect x="10" y="17.2" width="8" height="1.8" rx="0.9" fill="#2563EB" />
                <circle cx="23" cy="11" r="3.5" fill="#0B1220" />
                <circle cx="23" cy="11" r="1.8" fill="#2563EB" />
              </svg>
            </span>
            <span className="footer__logo-text">Print<span className="footer__logo-accent">Go</span></span>
          </Link>
          <p className="footer__tagline">
            India's self-service printing kiosk network. Fast, private, always available.
          </p>
          <Button
            href="https://app.printgo.co.in"
            variant="ghost"
            size="sm"
            id="footer-print-now"
          >
            Print Now ↗
          </Button>
        </div>

        {/* Navigation */}
        <div className="footer__col">
          <h3 className="footer__col-title">Navigation</h3>
          <ul className="footer__links" role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className="footer__link" end={to === '/'}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="footer__col">
          <h3 className="footer__col-title">Get Started</h3>
          <ul className="footer__links" role="list">
            <li>
              <Link to="/contact" className="footer__link">Get a Quote</Link>
            </li>
            <li>
              <Link to="/franchise" className="footer__link">Become a Franchise Partner</Link>
            </li>
            <li>
              <Link to="/contact" className="footer__link">Request a Demo</Link>
            </li>
            <li>
              <a
                href="https://app.printgo.co.in"
                className="footer__link"
                target="_self"
                rel="noopener noreferrer"
              >
                Print Now
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h3 className="footer__col-title">Contact</h3>
          <ul className="footer__links footer__links--contact" role="list">
            <li>
              <span className="footer__contact-label">Website</span>
              <span>printgo.co.in</span>
            </li>
            <li>
              <span className="footer__contact-label">Printing App</span>
              <a
                href="https://app.printgo.co.in"
                className="footer__link"
                target="_self"
                rel="noopener noreferrer"
              >
                app.printgo.co.in
              </a>
            </li>
            <li>
              <span className="footer__contact-label">Hyderabad, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {year} PrintGo. All rights reserved.
          </p>
          <p className="footer__legal">
            Powered by self-service technology. Built for India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
