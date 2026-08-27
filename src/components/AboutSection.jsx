export function AboutSection() {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-avatar-card" data-reveal="left">
            <div className="avatar-wrapper">
              <div className="avatar-ring"></div>
              <img
                src="https://avatars.githubusercontent.com/u/116118132?v=4"
                alt="Mo'men Bakr"
                className="avatar-img"
                loading="lazy"
              />
            </div>
            <h3 className="about-name">Mo'men Bakr</h3>
            <p className="about-role">Mobile Software Engineer</p>
            <p className="about-location">
              <span>📍</span> Giza, Egypt 🇪🇬
            </p>
            <a
              href="/Momen_Bakr_CV.pdf"
              download="Momen_Bakr_CV.pdf"
              className="about-cv-btn"
              target="_blank"
              rel="noopener noreferrer"
              title="Download Mo'men Bakr's CV (PDF)"
            >
              <svg
                width="15"
                height="15"
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
          </div>
          <div className="about-body" data-reveal="right">
            <span className="section-label">About Me</span>
            <h2>Building Pixel-Perfect Mobile Experiences</h2>
            <p className="about-text">
              Dedicated Mobile Software Engineer with{' '}
              <strong style={{ color: 'var(--text-primary)' }}>3+ years</strong>{' '}
              of experience building and deploying scalable mobile applications
              to the App Store and Play Store. Proficient in Flutter (Dart) and
              Native Android (Kotlin), leveraging BLoC, Clean Architecture, and
              modern mobile engineering practices to deliver high-performance
              solutions.
              <br />
              <br />
              Experienced in building 3-sided marketplace ecosystems (Customer ×
              Merchant × Delivery) with real-time tracking, secure multi-role
              checkout flows, and Gulf cooperative society platforms. Currently
              expanding into backend engineering with Node.js, Laravel, and
              NestJS.
            </p>
            <div className="about-stats" data-reveal="scale" data-reveal-stagger>
              <div className="stat-card glass-card">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-number">14+</div>
                <div className="stat-label">Shipped Apps & Pkgs</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-number">3</div>
                <div className="stat-label">Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
