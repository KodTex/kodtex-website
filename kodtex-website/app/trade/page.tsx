import type { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { wa } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Trade & Bulk Fabric",
  description:
    "KodTex supplies fabric to businesses, boutiques, and fashion labels. No minimums. Custom quantities. Trade pricing. Backed by Kailash Vivek & Co., est. 1954.",
};

const steps = [
  {
    number: "01",
    title: "WhatsApp your requirement",
    body: "Tell us the fabric type, quantity estimate, and any colour or finish preferences.",
  },
  {
    number: "02",
    title: "We share pricing",
    body: "You'll receive a quote based on your exact requirement — no hidden costs.",
  },
  {
    number: "03",
    title: "Approve and order",
    body: "Confirm your order. We dispatch quickly with tracked shipping.",
  },
  {
    number: "04",
    title: "Reorder anytime",
    body: "Consistent quality, reliable availability, and a direct line to our team.",
  },
];

const tradeFaqs = [
  {
    q: "Do you offer trade or wholesale pricing?",
    a: "Pricing scales with quantity. WhatsApp us with your volume requirements and we'll share our trade rates.",
  },
  {
    q: "Is there a minimum order for trade buyers?",
    a: "No minimum order — even for trade buyers. Order exactly what you need.",
  },
  {
    q: "Can we get consistent quality across re-orders?",
    a: "Yes. Our ISO-certified quality control ensures consistent colour and construction across every order.",
  },
  {
    q: "Do you provide GST invoices?",
    a: "Yes, GST invoices are provided for all orders. Our GST number is 24AFCPM9485J1ZZ.",
  },
];

export default function TradePage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative bg-deep-slate py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')" }}
        />
        <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-terracotta block mb-5">
              Trade & Bulk
            </span>
            <h1 className="font-heading text-6xl md:text-8xl text-ivory leading-tight max-w-3xl mb-6">
              Supplying textile businesses since 1954.
            </h1>
            <p className="text-sand/70 text-lg max-w-xl mb-10">
              Bulk quantities, custom requirements, and the kind of trade
              relationship built over decades — not dashboards.
            </p>
            <a
              href={wa.tradeInquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-terracotta text-white text-sm font-semibold tracking-wide px-7 py-4 hover:bg-terracotta-dark transition-colors"
            >
              Start a Trade Conversation →
            </a>
          </AnimatedSection>
        </div>
      </div>

      {/* Why Trade with KodTex */}
      <div className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Why KodTex for Trade"
              title="Reliability built over 70 years."
              className="mb-14"
            />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "No Minimum Order", body: "Even trade orders have no minimums. Order what you need, when you need it." },
              { title: "Consistent Quality", body: "ISO 9001:2008 certified. Same quality across every lot, every re-order." },
              { title: "Direct Communication", body: "No support tickets. Talk to a human. WhatsApp us directly." },
              { title: "Custom Requirements", body: "Tell us exactly what you need — colour, length, finish. We'll make it work." },
              { title: "GST Invoicing", body: "Proper documentation for every order. GST invoices issued always." },
              { title: "Fast Dispatch", body: "Quick turnaround from our Ahmedabad base. Pan-India and international shipping." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="border border-sand/40 p-7">
                  <h3 className="font-semibold text-charcoal text-lg mb-3">{item.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="How It Works"
              title="Simple. Personal. Fast."
              light
              className="mb-14"
            />
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.08}>
                <div className="flex flex-col gap-4">
                  <span className="font-heading text-5xl text-white/15">{step.number}</span>
                  <h3 className="font-semibold text-ivory text-lg">{step.title}</h3>
                  <p className="text-sand/60 text-sm leading-relaxed">{step.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 md:py-28 bg-linen-white">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 max-w-2xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Trade FAQ"
              title="Common questions."
              className="mb-10"
            />
          </AnimatedSection>
          <div className="flex flex-col divide-y divide-sand/40">
            {tradeFaqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="py-6">
                  <h3 className="font-semibold text-charcoal text-base mb-2">{faq.q}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-terracotta">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
              Let&apos;s start a conversation.
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-md mx-auto">
              WhatsApp us with your requirement. We&apos;ll respond within the hour.
            </p>
            <a
              href={wa.tradeInquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-terracotta text-sm font-bold tracking-wide px-8 py-4 hover:bg-ivory transition-colors"
            >
              WhatsApp Our Trade Team →
            </a>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
