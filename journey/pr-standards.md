# Pull Request Standards

This document defines the standard PR format for every pull request in the Portfolio project (`gonzagramaglia.github.io`).
Follow this template exactly so every PR is consistent, professional, and easy to review.

---

## Title Format

Follows Conventional Commits. Must be under 50 characters to avoid GitHub truncation.

```
<type>(<scope>): <short description>
```

| Type | When to use |
|------|-------------|
| `feat` | New feature, component, or page |
| `fix` | Bug fix or layout correction |
| `chore` | Tooling, config, dependencies, or asset management |
| `refactor` | Code restructure without behaviour change |
| `docs` | Documentation, blog posts, or project reports |

**Examples:**
- `feat(ui): add morphing dialog for project details`
- `fix(i18n): correct translation keys on the home page`
- `docs(blog): publish HackTheKitty 2026 runner-up post`

---

## Description Template

Copy and paste this into the GitHub PR description box every time.

```markdown
## 🚀 What is this PR?
[One paragraph. State what this PR accomplishes at a high level, such as adding a new feature, fixing a bug, or publishing a new post.]

## 🛠️ Key Changes
- **[Component/Page]:** [What was built or changed and why it matters.]
- **[Component/Page]:** [What was built or changed and why it matters.]
- **[Data/Content]:** [What was built or changed and why it matters.]

## 📸 Screenshot / Screen Recording
[Drag and drop a screenshot or GIF of the UI changes here. For non-UI changes, paste the terminal output or build results instead.]

## ✅ Checklist
- [ ] Tested on Web (Desktop & Mobile viewports)
- [ ] Passes TypeScript strict checks (`tsc --noEmit`)
- [ ] Linter passes without warnings (`yarn lint`)
- [ ] Build succeeds locally (`yarn build`)
- [ ] Bilingual content verified (if applicable)
- [ ] Conventional Commits applied
```

---

## Extended Description (Merge Commit)

When GitHub asks for the Extended Description during the merge, use this bullet format:

```text
- [Area]: [What was done — one line.]
- [Area]: [What was done — one line.]
- [Area]: [What was done — one line.]
```

**Example:**
```text
- UI: Added AnimatedBackground component for navigation links.
- Data: Updated project gallery with new thumbnails.
- i18n: Added Spanish translations for the new work experience section.
```

---

## Screenshot Guidelines

- For **UI changes** (Components, Layouts, Animations): screenshot or screen recording of the actual screen running in the browser at `localhost:3000`.
- For **Content changes** (Blog posts, data updates): screenshot of the rendered markdown or new content block.
- For **non-UI changes** (Config, Data restructuring): paste the terminal output (e.g., successful build logs).
- Always drag the image directly into the GitHub description box — no external hosting needed.
- Delete the placeholder text `[Drag and drop...]` before submitting.

---

## PR History Reference

| PR | Branch | Milestone | Status |
|----|--------|-------|--------|
| #1 | `feat/initial-setup` | Initial Next.js & Tailwind setup | ✅ Merged |
| #2 | `feat/i18n-implementation` | Bilingual routing and context | ✅ Merged |
| #3 | `feat/ui-components` | Motion animations & layout | ✅ Merged |
| #4 | `docs/project-report` | Add portfolio documentation | ✅ Merged |

*(Update this table occasionally as major milestones are completed.)*
