import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play, X, ZoomIn, ZoomOut } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import SectionHeading from "./SectionHeading";

export default function GallerySection() {
  const [active, setActive] = useState(null);
  const [zoom, setZoom] = useState(false);
  const [playing, setPlaying] = useState(weddingData.animation.autoSlideshow);
  const images = weddingData.galleryImages;

  const move = (step) => setActive((value) => (value === null ? 0 : (value + step + images.length) % images.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useEffect(() => {
    if (!playing || active === null) return;
    const timer = setInterval(() => move(1), 3500);
    return () => clearInterval(timer);
  }, [playing, active]);

  return (
    <section id="gallery" className="bg-[var(--color-surface)]">
      <div className="section-shell">
        <SectionHeading eyebrow="Gallery" title="Moments in Full Screen" text="Tap any photo for a cinematic lightbox with swipe-style controls, keyboard navigation, zoom, and slideshow." />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((image, index) => (
            <button key={image.src} onClick={() => setActive(index)} className="group relative aspect-[4/5] overflow-hidden rounded-2xl text-left shadow-soft md:even:aspect-square">
              <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute right-3 top-3 rounded-full bg-white/80 p-2 text-[var(--color-primary)] opacity-0 transition group-hover:opacity-100"><Maximize2 size={16} /></span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <img src={images[active].src} alt={images[active].alt} className={`max-h-[82vh] max-w-full rounded-xl object-contain transition duration-300 ${zoom ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"}`} onClick={() => setZoom((value) => !value)} />
            <div className="absolute inset-x-0 top-5 flex justify-center gap-2">
              <button onClick={() => setActive(null)} className="rounded-full bg-white/12 p-3 text-white backdrop-blur"><X /></button>
              <button onClick={() => setZoom((value) => !value)} className="rounded-full bg-white/12 p-3 text-white backdrop-blur">{zoom ? <ZoomOut /> : <ZoomIn />}</button>
              <button onClick={() => setPlaying((value) => !value)} className="rounded-full bg-white/12 p-3 text-white backdrop-blur">{playing ? <Pause /> : <Play />}</button>
            </div>
            <button onClick={() => move(-1)} className="absolute left-4 rounded-full bg-white/12 p-3 text-white backdrop-blur"><ChevronLeft /></button>
            <button onClick={() => move(1)} className="absolute right-4 rounded-full bg-white/12 p-3 text-white backdrop-blur"><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
