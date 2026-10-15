# Phase 5: Visual Design System & Tokens — Desktop Editorial Indie Zine Edition

**Platform Identity:** NIFT Hyderabad Thrift Closet (Campus Atelier Archive)  
**Curatorial Direction:** Avant-Garde Fashion Editorial × Dazed Digital Zine × Anastasia Krongauz Scrapbook Collage  
**Architecture:** **Desktop-First, Fully Responsive Website** (Engineered primarily for laptop and desktop screens)  
**Campus Scope:** Exclusively National Institute of Fashion Technology (NIFT), Hyderabad (Madhapur Campus)  
**Creative Director & Product Lead:** Simran Singh (`BD/24/164`, Fashion Communication, NIFT Hyderabad)  
**Technical Architect & UX Mentor:** Antigravity AI  

---

## 1. Visual Pivot & UX Architecture

In response to the Creative Director's critique:
> *"I like the way the app is right now but it looks bad visually and is confusing at the same time... build a desktop first, fully responsive website, not a mobile application for now. Design primarily for laptop and desktop screens. The site display should be more playful and easy to move, rather than a rigid structured app."*

The architecture has completely broken free of the 440px mobile device simulator. It now delivers a **spacious, expansive desktop-first editorial zine experience** directly modeled after *Dazed Magazine* and *Anastasia Krongauz*'s experimental visual design.

```
DESKTOP EDITORIAL ZINE ARCHITECTURE
 ├── 1. RISOGRAPH / GRAIN PAPER TEXTURE OVERLAY
 │    ├── Ultra-subtle SVG fractal noise filter covering the viewport
 │    ├── Gives the screen the physical tooth of unbleached cardstock
 │    └── Non-intrusive (opacity: 0.045, mix-blend-mode: multiply, pointer-events: none)
 ├── 2. TYPOGRAPHIC DUO: CONDENSED DISPLAY × FLOWING CURSIVE SCRIPT
 │    ├── Massive Condensed Grotesque (Anton / Bebas Neue): Saturated, tight, uppercase punch
 │    ├── Expressive Cursive Script (Italianno / Playfair Display): Flowing, human, atelier touch
 │    ├── Crisp Short Gray Secondary Text (#736E65): Short, concise editorial sentences
 │    └── Monospaced Technical Specs (Space Mono): Flat-lay measurements, timestamps, lots
 ├── 3. STRICT ALTERNATING BEIGE & CARMINE RED INVERSION
 │    ├── Beige Ground: Deep Ink Black / Carmine Red text, olive green & red sticker pills
 │    └── Red Ground: Warm Beige text, Warm Beige input boxes & action buttons with red ink
 ├── 4. EDITORIAL GRAPHIC DETAILS: SCRIBBLER DOODLES & TAPED CROSSES ❌
 │    ├── Red Taped Crosses (❌): Hand-drawn brush cross marks slapped over photo corners
 │    ├── Washi Tape Strips: Semi-translucent paper tape holding banners and cards
 │    └── Krongauz Sticker Badges: Angled pills with asterisk (✳) and department tags
 └── 5. ASYMMETRIC LOOKBOOK GRID BREAKS
      ├── Responsive 3 to 4 column desktop layout with varied aspect ratios
      ├── Featured Wide Editorial Cards spanning 2 columns
      ├── Full-Width Student Lookbook Spread (FC & FD monsoon layering study)
      └── Solid Carmine Red Quote Break (Anastasia Krongauz split composition)
```

---

## 2. Codified Color Tokens: The Alternating Inversion System

```css
:root {
  /* Primary Canvas Grounds */
  --bg-beige: #F5EFEB;            /* Warm vintage oatmeal / unbleached sketchbook cardstock */
  --bg-beige-card: #ECE4D8;       /* Deeper kraft cream for cards & layers */
  --bg-beige-light: #FAF6EF;      /* Clean unbleached paper tint */
  --bg-beige-hover: #E4DACB;

  /* Editorial Saturated Red */
  --red-carmine: #D02323;         /* Saturated Dazed/Krongauz editorial red */
  --red-deep: #B31818;            /* Deep blood red for active pressed states */
  --red-glow: rgba(208, 35, 35, 0.45); /* Dazed spray paint / airbrush blur aura */
  --red-tint: rgba(208, 35, 35, 0.08); /* Soft highlight wash */

  /* Alternating Typography Inks */
  --text-dark: #111111;           /* Deep ink black on beige ground */
  --text-beige: #F5EFEB;          /* Warm beige typography when ground is Red */
  --text-red: #D02323;            /* Carmine red display typography */
  --text-muted: #736E65;          /* Crisp short gray secondary captions (Dazed style) */
  --text-muted-light: #9B9488;    /* Lighter editorial gray */

  /* Krongauz Scrapbook Sticker Accents */
  --sticker-green-bg: #8FA85B;    /* Olive moss green sticker pill */
  --sticker-green-text: #FFFFFF;
  --sticker-beige-bg: #F5EFEB;    /* Beige sticker box for red sections */
  --sticker-beige-text: #D02323;
  --sticker-red-bg: #D02323;      /* Red sticker box for beige sections */
  --sticker-red-text: #F5EFEB;

  /* Graphic Accents, Fluid Gradients & Organic Elevation */
  --border-dark: #111111;         /* Structural accents */
  --border-red: #D02323;          /* Graphic red accents */
  --border-subtle: rgba(17, 17, 17, 0.08); /* Soft organic boundary */
  --gradient-broadcast: radial-gradient(circle at 85% 20%, rgba(208, 35, 35, 0.85) 0%, rgba(179, 24, 24, 0.95) 50%, #8A0E0E 100%);
  --shadow-organic: 0 16px 36px -8px rgba(17, 17, 17, 0.12), 0 6px 12px -4px rgba(17, 17, 17, 0.06);
  --shadow-sheet: 0 24px 64px rgba(17, 17, 17, 0.28);
  --radius-pill: 30px;
  --radius-lg: 20px;
  --radius-md: 14px;
}
```

