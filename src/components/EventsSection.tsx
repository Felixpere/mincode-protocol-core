const EventsSection = () => {
  return (
    <section id="events" className="py-24 px-6 md:px-16">
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-12 border-b border-border pb-4">
        EVENTS
      </h2>

      <div className="flex flex-col items-center justify-center py-24 gap-8">
        <p className="font-mono text-sm md:text-base tracking-[0.2em] text-center" style={{ color: "#555555" }}>
          NO EVENTS SCHEDULED — CHECK BACK SOON
        </p>
        <a
          href="https://ra.co/dj/nicolascetina"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-foreground text-foreground px-8 py-4 text-xs font-mono tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors crt-hover"
          style={{ borderRadius: 0 }}
        >
          VIEW ON RESIDENT ADVISOR →
        </a>
      </div>
    </section>
  );
};

export default EventsSection;
