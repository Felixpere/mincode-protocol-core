import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ARTISTS = [
  { id: 1, name: "KRVN", origin: "BOGOTÁ, CO", bio: "Arquitecto del sonido oscuro. Sus sets de techno industrial han redefinido el underground colombiano desde 2019.", links: ["SoundCloud", "Resident Advisor"] },
  { id: 2, name: "OXIDUM", origin: "BERLÍN, DE", bio: "Productora y DJ. Fusiona texturas post-industriales con ritmos de percusión latina acelerada. Residente de Tresor.", links: ["Bandcamp", "Instagram"] },
  { id: 3, name: "VRTX", origin: "MEDELLÍN, CO", bio: "Hardware live act. Máquinas analógicas procesadas a través de cadenas de efectos destructivos.", links: ["SoundCloud", "YouTube"] },
  { id: 4, name: "DRKNSS", origin: "BOGOTÁ, CO", bio: "Explorador de frecuencias sub-bajas y diseño sonoro extremo. Cada set es una experiencia física.", links: ["Bandcamp", "SoundCloud"] },
  { id: 5, name: "FRAGMENTO", origin: "CALI, CO", bio: "Artista multidisciplinario. Performance audiovisual que integra noise, techno y arte generativo.", links: ["Instagram", "Bandcamp"] },
];

const ArtistsSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="artists" className="py-24 px-6 md:px-16">
      {/* Featured artist */}
      <div className="relative mb-16 h-[40vh] md:h-[50vh] overflow-hidden border border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(0 0% 8%), hsl(184 100% 47% / 0.05))",
          }}
        />
        <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12">
          <p className="text-xs text-primary font-mono tracking-[0.3em] mb-2">FEATURED ARTIST</p>
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight">KRVN</h2>
          <p className="text-sm text-muted-foreground font-mono mt-2">BOGOTÁ, CO — TECHNO INDUSTRIAL</p>
        </div>
      </div>

      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-8 border-b border-border pb-4">
        ARTISTS
      </h2>

      {/* Artist list */}
      <div className="divide-y divide-border">
        {ARTISTS.map((artist) => (
          <div key={artist.id}>
            <button
              onClick={() => setExpandedId(expandedId === artist.id ? null : artist.id)}
              className="w-full text-left py-4 md:py-6 flex items-center justify-between group crt-hover transition-colors hover:bg-muted/30"
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="text-xs text-muted-foreground font-mono w-6">
                  {String(artist.id).padStart(2, "0")}
                </span>
                <span className="font-display text-xl md:text-3xl tracking-tight group-hover:text-primary transition-colors">
                  {artist.name}
                </span>
              </div>
              <span className="text-xs text-muted-foreground font-mono hidden sm:block">
                {artist.origin}
              </span>
            </button>

            <AnimatePresence>
              {expandedId === artist.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pl-10 md:pl-[4.5rem] border-l-2 border-primary ml-3 md:ml-3">
                    <p className="text-sm text-muted-foreground font-mono leading-relaxed max-w-2xl mb-4">
                      {artist.bio}
                    </p>
                    <div className="flex gap-4">
                      {artist.links.map((link) => (
                        <span
                          key={link}
                          className="text-xs text-primary font-mono tracking-wider hover:underline"
                        >
                          {link} ↗
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistsSection;
