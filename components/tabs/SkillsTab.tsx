'use client'

import { useState } from 'react'

export default function SkillsTab() {
  const [skills] = useState([
    {
      category: 'Frontend Development',
      items: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'MongoDB', level: 82 },
      ],
    },
    {
      category: 'Cybersecurity',
      items: [
        { name: 'Network Security', level: 78 },
        { name: 'Penetration Testing', level: 75 },
      ],
    },
  ])

  const [editSkill, setEditSkill] = useState(null)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Manage Skills</h2>

      <div className="space-y-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="glass rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-6">{skillGroup.category}</h3>

            <div className="space-y-4">
              {skillGroup.items.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="flex-1 font-semibold">{skill.name}</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.level}
                    className="w-32 h-2 bg-slate-700 rounded-full cursor-pointer accent-cyan-500"
                    readOnly
                  />
                  <span className="w-12 text-right font-semibold text-cyan-400">{skill.level}%</span>
                  <button className="text-red-400 hover:text-red-300 transition-colors">
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <button className="mt-6 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
              + Add Skill
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
