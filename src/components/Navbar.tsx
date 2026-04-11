import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Download } from "lucide-react";
import { navLinks } from "../lib/data";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-lg text-accent">
          SK
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/samaksh-khatri-cv.pdf"
          download
          className="flex items-center gap-2 text-sm px-4 py-2 border border-accent/30 rounded-lg text-accent hover:bg-accent/10 transition-colors"
        >
          <Download size={14} />
          <span className="hidden sm:inline">Download CV</span>
        </a>
      </div>
    </motion.nav>
  );
}
