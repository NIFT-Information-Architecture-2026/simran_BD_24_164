# Phase 5: Visual Design System & Tokens — Luxury Minimal Fashion Archive & Campus Marketplace

**Platform Identity:** THRIFT Atelier CLOSET (NIFT Hyderabad Resale Archive)  
**Curatorial Direction:** Independent Luxury Fashion Label × Student Resale Archive  
**Art Direction & Product Lead:** Simran Singh (`BD/24/164`, Fashion Communication, NIFT Hyderabad)  
**Technical Architect & UX Mentor:** Antigravity AI  
**Architecture:** Dual Connected Experiences — **Complete Desktop Website (1440px / 1366px / 1280px / 1024px)** + **Dedicated Mobile Application**  
**Campus Scope:** Exclusively National Institute of Fashion Technology (NIFT), Hyderabad (Madhapur Campus)  

---

## 1. Curatorial Ethos & Art Direction

The refined visual identity embodies contemporary luxury minimalism, high-end fashion editorial lookbooks, and an authentic campus archive. It strictly rejects generic e-commerce templates, nested cards, double-border boxes, heavy drop shadows, and gaudy promotional banners.

```
                      LUXURY EDITORIAL / ARCHIVAL
                                   │
                                   │   ★ THRIFT Atelier CLOSET
                 Lemaire / The Row │   (Warm ivory, graphite & deep charcoal,
                (Quiet luxury,     │    borderless product portrait photography,
                 immaculate space, │    4-line left-aligned metadata, 60s hero cycle,
                 borderless grids) │    hairline dividers, in-person break drops)
                                   │
────────── ARTISTIC ───────────────┼─────────── FUNCTIONAL ──────────
                                   │
                    Depop          │   Standard Resale SaaS
             (Chaotic stickers,    │   (Double-nested boxes, bright badges,
              haggling, low trust) │    heavy shadows, card borders)
                                   │
                          COMMERCIAL / UTILITY
```

### Essential Principles:
- **Image-Led, Borderless Grid:** Product images sit directly in their grid columns without outer card wrappers, redundant frames, or nested background containers.
- **Controlled Palette (Charcoal, Ivory, Burgundy):** Deep charcoal (`#1C1B19`) and graphite (`#353430`) for structured navigation and bands; warm ivory (`#F3EFE7`) for content surfaces; soft stone (`#E6E1D8`) for secondary elements; and muted burgundy (`#792C35`) reserved strictly for interactive highlights, saved hearts, and key action buttons.
- **Editorial Typography Hierarchy:** High-contrast serif (`Bodoni Moda` / `Cormorant Garamond`) for headlines and numbers; clean sans-serif (`DM Sans` / `Manrope` / `Inter`) for functional UI; and handwritten cursive (`Allura`) reserved exclusively for the signature "Atelier" script in the brand wordmark.
- **Preserved Hero Concept with 60s Carousel:** "Students. Pieces. People. Possibilities." on the campus ledge remains the soul of the platform, powered by an image carousel supporting slots `hero-01` through `hero-05` with a 60-second auto-cycle, hover pause, tab visibility pause, and reduced-motion support.

---

## 2. Refined Luxury Color Tokens

```css
:root {
  /* Refined Luxury Color Palette */
  --color-warm-charcoal: #292825;       /* Elevated dark components & hover states */
  --color-graphite: #353430;            /* Major dark bands & secondary dark surfaces */
  --color-deep-charcoal: #1C1B19;       /* Deep ink charcoal for 4-column band & footer */
  --color-warm-ivory: #F3EFE7;          /* Primary editorial content canvas (65-70%) */
  --color-soft-stone: #E6E1D8;          /* Subtle secondary backgrounds & image placeholders */
  --color-muted-burgundy: #792C35;      /* Signature restrained burgundy accent (5-10%) */
  --color-supporting-grey: #96918A;     /* Muted metadata, captions, and specifications */
  --color-white: #FFFFFF;               /* Clean white tags & active contrast elements */

  /* Surface Types */
  --surface-primary-dark: #1C1B19;
  --surface-graphite: #353430;
  --surface-warm-charcoal: #292825;
  --surface-content-ivory: #F3EFE7;
  --surface-secondary-stone: #E6E1D8;

  /* Structural Dividers */
  --color-border-hairline: rgba(28, 27, 25, 0.1);
  --color-border-card: transparent;     /* Zero card borders */
  --color-border-dark: rgba(243, 239, 231, 0.12);
}
```

---

## 3. Typographic System

