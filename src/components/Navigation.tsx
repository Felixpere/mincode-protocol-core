import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextScramble from "./TextScramble";

const MENU_ITEMS = [
  { num: "01", label: "HOME" },
  { num: "02", label: "MUSIC" },
  { num: "03", label: "RADIO" },
  { num: "04", label: "VIDEOS" },
  { num: "05", label: "FOUNDER" },
  { num: "06", label: "ARTISTS" },
  { num: "07", label: "MERCH" },
  { num: "08", label: "NEWS" },
  { num: "09", label: "SUBSCRIBE" },
  { num: "10", label: "DEMO" },
  { num: "11", label: "BOOKINGS" },
  { num: "12", label: "SALES" },
  { num: "13", label: "EXCLUSIVE" },
];

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (label: string) => {
    setIsOpen(false);
    onNavigate?.(label.toLowerCase());
  };

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[10001] flex flex-col gap-1.5 p-2 crt-hover"
        aria-label="Menu"
      >
        <motion.span
          className="block w-7 h-px bg-foreground"
          animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block w-7 h-px bg-foreground"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.1 }}
        />
        <motion.span
          className="block w-7 h-px bg-foreground"
          animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
      </button>

      {/* Logo */}
      <div className="fixed top-6 left-6 z-[10001]">
        <span className="font-display text-lg tracking-[0.2em] text-foreground">
          MINCODE
        </span>
      </div>

      {/* Full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10000] bg-background flex items-center"
          >
            <div className="w-full px-6 md:px-16 py-20 overflow-y-auto max-h-screen">
              {MENU_ITEMS.map((item, i) => (
                <motion.button
                  key={item.num}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  onClick={() => handleClick(item.label)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="block w-full text-left py-1 md:py-2 group crt-hover"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-xs md:text-sm text-muted-foreground font-mono">
                      {item.num}
                    </span>
                    <span
                      className={`font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight transition-colors duration-150 ${
                        hoveredIndex === i ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {hoveredIndex === i ? (
                        <TextScramble text={item.label} delay={0} />
                      ) : (
                        item.label
                      )}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
