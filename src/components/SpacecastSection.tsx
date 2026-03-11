import { useState } from "react";
import { motion } from "framer-motion";

const VIDEOS = [
  { id: 1, title: "SPACE CAST FROM 95 ART GALLERY", youtubeId: "PCfheyPpECA" },
  { id: 2, title: "SPACE CAST FROM YELES, SPAIN", youtubeId: "Z4-FGQrWnK0" },
  { id: 3, title: "SPACE CAST FROM UN LUGAR DE LA MANCHA", youtubeId: "QtWPCzFmQNM" },
  { id: 4, title: "SPACE CAST FROM SECRET LOCATION MADRID", youtubeId: "XeyW1MFBYCA" },
];

const SpacecastSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);

  return (
    <section id="spacecast" className="py-24 px-6 md:px-16">
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-4 border-b border-border pb-4">
        SPACECAST
      </h2>
      <p className="text-sm text-muted-foreground font-mono leading-relaxed max-w-3xl mb-12">
        Spacecast is a series of audiovisual expeditions produced by Mincode, dedicated to the exploration of Techno and its dialogue with the urban environment. Inspired by the narrative of The Midnight Gospel, each episode acts as a portal into simultaneous realities where city architecture and sound design converge. This is not just a set; it is the creation of a world where the mind surrenders to the landscape and the frequency. A journey of total immersion between what you see and what you feel.
      </p>

      <div className="columns-1 sm:columns-2 gap-px space-y-px">
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
              style={{ aspectRatio: i % 2 === 0 ? "16/12" : "16/9" }}
            >
              {playingId === video.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={video.title}
                />
              ) : (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      hoveredId === video.id ? "" : "grayscale"
                    }`}
                  />
                  <button
                    onClick={() => setPlayingId(video.id)}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                      hoveredId === video.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="w-16 h-16 border-2 border-primary flex items-center justify-center bg-background/50">
                      <div className="w-0 h-0 border-l-[12px] border-l-primary border-y-[8px] border-y-transparent ml-1" />
                    </div>
                  </button>
                </>
              )}
            </div>

            <div className="p-4">
              <p className="font-display text-xs tracking-wider group-hover:text-primary transition-colors">
                {video.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://www.youtube.com/playlist?list=PLH8PEUhL8KC10awxBmM1SDyOjtTTtWhIR"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-mono text-sm tracking-[0.2em] text-primary border border-primary px-8 py-4 hover:bg-primary/10 transition-colors crt-hover"
        >
          VIEW FULL PLAYLIST →
        </a>
      </div>
    </section>
  );
};

export default SpacecastSection;
