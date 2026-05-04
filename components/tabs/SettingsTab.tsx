'use client'

import { useState } from 'react'
import FormInput from '@/components/FormInput'

export default function SettingsTab() {
  const [settings, setSettings] = useState({
    siteTitle: 'Jayneel Mavani - Portfolio',
    bio: 'Full Stack Developer & Cybersecurity Enthusiast',
    email: 'jayneel@example.com',
    github: 'https://github.com/JayneelMavani',
    linkedin: 'https://linkedin.com/in/jayneel-mavani-b2686232a',
    twitter: 'https://twitter.com/JayneelMavani',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Save settings (in production, send to backend)
      console.log('Settings saved:', settings)
      alert('Settings saved successfully!')
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Settings</h2>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <FormInput
          label="Site Title"
          name="siteTitle"
          value={settings.siteTitle}
          onChange={handleChange}
        />

        <div>
          <label className="block text-sm font-semibold mb-2">Bio</label>
          <textarea
            name="bio"
            value={settings.bio}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors duration-300 resize-none"
          ></textarea>
        </div>

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={settings.email}
          onChange={handleChange}
        />

        <FormInput
          label="GitHub URL"
          name="github"
          type="url"
          value={settings.github}
          onChange={handleChange}
        />

        <FormInput
          label="LinkedIn URL"
          name="linkedin"
          type="url"
          value={settings.linkedin}
          onChange={handleChange}
        />

        <FormInput
          label="Twitter URL"
          name="twitter"
          type="url"
          value={settings.twitter}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  )
}
