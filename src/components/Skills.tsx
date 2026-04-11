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
