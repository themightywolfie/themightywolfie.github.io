export interface ExperienceEntry {
  id: string;
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
  description: string;
  highlights: string[];
  tags: string[];
  featured?: boolean;
  badge?: string;
  url?: string;
  experienceId: string;
}

export interface SkillCategory {
  label: string;
  skills: string[];
  wide?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  issued?: string;
  description?: string;
  url: string;
  featured?: boolean;
}

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  name: "Samaksh Khatri",
  title: "AI Engineering Lead · Solutions Architect",
  tagline: "I shape enterprise AI solutions with clients in pre-sales, then lead the engineering teams that ship them.",
  techPills: ["Python", "LangChain", "Azure AI Foundry", "Microsoft Fabric", "Copilot Studio", "MCP", "Multi-Agent Systems"],
};

export const about = {
  bio: "AI engineer and technical lead with 4+ years building enterprise AI solutions, LLM-powered applications, and full-stack products. I work across multi-agent orchestration, RAG, and cloud-native AI architecture — and I'm equally at home in front of a client, translating business requirements into solution architectures, proofs of concept, and demos that win the deal.",
  stats: [
    { value: "18", label: "AI Accelerators Delivered" },
    { value: "15+", label: "Client Acquisitions Supported" },
    { value: "10", label: "Engineers Led" },
    { value: "4+", label: "Years Experience" },
  ],
  pillars: [
    {
      title: "Solutions Consulting",
      summary: "Turning business problems into AI solution architectures that clients buy into.",
      points: [
        "Solution architectures and technical proposals",
        "Proofs of concept and live product demonstrations",
        "Supported 15+ client acquisitions across 5+ domains",
        "Delivered Microsoft's Agent in a Day for Copilot Studio partners",
      ],
    },
    {
      title: "Engineering Leadership",
      summary: "Owning architecture and delivery for a team shipping production AI.",
      points: [
        "Lead engineer for 18 AI accelerators in Labs & Innovations",
        "Architecture decisions, sprint planning, and code reviews",
        "Mentoring a team of 10 engineers on scalable design patterns",
        "Driving organisation-wide AI adoption and enablement",
      ],
    },
  ],
};

export const experience: ExperienceEntry[] = [
  {
    id: "simform",
    company: "Simform Software LLP",
    role: "Senior Software Engineer",
    dates: "Nov 2024 – Present",
    location: "Ahmedabad, India",
    logo: "/logos/simform.svg",
    logoFallback: "SF",
    bullets: [
      "Lead engineer within the Labs & Innovations team, driving architecture, development, and delivery of 18 scalable AI-powered accelerators across enterprise use cases using Generative AI, agentic workflows, and cloud-native technologies.",
      "Drive technical solutioning and client-facing pre-sales — translating business requirements into solution architectures, technical proposals, proofs of concept, and product demonstrations that supported 15+ client acquisitions.",
      "Provide technical leadership across AI initiatives through architecture decisions, engineering guidance, code reviews, sprint planning, and mentoring a team of 10 engineers.",
      "Architect multi-agent systems, RAG pipelines, and enterprise AI applications integrating LLM providers, knowledge retrieval, external tools, and enterprise services across 5+ domains.",
      "Lead solution engineering across LangChain, Azure AI Foundry, Microsoft Copilot Studio Agents, MCP servers, CopilotKit, FastAPI, Microsoft Fabric, Qdrant, PostgreSQL, and Redis.",
      "Drive organisation-wide AI adoption through knowledge-sharing and enablement, including delivering Microsoft's Agent in a Day session for partners building solutions on Copilot Studio.",
    ],
  },
  {
    id: "crestdata",
    company: "Crest Data",
    role: "Software Engineer",
    dates: "Dec 2021 – Nov 2024",
    location: "Ahmedabad, India",
    logo: "/logos/crestdata.png",
    logoFallback: "CD",
    bullets: [
      "Spearheaded the creation of an AI-driven internal tool using LLMs to analyse code reviews, enabling data-driven management decisions on code quality.",
      "Developed and optimised IT Service Intelligence (ITSI), Splunk's Observability product, enhancing proactive IT service monitoring and achieving a 30% increase in cross-functional collaboration through new React-based UI features.",
      "Authored and executed 80+ automated test cases (Pytest, Gradle, WebDriverIO) and resolved 60+ customer escalations with a 95% closure rate, earning Crest Achievement Program recognition for resolving particularly difficult escalations.",
      "Led seamless integrations such as PagerDuty with ITSI and fixed 40+ bugs, significantly improving incident management and user experience.",
    ],
  },
];

