import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <header className="mb-12 sm:mb-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
      >
        ← Back to Projects
      </Link>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            {project.title}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag}>
                <span className="text-xs px-3 py-1 bg-cyan-500/15 text-cyan-300 rounded-full border border-cyan-500/20">
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden glass">
          <Image
            src={project.thumbnail}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </header>
  );
}
