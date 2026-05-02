import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { wa } from "@/lib/whatsapp";

const audiences = [
  {
    icon: "🧵",
    title: "Individual Buyers",
    body: "Making one garment or one cushion? Order exactly what you need. No pressure, no minimums.",
  },
  {
    icon: "✂️",
    title: "Tailors",
    body: "Reliable quality, consistent colour runs, and enough range to satisfy any client's brief.",
  },
  {
    icon: "👗",
    title: "Designers",
    body: "Explore textures, test samples, and build collections with fabrics that photograph beautifully.",
  },
  {
    icon: "🛍️",
    title: "Boutiques",
    body: "Small to medium quantities, fast turnaround, and the kind of quality your customers can feel.",
  },
  {
    icon: "🏷️",
    title: "Fashion Labels",
    body: "From first runs to re-orders — consistent quality, no sudden MOQ surprises, direct contact.",
  },
  {
    icon: "🛋️",
    title: "Furnishing Buyers",
    body: "Heavy-duty corduroys and wovens built for sofas, curtains, cushions, and upholstery.",
  },
  {
    icon: "📦",
    title: "Bulk Buyers",
    body: "Decades of supplying textile businesses. Trade pricing. Reliable volumes. Since 1954.",
  },
];

export default function AudienceSection() {
  return (
    <section className="py-24 md:py-32 bg-linen-white">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Who we serve"
            title="Whether you make one piece or a hundred."
            subtitle="KodTex is built for every kind of maker — no gatekeeping, no minimums."
            align="center"
            className="mb-16"
          />
        </AnimatedSection>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="md:hidden -mx-6 px-6 overflow-x-auto">
          <div className="flex gap-4 pb-4 w-max">
            {audiences.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.05}>
                <div className="w-[80vw] max-w-[280px] bg-ivory border border-sand/40 p-6 flex flex-col gap-3">
                  <span className="text-3xl">{a.icon}</span>
                  <h3 className="font-semibold text-charcoal text-base">{a.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{a.body}</p>
                  <a
                    href={wa.general()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terracotta text-xs font-semibold tracking-wide mt-auto hover:underline"
                  >
                    Talk to us →
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.05}>
              <div className="bg-ivory border border-sand/40 p-6 flex flex-col gap-3 h-full hover:border-terracotta/40 hover:shadow-sm transition-all">
                <span className="text-3xl">{a.icon}</span>
                <h3 className="font-semibold text-charcoal text-base">{a.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed flex-1">{a.body}</p>
                <a
                  href={wa.general()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta text-xs font-semibold tracking-wide mt-2 hover:underline"
                >
                  Talk to us →
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
