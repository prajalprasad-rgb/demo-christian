import { Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import SectionHeading from "./SectionHeading";

function PersonCard({ person }) {
  return (
    <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[1.75rem] bg-[var(--color-surface)] shadow-soft">
      <div className="aspect-[4/5] overflow-hidden">
        <img src={person.photo} alt={person.name} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
      </div>
      <div className="p-6">
        <p className="eyebrow">{person.role}</p>
        <h3 className="mt-2 font-display text-4xl font-semibold">{person.name}</h3>
        <p className="mt-3 text-sm leading-7 text-[color-mix(in_srgb,var(--color-ink),transparent_25%)]">{person.bio}</p>
        <div className="mt-5 flex gap-3 text-[var(--color-primary)]">
          {person.socialLinks.instagram && <a href={person.socialLinks.instagram} aria-label="Instagram"><Instagram size={19} /></a>}
          {person.socialLinks.facebook && <a href={person.socialLinks.facebook} aria-label="Facebook"><Facebook size={19} /></a>}
        </div>
      </div>
    </motion.article>
  );
}

export default function CoupleSection() {
  return (
    <section id="couple">
      <div className="section-shell">
        <SectionHeading eyebrow="The couple" title={`${weddingData.groom.name} and ${weddingData.bride.name}`} text="A magazine-style introduction for the bride and groom, fully editable from the data file." />
        <div className="grid gap-5 md:grid-cols-[1fr_.8fr_1fr] md:items-center">
          <PersonCard person={weddingData.groom} />
          <div className="relative min-h-72 overflow-hidden rounded-[2rem] shadow-gold md:min-h-[520px]">
            <img src={weddingData.media.couplePhoto} alt={weddingData.coupleTitle} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.55),transparent)]" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center text-white">
              <p className="eyebrow text-[var(--color-accent)]">Forever Begins</p>
              <h3 className="mt-2 font-display text-4xl font-semibold">{weddingData.weddingDateDisplay}</h3>
            </div>
          </div>
          <PersonCard person={weddingData.bride} />
        </div>
      </div>
    </section>
  );
}
