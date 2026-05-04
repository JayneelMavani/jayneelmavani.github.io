# 🚀 Modern Developer Portfolio

A beautiful, fully-featured developer portfolio built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **GSAP** animations.

## ✨ Features

- **🎨 Modern UI Design** - Beautiful glass-morphism design with gradient effects
- **⚡ GSAP Animations** - Smooth, performant animations throughout
- **📱 Fully Responsive** - Works perfectly on all devices
- **🎯 Admin Dashboard** - Easily manage projects, blogs, and skills
- **📝 Blog System** - Create and manage blog posts
- **🛠️ Project Showcase** - Display your best work with descriptions and links
- **🔒 Skills & Experience** - Showcase your technical expertise
- **💼 Contact Form** - Get inquiries directly from visitors
- **🌙 Dark Theme** - Modern dark color scheme with cyan accents

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **TypeScript** - Type-safe JavaScript

### Development
- Node.js & npm
- ESLint & TypeScript linting

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Setup Steps

1. **Install dependencies:**
```bash
npm install
# or
yarn install
```

2. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
.
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── projects/page.tsx        # Projects showcase
│   ├── blog/page.tsx            # Blog listing
│   ├── contact/page.tsx         # Contact page
│   ├── admin/
│   │   └── dashboard/page.tsx   # Admin dashboard
│   ├── api/
│   │   ├── projects/route.ts    # Projects API
│   │   ├── blogs/route.ts       # Blogs API
│   │   └── contact/route.ts     # Contact form API
│   ├── globals.css              # Global styles
│   └── layout.tsx               # Root layout
├── components/
│   ├── Navbar.tsx               # Navigation bar
│   ├── HeroSection.tsx          # Home hero section
│   ├── FeaturedProjects.tsx     # Featured projects grid
│   ├── SkillsSection.tsx        # Skills showcase
│   ├── CTASection.tsx           # Call-to-action section
│   ├── ProjectCard.tsx          # Project card component
│   ├── BlogCard.tsx             # Blog card component
│   ├── ContactForm.tsx          # Contact form
│   ├── Footer.tsx               # Footer
│   ├── DashboardNav.tsx         # Admin dashboard nav
│   ├── FormInput.tsx            # Reusable form input
│   └── tabs/
│       ├── ProjectsTab.tsx      # Projects management
│       ├── BlogsTab.tsx         # Blogs management
│       ├── SkillsTab.tsx        # Skills management
│       └── SettingsTab.tsx      # Settings management
├── public/assets/               # Static assets
├── package.json
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript config
└── next.config.js               # Next.js config
```

## 🎨 Customization

### Update Personal Information

Edit `app/layout.tsx` to update metadata:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your description',
}
```

### Update Hero Section

Modify `components/HeroSection.tsx` with your information, social links, and profile image.

### Update Skills

Edit `components/SkillsSection.tsx` to add your skills and proficiency levels.

### Update Featured Projects

Modify `components/FeaturedProjects.tsx` with your projects or add them via the admin dashboard.

## 📊 Admin Dashboard

Access the dashboard at `/admin/dashboard` to:
- **📁 Manage Projects** - Add, edit, delete projects
- **📝 Manage Blog Posts** - Create and publish blog articles
- **⚡ Manage Skills** - Update your skill levels
- **⚙️ Site Settings** - Configure site title, bio, and social links

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

```bash
# Or deploy using Vercel CLI
npm i -g vercel
vercel
```

### Deploy to Other Platforms

- **Netlify**: Follow their Next.js deployment guide
- **Docker**: Create a Dockerfile for containerized deployment
- **Traditional Hosting**: Build and host the `.next` folder

## 🔧 Configuration

### Environment Variables

Create `.env.local` for sensitive data:
```env
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
```

### Tailwind Customization

Edit `tailwind.config.js` to customize colors, fonts, and other styles:
```javascript
theme: {
  extend: {
    colors: {
      dark: '#0f172a',
      accent: '#0ea5e9',
    },
  },
}
```

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with animated profile
- Featured projects
- Skills showcase
- CTA section

### About Page (`/about`)
- Bio and introduction
- Experience timeline
- Education details

### Projects Page (`/projects`)
- All projects grid
- Filter and search
- Project details and links

### Blog Page (`/blog`)
- Blog posts listing
- Search and filter
- Read more functionality

### Contact Page (`/contact`)
- Contact form
- Social links
- Call-to-action

### Admin Dashboard (`/admin/dashboard`)
- Project management
- Blog management
- Skills management
- Site settings

## 🚀 Performance

- ✅ Next.js 14 optimizations
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS-in-JS with Tailwind
- ✅ Font optimization with next/font

## 📝 Skills Included

### Web Development
- React.js
- Next.js
- Tailwind CSS
- Bootstrap
- MongoDB
- JavaScript & TypeScript
- Node.js & Express

### Cybersecurity
- Network Security
- Penetration Testing
- Cryptography
- Ethical Hacking

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

- **Email**: jayneel@example.com
- **GitHub**: [@JayneelMavani](https://github.com/JayneelMavani)
- **LinkedIn**: [Jayneel Mavani](https://linkedin.com/in/jayneel-mavani-b2686232a)
- **Twitter**: [@JayneelMavani](https://twitter.com/JayneelMavani)

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
