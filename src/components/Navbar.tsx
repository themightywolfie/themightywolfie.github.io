import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Download, Loader2 } from "lucide-react";
import { downloadCv } from "../cv/downloadCv";
import { navLinks } from "../lib/data";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleDownload = async () => {
    setGenerating(true);
    try {
      await downloadCv();
    } catch (error) {
      console.error("Failed to generate CV", error);
    } finally {
      setGenerating(false);
    }
  };
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
      className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-xl backdrop-saturate-150 border-b border-border/70"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent text-white font-bold text-sm"
          aria-label="Back to top"
        >
          SK
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={generating}
          aria-label="Download CV as PDF"
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-text-primary text-white hover:bg-accent disabled:opacity-70 disabled:cursor-wait transition-colors cursor-pointer"
        >
          {generating ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
          <span className="hidden sm:inline">{generating ? "Preparing…" : "Download CV"}</span>
        </button>
      </div>
    </motion.nav>
  );
}
