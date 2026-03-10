const EventsSection = () => {
  return (
    <section id="events" className="py-24 px-6 md:px-16">
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-12 border-b border-border pb-4">
        EVENTS
      </h2>

      <div className="flex items-center justify-center py-24">
        <p className="font-display text-xl md:text-3xl tracking-wider text-muted-foreground text-center" style={{ color: "hsl(0 0% 20%)" }}>
          NO EVENTS SCHEDULED — CHECK BACK SOON
        </p>
      </div>
    </section>
  );
};

export default EventsSection;
