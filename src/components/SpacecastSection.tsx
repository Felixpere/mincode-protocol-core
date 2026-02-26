import { useState } from "react";
import { motion } from "framer-motion";

const VIDEOS = [
  { id: 1, title: "SPACECAST 047 — PROTOCOLO NOCTURNO", duration: "02:14:33" },
  { id: 2, title: "SPACECAST 046 — FRECUENCIA RESIDUAL", duration: "01:48:12" },
  { id: 3, title: "SPACECAST 045 — TRANSMISIÓN DIRECTA", duration: "01:55:07" },
  { id: 4, title: "SPACECAST 044 — SEÑAL SUBTERRÁNEA", duration: "02:02:45" },
  { id: 5, title: "SPACECAST 043 — CIRCUITO ABIERTO", duration: "01:32:19" },
  { id: 6, title: "SPACECAST 042 — CAMPO MAGNÉTICO", duration: "01:44:50" },
];

const SpacecastSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="spacecast" className="py-24 px-6 md:px-16">
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-12 border-b border-border pb-4">
        SPACECAST
      </h2>

      {/* Masonry-style staggered grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-px space-y-px">
        {VIDEOS.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredId(video.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="break-inside-avoid bg-card border border-border overflow-hidden group crt-hover"
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: i % 3 === 0 ? "16/12" : "16/9" }}
            >
              <div
                className={`w-full h-full transition-all duration-300 ${
                  hoveredId === video.id ? "" : "grayscale"
                }`}
                style={{
                  background: `linear-gradient(${135 + i * 25}deg, hsl(0 0% 10%), hsl(184 100% 47% / 0.06))`,
                }}
              />

              {/* Play button on hover */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                  hoveredId === video.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-16 h-16 border-2 border-primary flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[12px] border-l-primary border-y-[8px] border-y-transparent ml-1" />
                </div>
              </div>
            </div>

            <div className="p-4">
              <p className="font-display text-xs tracking-wider group-hover:text-primary transition-colors">
                {video.title}
              </p>
              <p className="text-[10px] font-mono text-muted-foreground mt-1">{video.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpacecastSection;
