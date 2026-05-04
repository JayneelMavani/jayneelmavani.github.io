import { NextResponse } from 'next/server'

// Mock database - in production, use MongoDB
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Next.js and MongoDB',
    emoji: '🛒',
    technologies: 'Next.js, MongoDB, Tailwind, Stripe',
    github: 'https://github.com',
    demo: 'https://example.com',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    emoji: '✅',
    technologies: 'React, Firebase, Tailwind',
    github: 'https://github.com',
    demo: 'https://example.com',
    createdAt: new Date('2024-02-20'),
  },
]

export async function GET() {
  return NextResponse.json(projects)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const newProject = {
      id: projects.length + 1,
      ...data,
      createdAt: new Date(),
    }
    projects.push(newProject)
    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
