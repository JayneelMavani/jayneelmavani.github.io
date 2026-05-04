'use client'

import { useState } from 'react'
import DashboardNav from '@/components/DashboardNav'
import ProjectsTab from '@/components/tabs/ProjectsTab'
import BlogsTab from '@/components/tabs/BlogsTab'
import SkillsTab from '@/components/tabs/SkillsTab'
import SettingsTab from '@/components/tabs/SettingsTab'

type Tab = 'projects' | 'blogs' | 'skills' | 'settings'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('projects')

  const tabs = [
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'blogs', label: 'Blog Posts', icon: '📝' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <div className="min-h-screen bg-dark pt-24">
      <DashboardNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Admin <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="text-gray-400">Manage your portfolio content</p>
        </div>

        {/* Tabs */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="flex border-b border-slate-700 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`px-6 py-4 font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-cyan-400 border-b-2 border-cyan-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'projects' && <ProjectsTab />}
            {activeTab === 'blogs' && <BlogsTab />}
            {activeTab === 'skills' && <SkillsTab />}
            {activeTab === 'settings' && <SettingsTab />}
          </div>
        </div>
      </div>
    </div>
  )
}
