import { projects } from '#/data/portfolio'
import { SectionWrapper } from '#/components/layout/SectionWrapper'
import { SectionHeading } from '#/components/ui/SectionHeading'
import { ProjectCard } from '#/components/sections/ProjectCard'

export function Projects() {
  return (
    <SectionWrapper id="projects" ariaLabelledBy="projects-heading">
      <SectionHeading
        label="// projects"
        title="Featured Projects"
        description="A selection of projects showcasing my frontend development work."
      />

      <div
        id="projects-heading"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
