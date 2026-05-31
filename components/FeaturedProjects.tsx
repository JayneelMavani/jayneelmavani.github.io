import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import SectionBackground from "@/components/SectionBackground";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/data/projects";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <SectionBackground variant="default" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          id="featured-projects-heading"
          title="Featured"
          accent="Projects"
          description="Some of my best work and latest creations"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
