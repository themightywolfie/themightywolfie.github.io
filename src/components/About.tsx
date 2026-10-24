import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Handshake, Users } from "lucide-react";
import { useMotionVariants } from "../lib/animations";
import { about } from "../lib/data";
import SectionHeading from "./SectionHeading";

const pillarIcons = [Handshake, Users];

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
    <span className="text-4xl md:text-5xl font-bold tracking-tight tabular-nums text-accent">
      {formatted}{suffix}
    </span>
  );
}

export default function About() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 md:py-16 scroll-mt-16">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <SectionHeading>About</SectionHeading>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            variants={fadeUp}
            className="tile col-span-2 md:row-span-2 p-8 flex items-center"
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              {about.bio}
            </p>
          </motion.div>

          {about.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="tile p-6 flex flex-col justify-between gap-6"
            >
              <AnimatedCounter value={stat.value} inView={inView} />
              <p className="text-text-muted text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}

          {about.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className={
                  "tile col-span-2 p-8" +
                  (i === 0 ? " bg-gradient-to-br from-white to-accent-soft" : "")
                }
              >
                <div className="w-11 h-11 rounded-2xl bg-accent text-white flex items-center justify-center mb-5">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight mb-1">{pillar.title}</h3>
                <p className="text-text-secondary mb-5">{pillar.summary}</p>
                <ul className="space-y-2.5">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="text-text-secondary text-[15px] leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
