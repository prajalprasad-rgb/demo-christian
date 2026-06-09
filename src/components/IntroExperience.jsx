import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { weddingData } from "../data/weddingData";
import ScratchReveal from "./ScratchReveal";
import StyleMotif from "./StyleMotif";

export default function IntroExperience({ onDone, onPlayMusic, showMusicPrompt }) {
  const [phase, setPhase] = useState("loading");
  const [scratchDone, setScratchDone] = useState(!weddingData.scratchReveal.enabled);
  const introImages = weddingData.media.introImages?.length ? weddingData.media.introImages : [weddingData.media.heroImage];

  useEffect(() => {
    const loading = setTimeout(() => setPhase("cinematic"), 1400);
    const envelope = setTimeout(() => setPhase("envelope"), weddingData.animation.introDurationMs);
    return () => {
      clearTimeout(loading);
      clearTimeout(envelope);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#130f0b] px-5 text-white">
      <div className="absolute inset-0">
        {introImages.map((image, index) => (
          <motion.img
            key={image}
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: index === 0 ? 1 : 0, scale: 1.08 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [1.08, 1.03, 1.01, 1] }}
            transition={{ duration: 7.5, repeat: Infinity, delay: index * 2.5, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,7,4,.62),rgba(10,7,4,.28)_42%,rgba(10,7,4,.82))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,.18),transparent_34%)]" />
      </div>
      <AnimatePresence mode="wait">
        {phase === "loading" && (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative text-center">
            <StyleMotif className="mb-5 border-white/35 bg-white/10 text-white backdrop-blur" />
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#f6d887]">Wedify Presents</p>
            <h1 className="mt-3 font-display text-5xl font-semibold drop-shadow-sm">{weddingData.coupleTitle}</h1>
            <div className="mx-auto mt-7 h-px w-48 overflow-hidden bg-white/20">
              <motion.div className="h-full bg-[#f6d887]" animate={{ x: ["-100%", "110%"] }} transition={{ duration: 1.1, repeat: Infinity }} />
            </div>
          </motion.div>
        )}

        {phase === "cinematic" && (
          <motion.div key="cinematic" initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="relative max-w-xl text-center">
            <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 1.2 }}>
              <Sparkles className="mx-auto mb-5 text-[#f6d887]" />
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#f6d887]">A celebration of love</p>
              <h2 className="mt-4 font-display text-6xl font-semibold leading-none drop-shadow-sm sm:text-7xl">{weddingData.coupleTitle}</h2>
              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/86">{weddingData.invitationIntro}</p>
            </motion.div>
          </motion.div>
        )}

        {phase === "envelope" && (
          <motion.div key="envelope" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative w-full max-w-md">
            <motion.div
              className="relative overflow-hidden rounded-[2rem] border border-white/25 bg-black/25 p-4 text-center shadow-[0_30px_90px_rgba(0,0,0,.46)] backdrop-blur-xl"
              initial={{ rotateX: 24 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.2),transparent_42%)]" />
              <div className="absolute inset-x-0 top-0 h-32 origin-top bg-[linear-gradient(145deg,rgba(255,255,255,.34),rgba(255,255,255,.08),rgba(210,186,132,.28))]" style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }} />
              <div className="relative mt-16 rounded-[1.5rem] border border-white/30 bg-white/90 p-5 text-[#19140f] shadow-[0_24px_70px_rgba(0,0,0,.28)]">
                <Heart className="mx-auto mb-3 text-[#19140f]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#8a775b]">Wedding Invitation</p>
                <h3 className="mt-2 font-display text-4xl font-semibold leading-none">{weddingData.coupleTitle}</h3>
                <div className="mx-auto mt-3 flex max-w-xs items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6d604e]">
                  <span>{weddingData.groom.name}</span>
                  <span className="h-px w-5 bg-[#c8b894]" />
                  <span>{weddingData.bride.name}</span>
                </div>
                {weddingData.scratchReveal.enabled ? (
                  <ScratchReveal onComplete={() => setScratchDone(true)} />
                ) : (
                  <p className="font-display text-4xl font-semibold">{weddingData.weddingDateDisplay}</p>
                )}
                <button
                  onClick={onDone}
                  disabled={!scratchDone}
                  className="mt-6 w-full rounded-full bg-[#19140f] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_34px_rgba(23,17,11,.24)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {weddingData.buttonTexts.viewInvitation}
                </button>
                {showMusicPrompt && (
                  <button onClick={onPlayMusic} className="mt-3 text-sm font-semibold text-[var(--color-primary)]">
                    {weddingData.buttonTexts.enterWithMusic}
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
