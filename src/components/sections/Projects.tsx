import { projects } from '#/data/portfolio'
import { SectionWrapper } from '#/components/layout/SectionWrapper'
import { SectionHeading } from '#/components/ui/SectionHeading'
import { ProjectCard } from '#/components/sections/ProjectCard'
import { Reveal } from '#/components/ui/Reveal'

export function Projects() {
  return (
    <SectionWrapper id="projects" ariaLabelledBy="projects-heading">
      <Reveal>
        <SectionHeading
          label="// projects"
          title="Featured Projects"
          description="A selection of projects showcasing my frontend development work."
        />
      </Reveal>

      <div
        id="projects-heading"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 100} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
