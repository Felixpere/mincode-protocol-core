import { useEffect, useState, useCallback } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

const TextScramble = ({ text, className = "", delay = 0 }: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const target = text.toUpperCase();
    const interval = setInterval(() => {
      setDisplayText(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return target[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration += 1 / 2;
      if (iteration >= target.length) {
        clearInterval(interval);
        setDisplayText(target);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
      scramble();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, scramble]);

  if (!started) return <span className={className}>&nbsp;</span>;

  return <span className={className}>{displayText}</span>;
};

export default TextScramble;
