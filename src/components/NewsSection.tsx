import { motion } from "framer-motion";

const ARTICLES = [
  {
    title: "MIN085 — VARIOUS ARTISTS: ABRACADABRA — OUT APRIL 28",
    source: "MINCODE",
    date: "2026.04.28",
    excerpt: "The latest Mincode compilation arrives April 28. Various Artists, one frequency.",
    url: "https://mincode.bandcamp.com/album/min085-various-artists-abracadabra",
  },
  {
    title: "NICOLÁS CETINA — DJ MAG LA",
    source: "DJ MAG",
    date: "2026.03.15",
    excerpt: "Featured profile in DJ Mag Latin America covering Mincode's trajectory and vision.",
    url: "https://djmagla.com/presente-nicolas-cetina",
  },
  { title: "MINCODE ANUNCIA NUEVA COMPILACIÓN VA", source: "MINCODE", date: "2026.02.20", excerpt: "La compilación reúne 12 tracks de artistas del sello, explorando los límites del techno industrial.", url: "#" },
  { title: "NICOLÁS CETINA: EL ARQUITECTO DEL SONIDO OSCURO", source: "DJ MAG", date: "2026.02.10", excerpt: "Entrevista exclusiva con el fundador de MINCODE sobre su visión del techno y la escena colombiana.", url: "#" },
  { title: "MINCODE SHOWCASE @ TRESOR BERLÍN", source: "RA", date: "2026.01.28", excerpt: "Review del evento que marcó la presencia del sello colombiano en el templo del techno berlinés.", url: "#" },
  { title: "KRVN DEBUTA CON EP EN MINCODE", source: "MINCODE", date: "2026.01.15", excerpt: "PROTOCOLO 001 marca el inicio de una nueva era para el sello con cuatro tracks de puro techno crudo.", url: "#" },
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
              className="absolute top-6 right-6 text-[10px] font-mono tracking-wider px-2 py-1 border"
              style={
                article.source === "MINCODE"
                  ? { borderColor: "hsl(var(--primary))", color: "hsl(var(--primary))" }
                  : article.source === "DJ MAG"
                  ? { borderColor: "#FF3C00", color: "#FF3C00" }
                  : { borderColor: "hsl(var(--muted-foreground))", color: "hsl(var(--muted-foreground))" }
              }
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
            <a
              href={article.url}
              target={article.url.startsWith("http") ? "_blank" : undefined}
              rel={article.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-xs font-mono text-primary tracking-wider group-hover:underline"
            >
              READ →
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
