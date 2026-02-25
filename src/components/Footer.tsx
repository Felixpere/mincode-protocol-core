const Footer = () => {
  const navLinks = ["MUSIC", "ARTISTS", "RADIO", "SALES", "SUBSCRIBE"];

  return (
    <footer className="border-t border-border py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo */}
        <span className="font-display text-lg tracking-[0.2em]">MINCODE</span>

        {/* Nav */}
        <div className="flex flex-wrap gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-mono text-muted-foreground tracking-wider hover:text-primary transition-colors crt-hover"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="flex gap-4">
          {["SC", "IG", "RA", "BC"].map((s) => (
            <span
              key={s}
              className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors crt-hover"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-xs font-mono text-muted-foreground text-center tracking-[0.15em]">
          Minimalismo como disciplina. Oscuridad como lienzo. Repetición como mantra.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
