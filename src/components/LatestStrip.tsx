import { motion } from "framer-motion";

const ITEMS = [
  {
    label: "LATEST RELEASE",
    title: "PROTOCOLO 001",
    subtitle: "KRVN",
    section: "releases",
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
            href={`#${item.section}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group p-6 md:p-8 flex gap-4 items-center crt-hover relative overflow-hidden"
          >
            {/* Hover border */}
            <div className="absolute left-0 top-0 bottom-0 w-0 bg-primary group-hover:w-1 transition-all duration-200" />

            {/* Placeholder thumbnail */}
            <div className="w-16 h-16 flex-none bg-muted" />

            <div>
              <p className="text-[10px] font-mono text-primary tracking-[0.3em] mb-1">{item.label}</p>
              <p className="font-display text-sm tracking-wider group-hover:text-primary transition-colors">{item.title}</p>
              <p className="text-xs font-mono text-muted-foreground">{item.subtitle}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default LatestStrip;
