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
              <span className="timeline-date">{exp.date}</span>
              <div className="timeline-card glass-card">
                <h3>{exp.title}</h3>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-location">📍 {exp.location}</div>
                <ul>
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
