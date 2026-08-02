"use client";

import { useState } from "react";
import FilterBar from "@/components/fabrics/FilterBar";
import ProductCard from "@/components/fabrics/ProductCard";
import { products, FabricCategory } from "@/data/products";
import { motion, AnimatePresence } from "motion/react";

export default function FabricsGrid() {
  const [active, setActive] = useState<FabricCategory | "all">("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* Sticky filter bar */}
      <div className="sticky top-[64px] md:top-[72px] z-20 bg-ivory/95 backdrop-blur-sm border-b border-sand/40 py-4">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <FilterBar active={active} onChange={setActive} />
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-10">
        <div className="text-sm text-charcoal/60 mb-8">
          {filtered.length} fabric{filtered.length !== 1 ? "s" : ""}
          {active !== "all" && ` in ${active}`}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-charcoal/40">
            No fabrics found in this category yet.
          </div>
        )}
      </div>
    </>
  );
}
