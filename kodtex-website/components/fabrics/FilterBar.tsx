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
    <div className="flex gap-2 flex-wrap">
      {allFilters.map((f) => {
        const isActive = active === f.slug;
        return (
          <button
            key={f.slug}
            onClick={() => onChange(f.slug as FabricCategory | "all")}
            className={cn(
              "relative px-4 py-2 text-xs font-medium tracking-wide border transition-all",
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
  );
}
