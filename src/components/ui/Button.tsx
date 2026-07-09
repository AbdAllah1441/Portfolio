import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '#/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'

type BaseProps = {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
  }

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
  }

type Props = ButtonProps | AnchorProps

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-background hover:bg-accent-muted border border-transparent hover:shadow-[var(--shadow-glow)]',
  secondary:
    'bg-surface-elevated text-foreground hover:bg-border border border-border shadow-[var(--shadow-sm)]',
  ghost: 'text-muted-foreground hover:text-foreground hover:bg-surface-elevated border border-transparent',
  outline:
    'bg-transparent text-foreground border border-border hover:border-accent/50 hover:text-accent hover:shadow-[var(--shadow-glow)]',
}

export function Button(props: Props) {
  const { variant = 'primary', children, className, ...rest } = props

  const classes = cn(
    'inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
    variantStyles[variant],
    className,
  )

  if (props.as === 'a') {
    const { as: _, ...anchorProps } = rest as AnchorProps
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={(rest as ButtonHTMLAttributes<HTMLButtonElement>).type ?? 'button'}
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
