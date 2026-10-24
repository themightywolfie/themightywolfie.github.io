import {
  Activity,
  Bot,
  Boxes,
  Brain,
  CalendarRange,
  ChartColumn,
  Cpu,
  DraftingCompass,
  FileSearch,
  FileSignature,
  FileText,
  FlaskConical,
  GitPullRequest,
  GraduationCap,
  MessageSquareText,
  Network,
  Plug,
  Presentation,
  Router,
  ServerCog,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Waypoints,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** A brand logo served from /public/icons, or a generic glyph for concepts without one. */
export type TechIcon = { logo: string } | { glyph: LucideIcon };

const logo = (slug: string): TechIcon => ({ logo: `/icons/${slug}.svg` });
const glyph = (icon: LucideIcon): TechIcon => ({ glyph: icon });

const techIcons: Record<string, TechIcon> = {
  // Languages & frameworks
  Python: logo("python"),
  TypeScript: logo("typescript"),
  JavaScript: logo("javascript"),
  React: logo("react"),
  "React.js": logo("react"),
  FastAPI: logo("fastapi"),
  CopilotKit: logo("copilotkit"),
  "VS Code API": logo("vscode"),

  // AI
  LangChain: logo("langchain"),
  LlamaIndex: logo("llamaindex"),
  MCP: logo("mcp"),
  PyTorch: logo("pytorch"),
  TensorFlow: logo("tensorflow"),
  MedGemma: logo("google"),
  Agno: glyph(Bot),
  Docling: glyph(FileText),
  RAG: glyph(FileSearch),
  "AI Agents": glyph(Bot),
  "Multi-Agent": glyph(Network),
  "Multi-Agent Systems": glyph(Network),
  LLMs: glyph(Sparkles),
  "Fine-tuning": glyph(SlidersHorizontal),
  NLP: glyph(MessageSquareText),

  // Microsoft & cloud
  "Microsoft Fabric": logo("microsoft-fabric"),
  "Azure AI Foundry": logo("azure-ai-foundry"),
  "Copilot Studio": logo("copilot"),
  "Microsoft Azure": logo("azure"),
  AWS: logo("aws"),
  LiveKit: logo("livekit"),
  CosmosDB: logo("cosmosdb"),
  Splunk: glyph(Activity),

  // Data
  PostgreSQL: logo("postgresql"),
  MySQL: logo("mysql"),
  MongoDB: logo("mongodb"),
  Qdrant: logo("qdrant"),
  Redis: logo("redis"),
  Neo4j: logo("neo4j"),
  Graphiti: glyph(Waypoints),
  "REST API": glyph(Plug),
  "Data Governance": glyph(ShieldCheck),
  HIPAA: glyph(ShieldCheck),
  Analytics: glyph(ChartColumn),

  // Pre-sales & leadership
  "Technical Pre-Sales": glyph(Presentation),
  "Solution Architecture": glyph(DraftingCompass),
  "Proofs of Concept": glyph(FlaskConical),
  "Client Demos": glyph(Presentation),
  "Technical Proposals": glyph(FileSignature),
  "Sprint Planning": glyph(CalendarRange),
  "Code Reviews": glyph(GitPullRequest),
  Mentoring: glyph(GraduationCap),

  // Industry
  "Deep Learning": glyph(Brain),
  "Machine Learning": glyph(Cpu),
  "System Design": glyph(Boxes),
  Observability: glyph(Activity),
  Automation: glyph(Workflow),
  "Internet of Things": glyph(Router),
  "Edge Computing": glyph(ServerCog),
};

export function getTechIcon(name: string): TechIcon | undefined {
  return techIcons[name];
}
