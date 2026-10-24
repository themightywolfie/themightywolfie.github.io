import { motion } from "framer-motion";
import { useMotionVariants } from "../lib/animations";

export default function SectionHeading({ children }: { children: string }) {
  const { fadeUp } = useMotionVariants();

  return (
    <motion.h2
      variants={fadeUp}
      className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-8"
    >
      {children}
      <span className="text-accent">.</span>
    </motion.h2>
  );
}
