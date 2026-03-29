# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Samaksh Khatri's portfolio website — a dark-themed, bento-grid React SPA deployed to GitHub Pages.

**Architecture:** Single-page React app with Vite, Tailwind CSS for styling, and Framer Motion for scroll animations. All content lives in a centralised data file. Components are presentational. No router, no backend — just smooth-scrolling anchored sections with a sticky navbar.

**Tech Stack:** React 18+, Vite, TypeScript, Tailwind CSS (v4, CSS-based config), Framer Motion, lucide-react, GitHub Actions (actions/deploy-pages)

**Spec:** `docs/superpowers/specs/2026-03-29-portfolio-design.md`

---

## File Structure

```
public/
  favicon.svg                    # SK monogram favicon
  samaksh-khatri-cv.pdf          # Resume PDF (user must provide)
src/
  components/
    Navbar.tsx                   # Sticky navbar with scroll-hide behavior
    Hero.tsx                     # Full-width hero with tagline + CTAs
    About.tsx                    # Bio + 4 stat counter cards
    Experience.tsx               # Vertical timeline with company entries
    Projects/
      ProjectCard.tsx            # Individual bento project card
      ProjectsGrid.tsx           # Bento grid layout for all projects
    Skills.tsx                   # Tag grid grouped by category
    Education.tsx                # Single education card
    Contact.tsx                  # Contact links with icons
    Footer.tsx                   # Simple copyright footer
  lib/
    data.ts                      # All resume content as typed constants
    animations.ts                # Shared Framer Motion variants
  App.tsx                        # Composes all sections
  main.tsx                       # React entry point
  index.css                      # Tailwind directives + global styles
index.html                       # Entry HTML with meta/OG tags
vite.config.ts                   # Vite config with base: '/'
                                 # Note: No tailwind.config.ts needed — Tailwind v4 uses CSS-based @theme in index.css
.github/workflows/deploy.yml     # GitHub Actions deployment
.gitignore                       # Standard ignores
```

---

## Chunk 1: Foundation

### Task 1: Scaffold Vite + React + TypeScript Project

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `index.html`, `src/main.tsx`, `src/App.tsx`

- [ ] **Step 1: Scaffold the project**

Run from the repo root (which already has README.md and docs/):

```bash
npm create vite@latest . -- --template react-ts
```

If prompted about existing files, choose to ignore/skip existing files. This creates the Vite boilerplate.

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

- [ ] **Step 3: Verify the dev server starts**

```bash
npm run dev
```

Expected: Vite dev server starts on localhost, default React page renders.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: scaffold Vite + React + TypeScript project"
```

---

### Task 2: Configure Tailwind CSS + Global Styles + Fonts + Favicon + Meta Tags

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`
- Modify: `vite.config.ts`
- Create: `public/favicon.svg`

- [ ] **Step 1: Configure Vite with Tailwind plugin**

Replace `vite.config.ts`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});
```

- [ ] **Step 2: Set up Tailwind CSS in index.css**

Replace `src/index.css` with:

```css
@import "tailwindcss";

@theme {
  --color-background: #0f0f0f;
  --color-surface: #0f172a;
  --color-card: #1e293b;
  --color-accent: #6366f1;
  --color-text-primary: #e2e8f0;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #475569;

  --font-sans: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
}
```

- [ ] **Step 3: Create favicon SVG**

Create `public/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#6366f1"/>
  <text x="16" y="22" font-family="sans-serif" font-size="16" font-weight="700" fill="white" text-anchor="middle">SK</text>
</svg>
```

- [ ] **Step 4: Update index.html with meta tags and fonts**

Replace `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Samaksh Khatri — Senior AI Engineer</title>
    <meta name="description" content="Senior AI Engineer specialising in LangChain, RAG, and production AI systems." />
    <meta property="og:title" content="Samaksh Khatri — Senior AI Engineer" />
    <meta property="og:description" content="Senior AI Engineer specialising in LangChain, RAG, and production AI systems." />
    <meta property="og:url" content="https://themightywolfie.github.io" />
    <meta property="og:image" content="https://themightywolfie.github.io/og-image.png" />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Clean up boilerplate**

Delete these Vite boilerplate files:
- `src/App.css`
- `src/assets/react.svg`
- `public/vite.svg`

Replace `src/App.tsx` with a minimal placeholder:

