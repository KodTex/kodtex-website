import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Fabric Guide",
  description:
    "Guides, tips, and insights for makers, tailors, and designers. Learn about corduroy, linen, cotton, care, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-24 min-h-screen">
      {/* Header */}
      <div className="bg-charcoal py-20 md:py-28 mb-16">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-terracotta block mb-4">
              Knowledge Base
            </span>
            <h1 className="font-heading text-5xl md:text-7xl text-ivory leading-tight">
              The Fabric Guide
            </h1>
            <p className="text-sand/60 text-lg mt-4 max-w-xl">
              Everything you need to know about fabrics — from choosing the
              right wale count to caring for linen. Written for makers.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.07}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  {post.coverImage && (
                    <div className="aspect-[16/10] overflow-hidden mb-5">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-terracotta tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-charcoal/30">·</span>
                    <span className="text-xs text-charcoal/40">{post.readingTime} read</span>
                  </div>
                  <h2 className="font-heading text-2xl text-charcoal leading-snug mb-3 group-hover:text-terracotta transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-terracotta text-xs font-semibold tracking-wide group-hover:underline">
                    Read article →
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-charcoal/40">
            Articles coming soon.
          </div>
        )}
      </div>
    </div>
  );
}
