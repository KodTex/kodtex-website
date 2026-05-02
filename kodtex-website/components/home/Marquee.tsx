const items = [
  "CORDUROY",
  "LINEN",
  "COTTON",
  "TWILL",
  "SHIRTING",
  "SUITING",
  "FURNISHING",
  "NO MINIMUM ORDER",
  "CUSTOMISE EVERY ORDER",
  "SINCE 1954",
  "AHMEDABAD, GUJARAT",
  "ISO 9001:2008",
];

export default function Marquee() {
  const text = items.join(" · ") + " · ";

  return (
    <div className="bg-charcoal py-4 overflow-hidden">
      <div className="flex">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          <span className="text-sand/80 text-xs font-medium tracking-[0.12em] uppercase mr-0">
            {text}{text}
          </span>
        </div>
        <div className="flex animate-marquee whitespace-nowrap will-change-transform" aria-hidden="true">
          <span className="text-sand/80 text-xs font-medium tracking-[0.12em] uppercase">
            {text}{text}
          </span>
        </div>
      </div>
    </div>
  );
}
