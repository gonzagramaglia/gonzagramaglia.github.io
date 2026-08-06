# Project Report
**Project Name:** Gonzalo Gramaglia's Portfolio  
**Reference ID:** gonzagramaglia.github.io

## 1. Executive Summary
The Gonzalo Gramaglia's Portfolio is a modern, bilingual (English/Spanish) personal website built with Next.js, React, and Tailwind CSS. It serves as a centralized hub showcasing my trajectory as a Full Stack Developer and my academic background in Cyberdefense. The site features highly interactive UI components, statically generated MDX blog posts, and a seamless localization system.

🎬 **Live Demo:** https://gonzagramaglia.github.io

## 2. Project Overview
### 2a. Why we're building this
As a developer transitioning from IT Operations to Full Stack Development with a strong focus on Cybersecurity, I needed a professional platform to demonstrate my skills. A standard resume is often insufficient to showcase UI/UX capabilities and technical writing. This portfolio acts as a living resume and blog, providing concrete evidence of my abilities through interactive design and detailed project case studies.

### 2b. Core Objectives
The primary goal is to build a fast, secure, and production-ready web application that leaves a lasting impression. By prioritizing visual excellence—using modern typography, smooth gradients, and micro-animations—the portfolio aims to "wow" visitors while maintaining high performance and accessibility.

### 2c. Target Audience
Recruiters, hiring managers, fellow developers, and cybersecurity professionals looking to learn more about my experience, view my projects (like Fitty, Truco Mundial, and Ciberportero), or read my technical blog posts.

## 3. Key Features
- **Bilingual Support (i18n)** — Seamless switching between English and Spanish using a custom `LanguageContext` and path-based routing (`/es/*`).
- **Interactive UI Components** — Engaging micro-interactions including Magnetic Links, Morphing Dialogs for project details, and Spotlight effects, powered by `motion/react`.
- **MDX Blog & Work Experience** — Rich text rendering for blog posts and work history, allowing for embedded components and markdown formatting within content.
- **Centralized Content Management** — All structured data (projects, education, social links) is managed in a single `app/data.ts` file for easy updates.
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop viewing using Tailwind CSS utility classes.
- **Static Site Generation (SSG)** — Pre-rendered pages for maximum performance and SEO benefits.

## 4. Technology Stack
| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Motion (Framer Motion) |
| **Icons** | Lucide React |
| **Content Processing** | MDX |
| **Deployment** | GitHub Pages / Vercel |

## 5. Technical Architecture
```text
┌─────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                     │
│  React Components + Tailwind CSS + Framer Motion         │
└───────────────┬─────────────────────────┬───────────────┘
                │                         │
        [MDX Processing]          [Data Hydration]
                │                         │
┌───────────────▼─────────────────────────▼───────────────┐
│     Content Layer                                        │
│  ├── app/data.ts (Projects, Education, Config)           │
│  ├── app/blog/*.mdx (English Posts)                      │
│  └── app/es/blog/*.mdx (Spanish Posts)                   │
└─────────────────────────────────────────────────────────┘
```
**Data Flow:** User requests page → Next.js serves statically generated HTML → React hydrates interactive components (Motion, Context) → `LanguageContext` manages locale state and updates UI text from `translations.ts`.

## 6. Structure & Organization
- **`app/`**: Core routing and pages. Contains the main English content.
  - **`app/es/`**: Mirrored routing structure for Spanish localization.
- **`components/`**: Reusable React components (`HomeContent`, `connect-section`).
  - **`components/ui/`**: Highly interactive, isolated UI elements (`magnetic.tsx`, `spotlight.tsx`, `morphing-dialog.tsx`).
- **`public/`**: Static assets, cleanly organized into `/projects`, `/work`, `/blog`, and `/ui` subdirectories.

## 7. Code Quality & Maintenance
- **Comprehensive JSDoc Coverage** — Key components, contexts, and data structures are fully documented with standard JSDoc comments to ensure maintainability and high code coverage.
- **Unused Code Pruning** — Regular cleanup of dead code, unused UI components, and obsolete image assets.
- **Strict Typing** — Widespread use of TypeScript interfaces (`Project`, `WorkExperience`, `BlogPost`) to enforce data consistency across the application.

## 8. Future Improvements
- Integrate a headless CMS for easier blog post authoring without requiring code commits.
- Add an RSS feed for the technical blog.
- Implement a dark/light mode toggle (currently uses system preference).
- Enhance SEO metadata per blog post.

## 9. Tools Used
| Tool | Purpose |
| :--- | :--- |
| **Antigravity IDE** | Primary AI-assisted development environment |
| **Git/GitHub** | Version control and source code hosting |
| **Vercel** | CI/CD and hosting for preview deployments |

## 10. Learnings & Takeaways
- **i18n in Next.js App Router:** Managing localization without heavy external libraries is highly effective by combining context for UI strings and separated route segments (`/es/`) for SEO-critical content.
- **Animation Performance:** Utilizing `motion/react` (Framer Motion) allows for complex physics-based animations (like the Magnetic effect) without sacrificing frame rates, provided they are applied to client components judiciously.
- **Component Modularity:** Abstracting complex UI patterns into isolated components inside `components/ui/` keeps the main page structures clean and declarative.
