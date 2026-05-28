import { useCallback, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { AnnouncementBar } from "./components/layout/AnnouncementBar";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/landing/HeroSection/HeroSection";
import { TrustpilotSection } from "./components/landing/TrustpilotSection/TrustpilotSection";
import { FloatingButtons } from "./components/shared/FloatingButtons/FloatingButtons";
import { VideoQuoteModal } from "./features/quote-video/VideoQuoteModal";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleQuoteClick = useCallback(() => {
    flushSync(() => {
      setIsModalOpen(true);
    });

    const video = videoRef.current;

    if (video) {
      video.pause();
      video.currentTime = 0;
      video.muted = false;
      video.volume = 1;
      video.load();
      void video.play();
    }
  }, []);

  const handleModalClose = useCallback(() => {
    const video = videoRef.current;

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    setIsModalOpen(false);
  }, []);

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection onQuoteClick={handleQuoteClick} />
        <TrustpilotSection />
      </main>
      <FloatingButtons />
      <VideoQuoteModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        videoRef={videoRef}
      />
    </>
  );
}
