import { aboutContent } from '#/data/portfolio'
import { SectionWrapper } from '#/components/layout/SectionWrapper'
import { SectionHeading } from '#/components/ui/SectionHeading'
import { Reveal } from '#/components/ui/Reveal'

export function About() {
  return (
    <SectionWrapper id="about" ariaLabelledBy="about-heading">
      <div className="grid gap-12 lg:grid-cols-5 lg:items-stretch lg:gap-16">
        <Reveal className="lg:col-span-3">
          <SectionHeading
            label="// about"
            title="About Me"
            description="A brief overview of who I am and what I bring to the table."
            titleId="about-heading"
            className="mb-8 md:mb-10"
          />

          <p className="text-base leading-relaxed text-muted-foreground md:text-lg md:leading-8">
            {aboutContent.summary}
          </p>
        </Reveal>

        <ul
          className="flex h-full flex-col gap-4 lg:col-span-2"
          aria-label="Professional highlights"
        >
          {aboutContent.highlights.map((item, index) => (
            <li key={item}>
              <Reveal delay={index * 80}>
                <div className="surface-card flex flex-1 items-start gap-3 p-4 text-sm text-muted-foreground">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--color-accent)_60%,transparent)]"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
