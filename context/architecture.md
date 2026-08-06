# Architecture: Gonzalo Gramaglia Portfolio

## Stack

| Layer | Tool | Purpose |
|-------|------|---------|
| Framework | Next.js 15+ (App Router) | Core React framework, routing, and server/client separation |
| Data Rendering | Static Site Generation (SSG) | Pre-rendering pages for maximum speed and SEO |
| Styling | Tailwind CSS | Utility-first CSS for responsive, constraint-based design |
| Animations | Framer Motion | Smooth interactions, micro-animations, layout transitions |
| Content Authoring | MDX | Writing blog posts and work experience with Markdown + React |
| Icons | Lucide React | Clean, scalable vector icons |
| Deployment | Vercel / GitHub Pages | Hosting statically exported site |

---

## Folder Structure

```text
/
├── AGENTS.md
├── context/
│   ├── project-overview.md
│   ├── architecture.md
│   ├── ui-tokens.md
│   ├── ui-rules.md
│   ├── ui-registry.md
│   ├── code-standards.md
│   ├── library-docs.md
│   ├── build-plan.md
│   └── progress-tracker.md
├── app/
│   ├── layout.tsx          → Root layout (Providers, Global styles)
│   ├── page.tsx            → Homepage (English)
│   ├── data.ts             → Centralized data source (Projects, Education, Socials)
│   ├── blog/               → MDX blog posts (English)
│   ├── work/               → MDX work experience posts (English)
│   └── es/                 → Localized Spanish routes
│       ├── page.tsx        → Homepage (Spanish)
│       ├── blog/           → MDX blog posts (Spanish)
│       └── work/           → MDX work experience posts (Spanish)
├── components/
│   ├── HomeContent.tsx     → Main logic for the Homepage layout
│   ├── LanguageContext.tsx → Context provider for language switching
│   └── ui/                 → Reusable UI components (MorphingDialog, AnimatedBackground)
├── lib/
│   ├── utils.ts            → Shared utility functions (e.g., tailwind merge)
│   └── translations.ts     → Dictionary for UI string localization
├── public/                 → Static assets
│   ├── projects/           
│   ├── work/               
│   ├── blog/               
│   └── ui/                 
└── journey/                → PR Standards and developer workflows
```

---

## System Boundaries

| Folder | Owns |
|--------|------|
| `app/` | Routing, Page composition, and MDX content. Minimal interactive logic. |
| `components/ui/` | Highly interactive, isolated UI elements (typically `"use client"`). |
| `components/` | Layout wrappers and context providers. |
| `lib/` | Pure utility functions and static dictionaries. |
| `public/` | Only final optimized assets (`.png`, `.svg`). Organized by feature. |

---

## Data Flow: Content Rendering

Request to `/blog/my-post`
  ↓
Next.js router resolves to `app/blog/my-post/page.mdx`
  ↓
MDX compiler parses Markdown and custom React components
  ↓
Page is statically generated during build step (`yarn build`)
  ↓
Client receives raw HTML, hydrates only interactive pieces (e.g., navigation)

---

## Data Flow: Language Switching

User clicks Language Toggle on Navigation Bar
  ↓
`LanguageContext` updates internal state (`'en' -> 'es'`)
  ↓
Client-side router pushes new URL (e.g., `/blog/my-post` -> `/es/blog/my-post`)
  ↓
Next.js loads pre-rendered Spanish page
  ↓
UI strings translate instantly via `useLanguage` hook and `translations.ts` dictionary

---

## Invariants

Rules the AI agent must never violate when writing or modifying code:

- **Bilingual Parity:** If an MDX file or page is created in `app/`, its exact counterpart MUST be created in `app/es/`.
- **Client Boundaries:** Avoid adding `"use client"` to `page.tsx` or `layout.tsx` unless strictly necessary. Push interactivity down to leaf components in `components/ui/`.
- **Centralized Data:** Never hardcode project lists, education history, or social links in UI components. Always import from `app/data.ts`.
- **SSG Safety:** Do not use `getServerSideProps`, `cookies()`, or dynamic Next.js runtime functions that break static export (`output: 'export'`).
- **Styling:** No inline styles (`style={{...}}`) unless animating dynamic values with Framer Motion. Use Tailwind CSS for everything else.
- **Image Paths:** All paths in `data.ts` or MDX files must be absolute from the public root (e.g., `/projects/my-image.png`). No relative paths to `public/`.
