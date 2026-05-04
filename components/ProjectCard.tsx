export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="project-card group glass rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-6xl overflow-hidden relative">
        <div className="group-hover:scale-125 transition-transform duration-500">
          {project.emoji || '📱'}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies?.split(',').map((tech: string) => (
            <span
              key={tech.trim()}
              className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              GitHub →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
