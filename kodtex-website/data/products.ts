import { wa } from "@/lib/whatsapp";

export type FabricCategory =
  | "corduroy"
  | "linen"
  | "cotton"
  | "twill"
  | "shirting"
  | "suiting"
  | "furnishing";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: FabricCategory;
  shortDescription: string;
  description: string;
  composition: string;
  width: string;
  weight?: string;
  wale?: string;
  finish?: string;
  applications: string[];
  images: string[];
  featured: boolean;
  inStock: boolean;
  careInstructions?: string[];
}

export const products: Product[] = [
  // CORDUROY
  {
    id: "c-001",
    slug: "14-wale-cotton-corduroy",
    name: "14-Wale Cotton Corduroy",
    category: "corduroy",
    shortDescription: "The classic corduroy. Fine wales, rich texture, exceptional drape.",
    description:
      "Our 14-wale cotton corduroy is the versatile workhorse of the corduroy world. Fine enough for tailored trousers and blazers, sturdy enough for bags and upholstery. 100% cotton, woven with precision at our Ahmedabad mill.",
    composition: "100% Cotton",
    width: "58 inches",
    weight: "280 GSM",
    wale: "14-wale",
    finish: "Piece-dyed",
    applications: ["Trousers", "Jackets", "Blazers", "Bags", "Cushions"],
    images: ["/images/fabrics/corduroy/14-wale-cotton-corduroy.jpg"],
    featured: true,
    inStock: true,
    careInstructions: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Iron on reverse"],
  },
  {
    id: "c-002",
    slug: "8-wale-wide-corduroy",
    name: "8-Wale Wide Corduroy",
    category: "corduroy",
    shortDescription: "Bold wales, statement texture. For those who want corduroy noticed.",
    description:
      "Wide-wale corduroy with bold, pronounced ridges. Ideal for outerwear, structured jackets, and furnishing. The 8-wale structure gives it a strong visual identity while retaining the warmth and softness cotton corduroy is known for.",
    composition: "100% Cotton",
    width: "58 inches",
    weight: "320 GSM",
    wale: "8-wale",
    finish: "Piece-dyed",
    applications: ["Outerwear", "Jackets", "Furnishing", "Upholstery"],
    images: ["/images/fabrics/corduroy/8-wale-cotton-corduroy.jpg"],
    featured: true,
    inStock: true,
    careInstructions: ["Machine wash cold", "Tumble dry low", "Do not bleach"],
  },
  {
    id: "c-003",
    slug: "21-wale-fine-corduroy",
    name: "21-Wale Fine Corduroy",
    category: "corduroy",
    shortDescription: "The finest corduroy we make. Whisper-soft, elegant, shirt-weight.",
    description:
      "21-wale corduroy sits at the very fine end of our range. The wales are almost imperceptible to the eye but unmistakable to touch — giving fabric a rich, velvety texture suited for shirts, children's wear, and lightweight tailoring.",
    composition: "100% Cotton",
    width: "58 inches",
    weight: "200 GSM",
    wale: "21-wale",
    finish: "Piece-dyed",
    applications: ["Shirts", "Children's wear", "Lightweight tailoring", "Lining"],
    images: ["/images/fabrics/corduroy/21-wale-stretchable-corduroy.jpg"],
    featured: false,
    inStock: true,
    careInstructions: ["Machine wash cold", "Do not tumble dry", "Iron on reverse while damp"],
  },
  {
    id: "c-004",
    slug: "stretch-corduroy-lycra",
    name: "Stretch Corduroy (Cotton Lycra)",
    category: "corduroy",
    shortDescription: "Classic corduroy texture with modern stretch comfort.",
    description:
      "All the character of corduroy, with the comfort of stretch. Our cotton-lycra blend corduroy moves with you — perfect for slim-fit trousers, leggings, and form-fitted jackets. Available in multiple wale widths.",
    composition: "97% Cotton, 3% Lycra",
    width: "58 inches",
    weight: "260 GSM",
    wale: "14-wale",
    finish: "Piece-dyed",
    applications: ["Slim-fit trousers", "Leggings", "Form-fitted jackets", "Sportswear"],
    images: ["/images/fabrics/corduroy/stretchable-cotton-velvet-corduroy.jpg"],
    featured: true,
    inStock: true,
    careInstructions: ["Machine wash cold", "Do not tumble dry on high", "Do not bleach"],
  },
  {
    id: "c-005",
    slug: "indigo-yarn-dyed-corduroy",
    name: "Indigo Yarn-Dyed Corduroy",
    category: "corduroy",
    shortDescription: "Deep indigo tones with natural variation — each length unique.",
    description:
      "Yarn-dyed in rich indigo before weaving, this corduroy carries depth and character that piece-dyed fabrics cannot replicate. The slight tonal variation in the wales gives each cut a handcrafted feel. Popular with denim-adjacent fashion labels.",
    composition: "100% Cotton",
    width: "58 inches",
    weight: "290 GSM",
    wale: "14-wale",
    finish: "Yarn-dyed indigo",
    applications: ["Jackets", "Jeans-style trousers", "Casual wear", "Fashion labels"],
    images: ["/images/fabrics/corduroy/denim-look-corduroy.jpg"],
    featured: true,
    inStock: true,
    careInstructions: ["Wash separately first time", "Machine wash cold", "Do not bleach"],
  },

  // LINEN
  {
    id: "l-001",
    slug: "pure-linen-shirting",
    name: "Pure Linen Shirting",
    category: "linen",
    shortDescription: "100% pure linen, shirt-weight. Natural slub, breathable, authentic.",
    description:
      "Pure linen shirting fabric with the natural slub texture that makes linen unmistakably itself. Lightweight, breathable, and becomes softer with every wash. Perfect for summer shirts, kurtas, and light dresses.",
    composition: "100% Linen",
    width: "58 inches",
    weight: "140 GSM",
    finish: "Natural / Piece-dyed",
    applications: ["Shirts", "Kurtas", "Dresses", "Light tops"],
    images: ["/images/fabrics/linen/fine-melange-linen.JPG"],
    featured: true,
    inStock: true,
    careInstructions: ["Hand wash or delicate machine cycle", "Line dry", "Iron while slightly damp"],
  },
  {
    id: "l-002",
    slug: "linen-cotton-blend",
    name: "Linen-Cotton Blend",
    category: "linen",
    shortDescription: "The approachable linen. Linen texture, cotton softness.",
    description:
      "A 55/45 linen-cotton blend that gives you the breathable texture and visual character of linen with the softness and easier care of cotton. An ideal everyday fabric for those exploring linen for the first time.",
    composition: "55% Linen, 45% Cotton",
    width: "58 inches",
    weight: "160 GSM",
    finish: "Piece-dyed",
    applications: ["Shirts", "Trousers", "Casual dresses", "Ethnic wear"],
    images: ["/images/fabrics/linen/polycotton-shirting-linen.JPG"],
    featured: true,
    inStock: true,
    careInstructions: ["Machine wash cold", "Line dry", "Iron on medium"],
  },
  {
    id: "l-003",
    slug: "heavy-linen-suiting",
    name: "Heavy Linen Suiting",
    category: "linen",
    shortDescription: "Substantial, structured linen for tailored suiting and occasion wear.",
    description:
      "A heavier weight linen fabric with enough body for structured blazers, formal trousers, and tailored suits. The natural linen texture gives garments a relaxed luxury — refined, not rigid.",
    composition: "100% Linen",
    width: "58 inches",
    weight: "240 GSM",
    finish: "Natural / Piece-dyed",
    applications: ["Blazers", "Structured trousers", "Suits", "Occasion wear"],
    images: ["/images/fabrics/linen/fine-melange-linen.JPG"],
    featured: false,
    inStock: true,
    careInstructions: ["Dry clean recommended", "Or hand wash cold, lay flat to dry"],
  },

  // COTTON
  {
    id: "ct-001",
    slug: "100-cotton-poplin",
    name: "100% Cotton Poplin",
    category: "cotton",
    shortDescription: "Crisp, smooth, classic. The essential shirting cotton.",
    description:
      "A fine-count, 100% cotton poplin with a smooth, slightly crisp hand. Poplin's tight plain weave gives it a clean finish ideal for formal shirts, kurtas, and uniform fabrics. Easy to stitch, easier to wear.",
    composition: "100% Cotton",
    width: "58 inches",
    weight: "110 GSM",
    finish: "Piece-dyed / Printed",
    applications: ["Formal shirts", "Kurtas", "Uniforms", "Children's wear"],
    images: ["/images/fabrics/cotton/100-cotton-poplin.jpg"],
    featured: true,
    inStock: true,
    careInstructions: ["Machine wash warm", "Tumble dry", "Iron on high"],
  },
  {
    id: "ct-002",
    slug: "cotton-lycra-stretch",
    name: "Cotton Lycra Stretch",
    category: "cotton",
    shortDescription: "Everyday stretch cotton. Comfortable, durable, versatile.",
    description:
      "A 95/5 cotton-lycra blend that offers the breathability of cotton with just enough stretch for comfort and fit retention. The go-to fabric for comfortable trousers, fitted tops, and casual wear.",
    composition: "95% Cotton, 5% Lycra",
    width: "60 inches",
    weight: "200 GSM",
    finish: "Piece-dyed",
    applications: ["Trousers", "Fitted tops", "Casual dresses", "Athleisure"],
    images: ["/images/fabrics/cotton/cotton-lycra-stretch.jpg"],
    featured: false,
    inStock: true,
    careInstructions: ["Machine wash cold", "Do not tumble dry on high"],
  },

  // TWILL
  {
    id: "tw-001",
    slug: "cotton-twill-chino",
    name: "Cotton Twill — Chino Weight",
    category: "twill",
    shortDescription: "The fabric behind great chinos. Diagonal weave, excellent drape.",
    description:
      "A medium-weight cotton twill in the classic chino weight — durable, structured, and beautifully draping. The 3×1 twill weave creates the characteristic diagonal texture that makes trousers hold their shape and tailoring look sharp.",
    composition: "100% Cotton",
    width: "58 inches",
    weight: "230 GSM",
    finish: "Piece-dyed / Washed",
    applications: ["Chinos", "Trousers", "Jackets", "Workwear"],
    images: ["/images/fabrics/twill/desire-pc-twill.jpg"],
    featured: true,
    inStock: true,
    careInstructions: ["Machine wash warm", "Tumble dry medium", "Iron on high"],
  },

  // SHIRTING
  {
    id: "sh-001",
    slug: "dobby-weave-shirting",
    name: "Dobby Weave Shirting",
    category: "shirting",
    shortDescription: "Textured shirting with subtle woven pattern. Elevated everyday fabric.",
    description:
      "Dobby-woven cotton shirting with small, geometric surface textures woven into the fabric itself — not printed. The texture adds visual interest without being loud, making it ideal for premium formal and casual shirts.",
    composition: "100% Cotton",
    width: "58 inches",
    weight: "120 GSM",
    finish: "Piece-dyed",
    applications: ["Formal shirts", "Casual shirts", "Resort wear"],
    images: ["/images/fabrics/shirting/pc-shirting.JPG"],
    featured: true,
    inStock: true,
    careInstructions: ["Machine wash warm", "Iron while slightly damp"],
  },

  // SUITING
  {
    id: "su-001",
    slug: "poly-viscose-suiting",
    name: "Poly-Viscose Suiting",
    category: "suiting",
    shortDescription: "Structured suiting with excellent shape retention and drape.",
    description:
      "A classic poly-viscose blend suiting fabric offering excellent structure, wrinkle resistance, and drape. The viscose content gives it a slight sheen and luxurious hand. Used by tailors across India for formal suits, blazers, and formal trousers.",
    composition: "65% Polyester, 35% Viscose",
    width: "58 inches",
    weight: "260 GSM",
    finish: "Piece-dyed",
    applications: ["Formal suits", "Blazers", "Formal trousers", "Occasion wear"],
    images: ["/images/fabrics/suiting/poly-viscose-suiting.jpg"],
    featured: true,
    inStock: true,
    careInstructions: ["Dry clean recommended", "Or hand wash cold"],
  },

  // FURNISHING
  {
    id: "fu-001",
    slug: "corduroy-furnishing-fabric",
    name: "Corduroy Furnishing Fabric",
    category: "furnishing",
    shortDescription: "Heavy-duty corduroy built for upholstery. Rich texture, long life.",
    description:
      "A high-thread-count corduroy engineered specifically for furnishing applications. Heavier weight, tighter construction, and fade-resistant coloring make it ideal for sofas, armchairs, cushions, and curtains. Available in a range of wale widths.",
    composition: "100% Cotton",
    width: "54 inches",
    weight: "380 GSM",
    wale: "8-wale",
    finish: "Piece-dyed",
    applications: ["Sofas", "Armchairs", "Cushion covers", "Curtains", "Headboards"],
    images: ["/images/fabrics/furnishing/6-wale-(6005-2)-structured-corduroy.JPG"],
    featured: true,
    inStock: true,
    careInstructions: ["Spot clean recommended", "Professional cleaning for large pieces"],
  },
];

export function getProductsByCategory(category: FabricCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getWhatsAppUrl(product: Product): string {
  return wa.productInquiry(product.name, product.category);
}

export function getSampleUrl(product: Product): string {
  return wa.sampleRequest(product.name);
}
