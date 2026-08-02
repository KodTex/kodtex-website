import AnimatedSection from "@/components/shared/AnimatedSection";
import { InstagramIcon } from "@/components/shared/Icons";
import { withBase } from "@/lib/paths";

const placeholderPosts = [
  { id: "1", imageUrl: "/images/hero/hero-corduroy-navy.jpg", alt: "Corduroy fabric close-up" },
  { id: "2", imageUrl: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=400&q=80", alt: "Linen texture detail" },
  { id: "3", imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80", alt: "Cotton fabric weave" },
  { id: "4", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", alt: "Fabric rolls in warehouse" },
  { id: "5", imageUrl: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80", alt: "Twill fabric detail" },
  { id: "6", imageUrl: "/images/fabrics/shirting/dobby-shirting-navy.jpg", alt: "Shirting fabric close-up" },
];

export default function InstagramFeed() {
  return (
    <section className="py-20 md:py-28 bg-linen-white">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <span className="text-xs font-medium tracking-[0.12em] uppercase text-terracotta block mb-2">
                Instagram
              </span>
              <h2 className="font-heading text-4xl text-charcoal">Follow the craft</h2>
            </div>
            <a
              href="https://www.instagram.com/kodtex/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-charcoal/60 hover:text-terracotta transition-colors text-sm font-medium"
            >
              <InstagramIcon size={16} />
              @kodtex
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {placeholderPosts.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.06}>
              <a
                href="https://www.instagram.com/kodtex/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-square overflow-hidden group"
              >
                <img
                  src={withBase(post.imageUrl)}
                  alt={post.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/20 transition-all duration-300 flex items-center justify-center">
                  <InstagramIcon
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/kodtex/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-charcoal/60 hover:text-terracotta transition-colors text-sm font-medium"
            >
              <InstagramIcon size={16} />
              Follow @kodtex on Instagram
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
