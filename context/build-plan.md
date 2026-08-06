# Build Plan

This document outlines the high-level phases of the portfolio project.

## Phase 1: Foundation
- Initialize Next.js (App Router) project with Tailwind CSS.
- Set up absolute imports and standard directory structure.
- Configure global CSS and UI tokens.

## Phase 2: Content Architecture
- Create centralized `app/data.ts` for all projects, education, and links.
- Set up MDX compilation for `blog/` and `work/` routes.
- Implement path-based localization (`/es/`) and `LanguageContext`.

## Phase 3: Interactive UI (Framer Motion)
- Build reusable `AnimatedBackground`, `MorphingDialog`, and `MagneticButton` components.
- Implement Hero section animations.
- Integrate interactive UI elements into the Projects and Resume sections.

## Phase 4: Final Polish & Asset Management
- Reorganize `public/` into clean feature directories (`projects/`, `blog/`, etc.).
- Update all references in `data.ts` and `.mdx` files to point to the new asset paths.
- Remove obsolete or unused blog posts.
- Write final documentation (Project Report, PR Standards, Agent Skills).
