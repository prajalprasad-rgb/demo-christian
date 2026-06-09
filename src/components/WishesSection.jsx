import { MessageCircleHeart, Send } from "lucide-react";
import { motion } from "framer-motion";
import { getActiveBlessing, weddingData } from "../data/weddingData";
import SectionHeading from "./SectionHeading";

export default function WishesSection() {
  const blessing = getActiveBlessing();
  return (
    <section id="wishes" className="bg-[var(--color-surface)]">
      <div className="section-shell">
        <SectionHeading eyebrow={blessing.title} title="Wishes and Blessings" text={`${blessing.text} ${blessing.reference}`} />
        <div className="grid gap-5 md:grid-cols-3">
          {weddingData.demoWishes.map((wish, index) => (
            <motion.article key={wish.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[1.5rem] border border-[var(--color-primary)]/20 bg-white p-6 shadow-soft">
              <MessageCircleHeart className="mb-4 text-[var(--color-primary)]" />
              <p className="leading-7">“{wish.text}”</p>
              <p className="mt-5 text-sm font-bold text-[var(--color-secondary)]">{wish.name}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={weddingData.forms.wishesGoogleFormLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white">
            <Send size={17} /> {weddingData.buttonTexts.wishes}
          </a>
        </div>
      </div>
    </section>
  );
}
