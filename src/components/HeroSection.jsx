export function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-grid"></div>
      <div className="hero-shapes">
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
      </div>
      <div className="hero-content container">
        <div className="hero-flex-layout">
          {/* Left Column: Text & CTAs */}
          <div className="hero-text-col" data-reveal>
            <div className="hero-badge">
              <span className="dot"></span>
              Open to opportunities
            </div>
            <h1 className="hero-title">
              <span className="line">
                Hi, I'm <span className="gradient-text">Mo'men Bakr</span>
              </span>
              <span
                className="line"
                style={{
                  fontSize: '0.55em',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginTop: '12px',
                }}
              >
                Mobile Software Engineer
              </span>
            </h1>
            <p className="hero-subtitle">
              Building pixel-perfect, scalable mobile applications with{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Flutter</strong>,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>
                Android (Kotlin)
              </strong>
              , and{' '}
              <strong style={{ color: 'var(--text-primary)' }}>
                iOS (SwiftUI)
              </strong>{' '}
              — engineered on Clean Architecture & BLoC.
            </p>
            <div className="hero-links">
              <a href="#projects" className="hero-btn primary">
                <span>🚀</span> View My Work
              </a>
              <a
                href="/Momen_Bakr_CV.pdf"
                download="Momen_Bakr_CV.pdf"
                className="hero-btn cv-btn"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Mo'men Bakr's CV (PDF)"
              >
                <svg
                  width="18"
                  height="18"
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
                Download CV
              </a>
              <a
                href="https://github.com/MomenBakr"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn secondary"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/momenbakr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn secondary"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Large 3D Avatar Showcase */}
          <div className="hero-avatar-showcase-col" data-reveal="right">
            <div className="hero-3d-avatar-stage">
              <div className="hero-avatar-halo-glow"></div>
              <img
                src="/momen-avatar-transparent.png"
                alt="Mo'men 3D Avatar"
                className="hero-large-3d-avatar-img"
                loading="eager"
              />

              {/* Floating Tech Badges */}
              <div className="hero-floating-chip chip-flutter">
                <span>⚡ Flutter & Dart</span>
              </div>
              <div className="hero-floating-chip chip-arch">
                <span>🏛️ Clean Arch & BLoC</span>
              </div>
              <div className="hero-floating-chip chip-android">
                <span>🤖 Native Android</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>SCROLL</span>
          <div className="hero-scroll-line"></div>
        </div>
      </div>
    </section>
  )
}
