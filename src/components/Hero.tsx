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
