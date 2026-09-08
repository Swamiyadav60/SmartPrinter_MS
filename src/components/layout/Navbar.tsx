import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/features', label: 'Features' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/franchise', label: 'Franchise' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isMobileOpen ? 'navbar--open' : ''}`}
      role="banner"
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="PrintGo — Home">
          <span className="navbar__logo-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#2563EB" />
              <rect x="7" y="10" width="18" height="13" rx="2.5" fill="white" opacity="0.95" />
              <rect x="10" y="14" width="12" height="1.8" rx="0.9" fill="#2563EB" />
              <rect x="10" y="17.2" width="8" height="1.8" rx="0.9" fill="#2563EB" />
              <circle cx="23" cy="11" r="3.5" fill="#0B1220" />
              <circle cx="23" cy="11" r="1.8" fill="#2563EB" />
            </svg>
          </span>
          <span className="navbar__logo-text">Print<span className="navbar__logo-accent">Go</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Primary navigation">
          <ul className="navbar__links" role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' navbar__link--active' : ''}`
                  }
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar__actions">
          <Button
            href="https://app.printgo.co.in"
            variant="secondary"
            size="sm"
            id="nav-print-now"
          >
            Print Now
          </Button>
          <Button
            to="/contact"
            variant="primary"
            size="sm"
            id="nav-get-quote"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile ${isMobileOpen ? 'navbar__mobile--open' : ''}`}
        id="mobile-menu"
        aria-hidden={!isMobileOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-links" role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
                  }
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="navbar__mobile-actions">
            <Button
              href="https://print.smartprinter.in"
              variant="secondary"
              fullWidth
              id="mobile-print-now"
            >
              Print Now
            </Button>
            <Button
              to="/contact"
              variant="primary"
              fullWidth
              id="mobile-get-quote"
            >
              Get a Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
