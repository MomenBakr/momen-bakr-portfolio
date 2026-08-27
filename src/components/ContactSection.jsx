export function ContactSection() {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="contact-content" data-reveal>
          <span className="section-label">Get In Touch</span>
          <h2>
            Let's Build Something{' '}
            <span className="gradient-text">Great Together</span>
          </h2>
          <p className="contact-text">
            I'm always open to discussing new mobile engineering roles,
            production projects, or consulting on Flutter & Native Android
            architecture.
          </p>

          {/* Direct Contact Bento Cards Grid (3 Columns) */}
          <div className="contact-bento-grid">
            {/* Email Card */}
            <div className="contact-card glass-card">
              <div className="contact-card-icon-wrap email">
                <span>✉️</span>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">Direct Email</span>
                <a
                  href="mailto:momenbakr91@gmail.com"
                  className="contact-card-value"
                >
                  momenbakr91@gmail.com
                </a>
              </div>
              <a
                href="mailto:momenbakr91@gmail.com"
                className="contact-card-action-btn primary"
              >
                Send Email →
              </a>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="contact-card glass-card">
              <div className="contact-card-icon-wrap phone">
                <span>📞</span>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">Phone & WhatsApp</span>
                <a href="tel:+201024137763" className="contact-card-value">
                  +20 102 413 7763
                </a>
              </div>
              <div className="contact-card-dual-actions">
                <a
                  href="tel:+201024137763"
                  className="contact-card-action-btn secondary"
                  title="Call directly"
                >
                  Call
                </a>
                <a
                  href="https://wa.me/201024137763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-action-btn whatsapp"
                  title="Chat on WhatsApp"
                >
                  <span>💬</span> WhatsApp
                </a>
              </div>
            </div>

            {/* Social Profiles Card */}
            <div className="contact-card glass-card">
              <div className="contact-card-icon-wrap social">
                <span>🌐</span>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">Online Profiles</span>
                <span className="contact-card-value text-static">
                  LinkedIn & GitHub
                </span>
              </div>
              <div className="contact-card-dual-actions">
                <a
                  href="https://www.linkedin.com/in/momenbakr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-action-btn secondary"
                  title="View LinkedIn Profile"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/MomenBakr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-action-btn secondary"
                  title="View GitHub Profile"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Prominent CV Download Banner */}
          <div className="contact-cv-banner" data-reveal="scale">
            <a
              href="/Momen_Bakr_CV.pdf"
              download="Momen_Bakr_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cv-download-btn"
              title="Download Mo'men Bakr's Complete CV (PDF)"
            >
              <svg
                width="22"
                height="22"
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
              <span>Download Mo'men Bakr's Resume / CV (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
