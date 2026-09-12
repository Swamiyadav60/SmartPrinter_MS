/**
 * PrintGoNavbar — framer-motion powered navbar
 *
 * Replicates a Framer-component-style navbar (floating pill card, pill nav items,
 * animated mobile drawer) while using PrintGo brand tokens exclusively.
 * All animations are handled by framer-motion.
 *
 * Props:
 *   navLinks  — override navigation items
 *   ctaLinks  — override CTA buttons on the right
 *   variant   — "floating" (default, Framer-style pill card) | "sticky" (full-width bar)
 *
 * Theme: all overrides go in PrintGoNavbar.css scoped to .printgo-nav-wrapper
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
  { to: "/franchise", label: "Franchise" },
  { to: "/contact", label: "Contact" },
];

const DEFAULT_CTA_LINKS: CtaItem[] = [
  { label: "Print Now", href: "https://app.printgo.co.in", variant: "secondary" },
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

const Logo: React.FC = () => (
  <Link to="/" className="spnav__logo" aria-label="PrintGo — Home">
    <span className="spnav__logo-icon" aria-hidden="true">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#2563EB" />
        <rect x="7" y="10" width="18" height="13" rx="2.5" fill="white" opacity="0.95" />
        <rect x="10" y="14" width="12" height="1.8" rx="0.9" fill="#2563EB" />
        <rect x="10" y="17.2" width="8" height="1.8" rx="0.9" fill="#2563EB" />
        <circle cx="23" cy="11" r="3.5" fill="#0B1220" />
        <circle cx="23" cy="11" r="1.8" fill="#2563EB" />
      </svg>
    </span>
    <span className="spnav__logo-text">
      Print<span className="spnav__logo-accent">Go</span>
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

            <Logo />

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
                          <a href={href} className="spnav__drawer-link" target="_blank" rel="noopener noreferrer">{label}</a>
                        ) : (
                          <NavLink
                            to={to!}
                            end={to === "/"}
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
                        <Button key={label} to={to} variant={v} fullWidth>{label}</Button>
                      ) : (
                        <Button key={label} href={href} variant={v} fullWidth>{label}</Button>
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
