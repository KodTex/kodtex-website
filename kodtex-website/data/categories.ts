import { FabricCategory } from "./products";

export interface Category {
  slug: FabricCategory;
  label: string;
  description: string;
  longDescription: string;
  image: string;
  heroImage: string;
  accent: string;
}

export const categories: Category[] = [
  {
    slug: "corduroy",
    label: "Corduroy",
    description: "India's widest corduroy range. 4-wale to 21-wale.",
    longDescription:
      "From fine 21-wale to bold 8-wale, structured to stretch, yarn-dyed to indigo — our corduroy range is the most comprehensive in India. Kailash Vivek & Co. has specialised in corduroy for decades. KodTex brings that expertise directly to you.",
    image: "/images/fabrics/corduroy/14-wale-cotton-corduroy.jpg",
    heroImage: "/images/fabrics/corduroy/14-wale-cotton-corduroy.jpg",
    accent: "#C25C35",
  },
  {
    slug: "linen",
    label: "Linen",
    description: "Pure linen and linen blends. Honest, breathable, natural.",
    longDescription:
      "Pure linen is one of nature's finest fabrics — breathable, natural, and only getting better with age. We carry pure 100% linen in shirting and suiting weights, as well as linen-cotton blends for those who want linen character with added softness.",
    image: "/images/fabrics/linen/pure-linen-shirting.jpg",
    heroImage: "/images/fabrics/linen/pure-linen-shirting.jpg",
    accent: "#6B7D6A",
  },
  {
    slug: "cotton",
    label: "Cotton",
    description: "100% cotton in every weight and weave.",
    longDescription:
      "The most versatile natural fibre. Our cotton range covers poplin, interlock, jersey, satin, and more — from featherweight shirting to structured bottom weights. 100% cotton, tested for quality and colorfastness.",
    image: "/images/fabrics/cotton/100-cotton-poplin.jpg",
    heroImage: "/images/fabrics/cotton/100-cotton-poplin.jpg",
    accent: "#CDB99A",
  },
  {
    slug: "twill",
    label: "Twill",
    description: "The diagonal weave that tailors trust.",
    longDescription:
      "Twill's diagonal weave structure gives it superior drape, durability, and that unmistakable textured hand. Our range includes chino-weight cotton twill, denim-adjacent fabrics, and blended twills for both formal and casual applications.",
    image: "/images/fabrics/twill/cotton-twill-chino.jpg",
    heroImage: "/images/fabrics/twill/cotton-twill-chino.jpg",
    accent: "#1A1E26",
  },
  {
    slug: "shirting",
    label: "Shirting",
    description: "Premium shirting fabrics for tailors and designers.",
    longDescription:
      "Our shirting range is curated for makers who understand the difference a quality base fabric makes. From crisp poplin and dobby weaves to subtle textures and prints — all in shirt-weight constructions that stitch cleanly and wear beautifully.",
    image: "/images/fabrics/shirting/dobby-weave-shirting.jpg",
    heroImage: "/images/fabrics/shirting/dobby-weave-shirting.jpg",
    accent: "#6B7D6A",
  },
  {
    slug: "suiting",
    label: "Suiting",
    description: "Structured, elegant suiting for tailored work.",
    longDescription:
      "For the tailor who takes their work seriously. Our suiting fabrics offer the structure, drape, and wrinkle resistance that formal wear demands. Available in wool blends, poly-viscose, and linen suiting weights.",
    image: "/images/fabrics/suiting/poly-viscose-suiting.jpg",
    heroImage: "/images/fabrics/suiting/poly-viscose-suiting.jpg",
    accent: "#2D3340",
  },
  {
    slug: "furnishing",
    label: "Furnishing",
    description: "Heavy-duty fabrics built for interior applications.",
    longDescription:
      "Our furnishing range brings the same textile expertise to your home. Heavy-weight corduroy, canvas, and woven fabrics engineered for sofas, curtains, cushions, and upholstery. Fade-resistant, durable, and beautifully textured.",
    image: "/images/fabrics/furnishing/corduroy-furnishing-fabric.jpg",
    heroImage: "/images/fabrics/furnishing/corduroy-furnishing-fabric.jpg",
    accent: "#C25C35",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
