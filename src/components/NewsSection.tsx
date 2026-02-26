import { motion } from "framer-motion";

const ARTICLES = [
  { title: "MINCODE ANUNCIA NUEVA COMPILACIÓN VA", source: "MINCODE", date: "2026.02.20", excerpt: "La compilación reúne 12 tracks de artistas del sello, explorando los límites del techno industrial." },
  { title: "NICOLÁS CETINA: EL ARQUITECTO DEL SONIDO OSCURO", source: "DJ MAG", date: "2026.02.10", excerpt: "Entrevista exclusiva con el fundador de MINCODE sobre su visión del techno y la escena colombiana." },
  { title: "MINCODE SHOWCASE @ TRESOR BERLÍN", source: "RA", date: "2026.01.28", excerpt: "Review del evento que marcó la presencia del sello colombiano en el templo del techno berlinés." },
  { title: "KRVN DEBUTA CON EP EN MINCODE", source: "MINCODE", date: "2026.01.15", excerpt: "PROTOCOLO 001 marca el inicio de una nueva era para el sello con cuatro tracks de puro techno crudo." },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-24 px-6 md:px-16">
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-12 border-b border-border pb-4">
        NEWS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {ARTICLES.map((article, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-background p-6 group crt-hover relative"
          >
            {/* Source badge */}
            <span
              className={`absolute top-6 right-6 text-[10px] font-mono tracking-wider px-2 py-1 border ${
                article.source === "MINCODE"
                  ? "border-primary text-primary"
                  : "border-muted-foreground text-muted-foreground"
              }`}
            >
              {article.source}
            </span>

            <p className="text-xs font-mono text-muted-foreground mb-3">{article.date}</p>
            <h3 className="font-display text-lg tracking-wider mb-3 group-hover:text-primary transition-colors pr-20">
              {article.title}
            </h3>
            <p className="text-xs font-mono text-muted-foreground leading-relaxed mb-4">
              {article.excerpt}
            </p>
            <span className="text-xs font-mono text-primary tracking-wider group-hover:underline">
              READ →
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
