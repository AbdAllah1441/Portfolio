import { useEffect, useRef, useState } from 'react'

type UseTypewriterOptions = {
  text: string
  baseSpeed?: number
  delay?: number
  enabled?: boolean
}

function getCharDelay(char: string, baseSpeed: number, index: number): number {
  if (char === ' ') return baseSpeed * 0.4
  if (char === '\n') return baseSpeed * 2
  if ('.,;:!?'.includes(char)) return baseSpeed * 2.5
  if (index === 0) return baseSpeed * 1.5
  return baseSpeed + (Math.random() * 24 - 12)
}

export function useTypewriter({
  text,
  baseSpeed = 55,
  delay = 0,
  enabled = true,
}: UseTypewriterOptions) {
  const [displayed, setDisplayed] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    if (!enabled) {
      setDisplayed('')
      setIsComplete(false)
      return
    }

    setDisplayed('')
    setIsComplete(false)

    let index = 0

    const typeNext = () => {
      index += 1
      setDisplayed(text.slice(0, index))

      if (index >= text.length) {
        setIsComplete(true)
        return
      }

      const char = text[index - 1] ?? ''
      const nextDelay = getCharDelay(char, baseSpeed, index)
      timeoutRef.current = setTimeout(typeNext, nextDelay)
    }

    timeoutRef.current = setTimeout(typeNext, delay + baseSpeed)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [text, baseSpeed, delay, enabled])

  return { displayed, isComplete }
}
