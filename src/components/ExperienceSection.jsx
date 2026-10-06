import { EXPERIENCE } from '../data/experience'

export function ExperienceSection() {
  return (
    <section className="experience-section section" id="experience">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-label">Experience</span>
          <h2>Where I've Worked</h2>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="timeline-item" data-reveal>
              <div className="timeline-dot"></div>
              <span className="timeline-date">{exp.totalDate || exp.date}</span>
              <div className="timeline-card glass-card">
                <div className="timeline-card-header">
                  <div className="timeline-company-info">
                    <h3 className="timeline-company-title">{exp.company}</h3>
                    <div className="timeline-meta-row">
                      <span className="timeline-location">📍 {exp.location}</span>
                      {exp.employmentType && (
                        <span className="timeline-type-pill">{exp.employmentType}</span>
                      )}
                    </div>
                  </div>
                </div>

                {exp.roles && exp.roles.length > 1 ? (
                  <div className="timeline-multi-roles">
                    {exp.roles.map((role, rIdx) => (
                      <div
                        key={rIdx}
                        className={`timeline-nested-role ${role.isCurrent ? 'is-current' : ''}`}
                      >
                        <div className="nested-role-connector">
                          <div className="nested-role-dot"></div>
                          {rIdx < exp.roles.length - 1 && (
                            <div className="nested-role-line"></div>
                          )}
                        </div>
                        <div className="nested-role-content">
                          <div className="nested-role-header">
                            <h4 className="nested-role-title">{role.title}</h4>
                            <div className="nested-role-badge-group">
                              {role.isCurrent && (
                                <span className="current-badge">Current Role</span>
                              )}
                              <span className="nested-role-date">{role.date}</span>
                            </div>
                          </div>
                          <ul>
                            {role.points.map((pt, j) => (
                              <li key={j}>{pt}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="timeline-single-role">
                    <h4 className="single-role-title">
                      {exp.roles ? exp.roles[0].title : exp.title}
                    </h4>
                    <ul>
                      {(exp.roles ? exp.roles[0].points : exp.points).map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

