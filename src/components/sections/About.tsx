import { aboutContent } from '#/data/portfolio'
import { SectionWrapper } from '#/components/layout/SectionWrapper'
import { SectionHeading } from '#/components/ui/SectionHeading'

export function About() {
  return (
    <SectionWrapper id="about" ariaLabelledBy="about-heading">
      <div className="grid gap-10 lg:grid-cols-5 lg:items-stretch lg:gap-16">
        <div className="lg:col-span-3">
          <SectionHeading
            label="// about"
            title="About Me"
            description="A brief overview of who I am and what I bring to the table."
            titleId="about-heading"
            className="mb-8 md:mb-10"
          />

          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {aboutContent.summary}
          </p>
        </div>

        <ul
          className="flex h-full flex-col gap-4 lg:col-span-2"
          aria-label="Professional highlights"
        >
          {aboutContent.highlights.map((item) => (
            <li
              key={item}
              className="flex flex-1 items-start gap-3 border border-border-subtle bg-surface p-4 text-sm text-muted-foreground transition-colors duration-200 hover:border-border"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
