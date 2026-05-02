export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  fabric?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-001",
    name: "Meera S.",
    role: "Independent Fashion Designer",
    location: "Mumbai, Maharashtra",
    quote:
      "I've been sourcing corduroy from KodTex for my winter collection. The 14-wale is consistently excellent — colour is true, texture is uniform, and they actually answer when I call. No one else stocks this range.",
    fabric: "14-Wale Cotton Corduroy",
  },
  {
    id: "t-002",
    name: "Rajan T.",
    role: "Master Tailor",
    location: "Jaipur, Rajasthan",
    quote:
      "The pure linen shirting is what my clients ask for by name now. Quality hasn't changed in three years of ordering. And the fact that I can order exactly what I need — even 5 metres — makes all the difference.",
    fabric: "Pure Linen Shirting",
  },
  {
    id: "t-003",
    name: "Priya & Co.",
    role: "Boutique Owner",
    location: "Bengaluru, Karnataka",
    quote:
      "We tried four suppliers before finding KodTex. The indigo corduroy for our festive line sold out in two weeks. The heritage behind this brand shows in every bolt — you can feel the decades of experience.",
    fabric: "Indigo Yarn-Dyed Corduroy",
  },
];
