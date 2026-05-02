"use client";

import { motion } from "motion/react";
import { categories } from "@/data/categories";
import { FabricCategory } from "@/data/products";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  active: FabricCategory | "all";
  onChange: (cat: FabricCategory | "all") => void;
}

const allFilters = [
  { slug: "all", label: "All Fabrics" },
  ...categories.map((c) => ({ slug: c.slug, label: c.label })),
] as const;

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="-mx-6 md:mx-0 px-6 md:px-0 overflow-x-auto scrollbar-none">
      <div className="flex gap-2 flex-nowrap md:flex-wrap min-w-max md:min-w-0">
      {allFilters.map((f) => {
        const isActive = active === f.slug;
        return (
          <button
            key={f.slug}
            onClick={() => onChange(f.slug as FabricCategory | "all")}
            className={cn(
              "relative flex-shrink-0 px-4 py-2.5 min-h-[44px] text-xs font-medium tracking-wide border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-1",
              isActive
                ? "border-charcoal text-charcoal"
                : "border-sand text-charcoal/50 hover:border-charcoal/40 hover:text-charcoal"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="active-filter"
                className="absolute inset-0 bg-charcoal/5"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{f.label}</span>
          </button>
        );
      })}
      </div>
    </div>
  );
}
