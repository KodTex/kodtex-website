import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCategoryBySlug, categories } from "@/data/categories";
import { getProductsByCategory, FabricCategory } from "@/data/products";
import ProductCard from "@/components/fabrics/ProductCard";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.label} Fabrics`,
    description: cat.longDescription,
  };
}

const categoryImages: Record<string, string> = {
  corduroy: "/images/fabrics/corduroy/category-hero-khakhi.jpg",
  linen: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=1600&q=85",
  cotton: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1600&q=85",
  twill: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1600&q=85",
  shirting: "/images/fabrics/shirting/dobby-shirting-navy.jpg",
  suiting: "https://images.unsplash.com/photo-1636715986446-d58f0f9b3916?w=1600&q=85",
  furnishing: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=85",
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const categoryProducts = getProductsByCategory(category as FabricCategory);

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${categoryImages[category]}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-black/80 via-warm-black/40 to-transparent" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 pb-12 w-full">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 block mb-3">
            Fabric Collection
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-white leading-none">
            {cat.label}
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="bg-ivory border-b border-sand/30">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-12">
          <AnimatedSection>
            <p className="text-charcoal/70 text-lg leading-relaxed max-w-2xl">
              {cat.longDescription}
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-16">
        {categoryProducts.length > 0 ? (
          <>
            <AnimatedSection>
              <SectionHeading
                eyebrow={`${categoryProducts.length} fabrics`}
                title={`${cat.label} Fabrics`}
                className="mb-10"
              />
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product, i) => (
                <AnimatedSection key={product.id} delay={i * 0.07}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          </>
        ) : (
          <div className="py-20 text-center">
            <p className="text-charcoal/40 mb-4">Products coming soon.</p>
            <p className="text-charcoal/60 text-sm">
              WhatsApp us to ask about available {cat.label.toLowerCase()} fabrics.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
