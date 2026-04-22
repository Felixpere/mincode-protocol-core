import { motion } from "framer-motion";

const ITEMS = [
  {
    label: "LATEST RELEASE",
    title: "MIN085 — VARIOUS ARTISTS: ABRACADABRA",
    subtitle: "COMING APRIL 28",
    section: "releases",
    href: "https://mincode.bandcamp.com/album/min085-various-artists-abracadabra",
    badge: true,
  },
  {
    label: "LATEST ARTIST",
    title: "KRVN",
    subtitle: "BOGOTÁ, CO",
    section: "artists",
  },
  {
    label: "LATEST PODCAST",
    title: "SPACECAST 047",
    subtitle: "PROTOCOLO NOCTURNO",
    section: "radio",
  },
];

const LatestStrip = () => {
  return (
    <section className="border-y border-border">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {ITEMS.map((item, i) => (
          <motion.a
            key={i}
            href={(item as any).href || `#${item.section}`}
            target={(item as any).href ? "_blank" : undefined}
            rel={(item as any).href ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group p-6 md:p-8 flex gap-4 items-center crt-hover relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-0 bg-primary group-hover:w-1 transition-all duration-200" />

            <div className="w-16 h-16 flex-none bg-muted" />

            <div className="min-w-0">
              <p className="text-[10px] font-mono text-primary tracking-[0.3em] mb-1">{item.label}</p>
              <p className="font-display text-sm tracking-wider group-hover:text-primary transition-colors">{item.title}</p>
              {(item as any).badge ? (
                <span className="inline-block mt-1 text-[10px] font-mono tracking-[0.2em] px-2 py-0.5" style={{ backgroundColor: "#FF3C00", color: "#0A0A0A" }}>
                  {item.subtitle}
                </span>
              ) : (
                <p className="text-xs font-mono text-muted-foreground">{item.subtitle}</p>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default LatestStrip;
