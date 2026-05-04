'use client'

import { useState } from 'react'
import FormInput from '@/components/FormInput'

export default function ProjectsTab() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    emoji: '📱',
    technologies: '',
    github: '',
    demo: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        const newProject = await res.json()
        setProjects([...projects, newProject])
        setFormData({
          title: '',
          description: '',
          emoji: '📱',
          technologies: '',
          github: '',
          demo: '',
        })
        setShowForm(false)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Manage Projects</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary"
        >
          {showForm ? 'Cancel' : '+ Add Project'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-6 mb-8 p-6 glass rounded-lg">
          <FormInput
            label="Project Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block text-sm font-semibold mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors duration-300 resize-none"
            ></textarea>
          </div>

          <FormInput
            label="Emoji Icon"
            name="emoji"
            value={formData.emoji}
            onChange={handleChange}
          />

          <FormInput
            label="Technologies (comma-separated)"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
          />

          <FormInput
            label="GitHub URL"
            name="github"
            type="url"
            value={formData.github}
            onChange={handleChange}
          />

          <FormInput
            label="Demo URL"
            name="demo"
            type="url"
            value={formData.demo}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Project'}
          </button>
        </form>
      )}

      {/* Projects List */}
      <div className="space-y-4">
        {projects.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No projects added yet</p>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="glass p-6 rounded-lg flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.split(',').map((tech: string) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <button className="text-red-400 hover:text-red-300 transition-colors">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
