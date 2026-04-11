import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionVariants } from "../lib/animations";
import { education } from "../lib/data";
import { Award } from "lucide-react";

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
      <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono font-bold text-[8px]">
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

export default function Education() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-surface">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.p variants={fadeUp} className="font-mono text-text-muted text-sm mb-12">
          {"// EDUCATION"}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="bg-card border border-accent/10 rounded-xl p-6 max-w-2xl"
        >
          <div className="flex items-start gap-4 mb-4">
            <LogoWithFallback
              src={education.logo}
              fallback={education.logoFallback}
              alt={education.institution}
            />
            <div>
              <h3 className="text-lg font-bold">{education.institution}</h3>
              <p className="text-accent font-mono text-sm">{education.degree}</p>
              <p className="text-text-muted text-xs mt-1">
                {education.graduation} · {education.location} · CGPA: {education.cgpa}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-accent/10">
            <div className="flex items-center gap-2 mb-3">
              <Award size={14} className="text-accent" />
              <p className="font-mono text-text-muted text-xs">Certifications</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 text-xs border border-accent/20 rounded-full text-text-secondary"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
