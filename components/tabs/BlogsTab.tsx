'use client'

import { useState } from 'react'
import FormInput from '@/components/FormInput'

export default function BlogsTab() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    tags: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        const newBlog = await res.json()
        setBlogs([...blogs, newBlog])
        setFormData({
          title: '',
          excerpt: '',
          content: '',
          tags: '',
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
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary"
        >
          {showForm ? 'Cancel' : '+ New Post'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-6 mb-8 p-6 glass rounded-lg">
          <FormInput
            label="Blog Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block text-sm font-semibold mb-2">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={8}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors duration-300 resize-none"
            ></textarea>
          </div>

          <FormInput
            label="Tags (comma-separated)"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50"
          >
            {loading ? 'Publishing...' : 'Publish Post'}
          </button>
        </form>
      )}

      {/* Blog List */}
      <div className="space-y-4">
        {blogs.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No blog posts yet</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="glass p-6 rounded-lg flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{blog.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.split(',').map((tag: string) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <button className="text-red-400 hover:text-red-300 transition-colors ml-4">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
