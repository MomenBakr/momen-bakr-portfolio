import { MASCOT_DIALOGUES } from '../data/mascot'

export function SectionGuideAvatar({
  activeSection,
  mascotMinimized,
  setMascotMinimized,
  mascotBouncing,
  setMascotBouncing,
  mascotBubbleOpen,
  setMascotBubbleOpen,
}) {
  if (!activeSection || activeSection === 'hero') {
    return null
  }

  const dialogue = MASCOT_DIALOGUES[activeSection] || MASCOT_DIALOGUES.about

  return (
    <aside
      className={`section-guide-avatar-container ${mascotMinimized ? 'minimized' : ''} ${mascotBouncing ? 'bounce' : ''} section-${activeSection}`}
      aria-label="Section Guide"
    >
      {/* Speech / Insight Bubble */}
      {!mascotMinimized && mascotBubbleOpen && (
        <div className="section-guide-speech-bubble glass-card">
          <div className="guide-bubble-header">
            <span className="guide-bubble-badge">
              {dialogue?.badge || '👉 Highlights'}
            </span>
            <button
              type="button"
              className="guide-bubble-close"
              onClick={() => setMascotBubbleOpen(false)}
              title="Hide message"
              aria-label="Close message"
            >
              ✕
            </button>
          </div>
          <p className="guide-bubble-quote">{dialogue?.quote}</p>
          <div className="guide-bubble-tip">
            <span className="guide-tip-text">{dialogue?.tip}</span>
          </div>
          <span className="guide-bubble-pointer"></span>
        </div>
      )}

      {/* Pointing Avatar Character Frame */}
      <div className="section-guide-character-pod">
        <button
          type="button"
          className="section-guide-minimize-btn"
          onClick={() => {
            setMascotMinimized(!mascotMinimized)
            if (mascotMinimized) setMascotBubbleOpen(true)
          }}
          title={mascotMinimized ? 'Expand Guide' : 'Minimize Guide'}
          aria-label={mascotMinimized ? 'Expand Guide' : 'Minimize Guide'}
        >
          {mascotMinimized ? '💡' : '–'}
        </button>

        <div
          className="section-guide-avatar-frame"
          onClick={() => {
            setMascotBouncing(true)
            setMascotBubbleOpen(true)
            setTimeout(() => setMascotBouncing(false), 800)
          }}
          title="Click me for live section insights!"
        >
          <img
            src="/momen-avatar-pointing-transparent.png"
            alt="Mo'men Section Guide Avatar"
            className="section-guide-pointing-img"
            loading="eager"
          />
          <span className="section-guide-status-dot"></span>
        </div>
      </div>
    </aside>
  )
}
