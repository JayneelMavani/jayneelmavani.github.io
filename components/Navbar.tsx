import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { getResumeUrl } from "@/lib/utils/site";
import MobileMenu from "@/components/MobileMenu";

export default function Navbar() {
  const navLinks = siteConfig.navigation;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="glass border-b border-cyan-500/20"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-gradient focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
            >
              {siteConfig.logo}
            </Link>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-gray-200 hover:text-cyan-400 transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <a
                href={getResumeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-4 py-2"
              >
                Resume
              </a>
            </div>

            <MobileMenu navLinks={navLinks} />
          </div>
        </div>
      </nav>
    </header>
  );
}
