# UI Tokens

Design tokens for the Gonzalo Gramaglia Portfolio. All colors, typography, spacing, and component values are extracted from the global CSS or standard Tailwind configuration. Use these exact values throughout the codebase.

## How to Use

This project uses **Tailwind CSS**. Custom design tokens are defined using CSS variables in `app/globals.css`. 

```tsx
// Correct — uses standard or defined utility classes
className="bg-background text-foreground border-border"

// Never — hardcoded hex values in components
className="bg-[#1A303F] text-[#F6F7FB]"
```

## Theme Definition (globals.css)

The project leverages CSS variables to allow seamless support for light/dark modes (or simply structured global styling):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Base Colors */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    /* Borders and Cards */
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    /* Accents */
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    
    /* Muted Text */
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    /* Radius */
    --radius: 0.5rem;
  }
}
```

## Typography

- **Font Family:** Standard sans-serif (Inter/Geist) defined via Next.js `next/font`.
- **Weights:** Use `font-normal` (400), `font-medium` (500), and `font-bold` (700).

## Animations & Motion

For animations, always rely on `framer-motion` inside `components/ui/`.
Standard transition:
```tsx
transition={{ type: "spring", bounce: 0, duration: 0.3 }}
```
