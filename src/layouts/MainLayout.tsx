import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import CircularText from "../components/CircularText.jsx";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "For Users", to: "/users" },
  { label: "For Organizers", to: "/organizers" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Trust", to: "/trust" },
  { label: "Contact", to: "/contact" },
];

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <header className="main-header">
        <div className="pill-nav-shell">
          <Link to="/" className="pill-brand">
            <img src="/eventpulse-logo-full.jpg" alt="EventaPulse" />
            <span>EventaPulse</span>
          </Link>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span className={`hamburger ${mobileOpen ? "is-open" : ""}`} />
          </button>

          <nav
            className={`pill-nav-links ${mobileOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? "is-active" : "")}
                onClick={() => setMobileOpen(false)}
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="pill-cta"
            onClick={() => setMobileOpen(false)}
          >
            Partner With Us
          </Link>
        </div>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <Link to="/" className="pill-brand">
              <img src="/eventpulse-logo-full.jpg" alt="EventaPulse" />
              <span>EventaPulse</span>
            </Link>
            <p>The trusted app to discover, book, and save on Cyprus experiences.</p>
          </div>

          <div className="site-footer__links">
            <h4>Pages</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__links">
            <h4>Company</h4>
            <ul>
              <li><a href="mailto:contact@eventpulse.app">contact@eventpulse.app</a></li>
              <li><a href="https://www.eventpulse.app" target="_blank" rel="noopener noreferrer">www.eventpulse.app</a></li>
              <li><span>+357 22 000 000</span></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <h4>Social</h4>
            <ul>
              <li><a href="#" aria-label="EventaPulse Instagram">Instagram</a></li>
              <li><a href="#" aria-label="EventaPulse X">X</a></li>
              <li><a href="#" aria-label="EventaPulse LinkedIn">LinkedIn</a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/trust">Trust & Safety</Link></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>

          <div className="site-footer__bottom">
            <span className="site-footer__badge">Made in Cyprus</span>
            <p>&copy; 2026 EventaPulse. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="floating-brand-wheel" aria-hidden="true">
        <CircularText
          text="EVENTAPULSE * CYPRUS * TICKETS * "
          spinDuration={16}
          onHover="speedUp"
        />
      </div>
    </>
  );
}
