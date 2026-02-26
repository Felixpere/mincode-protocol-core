const PlaylistSection = () => {
  return (
    <section id="playlist" className="py-24 px-6 md:px-16">
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-12 border-b border-border pb-4">
        MINCODE PLAYLIST
      </h2>

      <div className="w-full border border-border">
        <iframe
          style={{ borderRadius: 0 }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXa8NOEUWPn9W?utm_source=generator&theme=0"
          width="100%"
          height="480"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="bg-background"
        />
      </div>
    </section>
  );
};

export default PlaylistSection;
