import { NextResponse } from 'next/server'

// Mock database
const blogs = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn the basics of Next.js 14 and build your first application',
    content: 'Full blog content here...',
    tags: 'Next.js, Web Development, Tutorial',
    createdAt: new Date('2024-01-10'),
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices',
    excerpt: 'Essential security practices every developer should know',
    content: 'Full blog content here...',
    tags: 'Cybersecurity, Security, Best Practices',
    createdAt: new Date('2024-02-05'),
  },
]

export async function GET() {
  return NextResponse.json(blogs)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const newBlog = {
      id: blogs.length + 1,
      ...data,
      createdAt: new Date(),
    }
    blogs.push(newBlog)
    return NextResponse.json(newBlog, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
