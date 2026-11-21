# THRIFT Atelier CLOSET — Campus Resale Archive & Live Marketplace

> **Department of Fashion Communication, National Institute of Fashion Technology (NIFT), Hyderabad**  
> **Course:** Information Architecture & User Experience Design  
> **Student / Creative Director & Product Lead:** Simran Singh (`BD/24/164`)  
> **Technical Project Architect & UX Mentor:** Antigravity AI  
> **Primary Design Reference:** NIFT Hyderabad Primary Visual Identity & Reference Artifact  

---

## 🏛️ Executive Summary & Curatorial Direction

**THRIFT Atelier CLOSET** is a student-run circular fashion platform and resale archive designed exclusively for the **NIFT Hyderabad community (Madhapur Campus)**. It bridges the gap between design students' wardrobe turnover (styling assignments, studio juries, semester runway projects) and sustainable fashion access.

Rather than resembling a generic commercial store or a chaotic WhatsApp group, the platform is crafted as an **editorial fashion archive**:
- **Warm Ivory Grounds (`#F3EFE6`, `#EAE5DA`):** Replaces harsh digital white with the tactile warmth of unbleached editorial cardstock.
- **Archival Photography:** Authentic campus photography showing NIFT students sitting on the campus ledge with open sky, paired with clean neutral studio product shots.
- **Deep Burgundy Accents (`#76252D`):** Reserved for handwritten script annotations (*"Students Pieces People Possibilities"*), active controls, and drop meet highlights.
- **Dual Connected Experiences:** A complete **1440px Desktop Website** and a **Dedicated Mobile Application** sharing the same visual identity, backend logic, and catalog data.

---

## 🧭 The 6-Phase Product Development Methodology

```
┌────────────────────────────────────────────────────────────────────────┐
│                      THE 6-STAGE GATE LIFECYCLE                         │
├────────────────────────────────────────────────────────────────────────┤
│  PHASE 1: Narrative & Objectives                                       │
│  └─ NIFT Campus Scope • Bifurcated Pricing • Zero-Courier Handoffs     │
│     [See PHASE1_NARRATIVE.md]                                          │
│                                                                        │
│  PHASE 2: Empathy & User Experience Modeling                           │
│  └─ Dual-Persona Spectrum (Curator & Hunter) • Empathy Map             │
│     [See PHASE2_EMPATHY_MODELING.md]                                   │
│                                                                        │
│  PHASE 3: Information Architecture & Taxonomy                          │
│  └─ 6-Department Taxonomy (FC, FD, TD, LD, AD, KD) • 7-Layer PDP       │
│     [See PHASE3_IA_TAXONOMY.md]                                        │
│                                                                        │
│  PHASE 4: User Flows & Low-Fidelity Wireframes                         │
│  └─ 6-Step Sell Wizard • Bidding Flow • Campus Drop State Machine      │
│     [See PHASE4_WIREFRAMES_FLOWS.md]                                   │
│                                                                        │
│  PHASE 5: Visual Design System & Tokens                                │
│  └─ Primary Design Reference • Warm Ivory & Burgundy • Bodoni & Allura │
│     [See PHASE5_DESIGN_SYSTEM.md]                                      │
│                                                                        │
│  PHASE 6: Interactive Prototyping & Verification                       │
│  └─ Desktop Website + Dedicated Mobile App • Bidding • Bilateral Swaps │
│     [Interactive Files: index.html • styles.css • app.js]              │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Desktop Website Exact Homepage Architecture

Faithfully reconstructed from the primary design reference:

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION 01: COMPACT HEADER (68px, Warm Ivory, Outline Icons, Avatar)   │
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

## 2. Dedicated Mobile Application Experience

The mobile application is a distinct, mobile-optimised interface sharing the same visual language:
- **Fixed Bottom Navigation:** Discover, Sell (`+`), Drops, and Closet.
- **Mobile Home Sequence:** Compact header with wordmark, community hero card with script typography, 2×2 Black Action Grid (`01 SHOP`, `02 SELL`, `03 SWAP`, `04 JOIN`), Featured carousel, Next Campus Drop card, Community Story, and Department pills.
- **2-Column Product Grid:** Large touch targets, clear condition badges, and wishlist heart toggles.
- **Experience Switcher:** A top toggle bar allows instant previewing between the **1440px Desktop Website** and the **Dedicated Mobile Application**.

---

## 3. Commercial & Fulfillment Paradigms

```
5-TIER CONDITION RUBRIC & PRICING PARADIGMS
 ├── TRACK A: DIRECT FIXED PRICE (Tiers 1 – 3)
 │    ├── 1. New / Unworn  ──► Fixed Price Only (No bidding / No lowballs)
 │    ├── 2. Like New      ──► Fixed Price Only (Direct Buy or Swap)
 │    └── 3. Gently Used   ──► Fixed Price Only (Standardized transparent price)
 │
 └── TRACK B: CAMPUS LIVE BIDDING (Tiers 4 – 5)
      ├── 4. Well Used            ──► Starting Bid + Live Increments (+₹50, +₹100)
      └── 5. Visible Wear / Flaws ──► Upcycling Auction (Mandatory Flaw Photo)
```

### Campus Break Drops (Zero Shipping Waste):
- **Canteen Amphitheatre Steps:** Primary hub for Friday lunch break drop meets (1:15 PM – 2:00 PM).
- **Textile Department Lawn:** Informal outdoor studio break trades.
- **Resource Centre Lobby:** Indoor daylight spot for footwear and outerwear fit validation.

---

## 4. Repository File Structure

```
simran_BD_24_164/
├── instructions.md               # Operational role contract & stage gate rules
├── PHASE1_NARRATIVE.md           # Brand narrative, campus scope & pricing paradigms
├── PHASE2_EMPATHY_MODELING.md    # Dual personas, empathy maps & user journey maps
├── PHASE3_IA_TAXONOMY.md         # Navigation sitemap, 6 department trees & PDP blueprint
├── PHASE4_WIREFRAMES_FLOWS.md    # 6-step sell wizard, bidding flows & drop state machine
├── PHASE5_DESIGN_SYSTEM.md       # Color tokens, typography scales, reference design specs
├── index.html                    # Desktop website & dedicated mobile app layouts
├── styles.css                    # Warm ivory, charcoal & burgundy design system
├── app.js                        # State engine, bidding, bilateral trades & view controller
├── README.md                     # Comprehensive academic case study documentation
└── images/
    ├── reference/                # High-res enhanced reference assets (hero, depts, events)
    └── product-1.jpg ... 20.jpg  # 20 authentic student lookbook photographs
```

---

## 🚀 Running the Application

The application is completely self-contained with zero runtime dependencies. Open [index.html](file:///c:/Users/sarat/OneDrive/Desktop/ARCHITECTURE/simran_BD_24_164/index.html) in any modern desktop or mobile browser.
