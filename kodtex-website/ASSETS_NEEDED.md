# KodTex — Assets Needed

This file lists every asset you need to provide, with the exact folder path and naming convention.

---

## 1. Logo Files

**Folder:** `public/images/logo/`

| File | Format | Use |
|---|---|---|
| `logo.svg` | SVG | Primary logo (used everywhere) |
| `logo-dark.svg` | SVG | Dark logo (for use on light backgrounds) |
| `logo-light.svg` | SVG | Light/white logo (for use on dark backgrounds) |
| `logo-mark.svg` | SVG | Just the mark/symbol, no wordmark (optional) |
| `favicon.ico` | ICO | Browser favicon (also add to `/public/` root) |
| `icon.png` | PNG 512×512 | App icon (also add to `/public/` root) |

---

## 2. Hero Images

**Folder:** `public/images/hero/`

These are the large background images used in the homepage hero section.

| File | Size | Description |
|---|---|---|
| `hero-corduroy.jpg` | 1920×1080+ | Extreme close-up of corduroy wale texture |
| `hero-linen.jpg` | 1920×1080+ | Close-up of linen slub texture |
| `hero-fabric-rolls.jpg` | 1920×1080+ | Fabric rolls or bolts, editorial style |

**Tips for hero images:**
- Macro/close-up shots work best — fill the frame with texture
- Natural or warm studio lighting preferred
- JPG format, 80–90% quality, minimum 1920px wide
- The image must be dark enough (or darkened in post) for white text to be legible on top

---

## 3. Fabric Product Images

**Folder:** `public/images/fabrics/[category]/`

Each product needs its own image file. Name the file to match the product slug.

### Naming convention:
`[product-slug].jpg` — e.g., `14-wale-cotton-corduroy.jpg`

### Corduroy — `public/images/fabrics/corduroy/`
| File | Product |
|---|---|
| `14-wale-cotton-corduroy.jpg` | 14-Wale Cotton Corduroy |
| `8-wale-wide-corduroy.jpg` | 8-Wale Wide Corduroy |
| `21-wale-fine-corduroy.jpg` | 21-Wale Fine Corduroy |
| `stretch-corduroy-lycra.jpg` | Stretch Corduroy (Cotton Lycra) |
| `indigo-yarn-dyed-corduroy.jpg` | Indigo Yarn-Dyed Corduroy |

### Linen — `public/images/fabrics/linen/`
| File | Product |
|---|---|
| `pure-linen-shirting.jpg` | Pure Linen Shirting |
| `linen-cotton-blend.jpg` | Linen-Cotton Blend |
| `heavy-linen-suiting.jpg` | Heavy Linen Suiting |

### Cotton — `public/images/fabrics/cotton/`
| File | Product |
|---|---|
| `100-cotton-poplin.jpg` | 100% Cotton Poplin |
| `cotton-lycra-stretch.jpg` | Cotton Lycra Stretch |

### Twill — `public/images/fabrics/twill/`
| File | Product |
|---|---|
| `cotton-twill-chino.jpg` | Cotton Twill — Chino Weight |

### Shirting — `public/images/fabrics/shirting/`
| File | Product |
|---|---|
| `dobby-weave-shirting.jpg` | Dobby Weave Shirting |

### Suiting — `public/images/fabrics/suiting/`
| File | Product |
|---|---|
| `poly-viscose-suiting.jpg` | Poly-Viscose Suiting |

### Furnishing — `public/images/fabrics/furnishing/`
| File | Product |
|---|---|
| `corduroy-furnishing-fabric.jpg` | Corduroy Furnishing Fabric |

**Tips for product images:**
- Show the fabric texture clearly — close-up preferred
- Natural or warm studio lighting
- Multiple shots per product are ideal: full roll, close macro, swatch, draped/draped
- JPG format, 85% quality, minimum 800px wide

---

## 4. Team / Founder Photos

**Folder:** `public/images/team/`

| File | Description |
|---|---|
| `vivek-mendiratta.jpg` | Founder/CEO photo — professional, warm, fabric-related setting preferred |

**Tips:**
- Portrait orientation preferred (3:4 ratio)
- Natural lighting or clean studio background
- Can be at the factory, at a cutting table, or holding fabric

---

## 5. Heritage / Kailash Vivek & Co. Imagery

**Folder:** `public/images/heritage/`

| File | Description |
|---|---|
| `factory-exterior.jpg` | Outside of the Ahmedabad premises or showroom |
| `fabric-rolls-warehouse.jpg` | Fabric rolls/bolts in storage or display |
| `vintage-archive.jpg` | Any old photos of the business, pre-digital era (optional) |

---

## 6. Blog Cover Images

**Folder:** `public/images/blog/`

| File | For post |
|---|---|
| `corduroy-guide.jpg` | "The Complete Guide to Corduroy Fabric" |
| `linen-guide.jpg` | "Pure Linen: Why It's Worth It" |
| `fabric-care.jpg` | "How to Care for Your Fabrics" |

---

## 7. Update the site once you add images

After adding real images:
1. Open `data/products.ts`
2. Update the `images` array for each product to point to your new files
3. Open `components/fabrics/ProductCard.tsx` and `app/fabrics/[category]/page.tsx` — remove the `categoryImages` placeholder map and use `product.images[0]` directly

---

## Summary Checklist

- [ ] Logo files added to `public/images/logo/`
- [ ] Hero images added to `public/images/hero/`
- [ ] Corduroy product images added
- [ ] Linen product images added
- [ ] Cotton product images added
- [ ] Twill, shirting, suiting, furnishing images added
- [ ] Team photo added
- [ ] Heritage images added (optional)
- [ ] Blog cover images added
- [ ] `data/products.ts` updated with real image paths
- [ ] Placeholder stock image references removed from components
