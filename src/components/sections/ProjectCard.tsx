import { ExternalLink, Github, Layers } from 'lucide-react'
import type { Project } from '#/data/portfolio'
import { Tag } from '#/components/ui/Tag'
import { Button } from '#/components/ui/Button'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group surface-card surface-card-lift flex h-full flex-col overflow-hidden">
      <div
        className="relative flex h-48 items-center justify-center overflow-hidden bg-surface-elevated"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-muted transition-transform duration-500 ease-out group-hover:scale-110">
          <Layers size={32} strokeWidth={1.5} />
          <span className="font-mono text-xs">preview</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-50" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            as="a"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="text-xs"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </Button>
          <Button
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="text-xs"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={16} aria-hidden="true" />
            Live Demo
          </Button>
        </div>
      </div>
    </article>
  )
}
