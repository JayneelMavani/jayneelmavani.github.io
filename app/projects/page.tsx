import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects — Portfolio Template",
  description: "Explore my latest work and contributions.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            My <span className="text-gradient">Projects</span>
          </h1>
          <div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4"
            aria-hidden="true"
          />
          <p className="text-gray-300 text-base sm:text-lg">
            Explore my latest work and contributions
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
