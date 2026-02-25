const RadioSection = () => {
  return (
    <section id="radio" className="py-24 px-6 md:px-16">
      <div className="flex items-center gap-4 mb-12 border-b border-border pb-4">
        <h2 className="font-display text-3xl md:text-5xl tracking-tight">RADIO</h2>
        <div className="flex items-center gap-2 ml-auto">
          <span className="w-2 h-2 bg-destructive animate-pulse" />
          <span className="text-xs font-mono text-destructive tracking-wider">ON AIR</span>
        </div>
      </div>

      {/* Set cards horizontal scroll */}
      <div className="flex gap-px overflow-x-auto pb-4 -mx-6 px-6 md:-mx-16 md:px-16 scrollbar-hide">
        {[
          { title: "PROTOCOLO NOCTURNO 047", artist: "KRVN", duration: "02:14:33" },
          { title: "FRECUENCIA RESIDUAL", artist: "OXIDUM", duration: "01:48:12" },
          { title: "TRANSMISIÓN DIRECTA", artist: "VRTX", duration: "01:55:07" },
          { title: "SEÑAL SUBTERRÁNEA", artist: "DRKNSS", duration: "02:02:45" },
          { title: "CIRCUITO ABIERTO", artist: "FRAGMENTO", duration: "01:32:19" },
        ].map((set, i) => (
          <div
            key={i}
            className="flex-none w-72 md:w-80 bg-card border border-border p-6 crt-hover group"
          >
            <div className="aspect-video bg-muted mb-4 relative overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(${180 + i * 40}deg, hsl(0 0% 10%), hsl(184 100% 47% / 0.08))`,
                }}
              />
            </div>
            <p className="font-display text-sm tracking-wider mb-1 group-hover:text-primary transition-colors">
              {set.title}
            </p>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground font-mono">{set.artist}</span>
              <span className="text-xs text-muted-foreground font-mono">{set.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RadioSection;
