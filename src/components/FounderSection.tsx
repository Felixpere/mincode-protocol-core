import { motion } from "framer-motion";
import TextScramble from "./TextScramble";
import nicolasImg from "@/assets/nicolas-cetina.jpg";

const FounderSection = () => {
  return (
    <section id="nicolás-cetina" className="py-24">
      {/* Full bleed portrait */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden border-b border-border">
        <img
          src={nicolasImg}
          alt="Nicolás Cetina"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight"
          >
            <TextScramble text="NICOLÁS CETINA" delay={200} />
          </motion.h2>
        </div>
      </div>

      {/* Bio + Shows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mt-px">
        {/* Bio */}
        <div className="bg-background p-6 md:p-16">
          <p className="text-xs text-primary font-mono tracking-[0.3em] mb-6">BIO</p>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-4">
            Nicolás Cetina is the sound architect behind Mincode. His sound has conquered the most demanding temples of the global circuit: from the legendary Tresor in Berlin and the historic Moog in Barcelona, to the industrial Venue MOT in London. His career spans across key stages in Europe and the Americas, including the world's capital, New York City, and his native Colombia.
          </p>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed">
            Validated by the industry in 2020, Cetina was awarded Best Breakthrough Techno Producer in Colombia. That same year, his technical prowess earned international acclaim by winning the Remix Contest for MATERIA, the prestigious label owned by the legend Marco Bailey.
          </p>
        </div>

        {/* Upcoming shows */}
        <div className="bg-background p-6 md:p-16">
          <p className="text-xs text-primary font-mono tracking-[0.3em] mb-6">UPCOMING SHOWS</p>
          <div className="flex items-center justify-center h-32">
            <p className="font-mono text-sm tracking-[0.2em] text-muted-foreground" style={{ color: "hsl(0 0% 33%)" }}>
              NO SIGNAL YET — PRÓXIMAMENTE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
