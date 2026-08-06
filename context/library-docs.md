# Library & Dependency Rules

This document outlines the core third-party libraries used in the portfolio and the specific rules for their implementation.

## Framer Motion (`motion/react`)

Used for all animations, transitions, and interactive UI components.

- **Import path:** Always use `import { motion } from "motion/react"` instead of `framer-motion` directly (if using the latest version optimizations).
- **Client Components:** Components using `motion` must include `"use client"` at the very top.
- **Layout Animations:** Use `layoutId` to seamlessly transition a component from one view to another (e.g., Morphing Dialogs).

## Tailwind CSS & `tailwind-merge`

Used for all styling.

- **Merging Classes:** When building reusable UI components that accept a `className` prop, ALWAYS use the `cn()` utility (`clsx` + `tailwind-merge`) to prevent class conflicts.
  ```typescript
  import { cn } from "@/lib/utils";
  
  <div className={cn("base-classes", className)}>
  ```

## Lucide React

Used for all standard icons.

- Always import specific icons to enable tree-shaking:
  ```typescript
  import { Github, Linkedin, Mail } from "lucide-react";
  ```
- Use `w-4 h-4` or `w-5 h-5` Tailwind classes to control icon sizes instead of the `size` prop when possible for responsive styling.
