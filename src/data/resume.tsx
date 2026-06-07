import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Jayneel Mavani",
  initials: "JM",
  url: "https://jayneel.online",
  location: "Ahmedabad, Gujarat",
  locationLink: "https://www.google.com/maps/place/ahmedabad",
  description:
    "I build responsive web applications with modern technologies. Passionate about creating exceptional user experiences with clean, maintainable code.",
  summary:
    "I'm a [second-year B.Tech student at Silver Oak University](/#education), specializing in Computer Science and Engineering (CSE). Passionate about building creative and functional digital experiences, I'm currently exploring web development. I enjoy [working on projects](/#projects) that challenge my creativity and coding skills—whether it's designing interactive games or building responsive web interfaces. I'm constantly [learning new tools, frameworks,](/#skills) and best practices to improve how I [build and collaborate.](/#contact)",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact@jayneel.online",
    tel: "+91 82009 71038",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JayneelMavani",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jayneelmavani",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/jayneelmavani",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@jayneelmavani1653",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:contact@jayneel.online",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "",
      href: "",
      badges: [],
      location: "",
      title: "",
      logoUrl: "",
      start: "",
      end: "",
      description: "",
    },
  ],
  education: [
    {
      school: "Silver Oak University",
      href: "https://silveroakuniversity.edu",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/silveroakuni.jpg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Project Title",
      href: "URL",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description: "",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
