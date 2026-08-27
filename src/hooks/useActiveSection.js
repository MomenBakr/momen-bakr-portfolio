import { useState, useEffect } from 'react'

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'experience',
  'projects',
  'packages',
  'opensource',
  'contact',
]

export function useActiveSection(onSectionChange) {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const updateActiveSection = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35
      let current = 'hero'

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            current = id
            break
          } else if (scrollPos >= top) {
            current = id
          }
        }
      }

      setScrolled(window.scrollY > 40)
      setActiveSection((prev) => {
        if (prev !== current) {
          if (onSectionChange) onSectionChange(current)
        }
        return current
      })
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    updateActiveSection()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [onSectionChange])

  return { activeSection, scrolled }
}
