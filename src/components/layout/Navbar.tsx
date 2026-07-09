import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '#/data/portfolio'
import { useActiveSection } from '#/hooks/useActiveSection'
import { cn, scrollToSection } from '#/lib/utils'

export function Navbar() {
  const activeSection = useActiveSection()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    scrollToSection(id)
    setIsMobileOpen(false)
  }

  const isLinkActive = (href: string) => {
    const id = href.replace('#', '')
    return activeSection === id
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-border/60 bg-background/85 shadow-[var(--shadow-sm)] backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('hero')
            setIsMobileOpen(false)
          }}
          className="font-mono text-sm font-medium text-foreground transition-colors duration-300 hover:text-accent"
        >
          {siteConfig.name.split(' ')[0].toLowerCase()}_
          <span className="text-accent">dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={cn(
                  'px-3 py-2 text-sm transition-colors duration-300',
                  isLinkActive(link.href)
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground',
                )}
                aria-current={isLinkActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={cn(
                    'block px-3 py-3 text-sm transition-colors',
                    isLinkActive(link.href)
                      ? 'text-accent'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
