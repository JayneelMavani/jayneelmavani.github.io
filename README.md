# Portfolio

A modern, lightweight, production-ready portfolio built with **Next.js 14**, **React 18**, and **Tailwind CSS**.

Static-first architecture. Customize content via JSON files and a central site config — no database required.

## Features

- Dark glass-morphism design with cyan/blue accents
- Static project pages with dynamic routes (`/projects/[slug]`)
- JSON-driven content (projects, skills, timeline)
- Responsive layout (320px → desktop)
- Resume download support
- Contact form (API-ready stub)
- Netlify / Vercel / GitHub Pages compatible

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customize Content

| File                        | Purpose                                                 |
| --------------------------- | ------------------------------------------------------- |
| `lib/config/site.ts`        | Site name, email, resume path, navigation, social links |
| `content/site-content.json` | Hero, about, CTA, and footer copy                       |
| `content/projects.json`     | All project data (featured + detail pages)              |
| `content/skills.json`       | Skill categories and chips                              |
| `content/timeline.json`     | About page timeline entries                             |
| `public/resume/resume.pdf`  | Your resume file                                        |
| `public/assets/img.png`     | Profile photo                                           |
| `public/assets/projects/`   | Project thumbnail images                                |

## Project Structure

```
app/
  page.tsx                  # Homepage
  about/page.tsx            # About + timeline
  projects/page.tsx         # All projects
  projects/[slug]/page.tsx  # Project detail (SSG)
  contact/page.tsx          # Contact form
  api/contact/route.ts      # Contact API stub

components/                 # UI components
content/                    # JSON content files
lib/
  config/site.ts            # Site configuration
  data/                     # Data loaders
  types/                    # TypeScript types
```

## Deploy

### Netlify

Connect your repo — `netlify.toml` is preconfigured.

### Vercel

Import the repo — Next.js is auto-detected.

### Build

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## License

MIT
