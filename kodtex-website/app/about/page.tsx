import type { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { wa } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About KodTex",
  description:
    "KodTex is a modern D2C fabric brand backed by Kailash Vivek & Co., a textile business established in 1954 in Ahmedabad, Gujarat.",
};

const timeline = [
  { year: "1954", label: "Kailash Vivek & Co. founded in Ahmedabad, Gujarat." },
  { year: "1980s", label: "Established as a leading corduroy specialist in Gujarat's textile market." },
  { year: "2000s", label: "ISO 9001:2008 certification. Expanding the corduroy range to 200+ SKUs." },
  { year: "2017", label: "GST registration. IEC Code obtained for international trade." },
  { year: "2024", label: "KodTex launches — bringing 70 years of textile expertise directly to makers." },
];

const values = [
  {
    title: "Craft First",
    body: "Every decision starts with the fabric — its quality, texture, and integrity.",
  },
  {
    title: "Radical Transparency",
    body: "No hidden minimums, no surprise pricing. What you see is what you get.",
  },
  {
    title: "Made for Makers",
    body: "We exist to serve the people who actually make things — tailors, designers, boutiques, individuals.",
  },
  {
    title: "Indian Origin, Global Standard",
    body: "From Ahmedabad to anywhere. ISO certified. Trusted by businesses for seven decades.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden bg-charcoal py-28 md:py-36">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-terracotta block mb-5">
              Our Story
            </span>
            <h1 className="font-heading text-6xl md:text-8xl text-ivory leading-tight max-w-2xl">
              Seven decades of textile craft.
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Story */}
      <div className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <AnimatedSection direction="left">
              <SectionHeading
                eyebrow="Kailash Vivek & Co."
                title="From a trading house in Ahmedabad to your doorstep."
                className="mb-8"
              />
              <div className="flex flex-col gap-5 text-charcoal/70 text-base leading-relaxed">
                <p>
                  In 1954, Kailash Vivek & Co. opened its doors in the heart of
                  Ahmedabad's fabric district — one of the world's great textile
                  centres. What began as a trading and distribution business
                  grew into one of Gujarat's most trusted names in fabric supply,
                  specialising in corduroy, linen, cotton, twill, and furnishing
                  fabrics.
                </p>
                <p>
                  Over seven decades, the business earned ISO 9001:2008
                  certification, expanded its corduroy range to the widest in
                  India, and built lasting relationships with textile businesses
                  across the country.
                </p>
                <p>
                  KodTex is the next chapter. The same heritage. The same
                  quality. Brought directly to the makers, designers, tailors,
                  and individuals who care about what they're working with.
                </p>
                <p>
                  No wholesaler markups. No minimum orders. Just fabric, your
                  way.
                </p>
              </div>
            </AnimatedSection>

            {/* Heritage image */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden bg-sand/20">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85"
                    alt="Fabric rolls at Kailash Vivek & Co."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-terracotta text-white p-6">
                  <div className="font-heading text-4xl">70+</div>
                  <div className="text-xs text-white/70 uppercase tracking-wide mt-1">
                    Years of Expertise
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 md:py-28 bg-linen-white">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Timeline"
              title="Seven decades of textile history."
              className="mb-16"
            />
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-sand/60 md:-translate-x-1/2" />
            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.08}>
                  <div className={`flex flex-col md:flex-row gap-6 md:gap-0 relative pl-6 md:pl-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="md:w-1/2 md:pr-16 md:text-right flex-shrink-0">
                      {i % 2 === 0 ? (
                        <>
                          <div className="font-heading text-3xl text-terracotta mb-2">{item.year}</div>
                          <p className="text-charcoal/70 text-base">{item.label}</p>
                        </>
                      ) : null}
                    </div>
                    <div className="absolute left-0 md:left-1/2 -translate-y-1 md:-translate-x-1/2 w-3 h-3 rounded-full bg-terracotta border-2 border-ivory" />
                    <div className="md:w-1/2 md:pl-16 flex-shrink-0">
                      {i % 2 !== 0 ? (
                        <>
                          <div className="font-heading text-3xl text-terracotta mb-2">{item.year}</div>
                          <p className="text-charcoal/70 text-base">{item.label}</p>
                        </>
                      ) : null}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Values"
              title="What we stand for."
              className="mb-14"
            />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="border-t-2 border-terracotta pt-6">
                  <h3 className="font-semibold text-charcoal text-lg mb-3">{v.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{v.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Team Placeholder */}
      <div className="py-20 md:py-28 bg-linen-white">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="The Team"
              title="Behind KodTex."
              className="mb-12"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col md:flex-row gap-8 items-start max-w-xl">
              <div className="w-20 h-20 rounded-full bg-sand/40 flex items-center justify-center flex-shrink-0 border border-sand/60">
                <span className="font-heading text-2xl text-charcoal/60">VM</span>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal text-xl mb-1">Vivek Mendiratta</h3>
                <p className="text-terracotta text-sm mb-3">CEO, Kailash Vivek & Co. · Founder, KodTex</p>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  Third-generation textile professional. Based in Ahmedabad.
                  Leading Kailash Vivek & Co. into its next chapter as KodTex —
                  making premium fabrics accessible to every kind of maker.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-charcoal">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl text-ivory mb-2">
              Ready to explore the fabric?
            </h2>
            <p className="text-sand/60 text-sm">No minimums. WhatsApp us to get started.</p>
          </div>
          <a
            href={wa.general()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta text-white text-sm font-semibold tracking-wide px-7 py-4 hover:bg-terracotta-dark transition-colors whitespace-nowrap"
          >
            WhatsApp Us →
          </a>
        </div>
      </div>
    </div>
  );
}
