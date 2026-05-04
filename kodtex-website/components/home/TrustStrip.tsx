import AnimatedSection from "@/components/shared/AnimatedSection";
import { Calendar, ShieldCheck, Building2, MapPin } from "lucide-react";

const signals = [
  { value: "Est. 1954", label: "Textile Heritage", Icon: Calendar },
  { value: "ISO 9001:2008", label: "Quality Certified", Icon: ShieldCheck },
  { value: "Kailash Vivek & Co.", label: "Backed By", Icon: Building2 },
  { value: "Ahmedabad, Gujarat", label: "Made in India", Icon: MapPin },
];

export default function TrustStrip() {
  return (
    <section className="py-10 bg-linen-white border-b border-sand/30">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {signals.map((s, i) => (
              <div
                key={s.value}
                className={`flex flex-col items-center text-center py-3 gap-2 ${
                  i < signals.length - 1
                    ? "md:border-r md:border-sand/30"
                    : ""
                }`}
              >
                <s.Icon size={16} className="text-terracotta/70" />
                <span className="font-heading text-lg md:text-xl text-charcoal leading-tight">
                  {s.value}
                </span>
                <span className="text-xs text-charcoal/45 tracking-[0.08em] uppercase">
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
