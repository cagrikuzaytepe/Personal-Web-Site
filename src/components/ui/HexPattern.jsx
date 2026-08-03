import { useEffect, useRef } from 'react';

const HexPattern = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let offset = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const hexChars = '0123456789ABCDEF';

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '12px monospace';
      ctx.fillStyle = 'rgba(0, 255, 156, 0.03)';

      for (let y = 0; y < canvas.height; y += 20) {
        for (let x = 0; x < canvas.width; x += 40) {
          const char = hexChars[Math.floor(Math.random() * hexChars.length)];
          const xOff = (y / 20) % 2 === 0 ? 0 : 20;
          ctx.fillText(char, x + xOff, y);
        }
      }

      offset += 0.2;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hex-pattern" aria-hidden="true" />;
};

export default HexPattern;
