import { motion } from "framer-motion";

const EVENTS = [
  { date: "MAR 15", year: "2026", city: "BOGOTÁ", venue: "WAREHOUSE X", lineup: "KRVN · OXIDUM · VRTX", soldOut: false },
  { date: "APR 02", year: "2026", city: "BERLÍN", venue: "TRESOR", lineup: "NICOLÁS CETINA · DRKNSS", soldOut: true },
  { date: "APR 18", year: "2026", city: "MEDELLÍN", venue: "PLAZA MAYOR", lineup: "FRAGMENTO · KRVN · GUESTS", soldOut: false },
  { date: "MAY 10", year: "2026", city: "AMSTERDAM", venue: "SHELTER", lineup: "MINCODE SHOWCASE", soldOut: false },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 px-6 md:px-16">
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-12 border-b border-border pb-4">
        EVENTS
      </h2>

      <div className="divide-y divide-border">
        {EVENTS.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="relative py-6 md:py-8 group crt-hover"
          >
            {event.soldOut && (
              <div className="absolute inset-0 bg-destructive/10 flex items-center justify-center z-10">
                <span className="font-display text-2xl md:text-4xl text-destructive tracking-wider">SOLD OUT</span>
              </div>
            )}

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex-none w-24 md:w-32">
                <p className="font-display text-2xl md:text-3xl tracking-tight">{event.date}</p>
                <p className="text-xs font-mono text-muted-foreground">{event.year}</p>
              </div>

              <div className="flex-1">
                <p className="font-display text-lg tracking-wider">{event.city}</p>
                <p className="text-xs font-mono text-muted-foreground">{event.venue}</p>
              </div>

              <p className="text-xs font-mono text-muted-foreground flex-1">{event.lineup}</p>

              {!event.soldOut && (
                <motion.a
                  href="#"
                  whileHover={{ x: 4 }}
                  className="text-xs font-mono tracking-[0.2em] text-accent border border-accent px-6 py-3 hover:bg-accent/10 transition-colors crt-hover flex-none"
                >
                  GET TICKET →
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
