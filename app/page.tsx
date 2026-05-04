'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import SkillsSection from '@/components/SkillsSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Page load animation
    const tl = gsap.timeline()
    tl.from(containerRef.current, {
      opacity: 0,
      duration: 0.8,
    })
  }, [])

  return (
    <div ref={containerRef} className="overflow-hidden">
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <CTASection />
    </div>
  )
}
