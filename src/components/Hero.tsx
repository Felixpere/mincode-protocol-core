import { motion } from "framer-motion";
import TextScramble from "./TextScramble";
import Marquee from "./Marquee";
import nicolasImg from "@/assets/nicolas-cetina.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Full-bleed photo background */}
      <div className="absolute inset-0">
        <img
          src={nicolasImg}
          alt="Nicolás Cetina"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "hsla(0, 0%, 4%, 0.5)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
            <TextScramble text="TECHNO" delay={500} />
            <br />
            <TextScramble text="CONCEPT" delay={900} />
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
      <div className="relative z-10 pb-8">
        <Marquee />
      </div>
    </section>
  );
};

export default Hero;
