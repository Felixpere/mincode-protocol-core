const RadioSection = () => {
  return (
    <section id="radio" className="py-24 px-6 md:px-16">
      <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
        <h2 className="font-display text-3xl md:text-5xl tracking-tight">RADIO</h2>
        <div className="flex items-center gap-2 ml-auto">
          <span className="w-2 h-2 bg-destructive animate-pulse" />
          <span className="text-xs font-mono text-destructive tracking-wider">ON AIR</span>
        </div>
      </div>

      <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">RADIO</p>

      <div className="w-full border border-border">
        <iframe
          width="100%"
          height="450"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/cetinaofficial&color=%2300f0ff&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
          title="Cetina Official on SoundCloud"
        />
      </div>

      <a
        href="https://soundcloud.com/cetinaofficial"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-xs font-mono tracking-[0.2em] text-primary hover:underline"
      >
        FOLLOW ON SOUNDCLOUD →
      </a>
    </section>
  );
};

export default RadioSection;
