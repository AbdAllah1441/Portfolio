import type { ReactNode } from 'react'
import { cn } from '#/lib/utils'

type SectionHeadingProps = {
  label: string
  title: string
  description?: string
  titleId?: string
  className?: string
  children?: ReactNode
}

export function SectionHeading({
  label,
  title,
  description,
  titleId,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16', className)}>
      <p className="font-mono text-sm text-accent tracking-wide">{label}</p>
      <h2
        id={titleId}
        className="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-[2.5rem] md:leading-tight"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
