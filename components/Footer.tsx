export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-cyan-500/20 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Portfolio.</h3>
            <p className="text-gray-400 text-sm">
              Building beautiful web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="/projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="/blog" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="/admin/dashboard" className="hover:text-cyan-400 transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Resume</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="https://github.com/JayneelMavani" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition-colors">
                🐙
              </a>
              <a href="https://linkedin.com/in/jayneel-mavani-b2686232a" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition-colors">
                💼
              </a>
              <a href="https://twitter.com/JayneelMavani" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition-colors">
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cyan-500/20 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Jayneel Mavani. All rights reserved. Built with Next.js, React, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
