import AnimatedSection from "@/components/shared/AnimatedSection";

const signals = [
  { value: "Est. 1954", label: "Textile Heritage" },
  { value: "ISO 9001:2008", label: "Quality Certified" },
  { value: "Kailash Vivek & Co.", label: "Backed By" },
  { value: "Ahmedabad, Gujarat", label: "Made in India" },
];

export default function TrustStrip() {
  return (
    <section className="py-10 bg-ivory border-b border-sand/40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {signals.map((s, i) => (
              <div
                key={s.value}
                className={`flex flex-col items-center text-center py-2 ${
                  i < signals.length - 1
                    ? "md:border-r md:border-sand/40"
                    : ""
                }`}
              >
                <span className="font-heading text-lg md:text-xl text-charcoal">
                  {s.value}
                </span>
                <span className="text-xs text-charcoal/50 tracking-[0.08em] uppercase mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
