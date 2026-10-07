/**
 * PrintGoNavbar — framer-motion powered navbar for SmartPrinter
 */

import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Button from "../ui/Button";
import "./PrintGoNavbar.css";

// --- Types --------------------------------------------------------------------

export interface NavLinkItem {
  to?: string;
  href?: string;
  label: string;
}

export interface CtaItem {
  label: string;
  to?: string;
  href?: string;
  variant: "primary" | "secondary" | "accent" | "ghost";
}

export type NavbarVariant = "floating" | "sticky";

export interface PrintGoNavbarProps {
  navLinks?: NavLinkItem[];
  ctaLinks?: CtaItem[];
  variant?: NavbarVariant;
}

// --- Defaults -----------------------------------------------------------------

const DEFAULT_NAV_LINKS: NavLinkItem[] = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products" },
  { to: "/franchise", label: "Franchise" },
  { to: "/contact", label: "Contact" },
];

const DEFAULT_CTA_LINKS: CtaItem[] = [
  { label: "Print Now", href: "https://app.smartprinter.in", variant: "secondary" },
  { label: "Get a Quote", to: "/contact", variant: "primary" },
];

// --- Animation variants -------------------------------------------------------

const drawerVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] as const },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -12 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.22, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

const barTop = {
  closed: { rotate: 0, y: 0, transition: { duration: 0.22 } },
  open: { rotate: 45, y: 7, transition: { duration: 0.22 } },
};
const barMid = {
  closed: { opacity: 1, transition: { duration: 0.1 } },
  open: { opacity: 0, transition: { duration: 0.1 } },
};
const barBot = {
  closed: { rotate: 0, y: 0, transition: { duration: 0.22 } },
  open: { rotate: -45, y: -7, transition: { duration: 0.22 } },
};

// --- Logo ----------------------------------------------------------------------

const Logo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <Link to="/" className="spnav__logo" aria-label="SmartPrinter — Home" onClick={onClick}>
    <img 
      src="/smart-printer-logo.png" 
      alt="SmartPrinter Logo" 
      className="spnav__logo-img"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        const fallback = e.currentTarget.nextElementSibling;
        if (fallback) (fallback as HTMLElement).style.display = 'inline-flex';
      }}
    />
    <span className="spnav__logo-fallback" style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#00C4B4"/>
        <path d="M10 10C10 8.89543 10.8954 8 12 8H20C21.1046 8 22 8.89543 22 10V13H10V10Z" fill="white" fillOpacity="0.4"/>
        <rect x="7" y="12" width="18" height="11" rx="3" fill="white"/>
        <circle cx="21" cy="15.5" r="1.25" fill="#FF5E00"/>
        <rect x="10" y="19" width="12" height="6" rx="1.5" fill="#0B132B"/>
        <rect x="12" y="21" width="8" height="1.5" rx="0.75" fill="white"/>
      </svg>
    </span>
    <span className="spnav__logo-text">
      Smart<span className="spnav__logo-accent">Printer</span>
    </span>
  </Link>
);

// --- CTA row -------------------------------------------------------------------

const CtaRow: React.FC<{ items: CtaItem[]; className?: string }> = ({ items, className }) => (
  <div className={["spnav__actions", className].filter(Boolean).join(" ")}>
    {items.map(({ label, to, href, variant }) =>
      to ? (
        <Button key={label} to={to} variant={variant} size="sm">{label}</Button>
      ) : (
        <Button key={label} href={href} variant={variant} size="sm">{label}</Button>
      ),
    )}
  </div>
);

// --- Component -----------------------------------------------------------------

const PrintGoNavbar: React.FC<PrintGoNavbarProps> = ({
  navLinks = DEFAULT_NAV_LINKS,
  ctaLinks = DEFAULT_CTA_LINKS,
  variant = "floating",
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const menuState = mobileOpen ? "open" : "closed";
  const isFloating = variant === "floating";

  return (
    <div className="printgo-nav-wrapper">
      <motion.header
        className={[
          "spnav",
          `spnav--${variant}`,
          scrolled ? "spnav--scrolled" : "",
        ].filter(Boolean).join(" ")}
        role="banner"
      >
        {/* -- Pill card (floating) or full bar (sticky) -- */}
        <div className={["spnav__card", isFloating ? "spnav__card--floating" : ""].filter(Boolean).join(" ")}>
          <div className="spnav__inner">

            <Logo onClick={() => setMobileOpen(false)} />

            {/* Desktop nav links */}
            <nav className="spnav__nav" aria-label="Primary navigation">
              <ul className="spnav__links" role="list">
                {navLinks.map(({ to, href, label }) => (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="spnav__link" target="_blank" rel="noopener noreferrer">{label}</a>
                    ) : (
                      <NavLink
                        to={to!}
                        end={to === "/"}
                        className={({ isActive }) =>
                          ["spnav__link", isActive ? "spnav__link--active" : ""].filter(Boolean).join(" ")
                        }
                      >
                        {label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTAs */}
            <CtaRow items={ctaLinks} />

            {/* Animated hamburger */}
            <motion.button
              className="spnav__hamburger"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="spnav-mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              animate={menuState}
              whileTap={{ scale: 0.88 }}
            >
              <motion.span className="spnav__bar" variants={barTop} />
              <motion.span className="spnav__bar" variants={barMid} />
              <motion.span className="spnav__bar" variants={barBot} />
            </motion.button>
          </div>

          {/* -- Mobile drawer -- */}
          <AnimatePresence initial={false}>
            {mobileOpen && (
              <motion.div
                id="spnav-mobile-menu"
                className="spnav__drawer"
                key="drawer"
                initial="closed"
                animate="open"
                exit="closed"
                variants={drawerVariants}
                aria-hidden={!mobileOpen}
                style={{ overflow: "hidden" }}
              >
                <nav aria-label="Mobile navigation">
                  <ul className="spnav__drawer-links" role="list">
                    {navLinks.map(({ to, href, label }, i) => (
                      <motion.li key={label} custom={i} variants={itemVariants} initial="closed" animate="open" exit="closed">
                        {href ? (
                          <a 
                            href={href} 
                            className="spnav__drawer-link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                          >
                            {label}
                          </a>
                        ) : (
                          <NavLink
                            to={to!}
                            end={to === "/"}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) =>
                              ["spnav__drawer-link", isActive ? "spnav__drawer-link--active" : ""].filter(Boolean).join(" ")
                            }
                          >
                            {label}
                          </NavLink>
                        )}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="spnav__drawer-actions">
                    {ctaLinks.map(({ label, to, href, variant: v }) =>
                      to ? (
                        <Button key={label} to={to} variant={v} fullWidth onClick={() => setMobileOpen(false)}>{label}</Button>
                      ) : (
                        <Button key={label} href={href} variant={v} fullWidth onClick={() => setMobileOpen(false)}>{label}</Button>
                      ),
                    )}
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </div>
  );
};

export default PrintGoNavbar;
