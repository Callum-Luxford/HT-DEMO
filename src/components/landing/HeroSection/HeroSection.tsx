import { ArrowRight } from "lucide-react";

type HeroSectionProps = {
  onQuoteClick: () => void;
};

export function HeroSection({ onQuoteClick }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>Jewellery Repairs, Valuations &amp; Engraving</h1>
          <p>
            Introducing H&amp;T&apos;s new online jewellery service - making
            repairs, valuations, and engraving easier than ever. Receive a quote
            online, choose your nearest store, and track your item every step of
            the way. Fast, convenient, and trusted expert care from H&amp;T.
          </p>
          <button className="quote-button" id="quote" onClick={onQuoteClick}>
            Quote me <ArrowRight size={27} aria-hidden="true" />
          </button>
        </div>
        <div className="hero-media">
          <img
            src="/assets/jewellery-repair-hero.jpeg"
            alt="Jeweller polishing a diamond ring"
          />
        </div>
      </div>
    </section>
  );
}
