'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 0.8,
    })
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Have a question or want to collaborate? Feel free to reach out. I&apos;m always interested in hearing about new projects and opportunities.
          </p>
        </div>

        {/* Contact Form */}
        <div className="glass rounded-2xl p-8 md:p-12">
          <ContactForm />
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Connect with me</h3>
          <div className="flex justify-center gap-6">
            {[
              { icon: '🐙', label: 'GitHub', url: 'https://github.com/JayneelMavani' },
              { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/jayneel-mavani-b2686232a' },
              { icon: '𝕏', label: 'Twitter', url: 'https://twitter.com/JayneelMavani' },
              { icon: '📧', label: 'Email', url: 'mailto:jayneel@example.com' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-lg hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
              >
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300 inline-block">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
