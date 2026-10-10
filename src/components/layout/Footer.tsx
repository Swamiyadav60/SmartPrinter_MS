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
    { to: '/products', label: 'Products' },
    { to: '/franchise', label: 'Franchise' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="SmartPrinter Home">
            <span className="footer__logo-text">Smart<span className="footer__logo-accent">Printer</span></span>
          </Link>
          <p className="footer__tagline">
            India's self-service printing kiosk network. Fast, private, always available.
          </p>
          <Button
            href="https://app.smartprinter.in"
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
              <Link to="/products" className="footer__link">View Products</Link>
            </li>
            <li>
              <Link to="/contact" className="footer__link">Get a Quote</Link>
            </li>
            <li>
              <Link to="/franchise" className="footer__link">Become a Partner</Link>
            </li>
            <li>
              <a
                href="https://app.smartprinter.in"
                className="footer__link"
                target="_blank"
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
              <span>smartprinter.in</span>
            </li>
            <li>
              <span className="footer__contact-label">Printing App</span>
              <a
                href="https://app.smartprinter.in"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                app.smartprinter.in
              </a>
            </li>
            <li>
              <span className="footer__contact-label">Hyderabad &amp; Warangal, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {year} SmartPrinter. All rights reserved.
          </p>
          <p className="footer__legal">
            Powered by self-service printing technology. Built for India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
