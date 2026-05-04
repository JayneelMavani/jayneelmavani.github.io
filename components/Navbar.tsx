'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Navbar animation on load
    gsap.from(navRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      delay: 0.2,
    })
  }, [])

  const toggleMenu = () => {
    const menu = menuRef.current;
    if (menu && 'classList' in menu) {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        gsap.to(menu, { opacity: 1, y: 0, duration: 0.3 });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          onComplete: () => menu.classList.add('hidden'),
        });
      }
    }
  } 

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Admin', href: '/admin/dashboard' },
  ]

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[100] glass border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-gradient">Portfolio.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1 p-2 hover:bg-cyan-500/10 rounded-lg transition-colors duration-300"
          >
            <span className="w-6 h-0.5 bg-cyan-400 block"></span>
            <span className="w-6 h-0.5 bg-cyan-400 block"></span>
            <span className="w-6 h-0.5 bg-cyan-400 block"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="hidden md:hidden border-t border-cyan-500/20 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