```tsx
function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <h1 className="text-4xl font-bold p-8">Portfolio</h1>
    </div>
  );
}

export default App;
```

- [ ] **Step 6: Verify Tailwind is working**

```bash
npm run dev
```

Expected: Page renders with dark background (`#0f0f0f`), white text, Inter font. No Vite logos or default styling.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: configure Tailwind CSS, fonts, favicon, and meta tags"
```

---

### Task 3: Create Data Layer

**Files:**
- Create: `src/lib/data.ts`

- [ ] **Step 1: Create the data file with all resume content**

Create `src/lib/data.ts`:

```ts
export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  location: string;
  logo: string;
  logoFallback: string;
  bullets: string[];
}

export interface ProjectCard {
  name: string;
  dates: string;
  impact: string;
  tags: string[];
  featured?: boolean;
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  name: "Samaksh Khatri",
  title: "Senior AI Engineer",
  tagline: "Building production AI at scale — RAG · Agents · Full Stack",
  techPills: ["Python", "LangChain", "FastAPI", "React", "Azure", "AWS"],
};

export const about = {
  bio: "I lead end-to-end AI product development across the full stack — from architecture and sprint planning to hands-on coding. With 3+ years shipping production AI systems, I specialise in RAG pipelines, multi-agent workflows, and translating complex technical capabilities into solutions that win clients.",
  stats: [
    { value: "6+", label: "AI Apps Built" },
    { value: "4+", label: "Client Acquisitions" },
    { value: "3+", label: "Years Experience" },
    { value: "9.2", label: "CGPA" },
  ],
};

export const experience: ExperienceEntry[] = [
  {
    company: "Simform Software LLP",
    role: "Senior Software Engineer",
    dates: "Nov 2024 – Present",
    location: "Ahmedabad, India",
    logo: "https://logo.clearbit.com/simform.com",
    logoFallback: "SF",
    bullets: [
      "Lead end-to-end AI product development across the full stack, driving architecture decisions, sprint planning, and hands-on coding for a portfolio of 6+ production AI applications built on FastAPI, React, LangChain, LlamaIndex, and Agno.",
      "Serve as technical lead on pre-sales engagements — translating client requirements into solution proposals, delivering live demos, and collaborating with the sales team to convert prospects; contributed to 4+ successful client acquisitions.",
      "Spearheaded the development of ThoughtMesh, a modular no-code multi-agent workflow builder supporting 30+ enterprise service integrations and multiple LLM providers.",
      "Led development of 6+ AI-powered RAG applications, designing pluggable ingestion pipelines and vector-based retrieval systems for domain-specific use cases across Product R&D, Finance and Deep Research.",
      "Mentored junior engineers through code reviews, pair programming sessions, and technical knowledge-sharing; established team-wide best practices for prompt engineering and agent design.",
    ],
  },
  {
    company: "Crest Data",
    role: "Software Engineer",
    dates: "Dec 2021 – Nov 2024",
    location: "Ahmedabad, India",
    logo: "https://logo.clearbit.com/crestdata.ai",
    logoFallback: "CD",
    bullets: [
      "Spearheaded the creation of an AI-driven internal tool using LLMs to analyse code reviews, enabling data-driven management decisions on code quality.",
      "Developed and optimised IT Service Intelligence (ITSI), Splunk's Observability product, enhancing proactive IT service monitoring and achieving a 30% increase in cross-functional collaboration through new React-based UI features.",
      "Authored and executed 80+ automated test cases (Pytest, Gradle, WebDriverIO) and resolved 60+ customer escalations with a 95% closure rate.",
      "Led seamless integrations such as PagerDuty with ITSI and fixed 40+ bugs, significantly improving incident management and user experience.",
    ],
  },
];

