import { useState, useEffect, useRef, useCallback } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useActiveSection } from './hooks/useActiveSection'
import { useGitHubRepos } from './hooks/useGitHubRepos'

import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { PackagesSection } from './components/PackagesSection'
import { OpenSourceSection } from './components/OpenSourceSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { SectionGuideAvatar } from './components/SectionGuideAvatar'
import { LightboxModal } from './components/LightboxModal'

import './App.css'

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalImage, setModalImage] = useState(null)
  const [mascotMinimized, setMascotMinimized] = useState(false)
  const [mascotBouncing, setMascotBouncing] = useState(false)
  const [mascotBubbleOpen, setMascotBubbleOpen] = useState(true)

  // Pre-rendering scroll reveal observer
  useScrollReveal()

  // Live GitHub repositories with fallback cache
  const { repos } = useGitHubRepos()

  // Callback triggered when section changes
  const handleSectionChange = useCallback(() => {
    setMascotBubbleOpen(true)
    setMascotBouncing(true)
    setTimeout(() => setMascotBouncing(false), 700)
  }, [])

  // 60fps RAF scroll and active section tracker
  const { activeSection, scrolled } = useActiveSection(handleSectionChange)

  // Direct DOM ref for GPU-composited ambient cursor glow (0 React re-renders)
  const glowRef = useRef(null)
  useEffect(() => {
    let rafId = null
    const onMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`
        }
      })
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  // Keyboard accessibility: ESC key to close modal or mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModalImage(null)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection setModalImage={setModalImage} />
      <PackagesSection />
      <OpenSourceSection repos={repos} />
      <ContactSection />
      <Footer />

      <SectionGuideAvatar
        activeSection={activeSection}
        mascotMinimized={mascotMinimized}
        setMascotMinimized={setMascotMinimized}
        mascotBouncing={mascotBouncing}
        setMascotBouncing={setMascotBouncing}
        mascotBubbleOpen={mascotBubbleOpen}
        setMascotBubbleOpen={setMascotBubbleOpen}
      />

      <LightboxModal
        modalImage={modalImage}
        onClose={() => setModalImage(null)}
      />

      {/* GPU Ambient Interactive Cursor Glow */}
      <div ref={glowRef} className="ambient-cursor-glow" />
    </>
  )
}

export default App
