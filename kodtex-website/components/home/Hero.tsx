"use client";

import { useScroll, useTransform, motion } from "motion/react";
import Link from "next/link";
import { wa } from "@/lib/whatsapp";
import { ChevronDown } from "lucide-react";

const heroWords = ["Fabric,", "your", "way."];

export default function Hero() {
  const { scrollY } = useScroll();
  const bgScale = useTransform(scrollY, [0, 500], [1, 1.08]);
  const bgY = useTransform(scrollY, [0, 500], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollY, [0, 280], [1, 0]);
  const contentY = useTransform(scrollY, [0, 280], [0, -50]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: bgScale, y: bgY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=90')`,
          }}
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-warm-black/60 via-warm-black/50 to-warm-black/70" />
        {/* Grain texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 w-full flex flex-col items-start justify-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.span
          className="text-xs font-medium tracking-[0.15em] uppercase text-terracotta-light mb-6 block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Premium Fabrics · Est. 1954
        </motion.span>

        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-white leading-none mb-8">
          {heroWords.map((word, i) => (
            <motion.span
              key={word}
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-white/75 text-lg md:text-xl max-w-md mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          Premium corduroy, linen, and cotton — backed by 70 years of{" "}
          <span className="text-white/90">Kailash Vivek & Co.</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <Link
            href="/fabrics"
            className="bg-terracotta text-white text-sm font-semibold tracking-wide px-7 py-3.5 hover:bg-terracotta-dark transition-colors inline-flex items-center gap-2"
          >
            Explore Fabrics
            <span aria-hidden>→</span>
          </Link>
          <a
            href={wa.general()}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/60 text-white text-sm font-medium tracking-wide px-7 py-3.5 hover:bg-white/10 hover:border-white/80 transition-all inline-flex items-center gap-2"
          >
            WhatsApp Us
          </a>
        </motion.div>

        {/* Hero bottom-left: No MOQ tag */}
        <motion.div
          className="mt-16 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="h-px w-8 bg-white/30" />
          <span className="text-white/60 text-xs tracking-wide">
            No minimum order · Fully customisable
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
