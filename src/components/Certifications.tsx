import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Award, BadgeCheck } from "lucide-react";
import { useMotionVariants } from "../lib/animations";
import { certifications } from "../lib/data";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = certifications.filter((cert) => cert.featured);
  const others = certifications.filter((cert) => !cert.featured);

  return (
    <section id="certifications" className="py-12 md:py-16 scroll-mt-16">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <SectionHeading>Certifications</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {featured.map((cert) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="group relative overflow-hidden md:col-span-2 md:row-span-2 rounded-[1.75rem] p-8 flex flex-col justify-between gap-10 text-white bg-gradient-to-br from-accent via-accent-strong to-[#4c1d95] shadow-[0_12px_40px_rgba(124,58,237,0.25)]"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                  <BadgeCheck size={24} />
                </div>
                {cert.issued && (
                  <span className="px-3 py-1 rounded-full bg-white/15 text-xs font-medium">
                    Earned {cert.issued}
                  </span>
                )}
              </div>
              <div className="relative">
                <p className="text-white/75 text-sm font-medium mb-2">{cert.issuer}</p>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-3">
                  {cert.name}
                </h3>
                {cert.description && (
                  <p className="text-white/80 leading-relaxed mb-6">{cert.description}</p>
                )}
                <span className="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full bg-white text-accent-strong group-hover:bg-white/90 transition-colors">
                  Verify credential <ArrowUpRight size={16} />
                </span>
              </div>
            </motion.a>
          ))}

          {others.map((cert) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="tile group md:col-span-2 p-6 md:p-8 flex flex-col justify-between gap-6 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-2xl bg-accent-soft flex items-center justify-center shrink-0">
                  <Award size={20} className="text-accent" />
                </div>
                <span className="inline-flex items-center gap-0.5 text-sm font-medium text-text-muted group-hover:text-accent transition-colors">
                  Verify <ArrowUpRight size={14} />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-snug">{cert.name}</h3>
                <p className="text-text-muted text-sm mt-1">{cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