---

## 2.1 Authentic 20-Piece Student Lookbook Catalog
Extracted directly from the NIFT student portfolio lookbook (`images/product-1.jpg` – `images/product-20.jpg`):

| Product ID | Garment / Object Title | Department / Subculture | Condition Tier | Pricing Paradigm | Visual Asset |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | Y2K Tartan Checked Ruched Hobo Bag | Subversive Studio | Tier 3 (Gently Used) | Fixed: ₹1,250 | `images/product-1.jpg` |
| **02** | Asymmetric Plaid Peplum Tie Blouse | FC Atelier Drape Lab | Tier 2 (Like New) | Fixed: ₹1,400 | `images/product-2.jpg` |
| **03** | Glossy Cherry Crimson Ring Hobo | Vintage Milan Archive | Tier 3 (Gently Used) | Fixed: ₹1,850 | `images/product-3.jpg` |
| **04** | Distressed Grommet Buckle Shoulder Bag | Diesel Archive | Tier 4 (Well Used) | **Live Bidding (Min ₹550)** | `images/product-4.jpg` |
| **05** | Ornate Silver Concho Leather Belt | Rajasthan Guild / AD | Tier 3 (Gently Used) | Fixed: ₹1,100 | `images/product-5.jpg` |
| **06** | Molten Gold & Amber Resin Bangle Stack | AD Studio Handcast | Tier 1 (New / Unworn) | Fixed: ₹950 | `images/product-6.jpg` |
| **07** | Tribal Flame Embroidered Baggy Jeans | Jaded London Archive | Tier 2 (Like New) | Fixed: ₹3,200 | `images/product-7.jpg` |
| **08** | Noir Moto Leather Ruched Baguette | Mango Premium | Tier 3 (Gently Used) | Fixed: ₹1,650 | `images/product-8.jpg` |
| **09** | Sand-Wash Extreme Wide Leg Denims | Weekday Archive | Tier 4 (Well Used) | **Live Bidding (Min ₹700)** | `images/product-9.jpg` |
| **10** | Chanderi Multi-Stripe Lantern Sleeve Blouse | Textile Dept Handloom | Tier 1 (New / Unworn) | Fixed: ₹2,600 | `images/product-10.jpg` |
| **11** | 'From Venice With Love' Embroidered Shirt | Bode Archive Study | Tier 3 (Gently Used) | Fixed: ₹1,500 | `images/product-11.jpg` |
| **12** | Statue Print Striped Oxford Shirt | FC Screenprint Atelier | Tier 2 (Like New) | Fixed: ₹1,950 | `images/product-12.jpg` |
| **13** | Tailored Brown Stripe Utility Blouse | Zara Woman Vintage | Tier 3 (Gently Used) | Fixed: ₹850 | `images/product-13.jpg` |
| **14** | 1997 Archive 'Fragment Low Stance' Tee | Vintage Japanese Import | Tier 5 (Visible Wear) | **Live Bidding (Min ₹450)** | `images/product-14.jpg` |
| **15** | Hourglass Flared Peplum Striped Blouse | FD Patternmaking Lab | Tier 2 (Like New) | Fixed: ₹1,800 | `images/product-15.jpg` |
| **16** | Adidas Samba OG 'Cow Print Pony Hair' | Adidas Originals | Tier 2 (Like New) | Fixed: ₹4,200 | `images/product-16.jpg` |
| **101 (Closet)** | House 40 Patent Crimson Mary Janes | Simran's Archive | Tier 2 (Like New) | Fixed: ₹2,100 | `images/product-17.jpg` |
| **102 (Closet)** | Minka Espresso Patent Pointed Slingbacks | Simran's Archive | Tier 3 (Gently Used) | Fixed: ₹1,750 | `images/product-18.jpg` |
| **103 (Closet)** | Plum Square-Toe Leather Glove Flats | Simran's Archive | Tier 2 (Like New) | Fixed: ₹1,600 | `images/product-19.jpg` |
| **104 (Closet)** | Subversive Moto Jacket with Pony Hair Belt | Simran's Archive | Tier 3 (Gently Used) | Fixed: ₹3,800 | `images/product-20.jpg` |

