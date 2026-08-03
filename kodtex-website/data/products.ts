import { wa } from "@/lib/whatsapp";

export type FabricCategory =
  | "corduroy"
  | "linen"
  | "cotton"
  | "twill"
  | "shirting"
  | "suiting"
  | "furnishing";

export interface ColourOption {
  name: string;
  image: string;
}

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
  colours?: ColourOption[];
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
    images: ["/images/fabrics/corduroy/14-wale-corduroy.jpg"],
    colours: [
      { name: "Beige", image: "/images/fabrics/corduroy/swatches/14-wale-beige.jpg" },
      { name: "Black", image: "/images/fabrics/corduroy/swatches/14-wale-black.jpg" },
      { name: "Dk. Brown", image: "/images/fabrics/corduroy/swatches/14-wale-dk-brown.jpg" },
      { name: "Dk. Grey", image: "/images/fabrics/corduroy/swatches/14-wale-dk-grey.jpg" },
      { name: "Khakhi", image: "/images/fabrics/corduroy/swatches/14-wale-khakhi.jpg" },
      { name: "Md. Brown", image: "/images/fabrics/corduroy/swatches/14-wale-md-brown.jpg" },
      { name: "Mouse", image: "/images/fabrics/corduroy/swatches/14-wale-mouse.jpg" },
      { name: "Navy", image: "/images/fabrics/corduroy/swatches/14-wale-navy.jpg" },
      { name: "Olive", image: "/images/fabrics/corduroy/swatches/14-wale-olive.jpg" },
      { name: "White", image: "/images/fabrics/corduroy/swatches/14-wale-white.jpg" },
    ],
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
    images: ["/images/fabrics/corduroy/21-wale-corduroy.jpg"],
    colours: [
      { name: "Beige", image: "/images/fabrics/corduroy/swatches/21-wale-beige.jpg" },
      { name: "Black", image: "/images/fabrics/corduroy/swatches/21-wale-black.jpg" },
      { name: "Dk. Brown", image: "/images/fabrics/corduroy/swatches/21-wale-dk-brown.jpg" },
      { name: "Md. Brown", image: "/images/fabrics/corduroy/swatches/21-wale-md-brown.jpg" },
      { name: "Mouse", image: "/images/fabrics/corduroy/swatches/21-wale-mouse.jpg" },
      { name: "Navy", image: "/images/fabrics/corduroy/swatches/21-wale-navy.jpg" },
      { name: "Olive", image: "/images/fabrics/corduroy/swatches/21-wale-olive.jpg" },
    ],
    featured: false,
    inStock: true,
    careInstructions: ["Machine wash cold", "Do not tumble dry", "Iron on reverse while damp"],
  },
  {
    id: "c-006",
    slug: "23-wale-corduroy",
    name: "23-Wale Corduroy",
    category: "corduroy",
    shortDescription: "Our finest wale count. Ultra-fine ridges for a near-flat, luxe hand-feel.",
    description:
      "23-wale corduroy is the finest fabric in our corduroy range — the wales are barely visible, giving a smooth, almost flat-woven look with all the softness corduroy is loved for. A favourite for shirting and lightweight garments that want texture without bulk.",
    composition: "100% Cotton",
    width: "58 inches",
    weight: "180 GSM",
    wale: "23-wale",
    finish: "Piece-dyed",
    applications: ["Shirts", "Lightweight jackets", "Dresses", "Children's wear"],
    images: ["/images/fabrics/corduroy/23-wale-corduroy.jpg"],
    colours: [
      { name: "Beige", image: "/images/fabrics/corduroy/swatches/23-wale-beige.jpg" },
      { name: "Black", image: "/images/fabrics/corduroy/swatches/23-wale-black.jpg" },
      { name: "Copper", image: "/images/fabrics/corduroy/swatches/23-wale-copper.jpg" },
      { name: "Dk Brown", image: "/images/fabrics/corduroy/swatches/23-wale-dk-brown.jpg" },
      { name: "Khakhi", image: "/images/fabrics/corduroy/swatches/23-wale-khakhi.jpg" },
      { name: "Light Ash", image: "/images/fabrics/corduroy/swatches/23-wale-light-ash.jpg" },
      { name: "Maroon", image: "/images/fabrics/corduroy/swatches/23-wale-maroon.jpg" },
      { name: "Medium Green", image: "/images/fabrics/corduroy/swatches/23-wale-medium-green.jpg" },
      { name: "Mouse", image: "/images/fabrics/corduroy/swatches/23-wale-mouse.jpg" },
      { name: "Navy", image: "/images/fabrics/corduroy/swatches/23-wale-navy.jpg" },
      { name: "Olive", image: "/images/fabrics/corduroy/swatches/23-wale-olive.jpg" },
    ],
    featured: true,
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
  {
    id: "c-007",
    slug: "11-wale-non-stretch-corduroy",
    name: "11-Wale Non-Stretch Corduroy",
    category: "corduroy",
    shortDescription: "Medium-rib 11-wale. Sits between our fine and bold wale counts.",
    description:
      "A medium-rib 11-wale cotton corduroy, woven at our Ahmedabad mill. Balances visible wale texture with a smooth, structured hand — suited to trousers, blazers, jackets, furnishing, and bags. Shown here in Beige.",
    composition: "100% Cotton",
    width: "58 inches",
    weight: "290 GSM approx.",
    wale: "11-wale",
    applications: ["Trousers", "Blazers", "Jackets", "Furnishings", "Bags", "Purses"],
    images: ["/images/fabrics/corduroy/11-wale-non-stretch-corduroy.jpg"],
    featured: false,
    inStock: true,
  },
  {
    id: "c-008",
    slug: "16-wale-stretch-corduroy",
    name: "16-Wale Stretch Corduroy",
    category: "corduroy",
    shortDescription: "16-wale corduroy with Lycra stretch. Shown here in Coffee.",
    description:
      "16-wale corduroy with added Lycra stretch for trousers, blazers, and jackets that need to move. Shown here in Coffee.",
    composition: "Cotton/Lycra Blend",
    width: "53/54 inches & 55/56 inches",
    wale: "16-wale",
    applications: ["Trousers", "Blazers", "Jackets"],
    images: [
      "/images/fabrics/corduroy/16-wale-stretch-corduroy-1.jpg",
      "/images/fabrics/corduroy/16-wale-stretch-corduroy-2.jpg",
    ],
    featured: false,
    inStock: true,
  },
  {
    id: "c-009",
    slug: "19-wale-dyed-baby-corduroy",
    name: "19-Wale Dyed Baby Corduroy",
    category: "corduroy",
    shortDescription: "Lightweight 19-wale, shirt-weight GSM. Shown here in Red.",
    description:
      "A light, shirt-weight 19-wale corduroy at 145 GSM approx. — soft enough for lady's tops and dresses, shirts, cushions, and kids' garments. Shown here in Red.",
    composition: "100% Cotton",
    width: "43/44 inches & 58 inches",
    weight: "145 GSM approx.",
    wale: "19-wale",
    applications: ["Lady's Tops", "Dresses", "Shirts", "Cushions", "Kids' Garments"],
    images: ["/images/fabrics/corduroy/19-wale-dyed-baby-corduroy.jpg"],
    featured: false,
    inStock: true,
  },
  {
    id: "c-010",
    slug: "21-wale-cotton-stretch-corduroy",
    name: "21-Wale Cotton Stretch Corduroy",
    category: "corduroy",
    shortDescription: "21-wale corduroy with cotton-Lycra stretch. 10 colourways.",
    description:
      "21-wale corduroy in a cotton-Lycra stretch blend, for trousers and blazers that need give. Available in 10 colourways per our shade card: Beige, Md. Brown, Mouse, Dk. Brown, Dk. Olive, Lilac, Maroon, Violet, Navy, and Black.",
    composition: "Cotton/Lycra Blend",
    width: "53/54 inches & 56/58 inches",
    weight: "250 GSM approx.",
    wale: "21-wale",
    applications: ["Trousers", "Blazers"],
    images: [
      "/images/fabrics/corduroy/21-wale-cotton-stretch-corduroy.jpg",
      "/images/fabrics/corduroy/21-wale-cotton-stretch-corduroy-shadecard.jpg",
    ],
    featured: false,
    inStock: true,
  },
  {
    id: "c-011",
    slug: "printed-cotton-velvet-corduroy",
    name: "Printed Cotton Velvet Corduroy",
    category: "corduroy",
    shortDescription: "Cotton velvet corduroy with printed pattern. Prints 6030 and 7020.",
    description:
      "A cotton velvet corduroy with a Lycra stretch, printed rather than piece-dyed — for bottomwear and blazers that want pattern with corduroy's texture. Two print codes shown: 6030 (olive/black check) and 7020 (navy dobby-print).",
    composition: "Cotton/Spandex",
    width: "53/54 inches",
    weight: "270 GSM approx.",
    applications: ["Bottomwear", "Blazers"],
    images: [
      "/images/fabrics/corduroy/printed-cotton-velvet-corduroy-6030.jpg",
      "/images/fabrics/corduroy/printed-cotton-velvet-corduroy-7020.jpg",
    ],
    colours: [
      { name: "6030", image: "/images/fabrics/corduroy/printed-cotton-velvet-corduroy-6030.jpg" },
      { name: "7020", image: "/images/fabrics/corduroy/printed-cotton-velvet-corduroy-7020.jpg" },
    ],
    featured: false,
    inStock: true,
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
    images: ["https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=900&q=85"],
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
    images: ["https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=900&q=85"],
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
    composition: "Polyester Cotton Blended",
    width: "58 inches",
    weight: "230 GSM",
    finish: "Piece-dyed / Washed",
    applications: ["Chinos", "Trousers", "Jackets", "Workwear"],
    images: ["/images/fabrics/twill/desire-pc-twill.jpg"],
    featured: true,
    inStock: true,
    careInstructions: ["Machine wash warm", "Tumble dry medium", "Iron on high"],
  },
  {
    id: "tw-002",
    slug: "cotton-twill-stretchable",
    name: "Cotton Twill Stretchable",
    category: "twill",
    shortDescription: "Cotton-spandex twill with Lafer finish. 11 colourways.",
    description:
      "A cotton-spandex stretch twill with a Lafer finish, built for bottomwear and bermuda shorts. Available in 11 colourways: R. Blue, Black, P. Rust, Red, Coral, Khakhi, Dust, Coffee, Olive, Blue, and Ink-Navy.",
    composition: "Cotton/Spandex",
    width: "53/54 inches",
    weight: "230 GSM approx.",
    finish: "Lafer Finish",
    applications: ["Bottomwear", "Bermuda Shorts"],
    images: [
      "/images/fabrics/twill/cotton-twill-stretchable-1.jpg",
      "/images/fabrics/twill/cotton-twill-stretchable-2.jpg",
      "/images/fabrics/twill/cotton-twill-stretchable-colours-1.jpg",
      "/images/fabrics/twill/cotton-twill-stretchable-colours-2.jpg",
    ],
    featured: false,
    inStock: true,
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
    images: ["/images/fabrics/shirting/dobby-shirting-navy.jpg"],
    colours: [
      { name: "Brown", image: "/images/fabrics/shirting/swatches/brown.jpg" },
      { name: "Elsion Blue", image: "/images/fabrics/shirting/swatches/elsion-blue.jpg" },
      { name: "Lilac", image: "/images/fabrics/shirting/swatches/lilac.jpg" },
      { name: "Lt. Grey", image: "/images/fabrics/shirting/swatches/lt-grey.jpg" },
      { name: "Mud Brown", image: "/images/fabrics/shirting/swatches/mud-brown.jpg" },
      { name: "Navy", image: "/images/fabrics/shirting/swatches/navy.jpg" },
      { name: "Sky Blue", image: "/images/fabrics/shirting/swatches/sky-blue.jpg" },
      { name: "Yellow", image: "/images/fabrics/shirting/swatches/yellow.jpg" },
    ],
    featured: true,
    inStock: true,
    careInstructions: ["Machine wash warm", "Iron while slightly damp"],
  },
  {
    id: "sh-002",
    slug: "pc-shirting-hungama",
    name: "PC Shirting — Hungama",
    category: "shirting",
    shortDescription: "Polyester-cotton shirting. 19 shades on our Hungama shade card.",
    description:
      "PC-blended shirting fabric in the Hungama style — for uniforms, shirts, dresses, and tops. Comes in 19 shades per our shade card, from pastels to solid brights.",
    composition: "PC Blended",
    width: "36 inches",
    applications: ["Uniforms", "Shirts", "Dresses", "Tops"],
    images: ["/images/fabrics/shirting/pc-shirting-hungama-shadecard.jpg"],
    featured: false,
    inStock: true,
  },
  {
    id: "sh-003",
    slug: "oxford-shirting",
    name: "Oxford Shirting",
    category: "shirting",
    shortDescription: "100% cotton Oxford weave. 15 shades on our shade card.",
    description:
      "Classic Oxford-weave cotton shirting — for shirts, tops, and dresses. Comes in 15 shades per our shade card.",
    composition: "100% Cotton",
    width: "58 inches",
    applications: ["Shirts", "Tops", "Dresses"],
    images: ["/images/fabrics/shirting/oxford-shirting-shadecard.jpg"],
    featured: false,
    inStock: true,
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
    images: ["https://images.unsplash.com/photo-1636715986446-d58f0f9b3916?w=900&q=85"],
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