export const projects: ProjectCard[] = [
  {
    name: "ThoughtMesh",
    dates: "Nov 2024 – Present",
    impact: "100+ enterprise integrations, multi-LLM orchestration",
    tags: ["LangChain", "FastAPI", "React"],
    featured: true,
  },
  {
    name: "NeuVantage",
    dates: "Aug 2025 – Present",
    impact: "Graph-driven modernisation with Neo4j + AI Foundry",
    tags: ["Neo4j", "Graphiti", "Azure"],
  },
  {
    name: "CodeTools",
    dates: "Nov 2024 – Present",
    impact: "Full-workspace AI knowledge base inside VS Code",
    tags: ["TypeScript", "VS Code API", "LLMs"],
  },
  {
    name: "Mock Interview Bot",
    dates: "Nov 2024 – Present",
    impact: "Automated 90% of internal mock interviews",
    tags: ["LiveKit", "FastAPI", "LLMs"],
  },
  {
    name: "Financial Advisor",
    dates: "Dec 2025 – Present",
    impact: "Fully Azure-native portfolio intelligence system",
    tags: ["Azure AI Foundry", "CosmosDB"],
  },
  {
    name: "MednoteDX",
    dates: "Jun 2025 – Dec 2025",
    impact: "RAG-powered clinical assistant on MedGemma",
    tags: ["MedGemma", "FastAPI", "RAG"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "AI & ML",
    skills: ["Python", "RAG", "LangChain", "LlamaIndex", "Agno", "Qdrant", "AI Agents", "PyTorch", "TensorFlow"],
  },
  {
    label: "Backend",
    skills: ["FastAPI", "REST API", "MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript"],
  },
  {
    label: "Cloud & Infra",
    skills: ["Microsoft Azure", "AWS", "Neo4j", "Graphiti", "LiveKit"],
  },
  {
    label: "Industry",
    skills: ["Deep Learning", "Machine Learning", "System Design", "Observability", "Pre-Sales Engineering"],
  },
];

export const education = {
  institution: "Charotar University of Science and Technology",
  location: "Changa, India",
  degree: "B.Tech, Computer Science and Engineering",
  graduation: "Jan 2022",
  cgpa: "9.2 / 10",
  logo: "https://logo.clearbit.com/charusat.ac.in",
  logoFallback: "CHARUSAT",
  certifications: [
    "Deep Learning Specialization",
    "Google IT Automation with Python",
    "Industrial IoT with Google Cloud Platform",
  ],
};

export const contact = {
  cta: "Open to senior AI roles and consulting engagements",
  email: "samakshkhatri14@gmail.com",
  linkedin: "https://linkedin.com/in/samakshkhatri",
  github: "https://github.com/themightywolfie",
};
```

- [ ] **Step 2: Verify the file compiles**

```bash
npx tsc --noEmit
```

Expected: No type errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/data.ts
git commit -m "feat: add centralised data layer with all resume content"
```

---

### Task 4: Create Animation Utilities

**Files:**
- Create: `src/lib/animations.ts`

- [ ] **Step 1: Create shared Framer Motion variants**

Create `src/lib/animations.ts`:

```ts
import { useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

export function useMotionVariants() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: Variants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      };

  const staggerContainer: Variants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      };

  const scaleOnHover = shouldReduceMotion
    ? {}
    : {
        whileHover: {
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        },
      };

  return { fadeUp, staggerContainer, scaleOnHover };
}
```

- [ ] **Step 2: Verify the file compiles**

```bash
npx tsc --noEmit
```

Expected: No type errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/animations.ts
git commit -m "feat: add reduced-motion-aware animation utilities"
```

---

## Chunk 2: Components — Navbar, Hero, About, Experience

### Task 5: Navbar Component

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Create the Navbar with scroll-hide behavior**

Create `src/components/Navbar.tsx`:

```tsx
import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Download } from "lucide-react";
import { navLinks } from "../lib/data";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-lg text-accent">
          SK
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/samaksh-khatri-cv.pdf"
          download
          className="flex items-center gap-2 text-sm px-4 py-2 border border-accent/30 rounded-lg text-accent hover:bg-accent/10 transition-colors"
        >
          <Download size={14} />
          <span className="hidden sm:inline">Download CV</span>
        </a>
      </div>
    </motion.nav>
  );
}
```

- [ ] **Step 2: Add Navbar to App.tsx**

Replace `src/App.tsx`:

```tsx
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <div className="pt-16">
        <div className="h-screen flex items-center justify-center">
          <p className="text-text-muted">Sections coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Verify visually**

```bash
npm run dev
```

Expected: Dark page with sticky navbar showing SK logo, nav links (hidden on mobile), and Download CV button. Navbar hides on scroll down, reappears on scroll up.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/App.tsx
git commit -m "feat: add Navbar with scroll-hide behavior"
```

---

### Task 6: Hero Component

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Create the Hero section**

Create `src/components/Hero.tsx`:

```tsx
import { motion } from "framer-motion";
import { useMotionVariants } from "../lib/animations";
import { hero } from "../lib/data";

