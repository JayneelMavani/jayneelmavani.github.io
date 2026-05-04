'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll('.fade-in-up');
    items.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.5,
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="fade-in-up mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in-up">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden glass">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
              <Image
                src="/assets/img.png"
                alt="Profile"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="fade-in-up space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              I&apos;m Jayneel Mavani, a second-year Computer Science Engineering student at Silver Oak University, 
              passionate about building beautiful and functional web applications. With expertise in modern web 
              technologies and a growing interest in cybersecurity, I&apos;m committed to creating innovative solutions 
              that make a real impact.
            </p>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to solve real-world problems through code. 
              I believe in continuous learning and staying updated with the latest technologies and best practices.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-lg">Full Stack Web Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-lg">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-lg">Cybersecurity & Ethical Hacking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="fade-in-up">
          <h2 className="text-4xl font-bold mb-12">
            Experience & <span className="text-gradient">Education</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                period: '2023 - Present',
                title: 'B.Tech in Computer Science',
                company: 'Silver Oak University',
                description: 'Currently pursuing my bachelor\'s degree with focus on web development and cybersecurity.',
              },
              {
                period: '2024',
                title: 'Web Development Internship',
                company: 'Tech Startup',
                description: 'Developed responsive web applications using React, Next.js, and Tailwind CSS.',
              },
            ].map((item, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <p className="text-cyan-400 font-semibold">{item.period}</p>
                    <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                    <p className="text-gray-400 mt-1">{item.company}</p>
                  </div>
                  <p className="text-gray-300 mt-4 md:mt-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
