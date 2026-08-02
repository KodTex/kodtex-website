"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { withBase } from "@/lib/paths";

interface SpotlightTag {
  label: string;
}

interface FabricSpotlightProps {
  eyebrow?: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  tags?: SpotlightTag[];
  imageRight?: boolean;
}

export default function FabricSpotlight({
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  tags,
  imageRight = false,
}: FabricSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const textX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [imageRight ? 30 : -30, 0]
  );

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div
          className={cn(
            "grid md:grid-cols-2 gap-10 md:gap-16 items-center",
            imageRight && "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
          )}
        >
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
              src={withBase(imageSrc)}
              alt={imageAlt}
              className="w-full h-full object-cover"
              style={{ scale: imgScale }}
            />
            {/* Editorial depth overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 to-transparent pointer-events-none" />
            {/* Collection chip */}
            {eyebrow && (
              <span className="absolute top-4 left-4 glass-dark rounded-sm text-[10px] font-medium tracking-[0.12em] uppercase text-white/70 px-3 py-1.5">
                {eyebrow}
              </span>
            )}
          </div>

          {/* Text */}
          <motion.div style={{ x: textX }} className="flex flex-col gap-6">
            {eyebrow && (
              <span className="text-xs font-medium tracking-[0.12em] uppercase text-terracotta">
                ✦ {eyebrow}
              </span>
            )}
            <h2 className="font-heading text-5xl md:text-6xl text-charcoal leading-tight">
              {heading}
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">{body}</p>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="border border-sand/60 text-charcoal/65 text-xs font-medium tracking-wide px-3 py-1.5 hover:bg-sand/20 transition-colors rounded-sm"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            )}

            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-terracotta/8 hover:bg-terracotta text-terracotta hover:text-white border border-terracotta/30 hover:border-terracotta px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 rounded-sm mt-2 w-fit group"
            >
              {ctaLabel}
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
