import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [typedText, setTypedText] = useState("");

  const confirmMsg = "> CONEXIÓN ESTABLECIDA. PROTOCOLO ACTIVO. SEÑAL RECIBIDA.";

  useEffect(() => {
    if (!submitted) return;
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(confirmMsg.slice(0, i + 1));
      i++;
      if (i >= confirmMsg.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [submitted]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <footer className="border-t border-border">
      {/* SUBSCRIBE */}
      <div id="subscribe" className="py-16 px-6 md:px-16 border-b border-border">
        <p className="text-xs text-primary font-mono tracking-[0.3em] mb-8">SUBSCRIBE</p>
        <div className="max-w-2xl">
          {!submitted ? (
            <form onSubmit={handleSubscribe} className="space-y-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL@PROTOCOLO.COM"
                required
                className="w-full bg-transparent border-b border-border py-4 text-lg font-mono tracking-wider text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ x: 4 }}
                className="font-mono text-sm tracking-[0.2em] text-primary border border-primary px-8 py-4 hover:bg-primary/10 transition-colors crt-hover"
              >
                CONECTAR AL PROTOCOLO →
              </motion.button>
            </form>
          ) : (
            <div className="font-mono text-sm text-primary tracking-wider">
              {typedText}
              <span className="animate-pulse">█</span>
            </div>
          )}
        </div>
      </div>

      {/* DEMO & BOOKINGS */}
      <div id="demo-bookings" className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
        {/* Demo / General Info */}
        <div className="py-16 px-6 md:px-16">
          <p className="text-xs text-primary font-mono tracking-[0.3em] mb-2">DEMO / GENERAL INFO</p>
          <p className="text-xs font-mono text-muted-foreground mb-8">mincodeart@gmail.com</p>
          <form className="space-y-4">
            <input
              placeholder="NAME"
              className="w-full bg-transparent border-b border-border py-3 text-sm font-mono tracking-wider text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              placeholder="TRACK LINK"
              className="w-full bg-transparent border-b border-border py-3 text-sm font-mono tracking-wider text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="MESSAGE"
              rows={3}
              className="w-full bg-transparent border-b border-border py-3 text-sm font-mono tracking-wider text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button className="font-mono text-xs tracking-[0.2em] text-foreground border border-border px-6 py-3 hover:border-primary hover:text-primary transition-colors crt-hover">
              SEND →
            </button>
          </form>
        </div>

        {/* Bookings */}
        <div className="py-16 px-6 md:px-16">
          <p className="text-xs text-primary font-mono tracking-[0.3em] mb-2">BOOKINGS</p>
          <p className="text-xs font-mono text-muted-foreground mb-8">mincodebookings@gmail.com</p>
          <form className="space-y-4">
            <input
              placeholder="NAME"
              className="w-full bg-transparent border-b border-border py-3 text-sm font-mono tracking-wider text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              placeholder="EVENT"
              className="w-full bg-transparent border-b border-border py-3 text-sm font-mono tracking-wider text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="date"
              placeholder="DATE"
              className="w-full bg-transparent border-b border-border py-3 text-sm font-mono tracking-wider text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="MESSAGE"
              rows={3}
              className="w-full bg-transparent border-b border-border py-3 text-sm font-mono tracking-wider text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button className="font-mono text-xs tracking-[0.2em] text-foreground border border-border px-6 py-3 hover:border-primary hover:text-primary transition-colors crt-hover">
              SEND →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-8 px-6 md:px-16 border-t border-border">
        <p className="text-xs font-mono text-muted-foreground text-center tracking-[0.15em] italic mb-4" style={{ color: "hsl(0 0% 33%)" }}>
          Minimalismo como disciplina. Oscuridad como lienzo. Repetición como mantra.
        </p>
        <p className="text-[10px] font-mono text-muted-foreground text-center tracking-wider">
          MINCODE © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
