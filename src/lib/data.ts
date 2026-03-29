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
