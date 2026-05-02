# KodTex — Product Catalog Template

Fill in one entry per product. Copy the template block below for each new product.
Once complete, share this file and I will update `data/products.ts` for you.

---

## How to fill this in

- **slug**: URL-friendly name. Use lowercase, hyphens only. E.g., `14-wale-cotton-corduroy`
- **category**: Must be one of: `corduroy` | `linen` | `cotton` | `twill` | `shirting` | `suiting` | `furnishing`
- **wale**: Only fill for corduroy fabrics. E.g., `14-wale`, `8-wale`
- **applications**: What this fabric is best used for. List as comma-separated.
- **featured**: Yes or No — should this appear prominently on the homepage/category page?
- **image filenames**: What did you name the image files in the folder? (e.g., `14-wale-corduroy-blue.jpg`)

---

## Template (copy and repeat for each product)

```
---
Product Name: [Full product name]
Slug: [url-friendly-slug]
Category: [corduroy / linen / cotton / twill / shirting / suiting / furnishing]

Short Description: [1–2 lines for product cards]

Full Description: [3–5 sentences. Describe texture, feel, best uses, what makes it special]

Composition: [e.g., 100% Cotton | 97% Cotton 3% Lycra | 55% Linen 45% Cotton]
Width: [e.g., 58 inches | 60 inches | 54 inches]
Weight (GSM): [e.g., 280 GSM — leave blank if unknown]
Wale (Corduroy only): [e.g., 14-wale — leave blank if not corduroy]
Finish: [e.g., Piece-dyed | Yarn-dyed | Indigo wash | Structured | Natural]

Applications (comma-separated): [e.g., Trousers, Jackets, Blazers, Furnishing]

Featured: [Yes / No]
In Stock: [Yes / No]

Image files (list the filenames you'll add to the category folder):
  - [filename.jpg]
  - [filename-2.jpg]

Care Instructions (optional):
  - [e.g., Machine wash cold]
  - [e.g., Tumble dry low]
  - [e.g., Iron on reverse]
---
```

---

## Example (filled in)

```
---
Product Name: 14-Wale Cotton Corduroy (Navy)
Slug: 14-wale-cotton-corduroy-navy
Category: corduroy

Short Description: Classic 14-wale corduroy in rich navy. Versatile, structured, and beautifully textured.

Full Description: Our most versatile corduroy fabric. The 14-wale structure gives it the perfect balance between visible texture and elegant drape. This navy colourway is rich and deep with excellent dye consistency. Suitable for trousers, blazers, bags, and light furnishing.

Composition: 100% Cotton
Width: 58 inches
Weight (GSM): 280 GSM
Wale (Corduroy only): 14-wale
Finish: Piece-dyed

Applications: Trousers, Blazers, Jackets, Bags, Cushions

Featured: Yes
In Stock: Yes

Image files:
  - 14-wale-corduroy-navy.jpg
  - 14-wale-corduroy-navy-macro.jpg

Care Instructions:
  - Machine wash cold, inside out
  - Tumble dry low
  - Iron on reverse while slightly damp
  - Do not bleach
---
```

---

## Products to fill in

For each fabric type you carry, add one entry per variant (different wale, colour range, composition, etc.).

**Suggested starting list — fill in what you have:**

### Corduroy
- [ ] 4-wale corduroy
- [ ] 6-wale corduroy
- [ ] 8-wale corduroy
- [ ] 10-wale corduroy
- [ ] 12-wale corduroy
- [ ] 14-wale corduroy (standard cotton)
- [ ] 14-wale corduroy (stretch/lycra)
- [ ] 16-wale corduroy
- [ ] 18-wale corduroy
- [ ] 21-wale corduroy (fine)
- [ ] Indigo yarn-dyed corduroy
- [ ] Structured corduroy
- [ ] Dobby corduroy
- [ ] Hi-lo corduroy

### Linen
- [ ] Pure linen shirting (light)
- [ ] Pure linen shirting (medium)
- [ ] Pure linen suiting (heavy)
- [ ] Linen-cotton blend

### Cotton
- [ ] Cotton poplin
- [ ] Cotton interlock
- [ ] Cotton satin
- [ ] Cotton lycra
- [ ] Cotton canvas
- [ ] Cotton dobby

### Twill
- [ ] Chino-weight twill
- [ ] Heavy duty twill
- [ ] Stretch twill

### Shirting
- [ ] Poplin shirting
- [ ] Dobby shirting
- [ ] Twill shirting
- [ ] Oxford shirting
- [ ] Yarn-dyed check shirting

### Suiting
- [ ] Poly-viscose suiting
- [ ] Linen suiting
- [ ] Polyester suiting

### Furnishing
- [ ] Corduroy furnishing (8-wale)
- [ ] Corduroy furnishing (14-wale)
- [ ] Canvas furnishing

---

*Once you've filled this in, share it and I'll update the website product data.*
