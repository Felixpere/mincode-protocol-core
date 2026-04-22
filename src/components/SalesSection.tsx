import { motion } from "framer-motion";

const SERVICES = [
  { title: "MIXING", desc: "Full mix from stems. Balanced, punchy, club-ready." },
  { title: "MASTERING", desc: "Loudness, clarity and format optimization for streaming and vinyl." },
  { title: "MIXING + MASTERING", desc: "Complete service from raw stems to final master." },
];

const SalesSection = () => {
  return (
    <section id="sales" className="py-24 px-6 md:px-16">
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-8 border-b border-border pb-4">
        MASTERING & MIXING
      </h2>

      <p className="text-sm md:text-base font-mono text-muted-foreground leading-relaxed max-w-3xl mb-12">
        Professional mastering and mixing services for electronic music. Mincode offers precision processing tailored to club and streaming formats — from techno and industrial to experimental and ambient. Every track treated with technical rigor and artistic sensitivity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-16">
        {SERVICES.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-background p-8"
            style={{ border: "1px solid #333333", borderRadius: 0 }}
          >
            <p className="text-xs font-mono tracking-[0.2em] text-primary mb-4">0{i + 1}</p>
            <h3 className="font-display text-2xl tracking-wider mb-4">{s.title}</h3>
            <p className="text-xs font-mono text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-border pt-12">
        <p className="text-xs font-mono tracking-[0.3em] mb-4" style={{ color: "#00F0FF" }}>
          GET IN TOUCH
        </p>
        <p className="text-sm font-mono text-muted-foreground mb-6">
          Send your project details, references and timeline to:
        </p>
        <p className="font-mono text-2xl md:text-4xl text-foreground mb-8 break-all">
          mincodeart@gmail.com
        </p>
        <a
          href="mailto:mincodeart@gmail.com"
          className="block w-full md:inline-block md:w-auto text-center px-8 py-4 text-xs font-mono tracking-[0.2em] crt-hover"
          style={{ backgroundColor: "#00F0FF", color: "#0A0A0A", borderRadius: 0 }}
        >
          SEND YOUR PROJECT →
        </a>
      </div>
    </section>
  );
};

export default SalesSection;
