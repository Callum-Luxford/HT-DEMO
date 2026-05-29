import { useCallback, useEffect, useState, type RefObject } from "react";
import { ArrowRight, X } from "lucide-react";
import { QUOTE_URL, VIDEO_SRC } from "../../config";

type VideoQuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  startMuted?: boolean;
  videoRef: RefObject<HTMLVideoElement | null>;
};

export function VideoQuoteModal({
  isOpen,
  onClose,
  startMuted = false,
  videoRef,
}: VideoQuoteModalProps) {
  const [needsManualPlay, setNeedsManualPlay] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const startVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    setNeedsManualPlay(false);
    video.pause();
    video.currentTime = 0;
    video.muted = startMuted;
    video.volume = 1;
    video.load();

    try {
      await video.play();
    } catch {
      setNeedsManualPlay(true);
    }
  }, [startMuted, videoRef]);

  return (
    <div
      className={`modal-backdrop ${isOpen ? "is-open" : ""}`}
      hidden={!isOpen}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="video-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Quote video"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>
        <video
          ref={videoRef}
          className="quote-video"
          src={VIDEO_SRC}
          playsInline
          preload="auto"
          onCanPlay={() => {
            if (isOpen && videoRef.current?.paused) void startVideo();
          }}
          onPlaying={() => setNeedsManualPlay(false)}
        />
        {needsManualPlay && (
          <button className="manual-play" onClick={startVideo}>
            Play video <ArrowRight size={34} aria-hidden="true" />
          </button>
        )}
        <div className="modal-actions">
          <a className="quote-button modal-quote" href={QUOTE_URL}>
            Quote me <ArrowRight size={48} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
