"use client";

import { useState } from "react";
import { withBase } from "@/lib/paths";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={withBase(images[active])}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={cn(
                "aspect-square overflow-hidden border-2 transition-colors",
                active === i ? "border-terracotta" : "border-transparent hover:border-sand"
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
