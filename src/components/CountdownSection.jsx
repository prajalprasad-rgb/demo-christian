import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import SectionHeading from "./SectionHeading";
import { weddingData } from "../data/weddingData";

function getTimeLeft() {
  const diff = new Date(weddingData.countdownDate).getTime() - Date.now();
  const safe = Math.max(diff, 0);
  return {
    done: diff <= 0,
    days: Math.floor(safe / 86400000),
    hours: Math.floor((safe / 3600000) % 24),
    minutes: Math.floor((safe / 60000) % 60),
    seconds: Math.floor((safe / 1000) % 60),
  };
}

export default function CountdownSection() {
  const [left, setLeft] = useState(getTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (left.done) confetti({ particleCount: 140, spread: 85, origin: { y: 0.65 } });
  }, [left.done]);

  return (
    <section className="luxury-pattern">
      <div className="section-shell">
        <SectionHeading eyebrow="Counting moments" title={left.done ? "Today is the Wedding Day" : "The Celebration Begins Soon"} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div key={unit} className="glass-panel rounded-2xl p-5 text-center">
              <div className="font-display text-5xl font-semibold text-[var(--color-secondary)]">{String(left[unit]).padStart(2, "0")}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
