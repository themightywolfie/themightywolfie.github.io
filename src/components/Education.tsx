import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionVariants } from "../lib/animations";
import { education } from "../lib/data";
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
      <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center text-accent font-bold text-[8px] shrink-0">
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

export default function Education() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-12 md:py-16 scroll-mt-16">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <SectionHeading>Education</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.div variants={fadeUp} className="tile md:col-span-3 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <LogoWithFallback
                src={education.logo}
                fallback={education.logoFallback}
                alt={education.institution}
              />
              <div>
                <h3 className="text-lg font-semibold leading-snug">{education.institution}</h3>
                <p className="text-accent text-sm font-medium">{education.degree}</p>
                <p className="text-text-muted text-xs mt-1">
                  {education.graduation} · {education.location}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="tile p-6 flex flex-col justify-between gap-4"
          >
            <p className="text-text-muted text-sm font-medium">CGPA</p>
            <p className="text-4xl font-bold tracking-tight text-accent">
              {education.cgpa}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
