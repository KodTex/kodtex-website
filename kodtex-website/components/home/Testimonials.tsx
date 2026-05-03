import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { testimonials } from "@/data/testimonials";

const rotationClasses = ["rotate-0", "rotate-[0.5deg]", "-rotate-[0.8deg]"];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="What makers say"
            title="Quality you can feel."
            className="mb-16"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection
              key={t.id}
              delay={i * 0.1}
            >
              <div
                className={`bg-linen-white border border-sand/40 p-8 flex flex-col gap-6 h-full ${rotationClasses[i] ?? "rotate-0"}`}
              >
                {/* Quote mark */}
                <span aria-hidden="true" className="font-heading text-6xl text-terracotta/30 leading-none -mb-4 select-none">
                  &ldquo;
                </span>

                <p className="text-charcoal/80 text-base leading-relaxed italic flex-1">
                  {t.quote}
                </p>

                {t.fabric && (
                  <div className="text-xs text-terracotta font-medium tracking-wide border-l-2 border-terracotta pl-3">
                    {t.fabric}
                  </div>
                )}

                <div>
                  <div className="font-semibold text-charcoal text-sm">{t.name}</div>
                  <div className="text-charcoal/50 text-xs mt-0.5">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
