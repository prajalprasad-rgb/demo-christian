import { Church, Gem, Flower2 } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function StyleMotif({ className = "" }) {
  const Icon = weddingData.weddingStyle === "muslim" ? Gem : weddingData.weddingStyle === "hindu" ? Flower2 : Church;
  return (
    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-primary)]/35 bg-white/70 text-[var(--color-primary)] ${className}`}>
      <Icon size={21} strokeWidth={1.7} />
    </div>
  );
}
