import { useEffect, useRef } from "react";
import "../styles/StarField.css";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  twinkleSpeed: number;
  color: string;
  glow: boolean;
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
    let w = 0;
    let h = 0;

    const colors = [
      "255,255,255",
      "255,255,255",
      "255,255,255",
      "184,166,255",
      "206,193,255",
    ];

    const makeStar = (randomX = true): Star => ({
      x: randomX ? Math.random() * w : w + 2,
      y: Math.random() * h,
      vx: -(Math.random() * 0.25 + 0.05),
      vy: (Math.random() - 0.5) * 0.08,
      radius: Math.random() * 1.8 + 0.3,
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.06 + 0.03,
      color: colors[Math.floor(Math.random() * colors.length)],
      glow: Math.random() < 0.2,
    });

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      const count = Math.floor((w * h) / 4500);
      stars = Array.from({ length: count }, () => makeStar(true));
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 1;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        s.x += s.vx;
        s.y += s.vy;

        if (s.x < -2) stars[i] = makeStar(false);

        const opacity = 0.15 + 0.85 * (0.5 + 0.5 * Math.sin(t * s.twinkleSpeed + s.phase));

        if (s.glow) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = `rgba(${s.color}, ${opacity})`;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${opacity})`;
        ctx.fill();

        if (s.glow) {
          ctx.shadowBlur = 0;
          ctx.shadowColor = "transparent";
        }
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
