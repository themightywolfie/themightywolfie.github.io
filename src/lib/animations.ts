import { useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

export function useMotionVariants() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: Variants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      };

  const staggerContainer: Variants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      };

  const scaleOnHover = shouldReduceMotion
    ? {}
    : {
        whileHover: {
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        },
      };

  return { fadeUp, staggerContainer, scaleOnHover };
}
