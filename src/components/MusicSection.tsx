import { useState } from "react";
import { motion } from "framer-motion";

const FILTERS = ["ALL", "EPs", "VA"];

const RELEASES = [
  {
    id: 1,
    catalog: "MIN084",
    title: "Oscuro Recuerdo EP",
    artist: "R1TON",
    type: "EP",
    year: "2025",
    url: "https://mincode.bandcamp.com/album/min084-r1ton-oscuro-recuerdo-ep",
    cover: "https://f4.bcbits.com/img/a0746244640_16.jpg",
  },
  {
    id: 2,
    catalog: "MIN083",
    title: "NC.28.29.01",
    artist: "Nicolás Cetina",
    type: "EP",
    year: "2025",
    url: "https://mincode.bandcamp.com/album/min083-nicolas-cetina-nc-282901",
    cover: "https://f4.bcbits.com/img/a3aborede_16.jpg",
  },
  {
    id: 3,
    catalog: "MIN082",
    title: "Tiempos Olvidados",
    artist: "MURK.HYBRID",
    type: "EP",
    year: "2025",
    url: "https://mincode.bandcamp.com/album/min082-murk-hybrid-tiempos-olvidados",
    cover: "https://f4.bcbits.com/img/a1234567890_16.jpg",
  },
  {
    id: 4,
    catalog: "MIN081",
    title: "Film Camera",
    artist: "Nicko Shuo",
    type: "EP",
    year: "2025",
    url: "https://mincode.bandcamp.com/album/min081-nicko-shuo-film-camera",
    cover: "https://f4.bcbits.com/img/a1234567891_16.jpg",
  },
  {
    id: 5,
    catalog: "MIN080",
    title: "Telepatia",
    artist: "Nicolás Cetina",
    type: "EP",
    year: "2024",
    url: "https://mincode.bandcamp.com/album/min080-nicolas-cetina-telepatia",
    cover: "https://f4.bcbits.com/img/a1234567892_16.jpg",
  },
  {
    id: 6,
    catalog: "MIN079",
    title: "La Señal Negra",
    artist: "Isgang",
    type: "EP",
    year: "2024",
    url: "https://mincode.bandcamp.com/album/min079-isgang-la-se-al-negra",
    cover: "https://f4.bcbits.com/img/a1234567893_16.jpg",
  },
];

const MusicSection = () => {
  const [filter, setFilter] = useState("ALL");
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

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
              {!imgErrors[release.id] ? (
                <img
                  src={release.cover}
                  alt={release.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={() => setImgErrors(prev => ({ ...prev, [release.id]: true }))}
                />
              ) : (
                <div
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                  style={{
                    background: `linear-gradient(${135 + i * 30}deg, hsl(0 0% 15%), hsl(0 0% 8%))`,
                  }}
                />
              )}
              <div className="absolute inset-0 border border-border group-hover:border-primary transition-colors" />
            </div>

            <div className="space-y-1">
              <p className="text-xs font-mono tracking-[0.15em] text-primary">{release.catalog}</p>
              <p className="font-display text-sm tracking-wider text-foreground">{release.title}</p>
              <p className="text-xs text-muted-foreground font-mono">{release.artist}</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-muted-foreground">{release.year}</span>
                <span className="text-xs text-primary font-mono">{release.type}</span>
              </div>
              <a
                href={release.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block pt-3 text-xs font-mono tracking-[0.15em] text-accent hover:text-primary transition-colors"
              >
                LISTEN →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
