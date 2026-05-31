"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { getResumeUrl } from "@/lib/utils/site";

interface MobileMenuProps {
  navLinks: { label: string; href: string }[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-cyan-500/10 rounded-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        <span
          className={`w-6 h-0.5 bg-cyan-400 block transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`w-6 h-0.5 bg-cyan-400 block transition-opacity ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`w-6 h-0.5 bg-cyan-400 block transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      <div
        id="mobile-nav"
        className={`md:hidden border-t border-cyan-500/20 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="space-y-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-gray-200 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={getResumeUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 mt-2 px-4 py-2.5 text-center btn-primary text-sm"
          >
            Resume
          </a>
        </nav>
      </div>
    </>
  );
}
