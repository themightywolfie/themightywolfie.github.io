import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { useMotionVariants } from "../../lib/animations";
import { experience } from "../../lib/data";
import type { ProjectCard as ProjectCardType } from "../../lib/data";
import TechPill from "../TechPill";

function CompanyBadge({ experienceId }: { experienceId: string }) {
  const entry = experience.find((e) => e.id === experienceId);
  if (!entry) return null;

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const target = document.getElementById(`experience-${entry.id}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Trigger :target pseudo-class by updating hash
      history.replaceState(null, "", `#experience-${entry.id}`);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 pl-1 pr-2.5 py-1 rounded-full bg-white border border-border hover:border-accent/40 transition-colors text-xs font-medium text-text-secondary hover:text-text-primary w-fit cursor-pointer"
      title={`Built at ${entry.company} — jump to experience`}
    >
      <img
        src={entry.logo}
        alt=""
        className="w-5 h-5 rounded-full bg-white object-contain p-0.5"
      />
      <span>{entry.company}</span>
    </button>
  );
}

export default function ProjectCard({ project }: { project: ProjectCardType }) {
  const { fadeUp, scaleOnHover } = useMotionVariants();

  const content = (
    <div className="p-6 md:p-7 flex flex-col h-full">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          <CompanyBadge experienceId={project.experienceId} />
          {project.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-soft text-accent-strong text-xs font-semibold">
              <BadgeCheck size={14} />
              {project.badge}
            </span>
          )}
        </div>
        {project.url && (
          <span className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-text-muted group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
            <ArrowUpRight size={16} />
          </span>
        )}
      </div>

      <h3 className={(project.featured ? "text-2xl md:text-3xl" : "text-xl") + " font-semibold tracking-tight mb-1"}>
        {project.name}
      </h3>
      <p className="text-text-muted text-xs font-medium mb-4">{project.dates}</p>

      <p className="text-accent-strong text-sm font-semibold mb-2">{project.impact}</p>

      <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>

      {project.highlights.length > 0 && (
        <ul className={"flex flex-col gap-2 mb-5 flex-1" + (project.featured ? " md:grid md:grid-cols-2 md:gap-x-6 md:content-start" : "")}>
          {project.highlights.map((h) => (
            <li
              key={h}
              className="text-text-secondary text-[13px] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/70"
            >
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <TechPill key={tag} name={tag} variant="accent" />
        ))}
      </div>
    </div>
  );

  const cardClasses =
    "tile overflow-hidden group hover:border-accent/30 hover:shadow-[0_12px_40px_rgba(124,58,237,0.12)] transition-[border-color,box-shadow] duration-300 h-full flex flex-col" +
    (project.featured ? " bg-gradient-to-br from-white via-white to-accent-soft" : "");

  if (project.url) {
    return (
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        variants={fadeUp}
        {...scaleOnHover}
        className={cardClasses + " cursor-pointer"}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      {...scaleOnHover}
      className={cardClasses + " cursor-default"}
    >
      {content}
    </motion.div>
  );
}
