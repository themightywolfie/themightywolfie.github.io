import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import { useMotionVariants } from "../lib/animations";
import { certifications, contact, experience, hero } from "../lib/data";
import TechPill from "./TechPill";

export default function Hero() {
  const { fadeUp, staggerContainer } = useMotionVariants();
  const current = experience[0];
  const credential = certifications.find((cert) => cert.featured);

  return (
    <section className="pt-28 pb-12 md:pt-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {/* Intro */}
        <motion.div
          variants={fadeUp}
          className="tile md:col-span-2 md:row-span-2 p-8 md:p-10 flex flex-col justify-between gap-10"
        >
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {hero.title}
              </p>
              {credential && (
                <a
                  href={credential.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary hover:border-accent/40 hover:text-accent transition-colors"
                >
                  <BadgeCheck size={14} className="text-accent" />
                  {credential.name}
                </a>
              )}
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
              {hero.name}
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-lg">
              {hero.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-strong transition-colors"
            >
              View My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-3 bg-background text-text-primary text-sm font-medium rounded-full border border-border hover:border-accent/40 hover:text-accent transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          variants={fadeUp}
          className="tile md:col-span-1 md:row-span-2 overflow-hidden relative min-h-[360px]"
        >
          <img
            src="/profile.jpg"
            alt={`Portrait of ${hero.name}`}
            className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
          />
        </motion.div>

        {/* Current role */}
        <motion.a
          variants={fadeUp}
          href={`#experience-${current.id}`}
          className="tile p-6 flex flex-col justify-between gap-6 hover:border-accent/40 transition-colors"
        >
          <img
            src={current.logo}
            alt=""
            className="w-12 h-12 rounded-xl border border-border bg-white object-contain p-1.5"
          />
          <div>
            <p className="text-xs font-medium text-text-muted mb-1">Currently</p>
            <p className="font-semibold leading-snug">{current.role}</p>
            <p className="text-sm text-text-secondary">{current.company}</p>
          </div>
        </motion.a>

        {/* Availability */}
        <motion.div
          variants={fadeUp}
          className="rounded-[1.75rem] p-6 flex flex-col justify-between gap-6 text-white bg-gradient-to-br from-accent to-[#4c1d95] shadow-[0_8px_30px_rgba(124,58,237,0.25)]"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80">
            <MapPin size={14} />
            {current.location}
          </span>
          <div>
            <p className="text-lg font-semibold leading-snug mb-3">{contact.cta}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white"
            >
              Let's talk <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Core stack */}
        <motion.div
          variants={fadeUp}
          className="tile md:col-span-4 px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted shrink-0">
            Core stack
          </p>
          <div className="flex flex-wrap gap-2">
            {hero.techPills.map((tech) => (
              <TechPill key={tech} name={tech} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
