import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function ScratchReveal({ onComplete }) {
  const canvasRef = useRef(null);
  const autoRevealTimerRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * window.devicePixelRatio);
      canvas.height = Math.floor(rect.height * window.devicePixelRatio);
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      gradient.addColorStop(0, "#111111");
      gradient.addColorStop(0.28, "#f7f1e5");
      gradient.addColorStop(0.52, "#d8c28f");
      gradient.addColorStop(0.74, "#ffffff");
      gradient.addColorStop(1, "#171717");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = "rgba(255,255,255,.2)";
      for (let i = -rect.height; i < rect.width; i += 24) {
        ctx.save();
        ctx.translate(i, 0);
        ctx.rotate(-0.38);
        ctx.fillRect(0, 0, 8, rect.height * 1.5);
        ctx.restore();
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      clearTimeout(autoRevealTimerRef.current);
    };
  }, []);

  const revealFully = (ctx, canvas) => {
    if (revealed) return;
    setRevealed(true);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (weddingData.scratchReveal.sound) new Audio(weddingData.scratchReveal.sound).play().catch(() => {});
    onComplete();
  };

  const scratch = (clientX, clientY) => {
    if (revealed) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!autoRevealTimerRef.current) {
      autoRevealTimerRef.current = setTimeout(() => {
        revealFully(ctx, canvas);
      }, weddingData.scratchReveal.autoRevealAfterFirstScratchMs);
    }
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(clientX - rect.left, clientY - rect.top, 24, 0, Math.PI * 2);
    ctx.fill();

    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparent = 0;
    for (let i = 3; i < data.length; i += 16) if (data[i] < 80) transparent += 1;
    const percent = (transparent / (data.length / 16)) * 100;
    if (percent >= weddingData.scratchReveal.revealThreshold) {
      revealFully(ctx, canvas);
    }
  };

  return (
    <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/45 bg-[#111] p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,.12),0_22px_55px_rgba(0,0,0,.18)]">
      <div className="absolute inset-0 opacity-35 grayscale">
        <img src={weddingData.media.scratchCardImage} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,8,.86),rgba(8,8,8,.36),rgba(8,8,8,.9))]" />
      <p className="relative mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f7ead2]">{weddingData.scratchReveal.title}</p>
      <div className="relative h-44 overflow-hidden rounded-xl border border-white/25 bg-[#0f0f0f]">
        <img src={weddingData.media.scratchCardImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.18),rgba(0,0,0,.68))]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <span className="text-xs uppercase tracking-[0.24em] text-[#f7ead2]">{weddingData.scratchReveal.hiddenText}</span>
          <span className="mt-2 font-display text-2xl font-semibold">{weddingData.coupleTitle}</span>
          <strong className="mt-2 font-display text-4xl font-semibold text-white drop-shadow">{weddingData.weddingDateDisplay}</strong>
        </div>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full touch-none"
          onPointerDown={(event) => scratch(event.clientX, event.clientY)}
          onPointerMove={(event) => event.buttons === 1 && scratch(event.clientX, event.clientY)}
        />
        {revealed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pointer-events-none absolute inset-0">
            {Array.from({ length: 14 }).map((_, index) => (
              <Sparkles
                key={index}
                size={16}
                className="absolute animate-sparkle text-[var(--color-primary)]"
                style={{ left: `${(index * 19) % 92}%`, top: `${(index * 31) % 85}%`, animationDelay: `${index * 0.08}s` }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
