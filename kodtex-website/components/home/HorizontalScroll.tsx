"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import Link from "next/link";
import { categories } from "@/data/categories";

const categoryImages: Record<string, string> = {
  corduroy: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=85",
  linen: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=900&q=85",
  cotton: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=900&q=85",
  twill: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=900&q=85",
  shirting: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
  suiting: "https://images.unsplash.com/photo-1612731847459-f4b5c0c0c1f0?w=900&q=85",
  furnishing: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85",
};

interface ProgressDotProps {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}

function ProgressDot({ scrollYProgress, index, total }: ProgressDotProps) {
  const dotProgress = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [0, 1]
  );
  return (
    <div className="relative w-6 h-1 bg-white/20 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 bg-white rounded-full"
        style={{ scaleX: dotProgress, transformOrigin: "left" }}
      />
    </div>
  );
}

function DesktopHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(categories.length - 1) * 100}vw`]
  );

  return (
    <section ref={containerRef} className="relative hidden md:block" style={{ height: `${categories.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section header */}
        <div className="absolute top-8 left-10 z-20">
          <span className="text-xs font-medium tracking-[0.12em] uppercase text-white/50 block mb-1">
            Explore
          </span>
          <h2 className="font-heading text-3xl text-white">Our Range</h2>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {categories.map((_, i) => (
            <ProgressDot
              key={i}
              scrollYProgress={scrollYProgress}
              index={i}
              total={categories.length}
            />
          ))}
        </div>

        {/* Scrolling panels */}
        <motion.div
          className="flex h-full"
          style={{ x, width: `${categories.length * 100}vw` }}
        >
          {categories.map((cat) => (
            <div
              key={cat.slug}
              className="relative w-screen h-screen flex-shrink-0 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${categoryImages[cat.slug]}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-black/80 via-warm-black/30 to-warm-black/20" />
              <div className="absolute bottom-24 left-20 max-w-lg">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 block mb-3">
                  {cat.slug}
                </span>
                <h3 className="font-heading text-6xl text-white leading-none mb-4">
                  {cat.label}
                </h3>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  {cat.description}
                </p>
                <Link
                  href={`/fabrics/${cat.slug}`}
                  className="inline-flex items-center gap-2 border border-white/60 text-white text-sm font-medium tracking-wide px-6 py-3 hover:bg-white/10 hover:border-white/80 transition-all"
                >
                  Explore {cat.label}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MobileCategoryCards() {
  return (
    <section className="block md:hidden">
      <div className="px-6 pt-6 pb-2">
        <span className="text-xs font-medium tracking-[0.12em] uppercase text-charcoal/50 block mb-1">
          Explore
        </span>
        <h2 className="font-heading text-2xl text-charcoal">Our Range</h2>
      </div>
      <div className="flex flex-col">
        {categories.map((cat) => (
          <div key={cat.slug} className="relative h-[60vw] min-h-[220px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${categoryImages[cat.slug]}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-black/80 via-warm-black/30 to-warm-black/10" />
            <div className="absolute bottom-5 left-6 right-6">
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/50 block mb-1">
                {cat.slug}
              </span>
              <h3 className="font-heading text-3xl text-white leading-none mb-1">
                {cat.label}
              </h3>
              <p className="text-white/70 text-sm mb-3 leading-snug line-clamp-2">
                {cat.description}
              </p>
              <Link
                href={`/fabrics/${cat.slug}`}
                className="inline-flex items-center gap-1.5 border border-white/60 text-white text-xs font-medium tracking-wide px-4 py-2 hover:bg-white/10 transition-all min-h-[44px]"
              >
                Explore {cat.label}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HorizontalScroll() {
  return (
    <>
      <DesktopHorizontalScroll />
      <MobileCategoryCards />
    </>
  );
}
