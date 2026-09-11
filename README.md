# Dilshad Shaikh — Portfolio

A premium, dark-themed developer portfolio built with **React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lucide Icons**.

> Full Stack MERN Developer building modern, scalable and user-focused web applications.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)

## Features

- Sticky glass navbar with active-section highlighting & mobile menu
- Hero with entrance animations and floating tech badges
- About section with animated counters
- Skills grouped by category with animated progress bars
- Projects section showcasing 4 **real, live projects** with filters + detail modal
- Experience timeline
- Services section
- GitHub section with **live API stats** (repos, followers, stars)
- Contact form with validation + loading/success/error states
- SEO meta tags + Open Graph + favicon
- Fully responsive (mobile → large screens)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Customization

All editable content lives in `src/data/`:

| File | What to edit |
| --- | --- |
| `src/data/personalInfo.ts` | Name, bio, email, phone, socials, resume, GitHub username |
| `src/data/projects.ts` | Projects, live URLs, GitHub URLs, descriptions, thumbnails |
| `src/data/skills.ts` | Skill categories and levels |
| `src/data/experience.ts` | Experience timeline entries |
| `src/data/services.ts` | Service cards |

Profile image → add to `/public` and set `image` in `personalInfo.ts`.
Resume → add `/public/resume.pdf`.

## Project Thumbnails

Real screenshots of the live sites are stored in `public/projects/`. To refresh them:

```bash
node scripts/capture-screenshots.mjs
```

## Sections

Hero · About · Skills · Projects · Experience · Services · GitHub · Contact · Footer

---

Built with React & ❤️