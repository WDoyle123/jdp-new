import { Construction } from "lucide-react";

function Banner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-olive text-cream border-t border-cream-dark/30 shadow-[0_-1px_12px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-2.5 text-center">
        <Construction size={16} className="shrink-0 text-cream-dark" />
        <p className="text-[11px] md:text-sm font-medium tracking-wide leading-snug">
          <span className="font-semibold uppercase tracking-wider text-cream-dark">
            Office Closure:
          </span>{" "}
          From 08/06/2026 to 12/07/2026, the premises will be closed while
          refurbishment takes place.
        </p>
      </div>
    </div>
  );
}

export default Banner;
