import { PUBLISHED_PACKAGE } from '../data/projects'

export function PackagesSection() {
  return (
    <section className="packages-section section" id="packages">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-label">Packages</span>
          <h2>Published Packages & Flutter Plugins</h2>
          <p>
            Production-ready Flutter plugins published to pub.dev and open for
            the developer community.
          </p>
        </div>

        <div className="published-package-spotlight glass-card" data-reveal>
          <div className="spotlight-header">
            <div className="spotlight-badge-row">
              <span className="spotlight-icon">📦</span>
              <span className="spotlight-tag">Published Package</span>
            </div>
            <div className="spotlight-shields">
              <a
                href={PUBLISHED_PACKAGE.pubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pub-badge pub-version">pub.dev v1.0.0</span>
              </a>
              <a
                href={PUBLISHED_PACKAGE.pubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pub-badge pub-points">160/160 points</span>
              </a>
            </div>
          </div>

          <div className="spotlight-content">
            <h3>
              <a
                href={PUBLISHED_PACKAGE.pubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {PUBLISHED_PACKAGE.name}
              </a>
            </h3>
            <p className="spotlight-tagline">{PUBLISHED_PACKAGE.tagline}</p>
            <p className="spotlight-desc">{PUBLISHED_PACKAGE.description}</p>

            <div className="spotlight-features-grid">
              {PUBLISHED_PACKAGE.features.map((feat, i) => (
                <div key={i} className="spotlight-feature-item">
                  <span className="feat-check">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="spotlight-actions">
              <a
                href={PUBLISHED_PACKAGE.pubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn primary"
              >
                <span>📦</span> View on Pub.dev
              </a>
              <a
                href={PUBLISHED_PACKAGE.githubUrl}
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
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
