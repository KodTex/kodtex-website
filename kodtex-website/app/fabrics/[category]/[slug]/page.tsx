import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug, getRelatedProducts, getWhatsAppUrl, getSampleUrl } from "@/data/products";
import { categories } from "@/data/categories";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProductCard from "@/components/fabrics/ProductCard";
import ProductGallery from "@/components/fabrics/ProductGallery";
import { wa } from "@/lib/whatsapp";
import { withBase } from "@/lib/paths";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug, category } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.category !== category) notFound();

  const related = getRelatedProducts(product, 3);
  const whatsappUrl = getWhatsAppUrl(product);
  const sampleUrl = getSampleUrl(product);

  const specRows = [
    { label: "Composition", value: product.composition },
    { label: "Width", value: product.width },
    ...(product.weight ? [{ label: "Weight", value: product.weight }] : []),
    ...(product.wale ? [{ label: "Wale", value: product.wale }] : []),
    ...(product.finish ? [{ label: "Finish", value: product.finish }] : []),
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-charcoal/40 mb-10 pt-4">
          <a href={withBase("/fabrics")} className="hover:text-terracotta transition-colors">Fabrics</a>
          <span>/</span>
          <a href={withBase(`/fabrics/${product.category}`)} className="hover:text-terracotta transition-colors capitalize">
            {product.category}
          </a>
          <span>/</span>
          <span className="text-charcoal/60">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Image */}
          <AnimatedSection direction="left">
            <ProductGallery images={product.images} alt={product.name} />
          </AnimatedSection>

          {/* Details */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs font-medium tracking-[0.1em] uppercase text-terracotta mb-2 block">
                  {product.category}
                </span>
                <h1 className="font-heading text-4xl md:text-5xl text-charcoal leading-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specs */}
              <div className="border border-sand/60">
                <div className="px-5 py-3 border-b border-sand/60 bg-linen-white">
                  <span className="text-xs font-medium tracking-wide uppercase text-charcoal/50">
                    Specifications
                  </span>
                </div>
                <div className="divide-y divide-sand/40">
                  {specRows.map((row) => (
                    <div key={row.label} className="flex items-center px-5 py-3">
                      <span className="text-sm text-charcoal/50 w-32 flex-shrink-0">{row.label}</span>
                      <span className="text-sm text-charcoal font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              {product.applications.length > 0 && (
                <div>
                  <span className="text-xs font-medium tracking-wide uppercase text-charcoal/50 block mb-3">
                    Best For
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="border border-sand text-charcoal/70 text-xs font-medium px-3 py-1.5"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Colours */}
              {product.colours && product.colours.length > 0 ? (
                <div className="bg-linen-white border border-sand/40 p-5">
                  <span className="font-semibold text-charcoal text-sm block mb-4">
                    {product.colours.length} Colours Available
                  </span>
                  <div className="grid grid-cols-5 gap-3">
                    {product.colours.map((colour) => (
                      <div key={colour.name} className="flex flex-col items-center gap-1.5">
                        <div className="w-full aspect-square overflow-hidden border border-sand/50">
                          <img
                            src={withBase(colour.image)}
                            alt={colour.name}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-[11px] text-charcoal/60 text-center leading-tight">
                          {colour.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-charcoal/50 mt-4">
                    Shades may vary slightly from screen. WhatsApp us for a physical shade card.
                  </p>
                </div>
              ) : (
                <div className="bg-linen-white border border-sand/40 p-5 text-sm text-charcoal/70 leading-relaxed">
                  <span className="font-semibold text-charcoal block mb-1">Colours Available</span>
                  Multiple shades available — WhatsApp us to receive a shade chart or discuss your colour requirement.
                </div>
              )}

              {/* How ordering works */}
              <div className="bg-linen-white border border-sand/40 p-5">
                <span className="text-xs font-medium tracking-wide uppercase text-charcoal/50 block mb-4">
                  How Ordering Works
                </span>
                <div className="flex flex-col gap-3">
                  {[
                    { n: "1", label: "Not sure yet?", body: "Order a paid swatch first — small cut, real fabric, no commitment." },
                    { n: "2", label: "Ready to order?", body: "Any length works. No minimum order, ever." },
                    { n: "3", label: "Confirm on WhatsApp", body: "We quote by quantity and customisation, then you place the order." },
                  ].map((step) => (
                    <div key={step.n} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold flex items-center justify-center mt-0.5">
                        {step.n}
                      </span>
                      <p className="text-sm text-charcoal/70 leading-relaxed">
                        <span className="font-medium text-charcoal">{step.label}</span> {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-terracotta text-white text-sm font-semibold tracking-wide py-4 hover:bg-terracotta-dark transition-colors"
                >
                  Order via WhatsApp →
                </a>
                <a
                  href={sampleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-charcoal text-charcoal text-sm font-semibold tracking-wide py-4 hover:bg-charcoal hover:text-ivory transition-colors"
                >
                  Order a Sample First
                </a>
              </div>

              {/* Care */}
              {product.careInstructions && product.careInstructions.length > 0 && (
                <details className="border border-sand/60">
                  <summary className="px-5 py-3 text-sm font-medium text-charcoal cursor-pointer hover:bg-linen-white transition-colors flex items-center justify-between">
                    Fabric Care Guide
                    <span className="text-charcoal/30">+</span>
                  </summary>
                  <div className="px-5 py-4 border-t border-sand/40">
                    <ul className="flex flex-col gap-2">
                      {product.careInstructions.map((inst) => (
                        <li key={inst} className="text-sm text-charcoal/70 flex items-start gap-2">
                          <span className="text-terracotta mt-0.5">·</span>
                          {inst}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              )}
            </div>
          </AnimatedSection>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <AnimatedSection>
              <h2 className="font-heading text-3xl text-charcoal mb-8">
                More {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Fabrics
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <AnimatedSection key={p.id} delay={i * 0.07}>
                  <ProductCard product={p} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
