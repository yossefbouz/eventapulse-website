import { useEffect, useLayoutEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import CircularText from "../components/CircularText.jsx";
import DockNav from "../components/DockNav";

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
  const isHomeRoute = location.pathname === "/";

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <header
        className={`main-header ${isHomeRoute ? "main-header--home" : ""} ${
          mobileOpen ? "is-menu-open" : ""
        }`.trim()}
      >
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

          <DockNav
            className={mobileOpen ? "is-open" : ""}
            onNavigate={() => setMobileOpen(false)}
          />
          {mobileOpen && (
            <Link
              to="/contact"
              className="pill-cta pill-nav-mobile-cta"
              onClick={() => setMobileOpen(false)}
            >
              Partner With Us
            </Link>
          )}

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
              <li><a href="mailto:info@eventapulse.com">info@eventapulse.com</a></li>
              <li><a href="mailto:events@eventapulse.com">events@eventapulse.com</a></li>
              <li><a href="https://eventapulse.com">eventapulse.com</a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <h4>Social</h4>
            <ul>
              <li>
                <a
                  href="https://instagram.com/eventapulse"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="EventaPulse Instagram"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/trust">Trust & Safety</Link></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Use</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>

          <div className="site-footer__bottom">
            <span className="site-footer__badge">Made in Cyprus</span>
            <p>&copy; 2026 Eventa Pulse LTD · Cyprus · All rights reserved.</p>
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
