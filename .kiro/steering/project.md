---
inclusion: always
---

# Portfolio — Project Steering

This is a modern, bilingual (English/Spanish) personal portfolio built with **Next.js (App Router), React, Tailwind CSS, and Framer Motion**. It serves as a centralized hub showcasing the trajectory of a Full Stack Developer with a strong academic background in Cyberdefense.

## Current Project Status

**Live and functional.** The project features interactive UI components (magnetic links, morphing dialogs, animated backgrounds), statically generated MDX blog posts, and a seamless path-based localization system (`/es/*`). Recent updates include a comprehensive reorganization of static assets (images) and cleanup of legacy content.

## Context Files — Read These Before Implementing Anything

Always read in this order before any implementation:

1. #[[file:context/project-overview.md]]
2. #[[file:context/architecture.md]]
3. #[[file:context/ui-tokens.md]]
4. #[[file:context/ui-rules.md]]
5. #[[file:context/ui-registry.md]]
6. #[[file:context/code-standards.md]]
7. #[[file:context/library-docs.md]]
8. #[[file:context/build-plan.md]]
9. #[[file:context/progress-tracker.md]]

## Stack Quick Reference

- **Framework**: Next.js (App Router — React Server Components & Client Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Content**: MDX (Markdown with JSX)
- **Data Layer**: Centralized static data in `app/data.ts`
- **Deployment**: Vercel / GitHub Pages

## Non-Negotiable Rules

- **Bilingual parity:** Any change to content or routing must be mirrored in both English (`app/`) and Spanish (`app/es/`).
- **JSDoc Coverage:** All key components, custom hooks, and shared interfaces must be strictly documented using JSDoc.
- **Strict Typing:** No `any` types — use `unknown` and narrow. Always use standard TS interfaces.
- **Component Modularity:** Complex UI patterns must be isolated in `components/ui/` rather than bloating page layouts.
- **Client boundaries:** Only add `"use client"` where state, context, or framer-motion animations explicitly require it.
- **Asset naming:** Keep static images cleanly separated into subfolders (`/projects`, `/work`, `/blog`, `/ui`).

## Git Workflow

- Branch naming: `feat/short-description`, `fix/short-description`, or `docs/short-description`
- Adhere strictly to Conventional Commits for all commit messages.
- Run `npm run build` locally before pushing to ensure SSG generation works perfectly.

## Path Alias

Use `@/` for all internal imports (maps to project root).
