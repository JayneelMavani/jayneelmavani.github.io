'use client'

import Link from 'next/link'

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Next.js, MongoDB, and Stripe integration',
      image: '🛒',
      tags: ['Next.js', 'MongoDB', 'Tailwind', 'Stripe'],
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      image: '✅',
      tags: ['React', 'Firebase', 'Tailwind'],
      link: '#',
    },
    {
      id: 3,
      title: 'Security Dashboard',
      description: 'Cybersecurity monitoring dashboard with real-time analytics',
      image: '🔒',
      tags: ['Next.js', 'D3.js', 'Node.js'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Some of my best work and latest creations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group glass rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-6xl overflow-hidden relative">
                <div className="group-hover:scale-125 transition-transform duration-500">
                  {project.image}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
