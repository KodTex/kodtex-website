import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const previewPosts = [
  {
    slug: "corduroy-guide",
    category: "Fabric Guide",
    title: "The Complete Guide to Corduroy Fabric",
    excerpt:
      "Everything you need to know — wale counts, compositions, care, and how to choose the right corduroy for your project.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
    readingTime: "6 min",
  },
  {
    slug: "linen-guide",
    category: "Fabric Guide",
    title: "Pure Linen: Why It&apos;s Worth It",
    excerpt:
      "Linen gets better with every wash. Here&apos;s what makes it special, how to care for it, and when to choose linen over cotton.",
    image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=600&q=80",
    readingTime: "5 min",
  },
  {
    slug: "fabric-care",
    category: "Care & Maintenance",
    title: "How to Care for Your Fabrics",
    excerpt:
      "Simple, practical guidance on washing, drying, and ironing cotton, linen, corduroy, and twill fabrics correctly.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80",
    readingTime: "4 min",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="The Fabric Guide"
              title="Know your fabric."
              subtitle="Guides for makers, tailors, and anyone who wants to understand the materials they work with."
            />
            <Link
              href="/blog"
              className="text-sm font-semibold text-charcoal/60 hover:text-terracotta transition-colors tracking-wide flex-shrink-0"
            >
              Explore all guides →
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {previewPosts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.09}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-terracotta tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-xs text-charcoal/30">·</span>
                  <span className="text-xs text-charcoal/40">{post.readingTime} read</span>
                </div>
                <h3 className="font-heading text-2xl text-charcoal leading-snug mb-3 group-hover:text-terracotta transition-colors">
                  {post.title.replace(/&apos;/g, "'")}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {post.excerpt.replace(/&apos;/g, "'")}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
