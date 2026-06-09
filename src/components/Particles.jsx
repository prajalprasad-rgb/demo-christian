import { weddingData } from "../data/weddingData";

export default function Particles() {
  if (!weddingData.animation.enablePetals && !weddingData.animation.enableGoldParticles) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 22 }).map((_, index) => (
        <span
          key={index}
          className="absolute top-0 block rounded-full bg-[var(--color-accent)]/70 opacity-0 animate-floatPetal"
          style={{
            left: `${(index * 37) % 100}%`,
            width: `${index % 3 === 0 ? 9 : 5}px`,
            height: `${index % 3 === 0 ? 14 : 5}px`,
            animationDuration: `${8 + (index % 8)}s`,
            animationDelay: `${index * 0.45}s`,
            "--drift": `${index % 2 ? 70 : -65}px`,
          }}
        />
      ))}
    </div>
  );
}
