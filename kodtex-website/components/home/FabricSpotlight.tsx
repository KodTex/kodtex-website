"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              style={{ scale: imgScale }}
            />
          </div>

          {/* Text */}
          <motion.div style={{ x: textX }} className="flex flex-col gap-6">
            {eyebrow && (
              <span className="text-xs font-medium tracking-[0.12em] uppercase text-terracotta">
                {eyebrow}
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
                    className="border border-sand text-charcoal/70 text-xs font-medium tracking-wide px-3 py-1.5"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            )}

            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 text-charcoal font-semibold text-sm tracking-wide group mt-2 w-fit border-b-2 border-terracotta pb-1 hover:text-terracotta transition-colors"
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
