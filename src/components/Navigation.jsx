import { Menu, X } from "lucide-react";
import { useState } from "react";
import { weddingData } from "../data/weddingData";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3">
        <a href="#home" className="font-display text-2xl font-semibold">{weddingData.coupleTitle}</a>
        <div className="hidden items-center gap-5 text-xs font-bold uppercase tracking-[0.16em] lg:flex">
          {weddingData.navigationLabels.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-[var(--color-primary)]">{item.label}</a>
          ))}
        </div>
        <button className="rounded-full p-2 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="glass-panel mx-4 mt-2 rounded-3xl p-4 lg:hidden">
          {weddingData.navigationLabels.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-semibold">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
