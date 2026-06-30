import { cn } from '#/lib/utils'

type TagProps = {
  children: string
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:border-accent/40 hover:text-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}
