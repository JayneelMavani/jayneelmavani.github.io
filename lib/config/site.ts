import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Jayneel Mavani Portfolio",
  title: "Tech Enthusiast — Web Dev, Open Source Contributor",
  description:
    "Explore my work and contributions as a tech enthusiast and web developer.",
  keywords: ["portfolio", "developer", "next.js", "react", "tailwind"],
  url: "https://jayneelmavani.netlify.app",
  email: "gmail@gmail.com",
  resumePath: "/resume/resume.pdf",
  logo: "Portfolio.",
  social: [
    {
      label: "GitHub",
      url: "https://github.com/jayneelmavani",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/jayneelmavani",
      icon: "linkedin",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/jayneelmavani",
      icon: "twitter",
    },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
};
