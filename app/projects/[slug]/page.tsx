import type { Metadata } from "next";
import { notFound } from "next/navigation";
// import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetailSection from "@/components/projects/ProjectDetailSection";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/data/projects";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Portfolio Template`,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <ProjectHero project={project} /> */}

        <ProjectDetailSection title="Overview">
          <p>{project.overview}</p>
        </ProjectDetailSection>

        <ProjectDetailSection title="Key Features">
          <ul className="list-disc list-inside space-y-2">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </ProjectDetailSection>

        <ProjectDetailSection title="Tech Stack">
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li key={tech}>
                <span className="text-sm px-3 py-1.5 bg-cyan-500/15 text-cyan-200 rounded-lg border border-cyan-500/25">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </ProjectDetailSection>

        <ProjectGallery
          screenshots={project.screenshots}
          title={project.title}
        />

        <ProjectDetailSection title="Challenges">
          <p>{project.challenges}</p>
        </ProjectDetailSection>

        <ProjectDetailSection title="Solution">
          <p>{project.solution}</p>
        </ProjectDetailSection>

        {project.architecture && (
          <ProjectDetailSection title="Architecture">
            <p>{project.architecture}</p>
          </ProjectDetailSection>
        )}
      </div>
    </article>
  );
}
