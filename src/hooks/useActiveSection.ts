import { useEffect, useState } from 'react'

const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'contact'] as const

export type SectionId = (typeof SECTION_IDS)[number] | 'hero'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero')

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id as SectionId)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('hero')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return activeSection
}
