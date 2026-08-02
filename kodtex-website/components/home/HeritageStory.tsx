"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate, motion } from "motion/react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { withBase } from "@/lib/paths";

function AnimatedCounter({ target, suffix = "", start }: { target: number; suffix?: string; start: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (start) {
      const controls = animate(count, target, {
        duration: 2.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [start, count, target]);

  return (
    <span className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function HeritageStory() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-ivory overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text side */}
          <AnimatedSection direction="left">
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-terracotta block mb-5">
              Our Story
            </span>
            <h2 className="font-heading text-5xl md:text-6xl text-charcoal leading-tight mb-6">
              From Ahmedabad,
              <br />
              since 1954.
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
              What is now KodTex began as Kailash Vivek & Co. — a textile
              business founded in the heart of Ahmedabad&apos;s fabric district
              in 1954. Seventy years of mastering every aspect of textile
              manufacturing, trading, and quality.
            </p>
            <p className="text-charcoal/70 text-base leading-relaxed mb-10">
              KodTex is that heritage made direct-to-you. The same ISO-certified
              quality, the same depth of range — now with no middlemen, no
              minimums, and a WhatsApp away.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-8 border-t border-sand/40">
              <div>
                <div className="font-heading text-4xl md:text-5xl text-charcoal">
                  <AnimatedCounter target={70} suffix="+" start={statsInView} />
                </div>
                <div className="text-xs text-charcoal/50 tracking-wide uppercase mt-1">
                  Years of craft
                </div>
              </div>
              <div>
                <div className="font-heading text-4xl md:text-5xl text-charcoal">
                  <AnimatedCounter target={200} suffix="+" start={statsInView} />
                </div>
                <div className="text-xs text-charcoal/50 tracking-wide uppercase mt-1">
                  Fabric variants
                </div>
              </div>
              <div>
                <div className="font-heading text-4xl md:text-5xl text-terracotta">
                  0
                </div>
                <div className="text-xs text-charcoal/50 tracking-wide uppercase mt-1">
                  Minimum order
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Image side */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={withBase("/images/hero/hero-corduroy-navy.jpg")}
                alt="Fabric rolls at Kailash Vivek & Co. warehouse"
                className="w-full h-full object-cover"
              />
              {/* Heritage badge */}
              <div className="absolute bottom-6 left-6 bg-charcoal text-ivory p-5 max-w-[180px]">
                <div className="font-heading text-3xl">1954</div>
                <div className="text-xs text-sand/70 tracking-wide uppercase mt-1">
                  Year Founded
                </div>
                <div className="text-xs text-sand/60 mt-2 leading-relaxed">
                  Kailash Vivek & Co.
                  <br />
                  Ahmedabad, Gujarat
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
