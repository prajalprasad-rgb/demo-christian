import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { weddingData } from "../data/weddingData";
import SectionHeading from "./SectionHeading";
import { shareInvitation } from "./utils";

export default function ContactSection() {
  const whatsapp = `https://wa.me/${weddingData.contact.whatsappNumber}?text=${encodeURIComponent(`I received the ${weddingData.coupleTitle} wedding invitation.`)}`;
  return (
    <section id="contact">
      <div className="section-shell">
        <SectionHeading eyebrow="Contact" title="We Would Love to Celebrate With You" />
        <div className="glass-panel mx-auto max-w-3xl rounded-[2rem] p-6 text-center sm:p-9">
          <h3 className="font-display text-4xl font-semibold">{weddingData.coupleTitle}</h3>
          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
            <p className="flex items-center justify-center gap-2"><Phone size={17} />{weddingData.contact.phone}</p>
            <p className="flex items-center justify-center gap-2"><Mail size={17} />{weddingData.contact.email}</p>
            <p className="flex items-center justify-center gap-2"><MapPin size={17} />{weddingData.contact.address}</p>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#128c7e] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white">{weddingData.buttonTexts.whatsapp}</a>
            <button onClick={shareInvitation} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/35 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em]"><Share2 size={17} />{weddingData.buttonTexts.share}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
