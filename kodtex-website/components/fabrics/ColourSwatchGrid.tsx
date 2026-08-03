"use client";

import type { ColourOption } from "@/data/products";
import { cn } from "@/lib/utils";
import { withBase } from "@/lib/paths";
import { useProductVisual } from "./ProductVisualContext";

interface ColourSwatchGridProps {
  colours: ColourOption[];
}

export default function ColourSwatchGrid({ colours }: ColourSwatchGridProps) {
  const { selectedColour, setSelectedColour } = useProductVisual();

  return (
    <div className="bg-linen-white border border-sand/40 p-5">
      <span className="font-semibold text-charcoal text-sm block mb-4">
        {colours.length} Colours Available
      </span>
      <div className="grid grid-cols-5 gap-3">
        {colours.map((colour) => {
          const active = selectedColour?.name === colour.name;
          return (
            <button
              key={colour.name}
              type="button"
              aria-pressed={active}
              aria-label={`View in ${colour.name}`}
              onClick={() => setSelectedColour(active ? null : colour)}
              className="flex flex-col items-center gap-1.5 group"
            >
              <span
                className={cn(
                  "relative w-full aspect-square overflow-hidden border-2 block",
                  active ? "border-terracotta" : "border-sand/50 group-hover:border-sand"
                )}
              >
                <img
                  src={withBase(colour.image)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {active && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-terracotta text-white text-[10px] leading-none flex items-center justify-center">
                    ✓
                  </span>
                )}
              </span>
              <span
                className={cn(
                  "text-[11px] text-center leading-tight",
                  active ? "text-terracotta font-medium" : "text-charcoal/60"
                )}
              >
                {colour.name}
              </span>
            </button>
          );
        })}
      </div>
      <p className="text-xs text-charcoal/50 mt-4">
        Shades may vary slightly from screen. WhatsApp us for a physical shade card.
      </p>
    </div>
  );
}
