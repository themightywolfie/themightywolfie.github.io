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
          {projects.map((project) => (
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
