import { useState, useMemo } from 'react'
import { SKILL_DOMAINS } from '../data/skills'

export function SkillsSection() {
  const [activeSkillTab, setActiveSkillTab] = useState('all')

  const filteredDomains = useMemo(() => {
    if (activeSkillTab === 'all') return SKILL_DOMAINS
    return SKILL_DOMAINS.filter((d) => d.id === activeSkillTab)
  }, [activeSkillTab])

  return (
    <section className="tech-section section" id="skills">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-label">Tech Stack & Tools</span>
          <h2>Core Technical Competencies</h2>
          <p>
            A focused overview of technologies and architectural standards
            utilized across my production applications.
          </p>
        </div>

        {/* Compact Filter Tabs */}
        <div className="compact-skills-tabs" data-reveal>
          <button
            type="button"
            className={`skills-tab-pill ${activeSkillTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveSkillTab('all')}
          >
            <span>⚡</span> All Domains
          </button>
          {SKILL_DOMAINS.map((domain) => (
            <button
              key={domain.id}
              type="button"
              className={`skills-tab-pill ${activeSkillTab === domain.id ? 'active' : ''}`}
              onClick={() => setActiveSkillTab(domain.id)}
            >
              <span>{domain.icon}</span> {domain.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Tech Stack Categories & Logo Tiles */}
        <div className="tech-stack-showcase-grid" data-reveal data-reveal-stagger>
          {filteredDomains.map((domain) => (
            <div key={domain.id} className="tech-domain-card glass-card">
              <div className="tech-domain-header">
                <div className="tech-domain-title-group">
                  <span className="tech-domain-icon">{domain.icon}</span>
                  <div>
                    <h3 className="tech-domain-title">{domain.title}</h3>
                    <p className="tech-domain-desc">{domain.desc}</p>
                  </div>
                </div>
                <span className="tech-domain-count">
                  {domain.skills.length} Techs
                </span>
              </div>

              <div className="tech-logo-tiles-row">
                {domain.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="tech-logo-tile"
                    style={{
                      '--skill-color': skill.color,
                    }}
                    title={`${skill.name} • ${skill.level}`}
                  >
                    <div className="tech-logo-box">
                      {skill.logo ? (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className={`tech-brand-logo-img ${skill.invert ? 'invert-white' : ''}`}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                            if (e.currentTarget.nextElementSibling) {
                              e.currentTarget.nextElementSibling.style.display =
                                'inline-block'
                            }
                          }}
                        />
                      ) : null}
                      <span
                        className="tech-fallback-icon"
                        style={{
                          display: skill.logo ? 'none' : 'inline-block',
                        }}
                      >
                        {skill.icon || '⚡'}
                      </span>
                    </div>
                    <span className="tech-tile-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
