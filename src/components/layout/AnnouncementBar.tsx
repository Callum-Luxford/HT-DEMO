import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <a className="announcement" href="#quote">
      Have you seen our brand new TV advert? Click here to watch it!
      <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}
