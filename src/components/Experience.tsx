import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionVariants } from "../lib/animations";
import { experience } from "../lib/data";
import SectionHeading from "./SectionHeading";

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
      <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center text-accent font-bold text-sm shrink-0">
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-14 h-14 rounded-2xl border border-border bg-white object-contain p-1.5 shrink-0"
      onError={() => setFailed(true)}
    />
  );
}

export default function Experience() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-12 md:py-16 scroll-mt-16">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <SectionHeading>Experience</SectionHeading>

        <div className="space-y-4">
          {experience.map((entry) => (
            <motion.div
              key={entry.company}
              id={`experience-${entry.id}`}
              variants={fadeUp}
              className="tile p-6 md:p-8 scroll-mt-24 target:border-accent target:ring-4 target:ring-accent/15 transition-shadow duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex items-start gap-4 md:w-72 shrink-0">
                  <LogoWithFallback
                    src={entry.logo}
                    fallback={entry.logoFallback}
                    alt={entry.company}
                  />
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">{entry.company}</h3>
                    <p className="text-accent text-sm font-medium">{entry.role}</p>
                    <p className="text-text-muted text-xs mt-1">
                      {entry.dates}
                    </p>
                    <p className="text-text-muted text-xs">{entry.location}</p>
                  </div>
                </div>

                <ul className="space-y-3 flex-1">
                  {entry.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-text-secondary text-[15px] leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
