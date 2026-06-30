import { skillCategories } from '#/data/portfolio'
import { SectionWrapper } from '#/components/layout/SectionWrapper'
import { SectionHeading } from '#/components/ui/SectionHeading'
import { Tag } from '#/components/ui/Tag'

export function Skills() {
  return (
    <SectionWrapper id="skills" ariaLabelledBy="skills-heading" className="bg-surface/30">
      <SectionHeading
        label="// skills"
        title="Skills & Technologies"
        description="Technologies and tools I use to build modern web applications."
      />

      <div id="skills-heading" className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="border border-border bg-surface p-6 transition-colors duration-200 hover:border-border-subtle"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
