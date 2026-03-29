# Portfolio Website Design Spec
**Date:** 2026-03-29
**Project:** themightywolfie.github.io — Samaksh Khatri's personal portfolio
**Status:** Approved

---

## Goals

Build a personal portfolio website for Samaksh Khatri, Senior AI Engineer. Primary audience is recruiters/hiring managers; secondary audience is enterprise clients and prospects. The site must convey deep technical credibility, showcase AI product work, and be easy to scan.

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | React + Vite (TypeScript) |
| Styling | Tailwind CSS with custom dark theme config |
| Animation | Framer Motion |
| Deployment | GitHub Actions → `gh-pages` branch → `themightywolfie.github.io` |
| Font | Inter (UI), JetBrains Mono (code labels) — via Google Fonts |

---

## Visual Design

**Theme:** Dark & Technical

| Token | Value |
|---|---|
| Background | `#0f0f0f` |
| Surface | `#0f172a` |
| Card | `#1e293b` |
| Accent | `#6366f1` (indigo) |
| Text primary | `#e2e8f0` |
| Text secondary | `#94a3b8` |
| Text muted | `#475569` |
| Border | defined in `tailwind.config.ts` as `indigo: '#6366f1'`; applied with `border-indigo-500/20` (Tailwind opacity modifier syntax) |

Section labels use monospace muted style: `// SECTION_NAME`

**Favicon:** A minimal `SK` monogram favicon (32×32 SVG/PNG) committed to `public/favicon.svg`.

**Meta / Open Graph tags:** `index.html` must include:
- `<title>Samaksh Khatri — Senior AI Engineer</title>`
- `<meta name="description" content="Senior AI Engineer specialising in LangChain, RAG, and production AI systems.">`
- OG tags: `og:title`, `og:description`, `og:url`, `og:image` (a 1200×630 screenshot or custom card)

---

## Layout & Navigation

**Sticky Navbar** (slides up on scroll-down, slides back down on scroll-up via Framer Motion):
- Left: `SK` logomark
- Centre: nav links — About · Experience · Projects · Skills · Contact
- Right: "Download CV" button → links to `public/samaksh-khatri-cv.pdf`

> **Asset requirement:** The PDF resume must be committed to `public/samaksh-khatri-cv.pdf` before the Navbar component is built.

**Single-page app** with smooth scroll (`scroll-behavior: smooth`) to anchored sections. No client-side router needed.

---

## Sections

### 1. Hero
Full-width section. Contains:
- Name: **Samaksh Khatri** (large, bold, Inter) — staggered word fade-in on load
- Title: `Senior AI Engineer` (indigo, letter-spaced, JetBrains Mono)
- Tagline: "Building production AI at scale — RAG · Agents · Full Stack"
- Tech stack pills (static, hardcoded): `Python` · `LangChain` · `FastAPI` · `React` · `Azure` · `AWS`
- Two CTAs: `View My Work` (filled indigo, scrolls to Projects) · `Get in Touch` (ghost, scrolls to Contact)
- **Animated background:** Subtle CSS dot-matrix grid pattern (pure CSS `radial-gradient` on `::before` pseudo-element, very low opacity ~4%). No JS, no canvas, no third-party library. No motion — purely static pattern, so it is unaffected by `prefers-reduced-motion`.

### 2. About
Two-column layout (stacks to single column on mobile):
- Left: 2–3 sentence bio
- Right: 4 stat mini-cards with Framer Motion count-up animation on first view:

| Stat | Value | Label |
|---|---|---|
| 1 | `6+` | AI Apps Built |
| 2 | `4+` | Client Acquisitions |
| 3 | `3+` | Years Experience |
| 4 | `9.2` | CGPA |

### 3. Experience
Vertical timeline. Data shape per entry:

```ts
interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  location: string;
  logo: string;       // path to public asset or Clearbit URL
  logoFallback: string; // two-letter initials e.g. "SF"
  bullets: string[];
}
```

Two entries (single role per company — no sub-entries needed):

**Simform Software LLP** — Senior Software Engineer · Nov 2024 – Present · Ahmedabad, India
- Logo: `https://logo.clearbit.com/simform.com` (fallback: "SF")
- 5 bullet highlights (from resume)

**Crest Data** — Software Engineer · Dec 2021 – Nov 2024 · Ahmedabad, India
- Logo: `https://logo.clearbit.com/crestdata.ai` (fallback: "CD")
- 4 bullet highlights (from resume)

### 4. Projects (Bento Grid)

Data shape per card:

```ts
interface ProjectCard {
  name: string;
  dates: string;
  impact: string;    // one-line strongest metric
  tags: string[];    // tech stack pills
  featured?: boolean; // ThoughtMesh only
}
```

**Desktop layout (≥ 1024px):** Asymmetric 3-column CSS Grid:

```
┌─────────────────────┬────────────┐
│  ThoughtMesh        │ NeuVantage │
│  (featured, 2 rows) │            │
│                     ├────────────┤
│                     │ CodeTools  │
├──────────┬──────────┼────────────┤
│ MockIntvw│ Financial│ MednoteDX  │
│          │ Advisor  │            │
└──────────┴──────────┴────────────┘
```

