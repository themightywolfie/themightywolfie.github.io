import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionVariants } from "../lib/animations";
import { experience } from "../lib/data";

function LogoWithFallback({
  src,
  fallback,
  alt,
}: {
  src: string;
  fallback: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono font-bold text-sm">
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-12 h-12 rounded-lg bg-card object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export default function Experience() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.p variants={fadeUp} className="font-mono text-text-muted text-sm mb-12">
          {"// EXPERIENCE"}
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/20 hidden md:block" />

          <div className="space-y-12">
            {experience.map((entry) => (
              <motion.div
                key={entry.company}
                variants={fadeUp}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-2 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent hidden md:block" />

                <div
                  id={`experience-${entry.id}`}
                  className="bg-card border border-accent/10 rounded-xl p-6 scroll-mt-24 target:border-accent/60 target:shadow-[0_0_40px_rgba(99,102,241,0.2)] transition-all duration-500"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <LogoWithFallback
                      src={entry.logo}
                      fallback={entry.logoFallback}
                      alt={entry.company}
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{entry.company}</h3>
                      <p className="text-accent font-mono text-sm">{entry.role}</p>
                      <p className="text-text-muted text-xs mt-1">
                        {entry.dates} · {entry.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {entry.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-text-secondary text-sm pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:text-xs"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
