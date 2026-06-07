import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { getSiteContent } from "@/lib/data/site-content";
import { getResumeUrl, getSocialIcon } from "@/lib/utils/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerContent = getSiteContent().footer;
  const navLinks = siteConfig.navigation;

  return (
    <footer
      className="border-t border-cyan-500/20 glass mt-auto"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold text-gradient inline-block mb-4"
            >
              {siteConfig.logo}
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {footerContent.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h2>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={getResumeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Connect
            </h2>
            <ul className="flex flex-wrap gap-4">
              {siteConfig.social.map((social) => (
                <li key={social.url}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-2xl hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © {currentYear} {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
