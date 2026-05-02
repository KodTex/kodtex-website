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

const SEP = <span className="text-terracotta/60 mx-3">✦</span>;

export default function Marquee() {
  const segments = items.flatMap((item, i) => [
    <span key={`item-${i}`} className="text-sand/70 text-[11px] font-medium tracking-[0.14em] uppercase">
      {item}
    </span>,
    <span key={`sep-${i}`} className="text-terracotta/60 mx-3">✦</span>,
  ]);

  return (
    <div className="bg-warm-black border-y border-white/5 py-3.5 overflow-hidden group">
      <div className="flex">
        <div className="flex items-center animate-marquee whitespace-nowrap will-change-transform">
          {segments}{segments}
        </div>
        <div className="flex items-center animate-marquee whitespace-nowrap will-change-transform" aria-hidden="true">
          {segments}{segments}
        </div>
      </div>
    </div>
  );
}
