'use client'

export default function SkillsSection() {
  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 85 },
      ],
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'Express.js', level: 84 },
        { name: 'REST APIs', level: 88 },
      ],
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Bootstrap', level: 87 },
        { name: 'GSAP', level: 80 },
        { name: 'Responsive Design', level: 92 },
      ],
    },
    {
      category: 'Cybersecurity',
      items: [
        { name: 'Network Security', level: 78 },
        { name: 'Penetration Testing', level: 75 },
        { name: 'Cryptography', level: 76 },
        { name: 'Ethical Hacking', level: 77 },
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-dark/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &amp; <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {skillGroup.category}
              </h3>

              <div className="space-y-6">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
