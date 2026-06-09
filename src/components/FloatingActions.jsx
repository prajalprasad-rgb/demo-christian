import { Copy, MessageCircle, Music, Music2, Send, Share2 } from "lucide-react";
import { useState } from "react";
import { weddingData } from "../data/weddingData";
import { shareInvitation } from "./utils";

export default function FloatingActions({ musicPlaying, toggleMusic }) {
  const [copied, setCopied] = useState(false);
  const whatsapp = `https://wa.me/${weddingData.contact.whatsappNumber}`;
  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <>
      <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3">
        <button onClick={toggleMusic} className="rounded-full bg-[var(--color-ink)] p-4 text-white shadow-gold" aria-label="Music">
          {musicPlaying ? <Music2 /> : <Music />}
        </button>
        <a href="#rsvp" className="rounded-full bg-[var(--color-primary)] p-4 text-white shadow-gold" aria-label="RSVP"><Send /></a>
        <button onClick={shareInvitation} className="rounded-full bg-white p-4 text-[var(--color-ink)] shadow-soft" aria-label="Share"><Share2 /></button>
        <button onClick={copyLink} className="rounded-full bg-white p-4 text-[var(--color-ink)] shadow-soft" aria-label="Copy link"><Copy /></button>
      </div>
      <a href={whatsapp} target="_blank" rel="noreferrer" className="fixed bottom-5 left-4 z-40 rounded-full bg-[#128c7e] p-4 text-white shadow-gold" aria-label="WhatsApp">
        <MessageCircle />
      </a>
      {copied && <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm text-white">Invitation link copied</div>}
    </>
  );
}
