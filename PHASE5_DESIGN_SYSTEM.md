# Phase 5: Visual Design System & Tokens — Editorial Fashion Archive & Campus Marketplace

**Platform Identity:** THRIFT Atelier CLOSET (NIFT Hyderabad Resale Archive)  
**Primary Design Reference:** NIFT Hyderabad Primary Visual Identity & Reference Artifact  
**Architecture:** Dual Connected Experiences — **Complete Desktop Website (1440px)** + **Dedicated Mobile Application**  
**Campus Scope:** Exclusively National Institute of Fashion Technology (NIFT), Hyderabad (Madhapur Campus)  
**Student / Creative Director & Product Lead:** Simran Singh (`BD/24/164`, Fashion Communication, NIFT Hyderabad)  
**Technical Architect & UX Mentor:** Antigravity AI  

---

## 1. Visual Direction & Curatorial Ethos

The visual identity embodies an independent fashion publication, a student design archive, and an authentic circular fashion ritual. It purposefully avoids generic e-commerce templates, SaaS dashboard tropes, and bright artificial gradients.

```
                      EDITORIAL / ARCHIVAL
                               │
                               │   ★ THRIFT Atelier CLOSET
             Dazed / AnOther   │   (Warm ivory, B&W archival photography,
            (High aesthetics,  │    burgundy accents, student ledge hero,
             non-transactional)│    4-column black band, in-person drops)
                               │
────────── ARTISTIC ───────────┼─────────── FUNCTIONAL ──────────
                               │
               Depop           │   Standard E-Commerce
         (Chaotic youth feed,  │   (Generic grid, utility-first,
          haggling, low trust) │    lacks curatorial dignity)
                               │
                      COMMERCIAL / UTILITY
```

### Essential Characteristics:
- **Warm Ivory Grounds:** 65–70% of canvas is unbleached warm ivory (`#F3EFE6`) and soft cream (`#EAE5DA`).
- **Archival Photography:** High-contrast, desaturated black & white and natural daylight student atelier photography (20–25%).
- **Deep Burgundy Accents:** Reserved for handwritten script annotations, active states, and event highlights (`#76252D`, `#9C4045`).
- **Oversized Editorial Typography:** Bodoni Moda and Cormorant Garamond paired with handwritten script (`Allura`) and functional grotesk (`DM Sans` / `Manrope`).
- **Minimal Interface Elements:** Hairline dividers, subtle neutral cards, zero artificial drop shadows.

---

## 2. Codified Color Tokens

```css
:root {
  /* Exact Reference Color Palette */
  --color-warm-ivory: #F3EFE6;         /* Primary canvas background (65-70%) */
  --color-soft-cream: #EAE5DA;         /* Neutral card ground & secondary surfaces */
  --color-charcoal-black: #171715;     /* Deep ink black for text & 4-column band */
  --color-deep-burgundy: #76252D;      /* Signature editorial accent & script */
  --color-muted-wine-red: #9C4045;     /* Supporting wine red for interactive states */
  --color-warm-grey: #BDB8AE;          /* Divider lines & muted numerals */
  --color-supporting-text-grey: #77736C;/* Secondary metadata & editorial captions */
  --color-white: #FFFFFF;              /* Clean white pill buttons & tags */
  --color-sky-tint: #ACC6DD;           /* Photographic sky tint from campus hero */

  /* Structural Dividers */
  --color-border-hairline: rgba(23, 23, 21, 0.09);
  --color-border-card: rgba(23, 23, 21, 0.08);
}
```

---

## 3. Typographic Hierarchy

