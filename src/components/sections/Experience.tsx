import { experiences } from '#/data/portfolio'
import { SectionWrapper } from '#/components/layout/SectionWrapper'
import { SectionHeading } from '#/components/ui/SectionHeading'
import { Tag } from '#/components/ui/Tag'

export function Experience() {
  return (
    <SectionWrapper id="experience" ariaLabelledBy="experience-heading" className="bg-surface/30">
      <SectionHeading
        label="// experience"
        title="Work Experience"
        description="My professional journey in frontend development."
      />

      <ol id="experience-heading" className="relative space-y-0">
        {experiences.map((exp, index) => (
          <li key={exp.id} className="relative pl-8 pb-12 last:pb-0">
            {index < experiences.length - 1 && (
              <span
                className="absolute left-[7px] top-3 h-full w-px bg-border"
                aria-hidden="true"
              />
            )}

            <span
              className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center border-2 border-accent bg-background"
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 bg-accent" />
            </span>

            <div className="border border-border bg-surface p-6 transition-colors duration-200 hover:border-border-subtle">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                </div>
                <time className="font-mono text-xs text-muted">{exp.period}</time>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  )
}
