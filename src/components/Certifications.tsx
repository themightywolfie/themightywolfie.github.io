import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award } from "lucide-react";
import { useMotionVariants } from "../lib/animations";
import { certifications } from "../lib/data";

export default function Certifications() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.h2
          variants={fadeUp}
          className="font-mono text-text-primary text-2xl mb-12"
        >
          {"// CERTIFICATIONS"}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={fadeUp}
              className="bg-card border border-accent/10 rounded-xl p-5 flex items-start gap-3 hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <Award size={18} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-text-primary">
                  {cert.name}
                </h3>
                <p className="text-text-muted font-mono text-xs mt-1">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
