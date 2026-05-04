'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects')
      const data = await res.json()
      setProjects(data)
      setLoading(false)

      // Animate cards on load
      gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
      })
    } catch (error) {
      console.error('Error fetching projects:', error)
      setLoading(false)
    }
  }

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          <p className="text-gray-400 text-lg mt-4">
            Explore my latest work and contributions
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin">
              <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full"></div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-400 text-xl">
                  No projects yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
