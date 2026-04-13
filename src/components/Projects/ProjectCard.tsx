import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useMotionVariants } from "../../lib/animations";
import { experience } from "../../lib/data";
import type { ProjectCard as ProjectCardType } from "../../lib/data";

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
      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-accent/5 border border-accent/20 hover:bg-accent/15 hover:border-accent/40 transition-colors text-xs text-text-secondary hover:text-text-primary w-fit cursor-pointer"
      title={`Built at ${entry.company} — jump to experience`}
    >
      <img
        src={entry.logo}
        alt=""
        className="w-4 h-4 rounded bg-white object-contain p-0.5"
      />
      <span className="font-mono">@ {entry.company}</span>
    </button>
  );
}

export default function ProjectCard({ project }: { project: ProjectCardType }) {
  const { fadeUp, scaleOnHover } = useMotionVariants();

  const content = (
    <>
      {/* Top accent border */}
      <div className="h-0.5 bg-accent" />

      <div className="p-6 flex flex-col h-full">
        <div className="flex items-baseline justify-between mb-1">
          <h3 className="text-lg font-bold">{project.name}</h3>
          <div className="flex items-center gap-2">
            {project.url && (
              <ExternalLink
                size={14}
                className="text-text-muted group-hover:text-accent transition-colors"
              />
            )}
            <span className="text-text-muted text-xs font-mono whitespace-nowrap">
              {project.dates}
            </span>
          </div>
        </div>

        <div className="mb-3">
          <CompanyBadge experienceId={project.experienceId} />
        </div>

        <p className="text-accent text-sm font-medium mb-3">{project.impact}</p>

        <p className="text-text-secondary text-sm mb-4">{project.description}</p>

        {project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-4 flex-1">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="text-text-primary text-xs leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-accent"
              >
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
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
    </>
  );

  const cardClasses =
    "bg-card border border-accent/10 rounded-xl overflow-hidden group hover:border-accent/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-300 h-full flex flex-col";

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
