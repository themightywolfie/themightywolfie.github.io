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
| Surface | `#0f172a` (section alternates) |
| Card | `#1e293b` |
| Accent | `#6366f1` (indigo) |
| Text primary | `#e2e8f0` |
| Text secondary | `#94a3b8` |
| Text muted | `#475569` |
| Border | `#6366f130` (accent at 19% opacity) |

Section labels use monospace muted style: `// SECTION_NAME`

---

## Layout & Navigation

**Sticky Navbar** (hides on scroll-down, reappears on scroll-up):
- Left: `SK` logomark
- Centre: nav links — About · Experience · Projects · Skills · Contact
- Right: "Download CV" button (links to PDF resume)

**Single-page app** with smooth scroll to anchored sections.

---

## Sections

### 1. Hero
Full-width section. Contains:
- Name: **Samaksh Khatri** (large, bold, Inter)
- Title: `Senior AI Engineer` (indigo, letter-spaced monospace)
- Tagline: short punchy line (e.g. "Building production AI at scale — RAG · Agents · Full Stack")
- Tech stack pill row: Python · LangChain · FastAPI · React · Azure · AWS
- Two CTAs: `View My Work` (primary, indigo) and `Get in Touch` (ghost)
- Subtle animated background: CSS grid pattern or low-opacity dot matrix

### 2. About
Two-column layout:
- Left: 2–3 sentence bio derived from resume summary
- Right: 4 stat mini-cards with animated counters on first view:
  - `6+` AI Apps Built
  - `4+` Client Acquisitions
  - `3+` Years Experience
  - `9.2` CGPA

### 3. Experience
Vertical timeline. Two entries:

**Simform Software LLP** (Nov 2024 – Present) — Senior Software Engineer
- Logo: fetched from simform.com (fallback: "SF" styled initials)
- Bullet highlights from resume (5–6 key points)

**Crest Data** (Dec 2021 – Nov 2024) — Software Engineer
- Logo: fetched from crestdata.ai (fallback: "CD" styled initials)
- Bullet highlights from resume (4 key points)

### 4. Projects (Bento Grid)
Asymmetric bento grid. 6 project cards:

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

Each card contains:
- Project name + date range
- 1-line impact statement (strongest metric from resume)
- Tech stack tags (indigo pills)
- Top border accent in indigo
- Hover: subtle scale + border glow

**ThoughtMesh** (featured large): "Modular no-code multi-agent workflow builder · 100+ enterprise integrations · multiple LLM providers"
**NeuVantage**: "AI-powered app modernisation accelerator · Neo4j graph intelligence · Microsoft AI Foundry"
**CodeTools**: "VSCode extension · full-workspace AI knowledge base · multi-agent IDE collaboration"
**Mock Interview Bot**: "End-to-end AI interview platform · LiveKit voice · automated 90% of mock interviews"
**Financial Advisor**: "Portfolio intelligence system · fully on Azure · AI Foundry · CosmosDB · serverless"
**MednoteDX**: "Healthcare AI assistant · MedGemma · RAG on medical knowledge · diagnostic reasoning"

### 5. Skills
Tag grid grouped by category, each group with a muted `//` label:

- `// AI & ML` — Python · RAG · LangChain · LlamaIndex · Agno · Qdrant · AI Agents · PyTorch · TensorFlow
- `// Backend` — FastAPI · REST API · MySQL · MongoDB · PostgreSQL
- `// Frontend` — React.js · TypeScript · JavaScript
- `// Cloud & Infra` — Microsoft Azure · AWS · Neo4j · Graphiti · LiveKit
- `// Industry` — Deep Learning · Machine Learning · System Design · Observability · Pre-Sales Engineering

Tags styled as rounded indigo-bordered pills on dark surface.

### 6. Education
Single card (not a grid — one entry only):
- Logo: CHARUSAT from charusat.ac.in (fallback: "CHARUSAT" text)
- Degree: B.Tech, Computer Science and Engineering
- Institution: Charotar University of Science and Technology, Changa, India
- Graduation: Jan 2022 · CGPA: 9.2 / 10
- Certifications listed inline: Deep Learning Specialization · Google IT Automation with Python · Industrial IoT with Google Cloud Platform

### 7. Contact
Centered card with:
- Short CTA text: "Open to senior roles and AI consulting engagements"
- Email: samakshkhatri14@gmail.com
- LinkedIn: linkedin.com/in/samakshkhatri
- GitHub link (themightywolfie)
- Icons from `lucide-react`

---

## Animations

All via Framer Motion:

| Element | Animation |
|---|---|
| Sections | Fade up on scroll into view (`opacity 0→1`, `y 20→0`, `duration 0.5s`) |
| Stat counters (About) | Count up to value on first view |
| Project cards | Scale + indigo border glow on hover |
| Navbar | Slides up on scroll-down, slides down on scroll-up |
| Hero text | Staggered word/line fade-in on load |

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
    animations.ts    # Shared Framer Motion variants
  App.tsx
  main.tsx
  index.css
```

`data.ts` centralises all content (experience entries, project cards, skills, education) so copy changes never require touching component code.

---

## Deployment

- `vite.config.ts` sets `base: '/'` (root domain, no subpath needed)
- GitHub Actions workflow on push to `main`: runs `npm run build`, deploys `dist/` to `gh-pages` branch
- `.gitignore` includes `.superpowers/`, `dist/`, `node_modules/`

---

## Logo Strategy

For each company/institution logo:
1. Attempt to use an `<img>` tag pointing to their publicly accessible logo URL
2. If the URL is unreliable or fails CORS, inline a small SVG or use a styled text fallback
3. Logos are decorative — always include text name so they degrade gracefully

---

## Out of Scope

- Blog / writing section
- Dark/light mode toggle
- Contact form with backend (email links only)
- Project detail pages (resume bullets are sufficient)
- i18n / localisation
