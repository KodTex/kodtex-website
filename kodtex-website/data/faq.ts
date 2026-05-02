export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "ordering" | "samples" | "customisation" | "delivery" | "care" | "trade";
}

export const faqItems: FAQItem[] = [
  // Ordering
  {
    id: "o-1",
    category: "ordering",
    question: "Is there a minimum order quantity?",
    answer:
      "No — and this is our biggest differentiator. You can order 1 metre or 1000 metres. Every order is treated with the same care and quality. Order exactly what you need, nothing more.",
  },
  {
    id: "o-2",
    category: "ordering",
    question: "How do I place an order?",
    answer:
      "Simply WhatsApp us at +91 7990273955 with the fabric you're interested in, the quantity you need, and any colour preferences. We'll share availability, pricing, and a shade chart if needed.",
  },
  {
    id: "o-3",
    category: "ordering",
    question: "Do you show prices on the website?",
    answer:
      "We don't list fixed prices because pricing depends on fabric, quantity, finish, and any customisation. WhatsApp us and we'll give you an honest quote within the hour.",
  },
  {
    id: "o-4",
    category: "ordering",
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfer (NEFT/RTGS/IMPS), UPI, and cash for in-person pickups from our Ahmedabad location. We'll confirm payment details when you place your order.",
  },

  // Samples
  {
    id: "s-1",
    category: "samples",
    question: "Can I get fabric samples before ordering?",
    answer:
      "Yes — we offer paid fabric samples. You can order small cut samples (typically 15cm × 15cm) or full shade charts for our colour ranges. WhatsApp us to arrange a sample order.",
  },
  {
    id: "s-2",
    category: "samples",
    question: "What is a shade chart?",
    answer:
      "A shade chart is a set of small fabric swatches showing all available colours for a particular fabric. It's the best way to see our full colour range before committing to a larger order. We charge a nominal fee for shade charts.",
  },
  {
    id: "s-3",
    category: "samples",
    question: "How long does it take to receive samples?",
    answer:
      "Sample orders are typically dispatched within 2–3 business days. Delivery time depends on your location — usually 3–5 days for most of India.",
  },

  // Customisation
  {
    id: "c-1",
    category: "customisation",
    question: "Can I customise my order?",
    answer:
      "Yes — all orders can be customised. Tell us your exact length requirement, colour preference, and any specific finish or treatment. We'll tell you what's possible and give you a quote.",
  },
  {
    id: "c-2",
    category: "customisation",
    question: "Do you offer custom colours or dyeing?",
    answer:
      "For larger quantities, custom colour dyeing is possible. Speak to our team on WhatsApp to discuss requirements, minimums for custom dyeing, and timelines.",
  },
  {
    id: "c-3",
    category: "customisation",
    question: "Can I get fabric in specific widths or weights?",
    answer:
      "Our standard fabric widths range from 54 to 60 inches. Custom widths may be possible for bulk orders. WhatsApp us with your specific requirements.",
  },

  // Delivery
  {
    id: "d-1",
    category: "delivery",
    question: "Do you deliver across India?",
    answer:
      "Yes, we deliver pan-India. We use trusted courier partners for most orders. Delivery time is typically 4–7 business days depending on your location.",
  },
  {
    id: "d-2",
    category: "delivery",
    question: "Do you ship internationally?",
    answer:
      "Yes, we do ship internationally. Shipping costs and timelines vary by country. WhatsApp us with your location and order details for a shipping quote.",
  },
  {
    id: "d-3",
    category: "delivery",
    question: "Can I pick up from your Ahmedabad location?",
    answer:
      "Yes — you're welcome to visit or arrange a pickup from our Ahmedabad location. Please WhatsApp us in advance to confirm stock availability and schedule your visit.",
  },

  // Care
  {
    id: "ca-1",
    category: "care",
    question: "How should I care for corduroy fabric?",
    answer:
      "Most of our corduroy fabrics are machine washable in cold water. Turn garments inside out before washing to protect the wales. Tumble dry on low or line dry. Iron on the reverse while slightly damp. Avoid high heat.",
  },
  {
    id: "ca-2",
    category: "care",
    question: "How do I care for linen fabric?",
    answer:
      "Pure linen can be hand washed or machine washed on a delicate cycle. Line dry rather than tumble drying. Linen wrinkles naturally — iron while slightly damp or embrace the relaxed texture.",
  },
  {
    id: "ca-3",
    category: "care",
    question: "Will the fabric shrink after washing?",
    answer:
      "Natural fibres like cotton and linen may shrink slightly on first wash. We recommend pre-washing fabric before cutting and stitching for best results. Our team can advise on shrinkage allowances if needed.",
  },

  // Trade
  {
    id: "tr-1",
    category: "trade",
    question: "Do you supply to businesses and trade buyers?",
    answer:
      "Yes — we've been supplying textile businesses since 1954 under Kailash Vivek & Co. We work with boutiques, fashion labels, tailoring studios, and retail businesses. WhatsApp us to discuss trade arrangements.",
  },
  {
    id: "tr-2",
    category: "trade",
    question: "Are there better prices for bulk orders?",
    answer:
      "Pricing varies with quantity — larger orders typically get better rates. WhatsApp us with your volume requirements and we'll give you a trade quote.",
  },
];

export const faqCategories = [
  { key: "ordering", label: "Ordering" },
  { key: "samples", label: "Samples" },
  { key: "customisation", label: "Customisation" },
  { key: "delivery", label: "Delivery" },
  { key: "care", label: "Fabric Care" },
  { key: "trade", label: "Trade & Bulk" },
] as const;
