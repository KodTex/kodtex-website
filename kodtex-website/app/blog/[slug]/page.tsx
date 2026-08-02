import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";
import { wa } from "@/lib/whatsapp";
import { withBase } from "@/lib/paths";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="pt-24 pb-24">
      {/* Hero */}
      {post.coverImage && (
        <div className="relative aspect-[21/9] max-h-[480px] overflow-hidden">
          <img
            src={withBase(post.coverImage)}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black/60 to-transparent" />
        </div>
      )}

      <div className="max-w-[780px] mx-auto px-6 md:px-10 pt-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-charcoal/40 mb-8">
          <Link href="/blog" className="hover:text-terracotta transition-colors">
            The Fabric Guide
          </Link>
          <span>/</span>
          <span className="text-charcoal/60">{post.category}</span>
        </div>

        <AnimatedSection>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-medium text-terracotta tracking-wide">
              {post.category}
            </span>
            <span className="text-xs text-charcoal/30">·</span>
            <span className="text-xs text-charcoal/40">{post.readingTime} read</span>
            <span className="text-xs text-charcoal/30">·</span>
            <span className="text-xs text-charcoal/40">
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-charcoal leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-charcoal/60 text-xl leading-relaxed mb-10 border-b border-sand/40 pb-10">
            {post.excerpt}
          </p>
        </AnimatedSection>

        {/* MDX Content */}
        <AnimatedSection delay={0.1}>
          <div className="prose prose-lg max-w-none
            prose-headings:font-heading prose-headings:text-charcoal prose-headings:font-normal
            prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-charcoal/70 prose-p:leading-relaxed prose-p:mb-4
            prose-li:text-charcoal/70 prose-li:leading-relaxed
            prose-strong:text-charcoal prose-strong:font-semibold
            prose-a:text-terracotta prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-terracotta prose-blockquote:text-charcoal/60
            prose-table:text-sm prose-th:text-charcoal prose-th:font-semibold
            prose-td:text-charcoal/70 prose-hr:border-sand/40
          ">
            <MDXRemote source={post.content} />
          </div>
        </AnimatedSection>

        {/* Author / CTA */}
        <div className="mt-12 border-t border-sand/40 pt-10">
          <div className="bg-linen-white border border-sand/40 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <div className="font-semibold text-charcoal text-sm">{post.author}</div>
              <div className="text-xs text-charcoal/40 mt-0.5">KodTex Fabric Guides</div>
            </div>
            <a
              href={wa.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-terracotta text-white text-xs font-semibold tracking-wide px-5 py-3 hover:bg-terracotta-dark transition-colors whitespace-nowrap"
            >
              WhatsApp KodTex →
            </a>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="font-heading text-2xl text-charcoal mb-6">More from the Fabric Guide</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex gap-4 items-start border border-sand/40 p-5 hover:border-terracotta/40 transition-colors"
                >
                  {p.coverImage && (
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                      <img
                        src={withBase(p.coverImage)}
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <span className="text-xs text-terracotta font-medium block mb-1">{p.category}</span>
                    <h3 className="font-semibold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
