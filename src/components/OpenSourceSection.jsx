export function OpenSourceSection({ repos }) {
  return (
    <section className="opensource-section section" id="opensource">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-label">Open Source</span>
          <h2>GitHub Contributions & Repositories</h2>
          <p>
            Public open-source projects exploring on-device AI, mobile plugins,
            and cross-platform tools.
          </p>
        </div>
        <div className="opensource-grid" data-reveal data-reveal-stagger>
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="os-card glass-card"
            >
              <div className="os-card-header">
                <span className="os-card-icon">📂</span>
                <div className="os-card-stats">
                  <span className="os-stat">⭐ {repo.stars}</span>
                  <span className="os-stat">🍴 {repo.forks}</span>
                </div>
              </div>
              <h3>{repo.name}</h3>
              <p>{repo.desc}</p>
              <div className="os-card-footer">
                <span className="os-language">
                  <span
                    className="os-language-dot"
                    style={{ background: repo.langColor }}
                  ></span>
                  {repo.language}
                </span>
                <span className="os-link">View Repo →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