export default function Hero() {
  const { fadeUp, staggerContainer } = useMotionVariants();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot-matrix background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-accent text-sm tracking-[0.2em] uppercase mb-4"
        >
          {hero.title}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-text-secondary text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          {hero.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-10">
          {hero.techPills.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono border border-accent/30 rounded-full text-accent bg-accent/5"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-accent/30 text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Add Hero to App.tsx**

Update `src/App.tsx` — add the import and render Hero after the Navbar:

```tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Verify visually**

```bash
npm run dev
```

Expected: Full-screen hero with dot-matrix background, name, title, tagline, tech pills, and two CTA buttons. Text staggers in on load.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx src/App.tsx
git commit -m "feat: add Hero section with staggered animations"
```

---

### Task 7: About Component

**Files:**
- Create: `src/components/About.tsx`

- [ ] **Step 1: Create the About section with animated stat counters**

Create `src/components/About.tsx`:

```tsx
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useMotionVariants } from "../lib/animations";
import { about } from "../lib/data";

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const numericPart = parseFloat(value);
  const suffix = value.replace(String(numericPart), "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || shouldReduceMotion) {
      setDisplay(numericPart);
      return;
    }
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = eased * numericPart;
      setDisplay(Number(start.toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [inView, numericPart, shouldReduceMotion]);

  const formatted = Number.isInteger(numericPart)
    ? Math.round(display).toString()
    : display.toFixed(1);

  return (
    <span className="text-3xl font-bold text-accent font-mono">
      {formatted}{suffix}
    </span>
  );
}

export default function About() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-surface">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.p variants={fadeUp} className="font-mono text-text-muted text-sm mb-8">
          {"// ABOUT"}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeUp}>
            <p className="text-text-secondary text-lg leading-relaxed">
              {about.bio}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-accent/10 rounded-xl p-5 text-center"
              >
                <AnimatedCounter value={stat.value} inView={inView} />
                <p className="text-text-muted text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Add About to App.tsx**

Add `import About from "./components/About";` and render `<About />` after `<Hero />`.

- [ ] **Step 3: Verify visually**

```bash
npm run dev
```

Expected: About section on surface background with bio text on left, 4 stat cards on right. Counters animate up when scrolled into view.

- [ ] **Step 4: Commit**

```bash
git add src/components/About.tsx src/App.tsx
git commit -m "feat: add About section with animated stat counters"
```

---

### Task 8: Experience Component

**Files:**
- Create: `src/components/Experience.tsx`

- [ ] **Step 1: Create the Experience timeline**

Create `src/components/Experience.tsx`:

```tsx
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionVariants } from "../lib/animations";
import { experience } from "../lib/data";

function LogoWithFallback({
  src,
  fallback,
  alt,
}: {
  src: string;
  fallback: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono font-bold text-sm">
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-12 h-12 rounded-lg bg-card object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export default function Experience() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.p variants={fadeUp} className="font-mono text-text-muted text-sm mb-12">
          {"// EXPERIENCE"}
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/20 hidden md:block" />

          <div className="space-y-12">
            {experience.map((entry) => (
              <motion.div
                key={entry.company}
                variants={fadeUp}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-2 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent hidden md:block" />

                <div className="bg-card border border-accent/10 rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <LogoWithFallback
                      src={entry.logo}
                      fallback={entry.logoFallback}
                      alt={entry.company}
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{entry.company}</h3>
                      <p className="text-accent font-mono text-sm">{entry.role}</p>
                      <p className="text-text-muted text-xs mt-1">
                        {entry.dates} · {entry.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {entry.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-text-secondary text-sm pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:text-xs"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Add Experience to App.tsx**

Add `import Experience from "./components/Experience";` and render `<Experience />` after `<About />`.

- [ ] **Step 3: Verify visually**

```bash
npm run dev
```

Expected: Timeline with two entries, company logos (or fallback initials), role details, and bullet points. Fade up on scroll.

- [ ] **Step 4: Commit**

```bash
git add src/components/Experience.tsx src/App.tsx
git commit -m "feat: add Experience timeline with company logos"
```

---

## Chunk 3: Components — Projects, Skills, Education, Contact, Footer

### Task 9: Project Card + Bento Grid

**Files:**
- Create: `src/components/Projects/ProjectCard.tsx`
- Create: `src/components/Projects/ProjectsGrid.tsx`

- [ ] **Step 1: Create the ProjectCard component**

Create `src/components/Projects/ProjectCard.tsx`:

```tsx
import { motion } from "framer-motion";
import { useMotionVariants } from "../../lib/animations";
import type { ProjectCard as ProjectCardType } from "../../lib/data";

export default function ProjectCard({ project }: { project: ProjectCardType }) {
  const { fadeUp, scaleOnHover } = useMotionVariants();

  return (
    <motion.div
      variants={fadeUp}
      {...scaleOnHover}
      className="bg-card border border-accent/10 rounded-xl overflow-hidden group cursor-default hover:border-accent/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-300"
    >
      {/* Top accent border */}
      <div className="h-0.5 bg-accent" />

      <div className="p-6">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="text-lg font-bold">{project.name}</h3>
          <span className="text-text-muted text-xs font-mono">{project.dates}</span>
        </div>

        <p className="text-text-secondary text-sm mb-4">{project.impact}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-mono border border-accent/30 rounded-full text-accent bg-accent/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 2: Create the ProjectsGrid component with bento layout**

Create `src/components/Projects/ProjectsGrid.tsx`:

```tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionVariants } from "../../lib/animations";
import { projects } from "../../lib/data";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-surface">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.p variants={fadeUp} className="font-mono text-text-muted text-sm mb-12">
          {"// PROJECTS"}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={
                project.featured
                  ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                  : ""
              }
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 3: Add ProjectsGrid to App.tsx**

Add `import ProjectsGrid from "./components/Projects/ProjectsGrid";` and render `<ProjectsGrid />` after `<Experience />`.

- [ ] **Step 4: Verify visually**

```bash
npm run dev
```

Expected: Bento grid with ThoughtMesh as a large featured card spanning 2 columns + 2 rows on desktop, 2 columns on tablet, single column on mobile. All cards have indigo top accent, hover effects.

- [ ] **Step 5: Commit**

```bash
git add src/components/Projects/ src/App.tsx
git commit -m "feat: add Projects bento grid with hover effects"
```

---

### Task 10: Skills Component

**Files:**
- Create: `src/components/Skills.tsx`

- [ ] **Step 1: Create the Skills tag grid**

Create `src/components/Skills.tsx`:

```tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionVariants } from "../lib/animations";
import { skillCategories } from "../lib/data";

export default function Skills() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.p variants={fadeUp} className="font-mono text-text-muted text-sm mb-12">
          {"// SKILLS"}
        </motion.p>

        <div className="space-y-8">
          {skillCategories.map((category) => (
            <motion.div key={category.label} variants={fadeUp}>
              <p className="font-mono text-text-muted text-xs mb-3">
                {"// "}{category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm border border-accent/30 rounded-full text-slate-300 bg-accent/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Add Skills to App.tsx**

Add `import Skills from "./components/Skills";` and render `<Skills />` after `<ProjectsGrid />`.

- [ ] **Step 3: Verify visually**

```bash
npm run dev
```

Expected: Skills section with categorised tag pills, each category labelled with `// Category Name` in monospace.

- [ ] **Step 4: Commit**

```bash
git add src/components/Skills.tsx src/App.tsx
git commit -m "feat: add Skills tag grid"
```

---

### Task 11: Education Component

**Files:**
- Create: `src/components/Education.tsx`

- [ ] **Step 1: Create the Education card**

Create `src/components/Education.tsx`:

```tsx
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionVariants } from "../lib/animations";
import { education } from "../lib/data";
import { Award } from "lucide-react";

function LogoWithFallback({
  src,
  fallback,
  alt,
}: {
  src: string;
  fallback: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono font-bold text-[8px]">
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-12 h-12 rounded-lg bg-card object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export default function Education() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-surface">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.p variants={fadeUp} className="font-mono text-text-muted text-sm mb-12">
          {"// EDUCATION"}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="bg-card border border-accent/10 rounded-xl p-6 max-w-2xl"
        >
          <div className="flex items-start gap-4 mb-4">
            <LogoWithFallback
              src={education.logo}
              fallback={education.logoFallback}
              alt={education.institution}
            />
            <div>
              <h3 className="text-lg font-bold">{education.institution}</h3>
              <p className="text-accent font-mono text-sm">{education.degree}</p>
              <p className="text-text-muted text-xs mt-1">
                {education.graduation} · {education.location} · CGPA: {education.cgpa}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-accent/10">
            <div className="flex items-center gap-2 mb-3">
              <Award size={14} className="text-accent" />
              <p className="font-mono text-text-muted text-xs">Certifications</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 text-xs border border-accent/20 rounded-full text-text-secondary"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Add Education to App.tsx**

Add `import Education from "./components/Education";` and render `<Education />` after `<Skills />`.

- [ ] **Step 3: Commit**

```bash
git add src/components/Education.tsx src/App.tsx
git commit -m "feat: add Education card with certifications"
```

---

### Task 12: Contact Component

**Files:**
- Create: `src/components/Contact.tsx`

- [ ] **Step 1: Create the Contact section**

Create `src/components/Contact.tsx`:

```tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionVariants } from "../lib/animations";
import { contact } from "../lib/data";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.p variants={fadeUp} className="font-mono text-text-muted text-sm mb-12">
          {"// CONTACT"}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="bg-card border border-accent/10 rounded-xl p-8 max-w-xl mx-auto text-center"
        >
          <p className="text-text-secondary text-lg mb-8">{contact.cta}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">Email Me</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-colors"
            >
              <Linkedin size={16} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-colors"
            >
              <Github size={16} />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Add Contact to App.tsx**

Add `import Contact from "./components/Contact";` and render `<Contact />` after `<Education />`.

- [ ] **Step 3: Commit**

```bash
git add src/components/Contact.tsx src/App.tsx
git commit -m "feat: add Contact section with email and social links"
```

---

### Task 13: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create a simple footer**

Create `src/components/Footer.tsx`:

```tsx
export default function Footer() {
  return (
    <footer className="py-8 border-t border-accent/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-text-muted text-sm font-mono">
          &copy; {new Date().getFullYear()} Samaksh Khatri
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Add Footer to App.tsx**

Add `import Footer from "./components/Footer";` and render `<Footer />` as the last element.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx src/App.tsx
git commit -m "feat: add Footer component"
```

---

## Chunk 4: Assembly & Deployment

### Task 14: Final App.tsx Assembly

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Verify App.tsx has all sections in order**

`src/App.tsx` should now be:

```tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectsGrid from "./components/Projects/ProjectsGrid";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ProjectsGrid />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
```

If it doesn't match (due to incremental additions), update it now.

- [ ] **Step 2: Verify full page renders correctly**

```bash
npm run dev
```

Walk through all sections: Navbar → Hero → About → Experience → Projects → Skills → Education → Contact → Footer. Verify:
- Smooth scroll from nav links
- Scroll-hide navbar
- Stat counter animation
- Project card hover effects
- Responsive behavior (resize browser to test mobile)

- [ ] **Step 3: Commit if changes were needed**

```bash
git add src/App.tsx
git commit -m "chore: finalise App.tsx section assembly"
```

---

### Task 15: GitHub Actions Deployment Workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create the deploy workflow**

> **Note:** Uses GitHub's native `actions/deploy-pages@v4` instead of `peaceiris/actions-gh-pages@v3` from the spec — this is the modern, recommended approach. Requires Pages source to be set to "GitHub Actions" in repo Settings → Pages.

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run build

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Create .gitignore**

Update `.gitignore`:

```
node_modules/
dist/
.superpowers/
*.local
```

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/deploy.yml .gitignore
git commit -m "ci: add GitHub Pages deployment workflow"
```

---

### Task 16: Production Build Verification

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Build succeeds, outputs to `dist/`.

- [ ] **Step 2: Preview production build**

```bash
npm run preview
```

Expected: Site loads correctly at the preview URL. All sections render, animations work.

- [ ] **Step 3: Check for TypeScript errors**

```bash
npx tsc --noEmit
```

Expected: No type errors.

- [ ] **Step 4: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: resolve production build issues"
```

- [ ] **Step 5: Asset reminder**

Before pushing to GitHub, ensure `public/samaksh-khatri-cv.pdf` is committed. If the user has not provided the PDF yet, add a placeholder and note it for later.
