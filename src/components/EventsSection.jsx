import { CalendarDays, MapPin, Navigation as NavIcon } from "lucide-react";
import { motion } from "framer-motion";
import { getActiveEvents, weddingData } from "../data/weddingData";
import SectionHeading from "./SectionHeading";
import { googleCalendarLink, icsDownload } from "./utils";

export default function EventsSection() {
  const events = getActiveEvents();
  return (
    <section id="events" className="luxury-pattern">
      <div className="section-shell">
        <SectionHeading eyebrow="Wedding events" title="Ceremony and Celebration" text="Two main event showcases adapt to the selected wedding style." />
        <div className="grid gap-5 lg:grid-cols-2">
          {events.map((event, index) => (
            <motion.article key={event.title} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group relative min-h-[500px] overflow-hidden rounded-[2rem] shadow-gold">
              <img src={event.image} alt={event.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(24,18,10,.86),rgba(24,18,10,.18)_62%,rgba(24,18,10,.05))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="eyebrow text-[var(--color-accent)]">{event.date} · {event.time}</p>
                <h3 className="mt-3 font-display text-5xl font-semibold">{event.title}</h3>
                <p className="mt-4 flex items-start gap-2 text-white/85"><MapPin size={19} className="mt-1" />{event.venue}<br />{event.address}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={event.mapLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--color-ink)]"><NavIcon size={17} />{weddingData.buttonTexts.maps}</a>
                  <a href={googleCalendarLink(event)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-3 text-sm font-bold"><CalendarDays size={17} />Google</a>
                  <button onClick={() => icsDownload(event)} className="inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-3 text-sm font-bold">Apple/Outlook</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
