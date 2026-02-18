import React, { useEffect, useRef, useMemo } from "react";

const GalaxyBackground = React.memo(({ page = "/", mood = "golden" }) => {
  const canvasRef = useRef(null);

  // Guardamos la referencia de la paleta actual para transiciones suaves
  const palettes = useMemo(
    () => ({
      home: {
        bg: "#05040a",
        particles: [
          [40, 255, 255],
          [240, 100, 250],
        ],
        nebula: "rgba(30, 20, 50, 0.25)",
      },
      portfolio_golden: {
        bg: "#0f0500",
        particles: [
          [35, 255, 200],
          [15, 255, 180],
        ],
        nebula: "rgba(60, 30, 10, 0.25)",
      },
      portfolio_moody: {
        bg: "#02040a",
        particles: [
          [220, 100, 180],
          [250, 80, 200],
        ],
        nebula: "rgba(10, 20, 60, 0.25)",
      },
      default: { bg: "#050505", particles: [[220, 255, 255]], nebula: "rgba(20, 20, 30, 0.2)" },
    }),
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Seleccionamos la paleta basada en la prop 'mood'
    const currentPath = page.toLowerCase();
    let selectedPalette = palettes.default;

    if (currentPath === "/" || currentPath === "") selectedPalette = palettes.home;
    else if (currentPath.includes("portafolio")) {
      selectedPalette = mood === "moody" ? palettes.portfolio_moody : palettes.portfolio_golden;
    }

    const createParticles = () => {
      const p = [];
      for (let i = 0; i < 80; i++) {
        // Reducido a 80 para máximo rendimiento
        const colorSet = selectedPalette.particles;
        const color = colorSet[Math.floor(Math.random() * colorSet.length)];
        p.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: (Math.random() - 0.5) * 0.15,
          hue: color[0],
          sat: color[1],
          light: color[2],
          alpha: Math.random() * 0.5 + 0.3,
        });
      }
      return p;
    };

    particles = createParticles();

    const draw = () => {
      // Fondo sólido
      ctx.fillStyle = selectedPalette.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Efecto Nebulosa central
      const grad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.2
      );
      grad.addColorStop(0, selectedPalette.nebula);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dibujar partículas
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, ${p.light}%, ${p.alpha})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [page, mood, palettes]); // Se actualiza suavemente cuando cambia el mood

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none transition-opacity duration-1000"
      style={{ filter: "blur(0.5px)" }} // Suavizado extra para estética cinemática
    />
  );
});

export default GalaxyBackground;
