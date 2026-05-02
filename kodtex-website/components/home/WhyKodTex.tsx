import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const usps = [
  {
    number: "01",
    title: "No Minimum Order",
    body: "Order 1 metre or 1000. Every order matters.",
  },
  {
    number: "02",
    title: "Fully Customisable",
    body: "Colour, length, finish — specify exactly what you need.",
  },
  {
    number: "03",
    title: "Samples Available",
    body: "Order shade charts or small cuts before committing.",
  },
  {
    number: "04",
    title: "Fast Pan-India Delivery",
    body: "Tracked shipping. Quick turnaround from Ahmedabad.",
  },
  {
    number: "05",
    title: "70 Years of Expertise",
    body: "ISO certified. Kailash Vivek & Co. heritage in every bolt.",
  },
  {
    number: "06",
    title: "International Shipping",
    body: "India is home. The world is open. We ship globally.",
  },
];

export default function WhyKodTex() {
  return (
    <section className="py-24 md:py-32 bg-deep-slate">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Why KodTex"
            title={"Made for makers.\nNo rules, no minimums."}
            subtitle="We built KodTex for people who take fabric seriously — whether you make one piece or a hundred."
            light
            className="mb-16 md:mb-20"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {usps.map((usp, i) => (
            <AnimatedSection key={usp.number} delay={i * 0.07}>
              <div className="bg-deep-slate p-8 md:p-10 flex flex-col gap-4 h-full group hover:bg-white/5 transition-colors">
                <span className="text-white/20 font-heading text-4xl leading-none">
                  {usp.number}
                </span>
                <h3 className="text-ivory font-semibold text-lg">
                  {usp.title}
                  {usp.number === "01" && (
                    <span className="ml-2 text-xs bg-terracotta text-white px-2 py-0.5 font-medium tracking-wide">
                      KEY USP
                    </span>
                  )}
                </h3>
                <p className="text-sand/70 text-sm leading-relaxed">{usp.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
