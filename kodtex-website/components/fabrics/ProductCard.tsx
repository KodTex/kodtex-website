"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Product, getWhatsAppUrl, getSampleUrl } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const categoryImages: Record<string, string> = {
  corduroy: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
  linen: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=600&q=80",
  cotton: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
  twill: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80",
  shirting: "https://images.unsplash.com/photo-1594938298603-c8148c4b7d0b?w=600&q=80",
  suiting: "https://images.unsplash.com/photo-1612731847459-f4b5c0c0c1f0?w=600&q=80",
  furnishing: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
};

export default function ProductCard({ product, className }: ProductCardProps) {
  const imageSrc = categoryImages[product.category];

  return (
    <motion.div
      className={cn("group bg-linen-white border border-sand/40 overflow-hidden flex flex-col", className)}
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
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-terracotta text-white text-[10px] font-medium tracking-wide px-2 py-1 uppercase">
            Featured
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-sage border border-sage/30 px-2 py-0.5">
            {product.category}
          </span>
          {product.wale && (
            <span className="text-[10px] font-medium tracking-[0.08em] text-charcoal/40">
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
        <div className="flex items-center gap-3 text-xs text-charcoal/40 border-t border-sand/40 pt-3">
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
            className="flex-1 text-center bg-terracotta text-white text-xs font-semibold tracking-wide py-2.5 hover:bg-terracotta-dark transition-colors"
          >
            Order via WhatsApp
          </a>
          <a
            href={getSampleUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 text-center border border-sand text-charcoal/60 text-xs font-medium py-2.5 hover:border-terracotta hover:text-terracotta transition-colors"
          >
            Sample
          </a>
        </div>
      </div>
    </motion.div>
  );
}
