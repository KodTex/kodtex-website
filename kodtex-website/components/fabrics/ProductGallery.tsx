"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { withBase } from "@/lib/paths";
import { cn } from "@/lib/utils";
import { useProductVisual } from "./ProductVisualContext";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const { selectedColour, setSelectedColour } = useProductVisual();

  const displaySrc = withBase(selectedColour ? selectedColour.image : images[active]);
  const displayAlt = selectedColour ? `${alt} — ${selectedColour.name}` : alt;

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/5] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={displaySrc}
            src={displaySrc}
            alt={displayAlt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {selectedColour && (
          <span className="absolute top-4 left-4 bg-charcoal/75 text-white text-xs font-medium tracking-wide px-3 py-1.5 rounded-sm">
            Now viewing: {selectedColour.name}
          </span>
        )}
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => {
                setActive(i);
                setSelectedColour(null);
              }}
              className={cn(
                "aspect-square overflow-hidden border-2 transition-colors",
                !selectedColour && active === i ? "border-terracotta" : "border-transparent hover:border-sand"
              )}
              aria-label={`View image ${i + 1} of ${images.length}`}
            >
              <img
                src={withBase(img)}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
