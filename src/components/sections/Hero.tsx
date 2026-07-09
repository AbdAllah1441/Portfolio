import { ArrowDown, Download } from 'lucide-react'
import { heroContent, siteConfig } from '#/data/portfolio'
import { Button } from '#/components/ui/Button'
import { TerminalWindow } from '#/components/terminal/TerminalWindow'
import { scrollToSection } from '#/lib/utils'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="hero-mesh" aria-hidden="true">
        <div className="hero-mesh-blob hero-mesh-blob-1" />
        <div className="hero-mesh-blob hero-mesh-blob-2" />
        <div className="hero-mesh-blob hero-mesh-blob-3" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="animate-fade-in-up space-y-7">
          <p className="font-mono text-sm tracking-wide text-accent glow-accent">
            Hello, world.
          </p>

          <h1
            id="hero-heading"
            className="font-display text-[2.75rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]"
          >
            {siteConfig.name}
          </h1>

          <p className="font-display text-xl font-medium tracking-tight text-foreground/90 sm:text-2xl">
            {siteConfig.title}
          </p>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
            {heroContent.intro}
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
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

        <div
          className="animate-fade-in-up w-[28rem] max-w-full lg:justify-self-end"
          style={{ animationDelay: '150ms' }}
        >
          <TerminalWindow />
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('about')
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
