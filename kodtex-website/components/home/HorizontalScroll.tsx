"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { categories } from "@/data/categories";

const categoryImages: Record<string, string> = {
  corduroy: "/images/hero/hero-corduroy-black.jpg",
  linen: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=900&q=85",
  cotton: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=900&q=85",
  twill: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=900&q=85",
  shirting: "/images/fabrics/shirting/dobby-shirting-navy.jpg",
  suiting: "https://images.unsplash.com/photo-1636715986446-d58f0f9b3916?w=900&q=85",
  furnishing: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85",
};

function DesktopHorizontalScroll() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative hidden md:block bg-charcoal overflow-hidden py-16">
      <div className="max-w-[1320px] mx-auto px-10 mb-10">
        <span className="text-xs font-medium tracking-[0.12em] uppercase text-white/50 block mb-1">
          Explore
        </span>
        <h2 className="font-heading text-3xl text-white">Our Range</h2>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex"
          style={{ width: "max-content" }}
          animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        >
          {[...categories, ...categories].map((cat, i) => (
            <Link
              key={i}
              href={`/fabrics/${cat.slug}`}
              className="relative flex-shrink-0 w-[380px] h-[480px] mx-3 overflow-hidden group block"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${categoryImages[cat.slug]}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-black/80 via-warm-black/20 to-transparent" />
              <div className="absolute bottom-8 left-7">
                <span className="text-white/50 text-[10px] font-medium tracking-[0.15em] uppercase block mb-1">
                  {cat.slug}
                </span>
                <h3 className="font-heading text-4xl text-white leading-none mb-2">
                  {cat.label}
                </h3>
                <span className="text-white/60 text-xs font-medium tracking-wide group-hover:text-white transition-colors">
                  Explore →
                </span>
              </div>
            </Link>
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
