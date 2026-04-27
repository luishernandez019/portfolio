import { useEffect, useRef } from "react";
import "../styles/StarField.css";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
  phase: number;
  color: string;
}

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];

    const colors = ["255,255,255", "184,166,255", "206,193,255", "255,255,255", "255,255,255"];

    const createStars = (w: number, h: number) => {
      const count = Math.floor((w * h) / 6000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.6 + 0.2,
        opacity: Math.random(),
        speed: Math.random() * 0.008 + 0.003,
        phase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      createStars(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 1;

      for (const star of stars) {
        const opacity = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * star.speed + star.phase));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
};
