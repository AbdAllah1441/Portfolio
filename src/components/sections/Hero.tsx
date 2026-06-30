import { ArrowDown, Download } from 'lucide-react'
import { heroContent, siteConfig } from '#/data/portfolio'
import { Button } from '#/components/ui/Button'
import { TerminalWindow } from '#/components/terminal/TerminalWindow'
import { scrollToSection } from '#/lib/utils'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-20 items-center pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="animate-fade-in-up space-y-6">
          <p className="font-mono text-sm text-accent">Hello, world.</p>

          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name}
          </h1>

          <p className="text-lg text-muted-foreground sm:text-xl">
            {siteConfig.title}
          </p>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {heroContent.intro}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              as="a"
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
            >
              View Projects
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Contact Me
            </Button>
            <Button as="a" href={siteConfig.cvUrl} variant="secondary" download>
              <Download size={16} aria-hidden="true" />
              Download CV
            </Button>
          </div>
        </div>

        <div className="animate-fade-in-up w-[28rem] max-w-full lg:justify-self-end" style={{ animationDelay: '150ms' }}>
          <TerminalWindow />
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('about')
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
