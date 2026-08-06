# Code Standards

Implementation rules and conventions for the entire project. The AI agent must follow these in every session without exception. These rules prevent pattern drift across sessions.

## Engineering Mindset

The AI agent on this project operates as a senior engineer. This means:

- **Think before implementing** — understand what is being built and why before writing a single line
- **Read context files first** — never assume, always verify against `architecture.md` and `project-overview.md`
- **Scope is sacred** — only build what the current feature requires. Never go beyond scope even if it seems helpful
- **Clean over clever** — simple readable code that a junior developer can understand is always preferred over clever abstractions
- **One thing at a time** — complete one feature fully before touching the next

## Git Workflow

1. **Feature Branches:** Create a branch for each task. Branch naming must use the prefix `feat/`, `fix/`, or `docs/`.
2. **Commit structure:** Adhere to Conventional Commits for all commit messages. (e.g., `feat(ui): add morphing dialog`).
3. **Bilingual Parity Check:** Before committing, verify that any content change was mirrored in both English and Spanish routes.
4. **Build Check:** Before pushing, always run `yarn build` locally to ensure SSG generation doesn't fail due to typing or path errors.

## TypeScript & JSDoc

- Strict mode enabled in `tsconfig.json` — no exceptions.
- Never use `any` — use `unknown` and narrow the type.
- **JSDoc Requirement:** All React components, custom hooks, and complex utility functions MUST be documented with JSDoc headers explaining their purpose and parameters.
- Use `type` for object shapes and unions — use `interface` only for extendable component props.
- All function parameters and return types must be explicitly typed.
- Use `const` by default — only use `let` when reassignment is necessary.

## Next.js (App Router) Conventions

- Use Next.js file-based routing (`app/`).
- **Server Components by Default:** Assume all components in `app/` are Server Components. 
- **Client Boundaries:** Only use `"use client"` in `components/ui/` where React state, hooks (`useContext`), or Framer Motion animations are explicitly required.
- Do not put UI elements in `page.tsx`. `page.tsx` should primarily compose layout structure and fetch/pass data.
- Avoid dynamic Next.js functions that disable Static Site Generation (`cookies()`, `headers()`, `searchParams` without `generateStaticParams`).

## File and Folder Naming

- Folders: kebab-case — `ui`, `projects`, `help-desk-specialist`
- Component files: PascalCase — `HomeContent.tsx`, `MorphingDialog.tsx`
- Utility files: camelCase — `utils.ts`, `translations.ts`
- Data files: `data.ts`
- Content files: `page.mdx`
- One component per file — never export multiple components from one file.
- Index files only in `components/ui/` — never barrel export from other folders.

## Component Structure

Every component follows this exact order:

```typescript
// 1. External imports
import { useState } from "react";
import { motion } from "motion/react";

// 2. Internal imports
import { cn } from "@/lib/utils";

// 3. Type definitions
interface Props {
  title: string;
  className?: string;
}

// 4. JSDoc
/**
 * Renders an animated dialog header.
 */
export function DialogHeader({ title, className }: Props) {
  // state
  // derived values
  // handlers
  // return JSX
}
```

- Never use default exports for components — always use named exports (except for Next.js `page.tsx` and `layout.tsx` which require default exports).
- No inline styles (`style={{...}}`) unless animating dynamic values with Framer Motion. All styling via Tailwind CSS classes.

## Asset Handling

- All static images must be placed in `public/` and organized into subfolders (`/projects`, `/work`, `/blog`, `/ui`).
- Do not use relative paths in `next/image` or MDX files. Always use absolute paths from the public root (e.g., `/projects/thumb.png`).
- Prefer PNG or optimized JPG over WebP if compatibility or rendering issues arise, though Next.js Image optimization handles this natively.