export const projects: ProjectCard[] = [
  {
    name: "ThoughtMesh",
    dates: "Nov 2024 – Present",
    impact: "Low-code/no-code GenAI platform for enterprise agents and multi-agent workflows",
    description:
      "Modular platform for building, orchestrating, and deploying enterprise AI agents — 30+ enterprise service integrations and LLM providers including OpenAI, Anthropic, Hugging Face, OpenRouter, and AWS Bedrock.",
    highlights: [
      "Reusable agent orchestration patterns for retrieval, classification, validation, and process automation",
      "Modular RAG pipelines over structured and unstructured enterprise data",
      "Agent memory, knowledge grounding, access control, and secrets management",
      "Secure deployment across cloud, self-hosted, and hybrid environments",
    ],
    tags: ["LangChain", "FastAPI", "React", "RAG", "Multi-Agent"],
    featured: true,
    badge: "Azure IP Co-Sell Eligible",
    url: "https://www.simform.com/accelerators/thoughtmesh/",
    experienceId: "simform",
  },
  {
    name: "NeuVantage",
    dates: "Aug 2025 – Present",
    impact: "AI-powered application modernisation and migration strategy",
    description:
      "Accelerator on Microsoft AI Foundry that analyses legacy systems and generates prioritised refactoring, cloud migration, and microservices decomposition recommendations.",
    highlights: [
      "Modular analysis pipelines over codebases, architecture artefacts, and dependencies",
      "Neo4j graph vector layer modelling services and modernisation pathways",
      "Graphiti agentic memory for persistent context across multi-step reasoning",
    ],
    tags: ["Azure AI Foundry", "Neo4j", "Graphiti"],
    badge: "Azure IP Co-Sell Eligible",
    url: "https://www.simform.com/accelerators/neuvantage/",
    experienceId: "simform",
  },
  {
    name: "TrueMorph",
    dates: "Jun 2025 – Present",
    impact: "AI-powered data modernisation on Microsoft Fabric",
    description:
      "Accelerator that migrates legacy data platforms into governed, scalable, AI-ready data ecosystems on Microsoft Fabric.",
    highlights: [
      "Metadata-driven discovery of schemas, lineage, quality patterns, and business rules",
      "Ontology-driven understanding linking business concepts to data entities",
      "AI-assisted quality monitoring and self-healing for schema drift and anomalies",
      "Human-in-the-loop approvals, lineage tracking, and PII/PHI detection and masking",
    ],
    tags: ["Microsoft Fabric", "Data Governance", "LLMs"],
    featured: true,
    badge: "Azure IP Co-Sell Eligible",
    url: "https://www.simform.com/accelerators/truemorph/",
    experienceId: "simform",
  },
  {
    name: "MedNoteDX",
    dates: "Jun 2025 – Dec 2025",
    impact: "HIPAA-compliant multimodal AI clinical assistant",
    description:
      "On-premise clinical assistant with voice-driven documentation, DICOM imaging analysis, and real-time consultation support — patient data never leaves the network.",
    highlights: [
      "Knowledge-based medical search with confidence scoring and explainability",
      "AI radiologist with native DICOM processing for medical imaging",
      "Voice-driven documentation generating structured medical records",
    ],
    tags: ["MedGemma", "FastAPI", "RAG", "HIPAA"],
    url: "https://www.simform.com/accelerators/mednotedx/",
    experienceId: "simform",
  },
  {
    name: "CodeTools",
    dates: "Nov 2024 – Present",
    impact: "AI-powered VS Code extension for full-workspace code intelligence",
    description:
      "VS Code extension with customisable, context-aware AI agents that help developers, PMs, and QA teams understand, design, and deliver software faster.",
    highlights: [
      "Natural language Q&A across entire projects without requiring open files",
      "Auto-generates system architecture diagrams from code",
      "Analyses Terraform, CloudFormation, and ARM templates for misconfigurations",
    ],
    tags: ["TypeScript", "VS Code API", "LLMs"],
    url: "https://www.simform.com/accelerators/codetools/",
    experienceId: "simform",
  },
  {
    name: "Splunk ITSI",
    dates: "Dec 2021 – Nov 2024",
    impact: "AIOps platform with predictive alerting and KPI-driven triage",
    description:
      "Contributed to Splunk's IT Service Intelligence product at Crest Data — building React UI features, integrations, and resolving 60+ customer escalations.",
    highlights: [
      "Built React-based UI features improving cross-functional collaboration by 30%",
      "Led PagerDuty integration with ITSI for streamlined incident management",
      "Authored 80+ automated test cases across Pytest, Gradle, and WebDriverIO",
    ],
    tags: ["React", "Splunk", "Python", "Observability"],
    experienceId: "crestdata",
  },
  {
    name: "Mock Interview Bot",
    dates: "Nov 2024 – Present",
    impact: "Automated 90% of internal mock interviews with real-time AI",
    description:
      "Real-time voice-driven AI interviewer for structured mock interviews with adaptive questioning and instant feedback.",
    highlights: [
      "Real-time voice interaction via LiveKit WebRTC infrastructure",
      "Adaptive questioning engine with domain-specific evaluation rubrics",
    ],
    tags: ["LiveKit", "FastAPI", "LLMs"],
    experienceId: "simform",
  },
  {
    name: "MR Analyzer",
    dates: "2023 – 2024",
    impact: "Sentiment-driven code review analytics for engineering leadership",
    description:
      "Internal AI tool that surfaces PR review sentiment across GitHub, Bitbucket, and GitLab in a unified dashboard — giving upper management visibility into project code quality and developer metrics without logging into individual repo hubs.",
    highlights: [
      "Fine-tuned LLM classifier over custom sentiment categories — Critical, Changes Requested, Discussions",
      "Hand-labelled, domain-specific training dataset built from real PR review comments",
      "Interactive dashboards with filters by project, contributor, and reviewer",
      "Unified ingestion across GitHub, Bitbucket, and GitLab APIs",
    ],
    tags: ["LLMs", "Fine-tuning", "NLP", "React", "Analytics"],
    featured: true,
    experienceId: "crestdata",
  },
  {
    name: "Financial Advisor",
    dates: "Dec 2025 – Present",
    impact: "Azure-native portfolio intelligence with CosmosDB and AI Foundry",
    description:
      "End-to-end financial advisory system providing AI-driven portfolio analysis, market insights, and personalised investment recommendations.",
    highlights: [
      "Fully Azure-native architecture with AI Foundry and CosmosDB",
      "RAG pipeline over financial documents for contextual advisory",
    ],
    tags: ["Azure AI Foundry", "CosmosDB", "RAG"],
    experienceId: "simform",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "AI & Agents",
    skills: ["Python", "RAG", "LangChain", "LlamaIndex", "Agno", "AI Agents", "MCP", "Docling", "PyTorch", "TensorFlow"],
    wide: true,
  },
  {
    label: "Microsoft & Cloud",
    skills: ["Microsoft Fabric", "Azure AI Foundry", "Copilot Studio", "Microsoft Azure", "AWS", "LiveKit"],
  },
  {
    label: "Pre-Sales & Leadership",
    skills: ["Technical Pre-Sales", "Solution Architecture", "Proofs of Concept", "Client Demos", "Technical Proposals", "Sprint Planning", "Code Reviews", "Mentoring"],
    wide: true,
  },
  {
    label: "Backend & Data",
    skills: ["FastAPI", "REST API", "PostgreSQL", "MySQL", "MongoDB", "Qdrant", "Redis", "Neo4j"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript", "CopilotKit"],
  },
  {
    label: "Industry",
    skills: ["Deep Learning", "Machine Learning", "System Design", "Observability", "Automation", "Internet of Things", "Edge Computing"],
    wide: true,
  },
];

export const education = {
  institution: "Charotar University of Science and Technology",
  location: "Changa, India",
  degree: "B.Tech, Computer Science and Engineering",
  graduation: "Jan 2022",
  cgpa: "9.2 / 10",
  logo: "/logos/charusat.png",
  logoFallback: "CHARUSAT",
};

export const certifications: Certification[] = [
  {
    name: "Claude Certified Architect – Foundations",
    issuer: "Anthropic",
    issued: "Sep 2026",
    description:
      "Designing and building production-grade applications with Claude using Claude Code, the Claude Agent SDK, the Claude API, and MCP.",
    url: "https://www.credly.com/badges/b5a7b2af-25f2-4858-bcfb-adb6aa2ec1ec/public_url",
    featured: true,
  },
  {
    name: "Google IT Automation with Python",
    issuer: "Google · Coursera",
    url: "https://coursera.org/share/fd2cb147eee7d9135888d4816888bf1f",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI · Coursera",
    url: "https://coursera.org/share/0578c3f9832cbef9a34b99ea086f2e4f",
  },
];

export const contact = {
  cta: "Open to AI engineering lead and pre-sales solutions roles",
  email: "samakshkhatri14@gmail.com",
  linkedin: "https://linkedin.com/in/samakshkhatri",
  github: "https://github.com/themightywolfie",
};
