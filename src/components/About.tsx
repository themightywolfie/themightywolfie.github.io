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
        <motion.h2 variants={fadeUp} className="font-mono text-text-primary text-2xl mb-8">
          {"// ABOUT"}
        </motion.h2>

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
