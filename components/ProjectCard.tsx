import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group glass rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 flex flex-col h-full">
      <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-800/50">
        <Image
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 flex-1">
          {project.shortDescription}
        </p>

        <ul
          className="flex flex-wrap gap-2 mb-5"
          aria-label="Technologies used"
        >
          {project.tags.map((tag) => (
            <li key={tag}>
              <span className="text-xs px-2.5 py-1 bg-cyan-500/15 text-cyan-300 rounded-full border border-cyan-500/20">
                {tag}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          >
            View Details →
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
