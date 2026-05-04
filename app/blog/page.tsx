'use client'

import { useState, useEffect } from 'react'
import gsap from 'gsap'
import BlogCard from '@/components/BlogCard'

export default function Blog() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs')
      const data = await res.json()
      setBlogs(data)
      setLoading(false)

      // Animate cards on load
      gsap.from('.blog-card', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
      })
    } catch (error) {
      console.error('Error fetching blogs:', error)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Latest <span className="text-gradient">Blog Posts</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          <p className="text-gray-400 text-lg mt-4">
            Thoughts, tutorials, and insights on web development
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin">
              <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full"></div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-400 text-xl">
                  No blog posts yet. Stay tuned!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
