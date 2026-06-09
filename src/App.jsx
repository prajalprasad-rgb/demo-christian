import { useEffect, useMemo, useRef, useState } from "react";
import { weddingData, getActiveTheme } from "./data/weddingData";
import IntroExperience from "./components/IntroExperience";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/CountdownSection";
import CoupleSection from "./components/CoupleSection";
import StorySection from "./components/StorySection";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";
import RSVPSection from "./components/RSVPSection";
import WishesSection from "./components/WishesSection";
import ContactSection from "./components/ContactSection";
import FloatingActions from "./components/FloatingActions";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showMusicPrompt, setShowMusicPrompt] = useState(false);
  const audioRef = useRef(null);
  const theme = useMemo(() => getActiveTheme(), []);

  useEffect(() => {
    document.documentElement.style.setProperty("--color-bg", theme.background);
    document.documentElement.style.setProperty("--color-surface", theme.surface);
    document.documentElement.style.setProperty("--color-primary", theme.primary);
    document.documentElement.style.setProperty("--color-secondary", theme.secondary);
    document.documentElement.style.setProperty("--color-accent", theme.accent);
    document.documentElement.style.setProperty("--color-ink", theme.ink);
    document.documentElement.style.setProperty("--font-display", weddingData.theme.fonts.display);
    document.documentElement.style.setProperty("--font-body", weddingData.theme.fonts.body);
    document.title = `Wedify | ${weddingData.coupleTitle} Wedding Invitation`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", weddingData.invitationIntro);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", `${weddingData.coupleTitle} Wedding Invitation`);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", weddingData.invitationIntro);
    document.querySelector('meta[property="og:image"]')?.setAttribute("content", weddingData.media.heroImage);
  }, [theme]);

  const playMusic = async () => {
    if (!audioRef.current || !weddingData.media.backgroundMusic.src) return false;
    try {
      audioRef.current.volume = weddingData.media.backgroundMusic.volume;
      await audioRef.current.play();
      setMusicPlaying(true);
      setShowMusicPrompt(false);
      return true;
    } catch {
      setShowMusicPrompt(true);
      return false;
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      await playMusic();
    } else {
      audioRef.current.pause();
      setMusicPlaying(false);
    }
  };

  const handleIntroDone = async () => {
    await playMusic();
    setIntroComplete(true);
  };

  return (
    <div className={`min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] style-${weddingData.weddingStyle}`}>
      {weddingData.media.backgroundMusic.src && (
        <audio ref={audioRef} src={weddingData.media.backgroundMusic.src} loop preload="auto" />
      )}

      {!introComplete ? (
        <IntroExperience onDone={handleIntroDone} onPlayMusic={playMusic} showMusicPrompt={showMusicPrompt} />
      ) : (
        <>
          <ScrollProgress />
          <Navigation />
          <main>
            <HeroSection />
            <CountdownSection />
            <CoupleSection />
            <StorySection />
            <EventsSection />
            <GallerySection />
            <RSVPSection />
            <WishesSection />
            <ContactSection />
          </main>
          <FloatingActions musicPlaying={musicPlaying} toggleMusic={toggleMusic} />
        </>
      )}
    </div>
  );
}
