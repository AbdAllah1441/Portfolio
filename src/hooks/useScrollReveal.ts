import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '#/hooks/useReducedMotion'

type UseScrollRevealOptions = {
  threshold?: number
  rootMargin?: string
}

export function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -8% 0px',
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [prefersReducedMotion, rootMargin, threshold])

  return { ref, isVisible }
}
