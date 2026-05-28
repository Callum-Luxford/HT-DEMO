import { Accessibility, CircleHelp } from "lucide-react";

export function FloatingButtons() {
  return (
    <>
      <button className="floating-button accessibility" aria-label="Accessibility">
        <Accessibility size={41} strokeWidth={1.8} aria-hidden="true" />
      </button>
      <button className="floating-button chat" aria-label="Help">
        <CircleHelp size={39} strokeWidth={1.7} />
      </button>
    </>
  );
}
