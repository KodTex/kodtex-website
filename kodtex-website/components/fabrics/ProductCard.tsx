"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Product, getWhatsAppUrl, getSampleUrl } from "@/data/products";
import { cn } from "@/lib/utils";
import { withBase } from "@/lib/paths";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const imageSrc = withBase(product.images[0]);

  return (
    <motion.div
      className={cn("group bg-linen-white border border-sand/30 overflow-hidden flex flex-col hover:ring-1 hover:ring-terracotta/25 transition-shadow", className)}
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {/* Image */}
      <Link
        href={`/fabrics/${product.category}/${product.slug}`}
        className="block relative aspect-[4/3] overflow-hidden"
      >
        <img
          src={imageSrc}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-medium tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Range →
          </span>
        </div>
        {product.featured && (
          <span className="absolute top-3 left-3 bg-terracotta text-white text-[10px] font-semibold tracking-widest px-2.5 py-1 uppercase rounded-sm">
            Featured
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-terracotta bg-terracotta/8 border border-terracotta/20 px-2 py-0.5 rounded-sm">
            {product.category}
          </span>
          {product.wale && (
            <span className="text-xs font-medium tracking-[0.08em] text-charcoal/60">
              {product.wale}
            </span>
          )}
        </div>

        <Link href={`/fabrics/${product.category}/${product.slug}`}>
          <h3 className="font-semibold text-charcoal text-base leading-snug group-hover:text-terracotta transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-charcoal/60 text-sm leading-relaxed flex-1 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-3 text-xs text-charcoal/40 border-t border-sand/30 pt-3">
          <span>{product.composition}</span>
          <span>·</span>
          <span>{product.width}</span>
          {product.weight && (
            <>
              <span>·</span>
              <span>{product.weight}</span>
            </>
          )}
        </div>

        {/* CTAs */}
        <div className="flex gap-2 pt-1">
          <a
            href={getWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gradient-to-r from-terracotta to-[#D4795A] text-white text-xs font-semibold tracking-wide py-2.5 hover:opacity-90 transition-opacity rounded-sm shadow-[0_2px_8px_rgba(194,92,53,0.25)]"
          >
            Order via WhatsApp
          </a>
          <a
            href={getSampleUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 text-center border border-sand/60 text-charcoal/60 text-xs font-medium py-2.5 hover:border-terracotta hover:text-terracotta transition-colors rounded-sm"
          >
            Sample
          </a>
        </div>
      </div>
    </motion.div>
  );
}
