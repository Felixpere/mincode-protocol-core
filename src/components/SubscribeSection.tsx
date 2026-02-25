import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SubscribeSection = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section id="subscribe" className="py-24 px-6 md:px-16">
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-12 border-b border-border pb-4">
        SUBSCRIBE
      </h2>

      <div className="max-w-2xl mx-auto py-12">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL@PROTOCOLO.COM"
                required
                className="w-full bg-transparent border-b border-border py-4 text-lg font-mono tracking-wider text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
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
    </section>
  );
};

export default SubscribeSection;
