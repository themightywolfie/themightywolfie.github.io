import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionVariants } from "../lib/animations";
import { contact } from "../lib/data";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.p variants={fadeUp} className="font-mono text-text-muted text-sm mb-12">
          {"// CONTACT"}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="bg-card border border-accent/10 rounded-xl p-8 max-w-xl mx-auto text-center"
        >
          <p className="text-text-secondary text-lg mb-8">{contact.cta}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">Email Me</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-colors"
            >
              <Linkedin size={16} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-colors"
            >
              <Github size={16} />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
