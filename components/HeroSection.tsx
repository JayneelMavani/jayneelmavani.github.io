'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
    })
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
        },
        '-=0.4'
      )
      .from(
        descRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
        },
        '-=0.3'
      )
      .from(
        '.hero-btn',
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.1,
        },
        '-=0.3'
      )

    // Floating animation for image
    gsap.to('.hero-img', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Hi, I'm <span className="text-gradient">Jayneel</span>
            </h1>

            <div
              ref={subtitleRef}
              className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-6 h-10 overflow-hidden"
            >
              <div className="animate-pulse">Full Stack Developer</div>
            </div>

            <p
              ref={descRef}
              className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
            >
              I build beautiful, responsive web applications with modern technologies. 
              Passionate about React, Next.js, and creating exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="hero-btn btn-primary"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="hero-btn btn-secondary"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-12">
              {[
                { icon: '🐙', url: 'https://github.com/JayneelMavani' },
                { icon: '💼', url: 'https://linkedin.com/in/jayneel-mavani-b2686232a' },
                { icon: '𝕏', url: 'https://twitter.com/JayneelMavani' },
              ].map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:scale-125 transition-transform duration-300 filter hover:drop-shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="hero-img relative w-full aspect-square rounded-2xl overflow-hidden glass group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 group-hover:from-cyan-500/50 group-hover:to-blue-500/50 transition-all duration-300"></div>
              <img
                src="/assets/img.png"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/50 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-8 -left-8 glass p-4 rounded-lg backdrop-blur-lg animation-float">
              <p className="text-sm text-gray-300">
                <span className="text-cyan-400 font-bold">100+</span> Projects
              </p>
            </div>

            <div className="absolute -top-8 -right-8 glass p-4 rounded-lg backdrop-blur-lg animation-float" style={{ animationDelay: '1s' }}>
              <p className="text-sm text-gray-300">
                <span className="text-cyan-400 font-bold">5+</span> Years Exp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
