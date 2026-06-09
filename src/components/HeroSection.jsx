import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import Particles from "./Particles";
import StyleMotif from "./StyleMotif";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden">
      {weddingData.media.heroVideo ? (
        <video className="absolute inset-0 h-full w-full object-cover" src={weddingData.media.heroVideo} autoPlay muted loop playsInline />
      ) : (
        <img className="absolute inset-0 h-full w-full object-cover" src={weddingData.media.heroImage} alt="" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,15,10,.35),rgba(20,15,10,.18)_38%,rgba(20,15,10,.78))]" />
      <Particles />
      <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <StyleMotif className="mb-6 bg-white/15 text-white" />
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">{weddingData.saveTheDateText}</p>
        <h1 className="mt-4 max-w-3xl font-display text-6xl font-semibold leading-none sm:text-8xl">{weddingData.coupleTitle}</h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-white/85">{weddingData.invitationIntro}</p>
        <div className="mt-8 inline-flex rounded-full border border-white/30 bg-white/12 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] backdrop-blur">
          {weddingData.weddingDateDisplay}
        </div>
        <a href="#couple" className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full border border-white/35 p-3 text-white/85" aria-label="Scroll">
          <ChevronDown className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
