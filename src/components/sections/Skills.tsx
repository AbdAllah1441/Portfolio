import { lazy, Suspense } from 'react'
import { skillCategories, skillSlugs } from '#/data/portfolio'
import { SectionWrapper } from '#/components/layout/SectionWrapper'
import { SectionHeading } from '#/components/ui/SectionHeading'
import { Tag } from '#/components/ui/Tag'
import { Reveal } from '#/components/ui/Reveal'

const IconCloud = lazy(() =>
  import('#/components/ui/IconCloud').then((module) => ({
    default: module.IconCloud,
  })),
)

function IconCloudLoader() {
  return (
    <div className="mx-auto flex aspect-square w-full max-w-3xl items-center justify-center border border-border bg-surface/30">
      <p className="font-mono text-xs text-muted-foreground">
        Loading skills...
      </p>
    </div>
  )
}

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      ariaLabelledBy="skills-heading"
      className="bg-surface/20"
    >
      <Reveal>
        <SectionHeading
          label="// skills"
          title="Skills & Technologies"
          description="Technologies and tools I use to build modern web applications."
        />
      </Reveal>

      <Reveal delay={80}>
        <div id="skills-heading" className="mb-14">
          <div className="mx-auto aspect-square w-full max-w-3xl">
            <Suspense fallback={<IconCloudLoader />}>
              <IconCloud iconSlugs={[...skillSlugs]} />
            </Suspense>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
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
