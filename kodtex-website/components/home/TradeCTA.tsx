import AnimatedSection from "@/components/shared/AnimatedSection";
import { wa } from "@/lib/whatsapp";

export default function TradeCTA() {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-sand/50 block mb-5">
              Trade & Bulk
            </span>
            <h2 className="font-heading text-5xl md:text-6xl text-ivory leading-tight mb-6">
              Supplying textile businesses since 1954.
            </h2>
            <p className="text-sand/70 text-lg leading-relaxed mb-10">
              Bulk quantities, custom requirements, and the kind of trade
              relationship built over decades — not dashboards. Let&apos;s talk.
            </p>
            <a
              href={wa.tradeInquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-terracotta text-white text-sm font-semibold tracking-wide px-7 py-4 hover:bg-terracotta-dark transition-colors"
            >
              Talk to Our Trade Team →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