| Role | Font Family | Typical Size | Weight / Style | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Logotype (THRIFT)** | `Bodoni Moda` | `32px` | 800 Bold Condensed | Tall, condensed high-contrast editorial serif |
| **Logotype (Atelier)** | `Allura` | `42px` | Signature Script | Flowing burgundy script overlapping wordmark |
| **Logotype (CLOSET)** | `DM Sans` / `Manrope` | `13px` | 700 Bold Uppercase | Clean letter-spaced sans (`tracking: 0.16em`) |
| **Display Headings** | `Bodoni Moda` | `24px – 32px` | 600 Semi-Bold | Collection titles, section headings, story titles |
| **Band Numerals** | `Bodoni Moda` | `44px` | 400 Regular | `01`, `02`, `03`, `04` in the functional band |
| **Product Titles** | `DM Sans` / `Manrope` | `14.5px` | 500 Medium | Clean, unboxed product names (left-aligned) |
| **Product Prices** | `DM Sans` | `14px` | 600 Semi-Bold | Listing prices & live bids (`₹ 1,200`) |
| **Metadata Kickers** | `Space Mono` | `10px` | 700 Monospace | `FIXED PRICE · FC DEPT`, `LIVE BID · TD DEPT` |
| **Product Specs** | `DM Sans` | `12px` | 400 Regular | Condition, size, and swap notes |

---

## 4. Product Card Specification (Zero Nested Boxes)

Product cards are borderless, flat lookbook elements sitting directly in grid columns:

```
┌───────────────────────────────────────────────┐
│ [Product Photograph: 3:4 or 4:5 Aspect Ratio] │
│                                         [ ♡ ] │ ← Subtle wishlist heart in top-right
│                                               │
│                                               │
└───────────────────────────────────────────────┘
  FIXED PRICE · FC DEPT                          ← Small uppercase tracked sans kicker
  Vintage Shoulder Bag                          ← Medium sans product title
  ₹ 1,200                                       ← Semi-bold price or current bid
  Good condition · One size                     ← Supporting condition & size
```

### Hover & Interaction:
- **Image:** Slight, restrained zoom (`scale(1.03)`, `transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)`).
- **Typography:** Completely stable; zero vertical card movement (`translateY(0)`).
- **Wishlist Button:** Circular glass pill (`rgba(243, 239, 231, 0.82)`), fills with muted burgundy (`#792C35`) on save.
- **Card Click:** Opens complete peer-to-peer Product Detail Modal (PDP) with verified seller profile, condition rubric tier, fit dimensions, and action dock.

---

## 5. Homepage Sections Architecture

1. **Header / Navigation (68px, Warm Ivory):**
   - Left: `THRIFT Atelier CLOSET` logotype wordmark.
   - Centre: `Home`, `Discover`, `Sell a Piece`, `Activity & Drops`, `My Closet`.
   - Right: Minimal outline search, wishlist counter pill, user profile avatar.

2. **Full-Width Hero Section (60s Autoplay Carousel):**
   - Composition: Authentic campus photograph of students on the concrete ledge ("Students. Pieces. People. Possibilities.").
   - Slots: Dedicated image paths `hero-01.png`, `hero-02.jpg`, `hero-03.jpg`, `hero-04.jpg`, `hero-05.jpg`.
   - Timing: 60,000ms auto-advance with smooth fade transition.
   - Interactivity: Pauses immediately on mouse hover, focus, or mobile touch; pauses when browser tab is hidden; respects reduced-motion preferences.
   - Controls: Restrained editorial navigation pill with dot indicators and previous/next arrows.

3. **Four-Column Functional Band (Deep Charcoal `#1C1B19`):**
   - Columns: `01 SHOP` (Preloved pieces), `02 SELL` (Give wardrobe second life), `03 SWAP` (Trade within community), `04 JOIN` (Drops, events & stories).
   - Hairline vertical dividers (`rgba(243, 239, 231, 0.1)`).

4. **Featured This Week (Warm Ivory Ground):**
   - High-contrast editorial serif heading (`Bodoni Moda`) with right-aligned `View all →`.
   - Direct 4-column borderless product row showcasing the 4 reference pieces.

5. **Campus Drops & Community Stories (2-Column Editorial Split):**
   - *Left (Campus Drops):* Clean event photograph, structured schedule (`18 OCT 2026 • 4:00 PM – 7:00 PM • STUDIO BLOCK`), and a restrained burgundy RSVP button (`#792C35`).
   - *Right (Community Stories):* Archival student portrait + Bodoni serif headline ("How I Built My Wardrobe at NIFT Through Swaps") + short excerpt + `Read story →`.

6. **Browse by Department (6 Circular Editorial Tiles):**
   - Circular archival frames (`FC`, `FD`, `TD`, `LD`, `AD`, `KD`) with department names directly beneath, matching luxury reference layouts.

7. **Structured Minimal Footer (Deep Charcoal `#1C1B19`):**
   - 4 editorial columns (Brand & Campus Scope, Platform Navigation, Verification Guidelines, Connect & GitHub).

---

## 6. Dedicated Mobile Application Experience

- **Device Shell & Viewport:** Standalone mobile app interface with status bar, compact header, and fixed bottom navigation bar (`Home`, `Discover`, `Sell`, `Drops`, `My Closet`).
- **Mobile Hero Carousel:** Adapted for vertical viewing with touch-pause and dot indicators.
- **2x2 Functional Action Grid:** Compact mobile adaptation of the 4 platform pillars.
- **2-Column Lookbook Grid:** Borderless product cards with readable left-aligned metadata and generous touch targets.
- **Circular Department Scroll:** Horizontal touch carousel with circular department icons.
