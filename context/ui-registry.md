# UI Registry

This file acts as the single source of truth for component visual patterns. It is maintained by the `/imprint` AI skill to ensure UI consistency as the project grows.

Before building a new component, check here to see if a similar pattern already exists. Do not guess spacing or colors — use the established baseline.

---

## Baseline — Established 2026-08-06

| Property            | Correct class              |
| ------------------- | -------------------------- |
| Card background     | `bg-card`                  |
| Card border         | `border border-border`     |
| Card radius         | `rounded-xl`               |
| Text primary        | `text-foreground`          |
| Text secondary      | `text-muted-foreground`    |
| Container max-width | `max-w-screen-sm mx-auto`  |
| Page padding        | `px-4 pt-20`               |
| Font family         | `--font-geist` (Geist via next/font) |

---

## Animation Primitives — Universal Rules

All animations use `motion/react`. Import path is always `motion/react`, **never** `framer-motion`.

Standard spring transition (use unless a component specifies otherwise):
```ts
{ type: "spring", stiffness: 26.7, damping: 4.1, mass: 0.2 }
```

Standard enter/exit duration for text and opacity changes:
```ts
{ duration: 0.3 }
```

---

### AnimatedBackground

File: `components/ui/animated-background.tsx`
Last updated: 2026-08-06

**Purpose:** Animates a background element behind its active child using `layoutId`. Used in the navigation bar to indicate the active section.

| Property       | Value                            |
| -------------- | -------------------------------- |
| Positioning    | `relative inline-flex` on each child |
| Background div | `absolute inset-0` with custom `className` |
| Animation      | `layoutId` driven layout animation (shared across renders) |
| Opacity        | `initial: 0 → animate: 1 → exit: 0` |
| Hover mode     | Optional via `enableHover` prop  |

**Pattern notes:**
Children must have a `data-id` attribute. The background highlights the active child without any color hardcoded inside the component — the caller defines color via `className`. This makes it fully reusable across different contexts.

---

### Magnetic

File: `components/ui/magnetic.tsx`
Last updated: 2026-08-06

**Purpose:** Pulls its children toward the mouse cursor using spring physics. Used on social links and CTAs for a high-end interactive feel.

| Property        | Value                                             |
| --------------- | ------------------------------------------------- |
| Spring config   | `{ stiffness: 26.7, damping: 4.1, mass: 0.2 }`   |
| Default range   | `100px`                                           |
| Default intensity | `0.6`                                           |
| Action area     | `'self'` (default), `'parent'`, `'global'`        |
| Animation       | `useMotionValue` + `useSpring` on `x` and `y`    |

**Pattern notes:**
Does not apply any visual styles itself — it only translates its children. The caller is responsible for all color, spacing, and typography. Use `actionArea="parent"` when the trigger element is larger than the magnetic content (e.g., a list row containing a link).

---

### MorphingDialog

File: `components/ui/morphing-dialog.tsx`
Last updated: 2026-08-06

**Purpose:** Transitions a trigger element into a full dialog using `layoutId` for a seamless morph. Used to expand project cards into detailed views.

| Property        | Value                                              |
| --------------- | -------------------------------------------------- |
| Overlay         | `bg-background/80 backdrop-blur-sm` (semi-transparent) |
| Dialog container | `bg-card border border-border rounded-xl`         |
| Animation       | `layoutId` shared between trigger and dialog       |
| Close trigger   | Click outside the dialog panel                     |

**Pattern notes:**
The `MorphingDialogTrigger` and `MorphingDialogContent` must share the same `layoutId` via the `MorphingDialogContext`. Never add a separate close button unless the design requires it — clicking the overlay is the standard dismissal pattern.

---

### Spotlight

File: `components/ui/spotlight.tsx`
Last updated: 2026-08-06

**Purpose:** A radial gradient circle that follows the mouse cursor within its parent container. Applied to lists or grids to make them feel alive on hover.

