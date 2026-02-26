import { motion } from "framer-motion";
import TextScramble from "./TextScramble";

const SHOWS = [
  { date: "2026.03.15", city: "BOGOTÁ", venue: "WAREHOUSE X" },
  { date: "2026.04.02", city: "BERLÍN", venue: "TRESOR" },
  { date: "2026.04.18", city: "MEDELLÍN", venue: "PLAZA MAYOR" },
  { date: "2026.05.10", city: "AMSTERDAM", venue: "SHELTER" },
  { date: "2026.06.01", city: "CALI", venue: "CLUB SUBTERRÁNEO" },
];

const FounderSection = () => {
  return (
    <section id="nicolás-cetina" className="py-24">
      {/* Full bleed portrait */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden border-b border-border">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(0 0% 6%), hsl(184 100% 47% / 0.04))",
          }}
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
            Nicolás Cetina es el arquitecto detrás de MINCODE. Desde 2017, ha construido un puente sonoro entre Colombia y Berlín, fusionando la intensidad del techno industrial con la energía cruda del underground latinoamericano.
          </p>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed">
            Su enfoque minimalista y su obsesión por el detalle sonoro han definido una identidad única dentro de la cultura de música electrónica. Cada producción, cada set, es un protocolo de resistencia.
          </p>
        </div>

        {/* Upcoming shows */}
        <div className="bg-background p-6 md:p-16">
          <p className="text-xs text-primary font-mono tracking-[0.3em] mb-6">UPCOMING SHOWS</p>
          <div className="divide-y divide-border">
            {SHOWS.map((show, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between py-3 crt-hover relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0 bg-accent group-hover:w-1 transition-all duration-200" />
                <div className="flex gap-4 md:gap-8 items-baseline pl-3">
                  <span className="text-sm font-mono text-foreground">{show.date}</span>
                  <span className="text-xs font-mono text-muted-foreground">{show.city}</span>
                  <span className="text-xs font-mono text-muted-foreground hidden sm:inline">{show.venue}</span>
                </div>
                <span className="text-xs font-mono text-accent tracking-wider group-hover:underline">
                  TICKETS →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
