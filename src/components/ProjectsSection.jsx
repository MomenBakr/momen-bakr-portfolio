import { useState, useMemo } from 'react'
import { ALL_PROJECTS, PROJECT_CATEGORIES } from '../data/projects'

export function ProjectsSection({ setModalImage }) {
  const [activeProjectCategory, setActiveProjectCategory] = useState('all')
  const [projectViewMode, setProjectViewMode] = useState('grid')
  const [activeScreenshotIndices, setActiveScreenshotIndices] = useState({})

  const filteredProjects = useMemo(() => {
    if (activeProjectCategory === 'all') return ALL_PROJECTS
    return ALL_PROJECTS.filter((p) => p.category === activeProjectCategory)
  }, [activeProjectCategory])

  const handlePrevScreenshot = (projectId, total, e) => {
    e.stopPropagation()
    setActiveScreenshotIndices((prev) => {
      const current = prev[projectId] || 0
      return {
        ...prev,
        [projectId]: (current - 1 + total) % total,
      }
    })
  }

  const handleNextScreenshot = (projectId, total, e) => {
    e.stopPropagation()
    setActiveScreenshotIndices((prev) => {
      const current = prev[projectId] || 0
      return {
        ...prev,
        [projectId]: (current + 1) % total,
      }
    })
  }

  const handleSelectScreenshot = (projectId, index, e) => {
    e.stopPropagation()
    setActiveScreenshotIndices((prev) => ({
      ...prev,
      [projectId]: index,
    }))
  }

  return (
    <section className="projects-section section" id="projects">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-label">Featured Projects & Shipped Apps</span>
          <h2>Production Applications & Live App Previews</h2>
          <p>
            Interactive device showcases featuring official production screenshots
            from the Apple App Store and Google Play.
          </p>
        </div>

        {/* Project Category Filter Tabs & View Mode Switcher */}
        <div className="projects-control-bar" data-reveal>
          <div className="project-category-tabs">
            {PROJECT_CATEGORIES.map((cat) => {
              const count =
                cat.id === 'all'
                  ? ALL_PROJECTS.length
                  : ALL_PROJECTS.filter((p) => p.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`project-tab-btn ${activeProjectCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveProjectCategory(cat.id)}
                >
                  <span className="tab-icon">{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span className="tab-badge">{count}</span>
                </button>
              )
            })}
          </div>

          {/* View Mode Switcher: Grid ⊞ vs List ☰ */}
          <div className="view-mode-toggle-group">
            <button
              type="button"
              className={`view-mode-btn ${projectViewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setProjectViewMode('grid')}
              title="Grid View (3 Columns)"
              aria-label="Grid View"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
              </svg>
              <span>Grid</span>
            </button>
            <button
              type="button"
              className={`view-mode-btn ${projectViewMode === 'list' ? 'active' : ''}`}
              onClick={() => setProjectViewMode('list')}
              title="Detailed List View"
              aria-label="Detailed List View"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="4" width="18" height="4" rx="1.5" />
                <rect x="3" y="10" width="18" height="4" rx="1.5" />
                <rect x="3" y="16" width="18" height="4" rx="1.5" />
              </svg>
              <span>List</span>
            </button>
          </div>
        </div>

        {/* Modern Projects Showcase Container */}
        <div
          className={`modern-projects-showcase-grid ${projectViewMode === 'list' ? 'list-view' : ''}`}
        >
          {filteredProjects.map((proj) => {
            const screenshots = proj.screenshots || []
            const activeIndex = activeScreenshotIndices[proj.id] || 0
            const currentScreenshot = screenshots[activeIndex]

            return (
              <div key={proj.id} className="showcase-project-card glass-card">
                {/* Card Top Category Tag & Platform Pill */}
                <div className="showcase-card-top-bar">
                  <span className="project-category-pill">
                    {proj.category === 'coop'
                      ? '🏬 Coop Society'
                      : proj.category === 'ecommerce'
                        ? '🛒 E-Commerce'
                        : '🎬 Media & Streaming'}
                  </span>
                  <span className="project-platform-badge">
                    {proj.platformIcon} {proj.platform}
                  </span>
                </div>

                <div className="showcase-card-main-content">
                  {/* Smartphone Frame Showcase Column */}
                  <div className="showcase-phone-col">
                    <div className="phone-mockup-wrapper">
                      {/* Navigation Arrows */}
                      {screenshots.length > 1 && (
                        <>
                          <button
                            type="button"
                            className="mockup-nav-arrow prev"
                            onClick={(e) =>
                              handlePrevScreenshot(proj.id, screenshots.length, e)
                            }
                            aria-label="Previous screenshot"
                          >
                            ‹
                          </button>
                          <button
                            type="button"
                            className="mockup-nav-arrow next"
                            onClick={(e) =>
                              handleNextScreenshot(proj.id, screenshots.length, e)
                            }
                            aria-label="Next screenshot"
                          >
                            ›
                          </button>
                        </>
                      )}

                      <div
                        className="phone-device-frame"
                        onClick={() =>
                          currentScreenshot &&
                          setModalImage({
                            img: currentScreenshot,
                            name: proj.name,
                            nameAr: proj.nameAr,
                          })
                        }
                        title="Click to view full resolution"
                      >
                        {/* Dynamic Island / Speaker Notch */}
                        <div className="phone-dynamic-island">
                          <span className="camera-lens"></span>
                        </div>

                        {/* Screen Glass Area */}
                        <div className="phone-screen-viewport">
                          {currentScreenshot ? (
                            <img
                              src={currentScreenshot}
                              alt={`${proj.name} store screenshot`}
                              className="phone-screen-img"
                              loading="lazy"
                            />
                          ) : (
                            <div className="phone-screen-placeholder">
                              <span className="placeholder-icon">
                                {proj.icon}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Expand Hint Tag */}
                        <div className="phone-expand-hint">
                          <span>🔍 Expand</span>
                        </div>

                        {/* Phone Glare Reflection */}
                        <div className="phone-glass-glare"></div>
                      </div>

                      {/* Secondary Angled Phone in Background if 2+ screenshots exist */}
                      {screenshots.length > 1 && (
                        <div className="phone-device-frame secondary-bg-phone">
                          <div className="phone-screen-viewport">
                            <img
                              src={
                                screenshots[
                                  (activeIndex + 1) % screenshots.length
                                ]
                              }
                              alt={`${proj.name} preview`}
                              className="phone-screen-img"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Multi-Screenshot Selector Dots */}
                    {screenshots.length > 1 && (
                      <div className="screenshot-pagination-bar">
                        <span className="screenshots-count-label">
                          {activeIndex + 1} / {screenshots.length} Screens
                        </span>
                        <div className="pagination-dots-group">
                          {screenshots.map((_, sIndex) => (
                            <button
                              key={sIndex}
                              type="button"
                              className={`pagination-dot-btn ${activeIndex === sIndex ? 'active' : ''}`}
                              onClick={(e) =>
                                handleSelectScreenshot(proj.id, sIndex, e)
                              }
                              aria-label={`Show screenshot ${sIndex + 1}`}
                            >
                              <span className="dot-fill"></span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info & Metadata Column */}
                  <div className="showcase-card-body">
                    <div className="showcase-card-header">
                      <div className="showcase-icon-title">
                        <span className="project-app-icon">{proj.icon}</span>
                        <div>
                          <h3 className="project-title">{proj.name}</h3>
                          {proj.nameAr && (
                            <div
                              className="project-arabic-title arabic-text"
                              dir="rtl"
                            >
                              {proj.nameAr}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="project-desc">{proj.desc}</p>

                    {/* Tech Stack Chips */}
                    {proj.tags && (
                      <div className="project-tech-chips-row">
                        {proj.tags.map((t, idx) => (
                          <span key={idx} className="project-tech-chip">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Store Links */}
                    <div className="project-links">
                      {proj.appStore && (
                        <a
                          href={proj.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="store-badge-btn app-store"
                          title="Download on Apple App Store"
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.86c.62-.75 1.04-1.8 1.01-2.86-.96.04-2.13.65-2.8 1.43-.59.68-1.11 1.76-1.07 2.81 1.07.08 2.24-.63 2.86-1.38z" />
                          </svg>
                          App Store
                        </a>
                      )}
                      {proj.playStore && (
                        <a
                          href={proj.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="store-badge-btn google-play"
                          title="Get it on Google Play"
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.61-.399V2.213c.184-.15.394-.287.609-.399zm11.305 11.306l2.456 2.456-11.83 6.822 9.374-9.278zm0-2.24L5.54 1.602l11.83 6.822-2.456 2.456zm1.583 1.12l3.754-2.164a1.86 1.86 0 0 1 0 3.208l-3.754-2.164z" />
                          </svg>
                          Google Play
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