---

## 3. Typographic Hierarchy & Magazine Layout Rules

| Role | Font Family | Size | Style / Weight | Letter Spacing | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Dazed Masthead** | `Anton` / `Bebas Neue` | `58px` | Bold Condensed Grotesque | `-0.02em` | Main App Title with airbrushed red spray aura |
| **Spliced Cursive Accent** | `Italianno` / `Playfair Display` | `54px` | Expressive Cursive / Script | Normal | Spliced right inside titles (*"THRIFT <span class='script'>Atelier</span> CLOSET"*) |
| **Section Headings** | `Anton` / `Bebas Neue` | `34px – 40px` | Heavy Condensed | `+0.02em` | Lookbook Headlines, Drop Beacon Title |
| **Garment Titles** | `Anton` | `20px` | Uppercase Condensed | `+0.02em` | Card titles in product grid |
| **Crisp Secondary Gray**| `Plus Jakarta Sans` | `12px – 13px`| 500 Medium (Color: `#736E65`) | `0.00em` | Short, punchy editorial descriptions (Dazed caption style) |
| **Tracked Editorial Links**| `Anton` / `Bebas Neue` | `13px – 17px`| Uppercase Spaced | `+0.18em to +0.22em`| **`R E A D   M O R E`**, **`V I E W   P I E C E`** |
| **Flat-Lay Specs & Prices**| `Space Mono` | `11px – 24px`| 700 Bold Monospace | `+0.04em` | Measurements, lot numbers, INR prices, drop times |

---

## 4. Strict Color Inversion Rules

As mandated by the Creative Director:
> *"If there is a red effect going on in background the font and font boxes should be beige."*

### On Warm Beige Canvas (`--bg-beige` / `#F5EFEB`):
- Background: Unbleached Paper Beige (`#F5EFEB` or `#ECE4D8`).
- Headings: Deep Ink Black (`#111111`) or Carmine Red (`#D02323`).
- Secondary Text: Crisp Editorial Gray (`#736E65`).
- Sticker Badges: Olive Green (`#8FA85B`), Beige cardstock, or Carmine Red pills.
- Action Buttons: Carmine Red background with Beige text, or Beige background with brutalist border and drop shadow.

### On Carmine Red Canvas (`--red-carmine` / `#D02323`):
- Background: Solid Saturated Red (`#D02323`).
- All Typography: Light Unbleached Warm Beige (`#F5EFEB` / `#FFEFE0`).
- Input Boxes & Text Enclosures: Warm Beige background (`#F5EFEB`) with Carmine Red or Dark Ink text.
- Action Buttons: Solid Warm Beige (`#F5EFEB`) with Carmine Red text (`#D02323`) and 2px solid black borders.
- Badges: Warm Beige boxes with Carmine Red typography.

---

## 5. Desktop-First Components & Modals

1. **Top Campus Broadcast Ticker Ribbon:**
   Carmine Red full-width marquee with live campus announcements, meetup times, and department highlights.
2. **Dazed Spray Paint Masthead:**
   Oversized condensed title backed by an airbrushed red spray aura, paired with NIFT student metadata and department tags.
3. **Desktop Horizontal Navigation Bar:**
   Clean top nav tabs with numbered indices (`01 DISCOVER FEED`, `+ SELL STUDIO`, `02 ACTIVITY & DROPS`, `03 MY CLOSET`) and quick commercial jump chips. All filtering is unified on the Discover feed deck.
4. **Asymmetric Grid with Lookbook Breaks:**
   Mix of 3-column and 4-column cards with red taped crosses (`❌`), wide featured cards, student lookbook spreads, and solid red quote blocks.
5. **Desktop Split-Screen Modals:**
   - **PDP:** High-resolution multi-angle photo gallery on the left; structured garment dossier with flat-lay measurements, flaw disclosure, and bifurcated action bar on the right.
   - **Live Bidding Floor:** Carmine Red inverted sheet with real-time student bids log and quick increment chips (`+₹50`, `+₹100`, `+₹200`).
   - **Bilateral Trade Builder:** Side-by-side closet selection and cash balancing stepper.
   - **Campus Drop Daylight Inspection Ticket:** Courtyard handoff verification with QR code.
