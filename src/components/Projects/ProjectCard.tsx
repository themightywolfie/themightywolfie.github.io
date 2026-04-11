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
