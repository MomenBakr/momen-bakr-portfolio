import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 200px 0px',
      }
    )

    const revealElements = document.querySelectorAll('[data-reveal]')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
