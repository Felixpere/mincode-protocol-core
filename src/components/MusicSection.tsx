import { useState } from "react";
import { motion } from "framer-motion";

const FILTERS = ["ALL", "EPs", "VA"];

const RELEASES = [
  { id: 1, title: "PROTOCOLO 001", artist: "KRVN", type: "EP", year: "2025" },
  { id: 2, title: "FRECUENCIA NULA", artist: "OXIDUM", type: "VA", year: "2025" },
  { id: 3, title: "TENSIÓN DIRECTA", artist: "MINCODE", type: "EP", year: "2024" },
  { id: 4, title: "SEÑAL ROTA", artist: "VRTX", type: "EP", year: "2024" },
  { id: 5, title: "CIRCUITO MUERTO", artist: "DRKNSS", type: "VA", year: "2024" },
  { id: 6, title: "RUIDO INDUSTRIAL", artist: "FRAGMENTO", type: "EP", year: "2024" },
];

const MusicSection = () => {
  const [filter, setFilter] = useState("ALL");

  const filtered = filter === "ALL"
    ? RELEASES
    : RELEASES.filter(r => {
        if (filter === "EPs") return r.type === "EP";
        if (filter === "VA") return r.type === "VA";
        return true;
      });

  return (
    <section id="releases" className="py-24 px-6 md:px-16">
      <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
        <h2 className="font-display text-3xl md:text-5xl tracking-tight">RELEASES</h2>
        <div className="flex gap-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-xs font-mono tracking-wider border transition-colors crt-hover ${
                filter === f
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {filtered.map((release, i) => (
          <motion.div
            key={release.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-background p-6 group crt-hover"
          >
            <div className="aspect-square bg-muted mb-4 overflow-hidden relative">
              <div
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                style={{
                  background: `linear-gradient(${135 + i * 30}deg, hsl(0 0% 15%), hsl(0 0% 8%))`,
                }}
              />
              <div className="absolute inset-0 border border-border group-hover:border-primary transition-colors" />
            </div>

            <div className="space-y-1">
              <p className="font-display text-sm tracking-wider">{release.title}</p>
              <p className="text-xs text-muted-foreground font-mono">{release.artist}</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-muted-foreground">{release.year}</span>
                <span className="text-xs text-primary font-mono">{release.type}</span>
              </div>
              <a
                href="https://mincode.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block pt-3 text-xs font-mono tracking-[0.15em] text-accent hover:text-primary transition-colors"
              >
                LISTEN ON BANDCAMP →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
