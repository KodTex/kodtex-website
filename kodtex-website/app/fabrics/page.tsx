import type { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";
import FabricsGrid from "@/components/fabrics/FabricsGrid";

export const metadata: Metadata = {
  title: "All Fabrics",
  description:
    "Corduroy, linen, cotton, twill, shirting, suiting, and furnishing. No minimums. Every order customisable.",
};

export default function FabricsPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      {/* Page Header */}
      <div className="bg-charcoal py-20 md:py-28 mb-0">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-terracotta block mb-4">
              Our Collection
            </span>
            <h1 className="font-heading text-5xl md:text-7xl text-ivory leading-tight mb-4">
              All Fabrics
            </h1>
            <p className="text-sand/70 text-lg max-w-xl">
              Corduroy, linen, cotton, twill, shirting, suiting, and furnishing.
              No minimums. Every order customisable.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <FabricsGrid />
    </div>
  );
}
