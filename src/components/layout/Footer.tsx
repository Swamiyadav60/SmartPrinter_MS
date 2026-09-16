import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../ui/Button';
import printgoLogo from '../../assets/PrintGo_logo.jpeg';
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
              <img
                src={printgoLogo}
                alt="PrintGo"
                className="footer__logo-img"
              />
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
