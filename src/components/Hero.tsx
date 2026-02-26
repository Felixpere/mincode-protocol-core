import { motion } from "framer-motion";
import TextScramble from "./TextScramble";
import Marquee from "./Marquee";
import WaveformVisualizer from "./WaveformVisualizer";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Dark animated background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 100% / 0.03) 2px, hsl(0 0% 100% / 0.03) 4px)",
            animation: "scanline 8s linear infinite",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
            <TextScramble text="LA FRECUENCIA" delay={500} />
            <br />
            <TextScramble text="ABSOLUTA" delay={900} />
          </h1>

          <p className="text-primary font-mono text-sm md:text-base tracking-[0.15em] max-w-xl mb-6">
            <TextScramble
              text="Protocolo de resistencia sonora — Colombia × Berlín"
              delay={1400}
            />
          </p>

          <p className="text-muted-foreground font-mono text-xs md:text-sm leading-relaxed max-w-xl">
            Independent project founded in 2017 by Nicolás Cetina, focused on the development of club-oriented techno and the construction of a solid and coherent identity within electronic music culture.
          </p>
        </motion.div>
      </div>

      {/* Bottom section */}
      <div className="relative z-10 space-y-6 pb-8">
        <WaveformVisualizer />
        <Marquee />
      </div>
    </section>
  );
};

export default Hero;
