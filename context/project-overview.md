# Project Overview: Gonzalo Gramaglia Portfolio

> [!IMPORTANT]
> **Project Context**: This is a personal portfolio and blog built to showcase professional trajectory in Full Stack Development and academic progress in Cyberdefense.
> The primary focus is on a highly polished UX/UI (using Framer Motion and Tailwind), static performance (Next.js SSG), and maintainability (clean MDX and centralized data). All content must support bilingual rendering (English and Spanish).

## About the Project
This portfolio serves as a living resume and technical blog. It features recent work experiences, personal projects (such as Fitty, Truco Mundial, and Ciberportero), and educational milestones. 

It aims to provide concrete evidence of software engineering capabilities by presenting a fast, secure, and production-ready web application that leaves a lasting impression on visitors.

---

## Core User Flow

### 1. Landing Page (Home)
- Visitors arrive and are greeted by interactive Hero animations.
- Quick access to core links (GitHub, LinkedIn, Resume, Email).
- Visitors can toggle the site language between English and Spanish seamlessly.

### 2. Exploring Projects
- Users can browse the Projects section, seeing detailed cards with cover images.
- Clicking a project opens a Morphing Dialog with full descriptions, tech stack details, and direct links to live demos or source code.

### 3. Work & Education Timeline
- Visitors can scroll through a structured timeline of professional work experience and academic progress.
- Clicking on a specific role navigates to an MDX-powered page with in-depth details about responsibilities, achievements, and technologies used.

### 4. Technical Blog
- Users can read long-form technical posts authored in MDX.
- Posts cover hackathon write-ups (like HackTheKitty), cybersecurity exercises (Advent of Cyber), and general engineering thoughts.

---

## Data Architecture — Key Separation

### Content Management
- **Structured Data:** Lives in `app/data.ts`. This single source of truth holds arrays for projects, education, social links, and basic configuration.
- **Rich Text Content:** Lives in `app/blog/` and `app/work/` as `.mdx` files. These files allow mixing Markdown formatting with React components.

### Internationalization (i18n)
- **UI Strings:** Managed globally via `LanguageContext.tsx` and a static dictionary (`translations.ts`).
- **Pages & Routing:** Implemented via path-based routing. English content lives at the root (`app/`), while Spanish content lives under the localized path (`app/es/`).

---

## Features In Scope

- Fully bilingual support (English/Spanish).
- Centralized data management via `app/data.ts`.
- MDX support for rich blog posts and detailed work experience logs.
- Interactive animations (Morphing Dialogs, Spotlight effects, Magnetic Links) using `motion/react`.
- Responsive design tailored for mobile and desktop.
- Static Site Generation (SSG) for performance and SEO.

## Features Out of Scope

- User authentication or login.
- Backend API routes or database integration (everything is static).
- Dynamic comments on blog posts.
- Complex state management tools (Zustand/Redux) — React Context is sufficient.

---

## Target Audience

- **Recruiters & Hiring Managers:** Looking for a structured, easily navigable resume and evidence of technical competence.
- **Fellow Developers:** Exploring technical blog posts, hackathon write-ups, or open-source projects.
- **Cybersecurity Professionals:** Reviewing academic progress and specialized write-ups.

---

## Success Criteria

- The site loads near-instantly thanks to Next.js static generation.
- Animations run at 60fps without causing layout shifts or performance bottlenecks.
- Adding a new project or blog post takes less than 5 minutes (via `data.ts` or new MDX files).
- Language switching updates all UI strings and routes correctly without full page reloads.
- The UI feels premium, avoiding generic components in favor of custom, polished interactions.
