import { useState } from "react";
import { motion } from "framer-motion";
import cover085 from "@/assets/covers/min085.png";
import cover084 from "@/assets/covers/min084.png";
import cover083 from "@/assets/covers/min083.jpg";
import cover082 from "@/assets/covers/min082.png";
import cover081 from "@/assets/covers/min081.png";
import cover080 from "@/assets/covers/min080.png";
import cover079 from "@/assets/covers/min079.png";

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
    cover: cover084,
  },
  {
    id: 2,
    catalog: "MIN083",
    title: "NC.28.29.01",
    artist: "Nicolás Cetina",
    type: "EP",
    year: "2025",
    url: "https://mincode.bandcamp.com/album/min083-nicolas-cetina-nc-282901",
    cover: cover083,
  },
  {
    id: 3,
    catalog: "MIN082",
    title: "Tiempos Olvidados",
    artist: "MURK.HYBRID",
    type: "EP",
    year: "2025",
    url: "https://mincode.bandcamp.com/album/min082-murk-hybrid-tiempos-olvidados",
    cover: cover082,
  },
  {
    id: 4,
    catalog: "MIN081",
    title: "Film Camera",
    artist: "Nicko Shuo",
    type: "EP",
    year: "2025",
    url: "https://mincode.bandcamp.com/album/min081-nicko-shuo-film-camera",
    cover: cover081,
  },
  {
    id: 5,
    catalog: "MIN080",
    title: "Telepatia",
    artist: "Nicolás Cetina",
    type: "EP",
    year: "2024",
    url: "https://mincode.bandcamp.com/album/min080-nicolas-cetina-telepatia",
    cover: cover080,
  },
  {
    id: 6,
    catalog: "MIN079",
    title: "La Señal Negra",
    artist: "Isgang",
    type: "EP",
    year: "2024",
    url: "https://mincode.bandcamp.com/album/min079-isgang-la-se-al-negra",
    cover: cover079,
  },
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

      {/* Featured MIN085 */}
      <motion.a
        href="https://mincode.bandcamp.com/album/min085-various-artists-abracadabra"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="block mb-px bg-background border border-border p-6 md:p-10 group crt-hover relative overflow-hidden"
      >
        <span
          className="absolute top-4 right-4 z-10 text-[10px] md:text-xs font-mono tracking-[0.2em] px-3 py-1.5"
          style={{ backgroundColor: "#FF3C00", color: "#0A0A0A" }}
        >
          COMING APRIL 28
        </span>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square bg-muted overflow-hidden relative">
            <img
              src={cover085}
              alt="MIN085 — Various Artists: Abracadabra"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 border border-border group-hover:border-primary transition-colors" />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-mono tracking-[0.2em] text-primary">MIN085 — FEATURED</p>
            <h3 className="font-display text-3xl md:text-5xl tracking-tight">ABRACADABRA</h3>
            <p className="text-sm font-mono text-muted-foreground">VARIOUS ARTISTS</p>
            <p className="text-xs font-mono text-muted-foreground">RELEASE DATE — APRIL 28, 2026</p>
            <span className="inline-block pt-4 text-xs font-mono tracking-[0.2em] text-accent group-hover:text-primary transition-colors">
              LISTEN →
            </span>
          </div>
        </div>
      </motion.a>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {filtered.map((release, i) => (
          <motion.a
            key={release.id}
            href={release.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-background p-6 group crt-hover block border border-[#333333] hover:border-primary transition-colors"
          >
            <div className="aspect-square bg-muted overflow-hidden relative mb-4">
              <img
                src={release.cover}
                alt={`${release.catalog} — ${release.title}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-border group-hover:border-primary transition-colors" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-mono tracking-[0.15em]" style={{ color: "#00F0FF" }}>{release.catalog}</p>
              <p className="font-display text-lg tracking-wider text-white">{release.title}</p>
              <p className="text-xs text-muted-foreground font-mono">{release.artist}</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-muted-foreground">{release.year}</span>
                <span className="text-xs font-mono" style={{ color: "#00F0FF" }}>{release.type}</span>
              </div>
              <span className="block pt-3 text-xs font-mono tracking-[0.15em] text-accent group-hover:text-primary transition-colors">
                LISTEN →
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="https://mincode.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-foreground text-foreground px-8 py-4 text-xs font-mono tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors crt-hover"
          style={{ borderRadius: 0 }}
        >
          VIEW ALL ON BANDCAMP →
        </a>
      </div>
    </section>
  );
};

export default MusicSection;
