import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      // Create trail dot
      const trail = document.createElement("div");
      trail.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 4px;
        height: 4px;
        background: #00F0FF;
        pointer-events: none;
        z-index: 9998;
        opacity: 0.6;
        transition: opacity 0.5s ease-out;
      `;
      document.body.appendChild(trail);
      requestAnimationFrame(() => {
        trail.style.opacity = "0";
      });
      setTimeout(() => trail.remove(), 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{ left: 0, top: 0 }}
    >
      {/* Crosshair */}
      <div className="relative w-6 h-6">
        <div className="absolute top-1/2 left-0 w-full h-px bg-primary" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-primary" />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-primary" />
      </div>
    </div>
  );
};

export default CustomCursor;