| Role | Font Family | Typical Size | Weight / Style | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Logotype (THRIFT)** | `Bodoni Moda` | `32px` | 800 Bold Condensed | Tall, condensed high-contrast editorial serif |
| **Logotype (Atelier)** | `Allura` / `Alex Brush` | `42px` | Flowing Script | Burgundy signature script overlapping wordmark |
| **Logotype (CLOSET)** | `DM Sans` / `Manrope` | `13px` | 700 Bold Uppercase | Clean letter-spaced sans (`tracking: 0.16em`) |
| **Handwritten Accent** | `Allura` | `58px` | Flowing Cursive (`#76252D`) | *"Students Pieces People Possibilities"* |
| **Display Headings** | `Bodoni Moda` | `28px – 34px` | 600 Semi-Bold | Section titles, story headlines, drop title |
| **Band Numerals** | `Bodoni Moda` | `42px` | 400 Regular | `01`, `02`, `03`, `04` in the functional band |
| **Functional UI** | `DM Sans` / `Manrope` | `13px – 15px` | 500 / 600 Medium | Navigation, product names, buttons, filters |
| **Flat-Lay Specs** | `Space Mono` | `11px – 12px` | 700 Bold Monospace | Measurements, dates, timestamps, lot prices |

---

## 4. Desktop Homepage Architecture (Sections 01 to 07)

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION 01: COMPACT HEADER (68px, Warm Ivory, Minimal Outline Icons)   │
│ [THRIFT Atelier CLOSET]      [Discover  Sell  Activity  Closet] [🔍 ♡ 👤]│
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 02: FULL-WIDTH HERO (Authentic Campus Ledge Photograph)        │
│  "Students Pieces People Possibilities"     A RESALE ARCHIVE           │
│  (Deep Burgundy Cursive Script)              BY NIFT HYDERABAD          │
│                                              STUDENTS. (→)             │
│  [5 NIFT Students Sitting on Concrete Ledge with Blue Sky]            │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 03: BLACK FOUR-COLUMN FUNCTIONAL BAND (#171715)                │
│  01 SHOP              02 SELL           03 SWAP          04 JOIN       │
│  Preloved pieces      Give wardrobe     Trade within     Campus drops, │
│  across depts.        a second life.    community.       events/stories│
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 04: FEATURED THIS WEEK (Warm Ivory Ground, 4-Column Cards)     │
│  [Vintage Shoulder Bag] [Plaid Ruffle Blouse] [Suede Jacket] [Wide Leg]│
│  ₹1,200 • FC            ₹950 • FD             ₹2,800 • LD    ₹1,450•TD │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 05: CAMPUS DROPS & COMMUNITY STORIES (2-Column Editorial Split)│
│  ┌──────────────────────────────┐   ┌────────────────────────────────┐ │
│  │ ART & DESIGN DEPT            │   │ [Student Photo]  How I Built   │ │
│  │ CAMPUS DROP (18 OCT)         │   │                  My Wardrobe   │ │
│  │ Studio Block • [RSVP NOW →]  │   │                  Through Swaps │ │
│  └──────────────────────────────┘   └────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 06: BROWSE BY DEPARTMENT (6 Monochromatic Photographic Tiles)  │
│  [Fashion Comm] [Fashion Design] [Textile Design]                      │
│  [Leather Design] [Accessory Design] [Knitwear Design]                 │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 07: MINIMAL FOOTER                                             │
│  [Brand Logo] • A student-run resale archive by NIFT Hyderabad         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Dedicated Mobile Application Experience

Rather than simply squeezing the desktop website into a narrow viewport, the project features a **dedicated mobile application interface**:

1. **Fixed Mobile Bottom Navigation:**
   - `Discover` (explore marketplace catalog)
   - `Sell` (tactile floating `+` button triggering the 6-step guided listing wizard)
   - `Drops` (campus break meetup calendar with RSVP)
   - `My Closet` (personal wardrobe, swap inbox, and wishlist archive)
2. **Mobile Home Sequence:**
   - Compact brand header with search and profile badges.
   - 4:3.4 community hero card featuring the students on the campus ledge.
   - 2 × 2 Black Functional Action Grid (`01 SHOP`, `02 SELL`, `03 SWAP`, `04 JOIN`).
   - Horizontal swipe carousel for *Featured This Week*.
   - Next Campus Drop promotional card with one-tap RSVP.
   - Community Story preview card.
   - Horizontal scrolling department pills (`FC`, `FD`, `TD`, `LD`, `AD`, `KD`).
   - 2-column mobile marketplace feed with generous touch targets.
3. **Experience Switcher:**
   - Seamless top toggle allowing reviewers to effortlessly toggle between the **1440px Desktop Website** and the **Dedicated Mobile Application frame**.
