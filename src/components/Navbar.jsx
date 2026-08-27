import { NAV_ITEMS } from '../data/navigation'

export function Navbar({ scrolled, activeSection, mobileMenuOpen, setMobileMenuOpen }) {
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#hero" className="nav-logo" onClick={closeMobileMenu}>
          &lt;MB /&gt;
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeSection === item.href.slice(1) ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Momen_Bakr_CV.pdf"
              download="Momen_Bakr_CV.pdf"
              className="nav-cv-btn"
              target="_blank"
              rel="noopener noreferrer"
              title="Download Mo'men Bakr's CV (PDF)"
              onClick={closeMobileMenu}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>CV</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-cta" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
        </ul>

        {mobileMenuOpen && (
          <div
            className="mobile-backdrop-overlay"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  )
}