| Property       | Value                                                                            |
| -------------- | -------------------------------------------------------------------------------- |
| Shape          | `rounded-full` circle                                                            |
| Gradient       | `radial-gradient` using `from-zinc-50 via-zinc-100 to-zinc-200`                 |
| Blur           | `blur-xl`                                                                        |
| Visibility     | `opacity-0` → `opacity-100` on parent hover (`transition-opacity duration-200`) |
| Pointer events | `pointer-events-none` (never blocks interaction)                                 |
| Default size   | `200px`                                                                          |

**Pattern notes:**
`Spotlight` must be placed inside a container that has `position: relative` (the component sets this automatically on the parent). The gradient uses zinc tones — do not change to bright colors, it should be subtle.

---

### ScrollProgress

File: `components/ui/scroll-progress.tsx`
Last updated: 2026-08-06

**Purpose:** A thin horizontal bar at the top of the page that reflects scroll progress using a spring animation.

| Property      | Value                                                    |
| ------------- | -------------------------------------------------------- |
| Height        | `h-1`                                                    |
| Positioning   | `inset-x-0 top-0` (caller must set `position: fixed` or `absolute`) |
| Origin        | `origin-left`                                            |
| Animation     | `scaleX` driven by `useScroll` + `useSpring`            |
| Spring config | `{ stiffness: 200, damping: 50, restDelta: 0.001 }`     |
| Color         | Defined by the caller via `className`                    |

**Pattern notes:**
This component renders a `motion.div` with no background color set — the caller must supply a background via `className` (e.g., `className="fixed bg-foreground"`). Used in blog/work post layouts.

---

### TextEffect

File: `components/ui/text-effect.tsx`
Last updated: 2026-08-06

**Purpose:** Animates text entry by splitting it into words, chars, or lines and staggering their appearance. Used for hero headlines and section reveals.

| Property        | Value                                                      |
| --------------- | ---------------------------------------------------------- |
| Default preset  | `'fade'`                                                   |
| Available presets | `blur`, `fade-in-blur`, `scale`, `fade`, `slide`        |
| Default split   | `per="word"`                                               |
| Stagger (word)  | `0.05s` between each word                                  |
| Stagger (char)  | `0.03s` between each char                                  |
| Segment duration | `0.3s` (adjustable via `speedSegment`)                   |

**Pattern notes:**
Use `preset="fade-in-blur"` for primary headlines (h1) — it has the most visual impact. Use `preset="fade"` for body text reveals. Always pair with `trigger={boolean}` if the animation should be conditional (e.g., on viewport entry).

---

### TextLoop

File: `components/ui/text-loop.tsx`
Last updated: 2026-08-06

**Purpose:** Cycles through an array of children on a set interval, animating between them with a slide-up transition. Used in the hero for rotating role titles.

| Property       | Value                                          |
| -------------- | ---------------------------------------------- |
| Default interval | `2s`                                         |
| Enter animation | `y: 20 → 0, opacity: 0 → 1`                  |
| Exit animation  | `y: 0 → -20, opacity: 1 → 0`                 |
| Transition      | `{ duration: 0.3 }`                            |
| Container       | `relative inline-block whitespace-nowrap`      |

**Pattern notes:**
Children can be any React node — strings, styled spans, or components. Always wrap children in a consistent typographic class so the loop does not cause layout shifts as different-width strings cycle through.

---

### TextMorph

File: `components/ui/text-morph.tsx`
Last updated: 2026-08-06

**Purpose:** Morphs between two strings by animating individual characters using `layoutId`, creating a fluid per-character transition effect.

| Property          | Value                                                      |
| ----------------- | ---------------------------------------------------------- |
| Animation type    | `layoutId` per character (spring-driven layout transition) |
| Default spring    | `{ type: "spring", stiffness: 280, damping: 18, mass: 0.3 }` |
| Character opacity | `initial: 0 → animate: 1 → exit: 0`                      |
| Output element    | `<p>` by default, configurable via `as` prop               |
| Character wrapping | Each char wrapped in `inline-block` `motion.span`         |

**Pattern notes:**
Best used for short strings (navigation labels, status indicators, button text). For longer text, `TextEffect` or `TextLoop` is more appropriate. The first character of each word is always capitalized internally — account for this when providing string values.
