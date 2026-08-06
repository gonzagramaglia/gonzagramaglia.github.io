# UI Rules

Concise rules for building the portfolio UI. These rules cover the most important patterns and constraints to keep the UI consistent without over-specifying every detail.

## Font

Always rely on the `font-sans` configured in Next.js (usually Inter or Geist). Apply font families via Tailwind classes (e.g., `font-sans`, `font-mono`).

## Layout & Spacing

- **Containers:** Wrap main content in a container with a max-width, e.g., `max-w-4xl mx-auto`.
- **Screen Padding:** Standard horizontal padding for all main screens is `px-4 sm:px-6` (16px - 24px).
- **Flexbox:** Use Tailwind Flexbox or Grid for all structural layouts. Avoid absolute positioning unless necessary for animations or overlaps.
- **Gaps:** Gap between page sections is usually `gap-8` or `gap-12`.

## Components & Animations

- **Morphing Dialogs:** For project details or expanded views, use `MorphingDialog` (framer-motion `layoutId` driven) instead of standard modals or new pages.
- **Magnetic Links:** Use `MagneticButton` or `MagneticText` for primary social links or calls to action to add interactivity.
- **Spotlight:** For grids or lists of items, a spotlight hover effect can be applied to the container.

## Cards

Every content section lives in a card.

```text
background: bg-card
border: border border-border
border-radius: rounded-xl
padding: p-6
```

## Typography Hierarchy

**Section headings**
```text
font-size: text-2xl or text-3xl
font-weight: font-bold
color: text-foreground
```

**Body / primary content text**
```text
font-size: text-base
font-weight: font-normal
color: text-foreground
```

**Secondary / muted text** — labels, timestamps, subtitles
```text
font-size: text-sm
font-weight: font-normal
color: text-muted-foreground
```

## MDX Styling

When rendering MDX content, apply Tailwind Typography (`prose`). Ensure `prose-zinc` or `prose-neutral` is used, and it matches the dark mode configuration (`dark:prose-invert`).

## Empty States

If a list (e.g., projects or blog posts) is empty, show a minimal empty state:
- Short descriptive text in `text-muted-foreground`.
- Optional Lucide icon above the text.