**Tablet layout (640–1023px):** 2-column grid, ThoughtMesh spans both columns in row 1, remaining cards fill 2-column rows.

**Mobile layout (< 640px):** Single-column stack. ThoughtMesh first, others below in order.

Card anatomy:
- Top: `2px` indigo accent border
- Body: project name, date range, impact line, tag pills
- Hover: `scale(1.02)` + `box-shadow` indigo glow

Card content:

| Project | Impact line | Key tags |
|---|---|---|
| ThoughtMesh | 100+ enterprise integrations, multi-LLM orchestration | LangChain · FastAPI · React |
| NeuVantage | Graph-driven modernisation with Neo4j + AI Foundry | Neo4j · Graphiti · Azure |
| CodeTools | Full-workspace AI knowledge base inside VS Code | TypeScript · VS Code API · LLMs |
| Mock Interview Bot | Automated 90% of internal mock interviews | LiveKit · FastAPI · LLMs |
| Financial Advisor | Fully Azure-native portfolio intelligence system | Azure AI Foundry · CosmosDB |
| MednoteDX | RAG-powered clinical assistant on MedGemma | MedGemma · FastAPI · RAG |

### 5. Skills
Tag grid grouped by category, each group labelled in muted monospace:

- `// AI & ML` — Python · RAG · LangChain · LlamaIndex · Agno · Qdrant · AI Agents · PyTorch · TensorFlow
- `// Backend` — FastAPI · REST API · MySQL · MongoDB · PostgreSQL
- `// Frontend` — React.js · TypeScript · JavaScript
- `// Cloud & Infra` — Microsoft Azure · AWS · Neo4j · Graphiti · LiveKit
- `// Industry` — Deep Learning · Machine Learning · System Design · Observability · Pre-Sales Engineering

Tags: rounded pills, `border border-indigo-500/30`, `bg-indigo-500/5`, `text-slate-300`.

### 6. Education
Single card:
- Logo: `https://logo.clearbit.com/charusat.ac.in` (fallback: "CHARUSAT" text)
- Degree: B.Tech, Computer Science and Engineering
- Institution: Charotar University of Science and Technology, Changa, India
- Graduation: Jan 2022 · CGPA: 9.2 / 10
- Certifications (inline list): Deep Learning Specialization · Google IT Automation with Python · Industrial IoT with Google Cloud Platform

### 7. Contact
Centered card. No contact form. A `mailto:` link suffices.
- CTA text: "Open to senior AI roles and consulting engagements"
- Email: samakshkhatri14@gmail.com (mailto link)
- LinkedIn: linkedin.com/in/samakshkhatri
- GitHub: github.com/themightywolfie
- Icons from `lucide-react`

---

## Animations

All Framer Motion. **All motion effects must respect `prefers-reduced-motion`** — use `useReducedMotion()` in `lib/animations.ts` and export motion variants that resolve to `{}` (no animation) when the hook returns `true`.

| Element | Animation |
|---|---|
| Sections | Fade up on scroll into view (`opacity 0→1`, `y 20→0`, `duration 0.5s`) |
| Stat counters (About) | Count up to value on first view (skip animation if reduced-motion) |
| Project cards | `scale(1.02)` + indigo glow on hover |
| Navbar | Slides up/down based on scroll direction |
| Hero text | Staggered line fade-in on load (skipped if reduced-motion) |

---

## Component Structure

```
src/
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    Projects/
      ProjectsGrid.tsx
      ProjectCard.tsx
    Skills.tsx
    Education.tsx
    Contact.tsx
    Footer.tsx
  lib/
    data.ts          # All resume content as typed constants
    animations.ts    # Shared Framer Motion variants (prefers-reduced-motion aware)
  App.tsx
  main.tsx
  index.css
```

`lib/data.ts` centralises all content (experience entries, project cards, skills, education) so copy changes never require touching component code.

---

## Deployment

**GitHub Actions workflow** (`.github/workflows/deploy.yml`):
- Trigger: `on: push: branches: [main]`
- Node version: `20`
- Steps: checkout → `npm ci` → `npm run build` → deploy `dist/` using `peaceiris/actions-gh-pages@v3` with `github_token: ${{ secrets.GITHUB_TOKEN }}`
- No manual branch creation needed — the action creates `gh-pages` automatically

**`vite.config.ts`:** `base: '/'` (correct for user Pages site at root domain)

**`.gitignore`** includes: `.superpowers/`, `dist/`, `node_modules/`

---

## Logo Strategy

Logos are loaded via Clearbit's free logo API (`https://logo.clearbit.com/<domain>`). These are used as `<img src>` tags with `onError` fallback to styled initials. Logos are decorative — text names are always present.

| Entity | Clearbit URL | Fallback |
|---|---|---|
| Simform | `logo.clearbit.com/simform.com` | "SF" |
| Crest Data | `logo.clearbit.com/crestdata.ai` | "CD" |
| CHARUSAT | `logo.clearbit.com/charusat.ac.in` | "CHARUSAT" |

---

## Out of Scope

- Blog / writing section
- Dark/light mode toggle
- Contact form with backend or third-party service (mailto link only)
- Project detail pages
- i18n / localisation
