import type { ReactNode } from 'react'
import { cn } from '#/lib/utils'

type SectionWrapperProps = {
  id: string
  children: ReactNode
  className?: string
  ariaLabelledBy?: string
}

export function SectionWrapper({
  id,
  children,
  className,
  ariaLabelledBy,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn('scroll-mt-20 py-24 md:py-32', className)}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  )
}
