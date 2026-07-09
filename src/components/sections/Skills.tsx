import { skillCategories } from '#/data/portfolio'
import { SectionWrapper } from '#/components/layout/SectionWrapper'
import { SectionHeading } from '#/components/ui/SectionHeading'
import { Tag } from '#/components/ui/Tag'
import { Reveal } from '#/components/ui/Reveal'

export function Skills() {
  return (
    <SectionWrapper id="skills" ariaLabelledBy="skills-heading" className="bg-surface/20">
      <Reveal>
        <SectionHeading
          label="// skills"
          title="Skills & Technologies"
          description="Technologies and tools I use to build modern web applications."
        />
      </Reveal>

      <div id="skills-heading" className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 100}>
            <article className="surface-card h-full p-6">
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
