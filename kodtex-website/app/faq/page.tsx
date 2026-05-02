import type { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { faqItems, faqCategories } from "@/data/faq";
import { wa } from "@/lib/whatsapp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Common questions about ordering from KodTex — minimums, samples, customisation, delivery, fabric care, and trade.",
};

export default function FAQPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-[820px] mx-auto px-6 md:px-10 pt-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions."
            subtitle="Can't find your answer? WhatsApp us — we'll reply personally."
            className="mb-14"
          />
        </AnimatedSection>

        {faqCategories.map((cat, ci) => {
          const items = faqItems.filter((f) => f.category === cat.key);
          return (
            <AnimatedSection key={cat.key} delay={ci * 0.05}>
              <div className="mb-10">
                <h2 className="text-xs font-medium tracking-[0.1em] uppercase text-terracotta mb-4 border-b border-sand/40 pb-3">
                  {cat.label}
                </h2>
                <Accordion className="space-y-0">
                  {items.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="border-b border-sand/40">
                      <AccordionTrigger className="text-left text-sm font-medium text-charcoal py-4 hover:text-terracotta transition-colors hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-charcoal/70 text-sm leading-relaxed pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          );
        })}

        <AnimatedSection>
          <div className="mt-10 bg-charcoal p-8 text-center">
            <h3 className="font-heading text-2xl text-ivory mb-3">
              Still have questions?
            </h3>
            <p className="text-sand/60 text-sm mb-6">
              WhatsApp us directly — we reply personally, not via bots.
            </p>
            <a
              href={wa.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-terracotta text-white text-sm font-semibold px-6 py-3 hover:bg-terracotta-dark transition-colors"
            >
              WhatsApp Us →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
