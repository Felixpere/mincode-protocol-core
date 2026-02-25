import { useEffect, useRef } from "react";

const WaveformVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bars = 48;
    const barWidth = 3;
    const gap = 3;
    canvas.width = bars * (barWidth + gap);
    canvas.height = 60;

    const phases = Array.from({ length: bars }, () => Math.random() * Math.PI * 2);
    const speeds = Array.from({ length: bars }, () => 1.5 + Math.random() * 3);

    let animId: number;
    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < bars; i++) {
        const h = 8 + Math.abs(Math.sin(time * 0.003 * speeds[i] + phases[i])) * 45;
        const x = i * (barWidth + gap);
        const y = (canvas.height - h) / 2;
        ctx.fillStyle = "#00F0FF";
        ctx.fillRect(x, y, barWidth, h);
      }
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="flex justify-center">
      <canvas ref={canvasRef} className="opacity-80" style={{ imageRendering: "pixelated" }} />
    </div>
  );
};

export default WaveformVisualizer;
