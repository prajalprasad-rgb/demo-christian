import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import SectionHeading from "./SectionHeading";

export default function StorySection() {
  return (
    <section id="story" className="bg-[var(--color-surface)]">
      <div className="section-shell">
        <SectionHeading eyebrow="Love story" title="Cinematic Chapters" text="Each chapter can be renamed, reordered, or replaced from weddingData.js." />
        <div className="space-y-6">
          {weddingData.loveStory.map((chapter, index) => (
            <motion.article
              key={chapter.title}
              initial={{ opacity: 0, x: index % 2 ? 34 : -34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="grid overflow-hidden rounded-[1.75rem] bg-white shadow-soft md:grid-cols-2"
            >
              <img src={chapter.image} alt={chapter.title} loading="lazy" className={`h-72 w-full object-cover md:h-full ${index % 2 ? "md:order-2" : ""}`} />
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <span className="eyebrow">{chapter.date}</span>
                <h3 className="mt-3 font-display text-4xl font-semibold">{chapter.title}</h3>
                <p className="mt-4 leading-8 text-[color-mix(in_srgb,var(--color-ink),transparent_25%)]">{chapter.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
