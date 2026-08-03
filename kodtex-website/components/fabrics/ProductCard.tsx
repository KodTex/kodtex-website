"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Product, getWhatsAppUrl, getSampleUrl } from "@/data/products";
import { cn } from "@/lib/utils";
import { withBase } from "@/lib/paths";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const MAX_VISIBLE_SWATCHES = 6;

export default function ProductCard({ product, className }: ProductCardProps) {
  // Only real mice/trackpads get hover-preview; touch relies on tap-to-pin below.
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);
    const listener = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const [previewIdx, setPreviewIdx] = useState<number | null>(null);
  const [pinnedIdx, setPinnedIdx] = useState<number | null>(null);

  const activeIdx = previewIdx ?? pinnedIdx;
  const activeColour = activeIdx !== null ? product.colours?.[activeIdx] : undefined;
  const imageSrc = withBase(activeColour ? activeColour.image : product.images[0]);
  const imageAlt = activeColour ? `${product.name} — ${activeColour.name}` : product.name;

  const swatches = product.colours ?? [];
  const visibleSwatches = swatches.slice(0, MAX_VISIBLE_SWATCHES);
  const extraCount = swatches.length - visibleSwatches.length;

  return (
    <motion.div
      className={cn("group bg-linen-white border border-sand/30 overflow-hidden flex flex-col hover:ring-1 hover:ring-terracotta/25 transition-shadow", className)}
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {/* Image */}
      <Link
        href={`/fabrics/${product.category}/${product.slug}`}
        className="block relative aspect-[4/3] overflow-hidden"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={imageSrc}
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AnimatePresence>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
          <span className="text-white text-xs font-medium tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Range →
          </span>
        </div>
        {product.featured && (
          <span className="absolute top-3 left-3 bg-terracotta text-white text-[10px] font-semibold tracking-widest px-2.5 py-1 uppercase rounded-sm">
            Featured
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-terracotta bg-terracotta/8 border border-terracotta/20 px-2 py-0.5 rounded-sm">
            {product.category}
          </span>
          {product.wale && (
            <span className="text-xs font-medium tracking-[0.08em] text-charcoal/60">
              {product.wale}
            </span>
          )}
          {product.applications[0] && (
            <span className="text-[10px] font-medium tracking-[0.06em] uppercase text-sage bg-sage/8 border border-sage/25 px-2 py-0.5 rounded-sm">
              {product.applications[0]}
            </span>
          )}
        </div>

        <Link href={`/fabrics/${product.category}/${product.slug}`}>
          <h3 className="font-semibold text-charcoal text-base leading-snug group-hover:text-terracotta transition-colors">
            {product.name}
          </h3>
        </Link>

        {visibleSwatches.length > 0 && (
          <div
            role="group"
            aria-label={`${product.name} colours`}
            className="flex items-center gap-1.5 flex-wrap"
          >
            {visibleSwatches.map((colour, i) => (
              <button
                key={colour.name}
                type="button"
                aria-label={`Preview ${colour.name}`}
                aria-pressed={pinnedIdx === i}
                title={colour.name}
                onMouseEnter={() => canHover && setPreviewIdx(i)}
                onMouseLeave={() => canHover && setPreviewIdx(null)}
                onFocus={() => setPreviewIdx(i)}
                onBlur={() => setPreviewIdx(null)}
                onClick={() => setPinnedIdx((prev) => (prev === i ? null : i))}
                style={{ backgroundImage: `url(${withBase(colour.image)})` }}
                className={cn(
                  "w-[18px] h-[18px] rounded-full border bg-cover bg-center flex-shrink-0 transition-transform hover:scale-110",
                  pinnedIdx === i
                    ? "border-terracotta ring-2 ring-terracotta/40"
                    : "border-sand/50"
                )}
              />
            ))}
            {extraCount > 0 && (
              <span className="text-[10px] text-charcoal/40">+{extraCount} more</span>
            )}
          </div>
        )}

        <p className="text-charcoal/60 text-sm leading-relaxed flex-1 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-3 text-xs text-charcoal/40 border-t border-sand/30 pt-3">
          <span>{product.composition}</span>
          <span>·</span>
          <span>{product.width}</span>
          {product.weight && (
            <>
              <span>·</span>
              <span>{product.weight}</span>
            </>
          )}
        </div>

        {/* CTAs */}
        <div className="flex gap-2 pt-1">
          <a
            href={getWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gradient-to-r from-terracotta to-[#D4795A] text-white text-xs font-semibold tracking-wide py-2.5 hover:opacity-90 transition-opacity rounded-sm shadow-[0_2px_8px_rgba(194,92,53,0.25)]"
          >
            Order via WhatsApp
          </a>
          <a
            href={getSampleUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 text-center border border-sand/60 text-charcoal/60 text-xs font-medium py-2.5 hover:border-terracotta hover:text-terracotta transition-colors rounded-sm"
          >
            Sample
          </a>
        </div>
      </div>
    </motion.div>
  );
}
