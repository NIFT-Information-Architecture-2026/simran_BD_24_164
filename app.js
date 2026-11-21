/**
 * THRIFT Atelier CLOSET — APPLICATION ENGINE
 * Source of Truth: NIFT Hyderabad Primary Visual Identity
 * Delivers Dual Connected Experiences: Desktop Website + Dedicated Mobile Application
 */

// ==========================================================================
// 1. GLOBAL REACTIVE APP STATE
// ==========================================================================

const AppState = {
  experienceMode: 'desktop', // 'desktop' or 'mobile'
  desktopView: 'home',       // 'home', 'discover', 'sell', 'activity', 'closet'
  mobileTab: 'm-home',       // 'm-home', 'm-discover', 'm-sell', 'm-drops', 'm-closet'
  closetSubmode: 'listings', // 'listings' or 'saved'

  // Saved Wishlist IDs (Set of garment IDs)
  savedIds: new Set([1002, 1, 4]),

  // Filters & Search
  activeTransactionFilter: 'all', // 'all', 'fixed', 'bidding', 'swap'
  activeDeptFilter: 'all',        // 'all', 'FC', 'FD', 'TD', 'LD', 'AD', 'KD'
  activeCategoryFilter: 'all',
  activeSort: 'newest',
  searchQuery: '',

  // User Profile
  currentUser: {
    name: 'Simran Singh',
    handle: '@simran_archives',
    dept: 'Fashion Comm (FC)',
    campus: 'NIFT Hyderabad',
    rating: 4.95,
    salesCount: 16,
    swapsCount: 7,
    earnings: 6850
  },

  // Active Modals & Transient States
  currentPdpItem: null,
  biddingTargetItem: null,
  swapTargetItem: null,
  selectedTradeClosetItemId: 101,
  cashTopUpAmount: 0,

  // Sell Wizard State
  wizardStep: 1,
  wizardPricingModel: 'fixed',

  // Master Campus Catalog (Includes the 4 Reference Products + Authentic Student Portfolio Pieces)
  listings: [
    // ------------------------------------------------------------------------
    // REFERENCE SECTION 04: THE 4 SIGNATURE FEATURED PRODUCTS
    // ------------------------------------------------------------------------
    {
      id: 1001,
      title: "Vintage Shoulder Bag",
      brand: "Vintage Milan Archive",
      category: "Bags",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed", // Tiers 1-3: FIXED
      price: 1200,
      size: "One Size (Compact Underarm)",
      heroImage: "images/reference/feat-bag-highres.png",
      isFeatured: true,
      openForSwap: true,
      tradeWishlist: "Open to trade for silver concho belt or leather Mary Janes",
      flaws: "Supple cognac glazed faux-leather with polished buckle hardware; minor interior lining creasing.",
      measurements: { width: "12.0 in", height: "7.0 in", strapDrop: "9.5 in" },
      seller: {
        name: "Ria Sharma",
        handle: "@ria_fc",
        dept: "Fashion Comm (FC)",
        rating: 4.9,
        circulations: 28,
        location: "Canteen Courtyard",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&q=80"
      },
      dropZones: ["Canteen Amphitheatre Steps", "Textile Lawn"]
    },
    {
      id: 1002,
      title: "Plaid Ruffle Blouse",
      brand: "FD Atelier Studio Drape Lab",
      category: "Tops",
      dept: "FD",
      deptFullName: "Fashion Design (FD)",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed",
      price: 950,
      size: "Fits S - Boxy M",
      heroImage: "images/reference/feat-plaid-highres.png",
      isFeatured: true,
      openForSwap: false,
      flaws: "Pristine. Tailored during Semester 3 draping project, worn once for runway evaluation.",
      measurements: { chest: "35.5 in", waist: "28.0 in", length: "20.5 in" },
      seller: {
        name: "Arjun Verma",
        handle: "@arjun_fd",
        dept: "Fashion Design (FD)",
        rating: 5.0,
        circulations: 12,
        location: "Resource Centre Lobby",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&q=80"
      },
      dropZones: ["Canteen Amphitheatre", "FD Patternmaking Lab"]
    },
    {
      id: 1003,
      title: "Suede Jacket",
      brand: "Leather Design Heritage Lab",
      category: "Outerwear",
      dept: "LD",
      deptFullName: "Leather Design (LD)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 2800,
      size: "Size M (Boxy Cut)",
      heroImage: "images/reference/feat-jacket-highres.png",
      isFeatured: true,
      openForSwap: true,
      tradeWishlist: "Swap for heavy skater denims or platform boots",
      flaws: "Buttery chocolate brown split suede; natural patina on collar fold from studio wear.",
      measurements: { chest: "22.0 in", shoulder: "18.5 in", length: "24.0 in", sleeve: "24.0 in" },
      seller: {
        name: "Meera Nair",
        handle: "@meera_ld",
        dept: "Leather Design (LD)",
        rating: 4.95,
        circulations: 18,
        location: "Resource Centre Lobby",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=140&q=80"
      },
      dropZones: ["Canteen Amphitheatre", "Library Lobby"]
    },
    {
      id: 1004,
      title: "Wide Leg Denim Jeans",
      brand: "Textile Dept Study",
      category: "Bottoms",
      dept: "TD",
      deptFullName: "Textile Design (TD)",
      condition: "Well Used",
      conditionTier: 4,
      pricingModel: "bidding", // Tiers 4-5: CAMPUS BIDDING
      startingBid: 700,
      currentHighestBid: 1150,
      bidsCount: 6,
      price: 1450, // Reference price display
      size: "Waist 28 - 30 (Extreme Puddle)",
      heroImage: "images/reference/feat-jeans-highres.png",
      isFeatured: true,
      openForSwap: true,
      tradeWishlist: "Looking to swap for chore jacket or embroidered shirts",
      flaws: "Intentional raw distress drag at rear heel hem from campus ramp walks; heavy indigo fade.",
      measurements: { waist: "29.5 in", hip: "41.0 in", inseam: "33.0 in", legOpening: "12.0 in" },
      seller: {
        name: "Devika Rao",
        handle: "@devika_td",
        dept: "Textile Design (TD)",
        rating: 4.8,
        circulations: 42,
        location: "Textile Department Lawns",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=140&q=80"
      },
      dropZones: ["Textile Lawn", "Canteen Amphitheatre"]
    },

    // ------------------------------------------------------------------------
    // AUTHENTIC NIFT STUDENT PRODUCT PORTFOLIO PIECES
    // ------------------------------------------------------------------------
    {
      id: 1,
      title: "Y2K Tartan Checked Ruched Hobo Bag",
      brand: "Subversive Studio",
      category: "Bags",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 1250,
      size: "One Size",
      heroImage: "images/product-1.jpg",
      openForSwap: true,
      tradeWishlist: "Trade for silver belts or vintage cuffs",
      flaws: "Minor fabric softening on interior lining; carved toggle wood button intact.",
      measurements: { width: "14.5 in", height: "11.0 in" },
      seller: { name: "Ria Sharma", handle: "@ria_fc", dept: "Fashion Comm (FC)", rating: 4.9, circulations: 28, location: "Canteen Steps", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre", "Textile Lawn"]
    },
    {
      id: 2,
      title: "Asymmetric Plaid Peplum Tie Blouse",
      brand: "FC Atelier Drape Lab",
      category: "Tops",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed",
      price: 1400,
      size: "Fits S - M",
      heroImage: "images/product-2.jpg",
      openForSwap: false,
      flaws: "None. Tailored for Term 3 studio styling project, pristine seams.",
      measurements: { chest: "36.0 in", waist: "29.0 in", length: "21.5 in" },
      seller: { name: "Arjun Verma", handle: "@arjun_fd", dept: "Fashion Design (FD)", rating: 5.0, circulations: 12, location: "Library Lobby", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre"]
    },
    {
      id: 3,
      title: "Glossy Cherry Crimson Ring Hobo",
      brand: "Vintage Milan Archive",
      category: "Bags",
      dept: "AD",
      deptFullName: "Accessory Design (AD)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 1850,
      size: "Shoulder Bag",
      heroImage: "images/product-3.jpg",
      openForSwap: true,
      tradeWishlist: "Looking for moto boots or Mary Jane flats",
      flaws: "Pristine cherry red glaze; hairline contact on inner metal ring.",
      measurements: { width: "13.0 in", height: "9.5 in" },
      seller: { name: "Devika Rao", handle: "@devika_td", dept: "Textile Design (TD)", rating: 4.8, circulations: 42, location: "Textile Lawn", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre", "Textile Lawn"]
    },
    {
      id: 4,
      title: "Distressed Grommet Buckle Shoulder Bag",
      brand: "Diesel Archive",
      category: "Bags",
      dept: "TD",
      deptFullName: "Textile Design (TD)",
      condition: "Well Used",
      conditionTier: 4,
      pricingModel: "bidding",
      startingBid: 550,
      currentHighestBid: 950,
      bidsCount: 5,
      price: 950,
      size: "Compact Flap",
      heroImage: "images/product-4.jpg",
      openForSwap: true,
      tradeWishlist: "Swap for wide leg skate denims or silver cuffs",
      flaws: "Authentic grunge edge wear along bottom piping; all grommets firmly secured.",
      measurements: { width: "11.5 in", height: "7.0 in", depth: "3.5 in" },
      seller: { name: "Ananya Sen", handle: "@ananya_td", dept: "Textile Design (TD)", rating: 4.95, circulations: 19, location: "Textile Lawn", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Textile Lawn", "Canteen Amphitheatre"]
    },
    {
      id: 5,
      title: "Ornate Silver Concho Leather Waist Belt",
      brand: "Heritage Rajasthan Guild",
      category: "Accessories",
      dept: "AD",
      deptFullName: "Accessory Design (AD)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 1100,
      size: "Waist 26 - 32 in",
      heroImage: "images/product-5.jpg",
      openForSwap: true,
      flaws: "Solid oxidised silver-finish conchos; full grain black leather.",
      measurements: { length: "38.0 in", width: "1.5 in" },
      seller: { name: "Meera Nair", handle: "@meera_ad", dept: "Accessory Design (AD)", rating: 5.0, circulations: 9, location: "Library Lobby", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Library Lobby", "Canteen Amphitheatre"]
    },
    {
      id: 6,
      title: "Molten Gold & Amber Resin Bangle Stack",
      brand: "AD Studio Handcast",
      category: "Accessories",
      dept: "AD",
      deptFullName: "Accessory Design (AD)",
      condition: "New / Unworn",
      conditionTier: 1,
      pricingModel: "fixed",
      price: 950,
      size: "Inner Dia 2.5 in",
      heroImage: "images/product-6.jpg",
      openForSwap: false,
      flaws: "Zero defects. Handcrafted amber swirl resin paired with hammered brass bangle.",
      measurements: { innerDiameter: "65 mm" },
      seller: { name: "Meera Nair", handle: "@meera_ad", dept: "Accessory Design (AD)", rating: 5.0, circulations: 9, location: "Library Lobby", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Library Lobby", "Canteen Amphitheatre"]
    },
    {
      id: 7,
      title: "Tribal Flame Embroidered Baggy Jeans",
      brand: "Jaded London Archive",
      category: "Bottoms",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed",
      price: 3200,
      size: "Tag 30 (Fits 29-32)",
      heroImage: "images/product-7.jpg",
      openForSwap: true,
      tradeWishlist: "Only trading for heavy leather jacket or Dr. Martens boots",
      flaws: "Dense flame embroidery across back legs, pristine denim weave.",
      measurements: { waist: "31.0 in", hip: "42.0 in", inseam: "32.5 in" },
      seller: { name: "Karan Joshi", handle: "@karan_fc", dept: "Fashion Comm (FC)", rating: 4.88, circulations: 31, location: "Canteen Steps", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre"]
    },
    {
      id: 8,
      title: "Noir Moto Leather Ruched Baguette",
      brand: "Mango Premium",
      category: "Bags",
      dept: "LD",
      deptFullName: "Leather Design (LD)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 1650,
      size: "Underarm Baguette",
      heroImage: "images/product-8.jpg",
      openForSwap: true,
      tradeWishlist: "Looking for pleated skirts or oversized poplin shirts",
      flaws: "Supple lambskin feel, silver hardware buckle, slight surface rub on base corner.",
      measurements: { width: "12.0 in", height: "6.5 in" },
      seller: { name: "Pooja Hegde", handle: "@pooja_fc", dept: "Fashion Comm (FC)", rating: 4.85, circulations: 24, location: "Library Lobby", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Library Lobby", "Canteen Amphitheatre"]
    },
    {
      id: 10,
      title: "Chanderi Multi-Stripe Lantern Sleeve Blouse",
      brand: "Textile Dept Handloom Project",
      category: "Indian / Ethnic Wear",
      dept: "TD",
      deptFullName: "Textile Design (TD)",
      condition: "New / Unworn",
      conditionTier: 1,
      pricingModel: "fixed",
      price: 2600,
      size: "Size M (Tailored Comfort)",
      heroImage: "images/product-10.jpg",
      openForSwap: true,
      tradeWishlist: "Swap for high-end archival footwear or designer bags",
      flaws: "Zero flaws. Pure silk-chanderi with zari temple borders woven in Pochampally cluster.",
      measurements: { chest: "37.5 in", waist: "31.0 in", sleeve: "22.0 in", length: "22.5 in" },
      seller: { name: "Devika Rao", handle: "@devika_td", dept: "Textile Design (TD)", rating: 4.8, circulations: 42, location: "Textile Lawn", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Textile Lawn", "Canteen Amphitheatre"]
    },
    {
      id: 11,
      title: "'From Venice With Love' Embroidered Shirt",
      brand: "Bode Archive Study",
      category: "Tops",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 1500,
      size: "Size L (Boxy Fit)",
      heroImage: "images/product-11.jpg",
      openForSwap: true,
      tradeWishlist: "Looking to swap for chore jackets or denim trousers",
      flaws: "Carefully hand-embroidered script & boat motif; natural linen texture.",
      measurements: { chest: "23.0 in", shoulder: "19.5 in", length: "27.0 in" },
      seller: { name: "Karan Joshi", handle: "@karan_fc", dept: "Fashion Comm (FC)", rating: 4.88, circulations: 31, location: "Canteen Steps", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre"]
    },
    {
      id: 12,
      title: "Statue Print Striped Oxford Shirt",
      brand: "FC Screenprint Atelier",
      category: "Tops",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed",
      price: 1950,
      size: "Oversized Fit (Fits M-XL)",
      heroImage: "images/product-12.jpg",
      openForSwap: false,
      flaws: "None. Classical Greek sculpture photo-emulsion printed onto classic Bengal stripe poplin.",
      measurements: { chest: "24.0 in", shoulder: "20.5 in", length: "29.0 in" },
      seller: { name: "Ria Sharma", handle: "@ria_fc", dept: "Fashion Comm (FC)", rating: 4.9, circulations: 28, location: "Canteen Courtyard", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre", "Textile Lawn"]
    },
    {
      id: 13,
      title: "Tailored Brown Stripe Utility Blouse",
      brand: "Zara Woman Vintage",
      category: "Tops",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 850,
      size: "Size S (Fitted)",
      heroImage: "images/product-13.jpg",
      openForSwap: true,
      tradeWishlist: "Swap for silver belt or mini shoulder bag",
      flaws: "Sharply pressed darting; faint button patina.",
      measurements: { chest: "17.5 in", waist: "14.0 in", length: "21.0 in" },
      seller: { name: "Pooja Hegde", handle: "@pooja_fc", dept: "Fashion Comm (FC)", rating: 4.85, circulations: 24, location: "Library Lobby", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Library Lobby", "Canteen Amphitheatre"]
    },
    {
      id: 14,
      title: "1997 Archive 'Fragment Low Stance' Tee",
      brand: "Vintage Japanese Import",
      category: "Tops",
      dept: "KD",
      deptFullName: "Knitwear Design (KD)",
      condition: "Visible Wear / Flaws",
      conditionTier: 5,
      pricingModel: "bidding",
      startingBid: 450,
      currentHighestBid: 850,
      bidsCount: 4,
      price: 850,
      size: "Tag L (Boxy Heavyweight)",
      heroImage: "images/product-14.jpg",
      openForSwap: true,
      tradeWishlist: "Open to swap for any vintage graphic tee or trucker cap",
      flaws: "Disclosed: Vintage sun fade across shoulders and micro pinhole near back collar seam.",
      measurements: { chest: "22.5 in", shoulder: "21.0 in", length: "27.5 in" },
      seller: { name: "Zayn Khan", handle: "@zayn_kd", dept: "Knitwear Design (KD)", rating: 4.92, circulations: 15, location: "Canteen Courtyard", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre"]
    },
    {
      id: 15,
      title: "Hourglass Flared Peplum Striped Blouse",
      brand: "FD Patternmaking Lab",
      category: "Tops",
      dept: "FD",
      deptFullName: "Fashion Design (FD)",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed",
      price: 1800,
      size: "Size S / M",
      heroImage: "images/product-15.jpg",
      openForSwap: false,
      flaws: "Sculptural pattern drafted on Alvanon dress form, clean French seams.",
      measurements: { chest: "35.0 in", waist: "27.5 in", flareHem: "42.0 in" },
      seller: { name: "Arjun Verma", handle: "@arjun_fd", dept: "Fashion Design (FD)", rating: 5.0, circulations: 12, location: "Resource Centre", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre"]
    },
    {
      id: 16,
      title: "Adidas Samba OG 'Cow Print Pony Hair'",
      brand: "Adidas Originals Special Edition",
      category: "Footwear",
      dept: "TD",
      deptFullName: "Textile Design (TD)",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed",
      price: 4200,
      size: "UK 6.5 / EU 40",
      heroImage: "images/product-16.jpg",
      openForSwap: true,
      tradeWishlist: "Will trade for Salomon XT-6 or Maison Margiela Tabi",
      flaws: "Worn once to campus exhibition. Genuine tactile calf hair texture, gum sole 98% life.",
      measurements: { insoleLength: "25.5 cm" },
      seller: { name: "Ananya Sen", handle: "@ananya_td", dept: "Textile Design (TD)", rating: 4.95, circulations: 19, location: "Textile Lawn", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Textile Lawn", "Canteen Amphitheatre"]
    }
  ],

  // Simran's Active Wardrobe Closet (Available for Trade or Personal Listings)
  userCloset: [
    {
      id: 101,
      title: "House 40 Patent Crimson Mary Janes",
      brand: "House 40 Archive",
      category: "Footwear",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed",
      price: 2100,
      size: "EU 38 / UK 5",
      heroImage: "images/product-17.jpg",
      openForSwap: true,
      flaws: "Worn twice for studio critique. Dual strap buckle detail, flawless glossy crimson finish.",
      measurements: { insoleLength: "24.5 cm", heelDrop: "0.8 in" },
      isMine: true
    },
    {
      id: 102,
      title: "Minka Espresso Patent Pointed Slingbacks",
      brand: "Minka Studio",
      category: "Footwear",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 1750,
      size: "EU 39 / UK 6",
      heroImage: "images/product-18.jpg",
      openForSwap: true,
      flaws: "Natural light sole wear from ramp walk; glossy dark chocolate patent exterior pristine.",
      measurements: { insoleLength: "25.0 cm", heelDrop: "1.8 in" },
      isMine: true
    },
    {
      id: 103,
      title: "Plum Square-Toe Leather Glove Flats",
      brand: "Leather Goods Dept Prototype",
      category: "Footwear",
      dept: "LD",
      deptFullName: "Leather Design (LD)",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed",
      price: 1600,
      size: "EU 38 (Soft Glove Fit)",
      heroImage: "images/product-19.jpg",
      openForSwap: true,
      flaws: "Ultra-buttery vegetable tanned deep plum leather, zero scuffs.",
      measurements: { insoleLength: "24.5 cm" },
      isMine: true
    },
    {
      id: 104,
      title: "Subversive Moto Jacket with Pony Hair Belt",
      brand: "FD Senior Runway Collection",
      category: "Outerwear",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 3800,
      size: "Size S / M",
      heroImage: "images/product-20.jpg",
      openForSwap: true,
      flaws: "Heavyweight genuine tumbled cowhide with spotted pony hair belt and matching leather gloves.",
      measurements: { chest: "21.0 in", shoulder: "18.0 in", length: "22.5 in" },
      isMine: true
    }
  ],

  // Activity Stream (Live Bids, Swaps, Drops)
  activity: [
    {
      id: 'act-1',
      type: 'trade',
      timestamp: '25m ago',
      title: 'Bilateral Swap Offer: @karan_fc',
      detail: 'Wants to trade "Tribal Flame Embroidered Jeans" (+ ₹300 cash) for your "Subversive Moto Jacket".',
      location: 'Canteen Amphitheatre Steps',
      status: 'pending'
    },
    {
      id: 'act-2',
      type: 'drop',
      timestamp: 'Friday Break • 1:30 PM',
      title: 'Break Drop Scheduled: Suede Jacket',
      detail: 'Meet with @meera_ld at Canteen Amphitheatre Steps for daylight fit inspection.',
      location: 'Canteen Amphitheatre Steps',
      status: 'scheduled'
    },
    {
      id: 'act-3',
      type: 'bid',
      timestamp: '1h ago',
      title: 'Active High Bid: Wide Leg Denim Jeans',
      detail: 'You are leading at ₹1,150! Auction closes before Friday break drop.',
      location: 'Canteen Amphitheatre',
      status: 'leading'
    }
  ]
};


// ==========================================================================
// 2. INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedThisWeek();
  renderMarketplaceGrid();
  renderActivityStream();
  renderClosetGrid();
  updateDynamicFitFields('Outerwear');
  updateWishlistCounters();

  // Condition radio changes in Sell wizard
  document.querySelectorAll('input[name="sell-condition-choice"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const model = e.target.dataset.model;
      AppState.wizardPricingModel = model;
      updateSellPricingUI(model);
    });
  });
});


// ==========================================================================
// 3. EXPERIENCE SWITCHER (DESKTOP VS DEDICATED MOBILE APP)
// ==========================================================================

window.setExperienceMode = function(mode) {
  AppState.experienceMode = mode;

  const btnDesk = document.getElementById('btn-view-desktop');
  const btnMob = document.getElementById('btn-view-mobile');
  const expDesk = document.getElementById('desktop-experience');
  const expMob = document.getElementById('mobile-experience');

  if (mode === 'mobile') {
    btnMob?.classList.add('active');
    btnDesk?.classList.remove('active');
    expMob?.classList.add('active');
    expDesk?.classList.remove('active');
    document.body.classList.remove('desktop-mode');
    document.body.classList.add('mobile-mode');
    renderMobileHomeFeed();
    showToast("Switched to Dedicated Mobile Application view 📱");
  } else {
    btnDesk?.classList.add('active');
    btnMob?.classList.remove('active');
    expDesk?.classList.add('active');
    expMob?.classList.remove('active');
    document.body.classList.add('desktop-mode');
    document.body.classList.remove('mobile-mode');
    showToast("Switched to Desktop Website view 💻");
  }
};


// ==========================================================================
// 4. DESKTOP VIEW NAVIGATION CONTROLLER
// ==========================================================================

window.showDesktopView = function(viewName, submode) {
  AppState.desktopView = viewName;

  document.querySelectorAll('.desktop-subview').forEach(view => {
    view.classList.remove('active');
  });

  const target = document.getElementById(`desktop-${viewName}-view`);
  if (target) {
    target.classList.add('active');
  }

  // Update nav item active states
  document.querySelectorAll('.desktop-main-menu .nav-item').forEach(item => {
    if (item.dataset.deskview === viewName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  if (viewName === 'closet') {
    switchClosetSubmode(submode || 'listings');
  }

  if (viewName === 'activity' && submode === 'drops') {
    filterActivity('drops');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.scrollToSection = function(sectionId) {
  showDesktopView('home');
  setTimeout(() => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};

window.toggleSearchTray = function(forceState) {
  const drawer = document.getElementById('search-drawer');
  if (!drawer) return;
  const isCurrentlyActive = drawer.classList.contains('active');
  const shouldOpen = forceState !== undefined ? forceState : !isCurrentlyActive;
  if (shouldOpen) {
    drawer.classList.add('active');
    document.getElementById('global-search-input')?.focus();
  } else {
    drawer.classList.remove('active');
  }
};


// ==========================================================================
// 5. FEATURED THIS WEEK SECTION (SECTION 04)
// ==========================================================================

function renderFeaturedThisWeek() {
  const row = document.getElementById('featured-products-row');
  const mobCarousel = document.getElementById('mob-featured-container');
  if (!row) return;

  // The 4 reference items
  const featured = AppState.listings.filter(i => i.isFeatured);

  row.innerHTML = featured.map(item => createProductCardHTML(item)).join('');
  attachProductCardEvents(row);

  if (mobCarousel) {
    mobCarousel.innerHTML = featured.map(item => `
      <div class="mob-featured-item">
        ${createProductCardHTML(item)}
      </div>
    `).join('');
    attachProductCardEvents(mobCarousel);
  }
}


// ==========================================================================
// 6. MARKETPLACE CATALOG ENGINE (DISCOVER VIEW & FILTERS)
// ==========================================================================

function getFilteredListings() {
  let items = [...AppState.listings];

  // Transaction filter
  if (AppState.activeTransactionFilter === 'fixed') {
    items = items.filter(i => i.pricingModel === 'fixed');
  } else if (AppState.activeTransactionFilter === 'bidding') {
    items = items.filter(i => i.pricingModel === 'bidding');
  } else if (AppState.activeTransactionFilter === 'swap') {
    items = items.filter(i => i.openForSwap);
  }

  // Department filter
  if (AppState.activeDeptFilter !== 'all') {
    items = items.filter(i => i.dept === AppState.activeDeptFilter);
  }

  // Category filter
  if (AppState.activeCategoryFilter !== 'all') {
    items = items.filter(i => i.category === AppState.activeCategoryFilter);
  }

  // Search query
  if (AppState.searchQuery.trim() !== '') {
    const q = AppState.searchQuery.toLowerCase();
    items = items.filter(i => 
      i.title.toLowerCase().includes(q) ||
      i.brand.toLowerCase().includes(q) ||
      i.deptFullName.toLowerCase().includes(q) ||
      i.category.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (AppState.activeSort === 'price-asc') {
    items.sort((a, b) => (a.price || a.startingBid) - (b.price || b.startingBid));
  } else if (AppState.activeSort === 'price-desc') {
    items.sort((a, b) => (b.price || b.startingBid) - (a.price || a.startingBid));
  }

  return items;
}

function renderMarketplaceGrid() {
  const grid = document.getElementById('desktop-catalog-grid');
  const countLabel = document.getElementById('catalog-count-label');
  const mobDiscoverGrid = document.getElementById('mob-discover-grid');
  if (!grid) return;

  const filtered = getFilteredListings();

  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} piece${filtered.length === 1 ? '' : 's'} circulating`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--color-card-bg); border-radius: var(--radius-card);">
        <p style="font-family: var(--font-editorial); font-size: 22px;">No pieces found in this category.</p>
        <p style="font-size: 13px; color: var(--color-supporting-text-grey); margin-top: 6px;">Try resetting filters or searching for another garment.</p>
      </div>
    `;
    return;
  }

  const html = filtered.map(item => createProductCardHTML(item)).join('');
  grid.innerHTML = html;
  attachProductCardEvents(grid);

  if (mobDiscoverGrid) {
    mobDiscoverGrid.innerHTML = html;
    attachProductCardEvents(mobDiscoverGrid);
  }
}

function createProductCardHTML(item) {
  const isSaved = AppState.savedIds.has(item.id);
  const isBidding = item.pricingModel === 'bidding';
  const displayPrice = isBidding 
    ? `₹ ${(item.currentHighestBid || item.price).toLocaleString()}` 
    : `₹ ${item.price.toLocaleString()}`;

  return `
    <article class="product-card" data-id="${item.id}">
      <div class="card-visual-frame">
        <img src="${item.heroImage}" alt="${item.title}" loading="lazy">
        <button type="button" class="card-heart-btn ${isSaved ? 'saved' : ''}" onclick="event.stopPropagation(); toggleWishlistItem(${item.id})" title="Save piece">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="${isSaved ? '#76252D' : 'none'}" stroke="${isSaved ? '#76252D' : 'currentColor'}" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
        ${isBidding ? '<span class="card-tag-pill tag-bidding">🔥 LIVE BID</span>' : ''}
        ${item.openForSwap ? '<span class="card-tag-pill tag-swap" style="right:10px; left:auto;">⇄ SWAP</span>' : ''}
      </div>
      <div class="card-info-block">
        <div class="card-title-row">
          <h4 class="card-product-name">${item.title}</h4>
        </div>
        <div class="card-price-num">${displayPrice}</div>
        <div class="card-meta-line">${item.category} • ${item.dept}</div>
      </div>
    </article>
  `;
}

function attachProductCardEvents(container) {
  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id, 10);
      const piece = AppState.listings.find(i => i.id === id) || AppState.userCloset.find(i => i.id === id);
      if (piece) openPdpModal(piece);
    });
  });
}


// ==========================================================================
// 7. FILTER & SORT ACTIONS
// ==========================================================================

window.filterCatalogByPillar = function(pillar) {
  showDesktopView('discover');
  if (pillar === 'shop') {
    filterByTransaction('all');
  } else if (pillar === 'swap') {
    filterByTransaction('swap');
  }
};

window.filterCatalogByDepartment = function(deptCode) {
  AppState.activeDeptFilter = deptCode;
  
  // Highlight dept pill
  document.querySelectorAll('.dept-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.dept === deptCode);
  });

  showDesktopView('discover');
  renderMarketplaceGrid();
  showToast(`Filtered by ${deptCode} Department 🏷️`);
};

window.filterByTransaction = function(txType) {
  AppState.activeTransactionFilter = txType;

  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tx === txType);
  });
  document.querySelectorAll('.mob-filter-chip').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tx === txType);
  });

  renderMarketplaceGrid();
};

window.filterByDeptPill = function(dept) {
  AppState.activeDeptFilter = dept;
  document.querySelectorAll('.dept-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.dept === dept);
  });
  renderMarketplaceGrid();
};

window.filterByCategorySelect = function(cat) {
  AppState.activeCategoryFilter = cat;
  renderMarketplaceGrid();
};

window.handleSortChange = function(sortVal) {
  AppState.activeSort = sortVal;
  renderMarketplaceGrid();
};

window.handleSearchInput = function(query) {
  AppState.searchQuery = query;
  renderMarketplaceGrid();
};


// ==========================================================================
// 8. WISHLIST MANAGEMENT
// ==========================================================================

window.toggleWishlistItem = function(id) {
  if (AppState.savedIds.has(id)) {
    AppState.savedIds.delete(id);
    showToast("Removed from your saved archive.");
  } else {
    AppState.savedIds.add(id);
    showToast("Saved to your wishlist! ♡");
  }

  updateWishlistCounters();
  renderFeaturedThisWeek();
  renderMarketplaceGrid();
  renderClosetGrid();
};

function updateWishlistCounters() {
  const count = AppState.savedIds.size;
  const deskCount = document.getElementById('desk-wishlist-count');
  const mobCount = document.getElementById('mob-wishlist-count');
  const closetSavedQty = document.getElementById('lbl-saved-qty');

  if (deskCount) deskCount.textContent = count;
  if (mobCount) mobCount.textContent = count;
  if (closetSavedQty) closetSavedQty.textContent = `(${count})`;
}


// ==========================================================================
// 9. PRODUCT DETAIL MODAL (PDP - 7-LAYER SYSTEM)
// ==========================================================================

window.openPdpModal = function(item) {
  AppState.currentPdpItem = item;
  const modal = document.getElementById('pdp-modal');
  const body = document.getElementById('pdp-content-slot');
  const dock = document.getElementById('pdp-dock-slot');
  if (!modal || !body || !dock) return;

  const isBidding = item.pricingModel === 'bidding';
  const isSaved = AppState.savedIds.has(item.id);

  // Update wishlist toggle in modal header
  const wishBtn = document.getElementById('pdp-wishlist-toggle');
  if (wishBtn) {
    wishBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? '#76252D' : 'none'}" stroke="${isSaved ? '#76252D' : 'currentColor'}" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      <span>${isSaved ? 'Archived' : 'Wishlist'}</span>
    `;
  }

  // 1. Gallery + 2. Identity + 3. Fit Specs + 4. Flaws + 5. Seller + 6. Drop Zones
  body.innerHTML = `
    <!-- Gallery -->
    <div class="pdp-gallery-frame">
      <img src="${item.heroImage}" alt="${item.title}">
    </div>

    <!-- Details Column -->
    <div class="pdp-details-column">
      
      <!-- Identity -->
      <div>
        <div class="pdp-tag-line">${item.brand} • ${item.deptFullName}</div>
        <h2 class="pdp-main-title">${item.title}</h2>
        <div class="pdp-price-row" style="margin-top:8px;">
          <span class="pdp-big-price">
            ${isBidding ? `High Bid: ₹ ${(item.currentHighestBid || item.price).toLocaleString()}` : `₹ ${item.price.toLocaleString()}`}
          </span>
          <span class="pdp-condition-badge">Tier ${item.conditionTier} • ${item.condition}</span>
        </div>
      </div>

      <!-- Fit Specs -->
      <div class="pdp-spec-table">
        <div class="spec-header-row">
          <span>TRUE FLAT-LAY FIT SPECS</span>
          <strong>${item.size}</strong>
        </div>
        <div class="spec-metrics-grid">
          ${renderFitSpecGrid(item.measurements)}
        </div>
      </div>

      <!-- Condition Transparency -->
      <div class="pdp-flaw-box">
        <strong style="display:block; font-family:var(--font-mono); font-size:10px; color:var(--color-deep-burgundy); margin-bottom:2px;">CONDITION &amp; FLAW DISCLOSURE</strong>
        <p>${item.flaws || "Studio curated garment, pristine seams, clean pre-washed."}</p>
      </div>

      <!-- Seller Info -->
      <div class="pdp-seller-card">
        <img src="${item.seller.avatar}" alt="${item.seller.name}" class="seller-avatar-small">
        <div>
          <strong style="display:block; font-size:13px;">${item.seller.name} <span style="font-size:11px; color:var(--color-supporting-text-grey);">${item.seller.handle}</span></strong>
          <span style="font-size:11.5px; color:var(--color-supporting-text-grey);">★ ${item.seller.rating} (${item.seller.circulations} campus drops) • ${item.seller.dept}</span>
        </div>
      </div>

      <!-- Drop Location -->
      <div style="font-size:11.5px; color:var(--color-supporting-text-grey);">
        📍 <strong>Campus Pickup:</strong> Friday Lunch Break Drop @ Canteen Amphitheatre Steps. Zero shipping waste.
      </div>

    </div>
  `;

  // Action Dock
  if (item.isMine) {
    dock.innerHTML = `<span style="font-weight:600; font-size:13px; margin:auto;">Circulating from your personal closet</span>`;
  } else if (isBidding) {
    dock.innerHTML = `
      ${item.openForSwap ? `<button type="button" class="btn-pdp-swap" onclick="openSwapModalFromCurrent()">⇄ Propose Swap</button>` : ''}
      <button type="button" class="btn-pdp-primary btn-pdp-bidding" onclick="openBiddingModalFromCurrent()">
        🔥 Place Bid (Min ₹ ${((item.currentHighestBid || item.price) + 50).toLocaleString()})
      </button>
    `;
  } else {
    dock.innerHTML = `
      ${item.openForSwap ? `<button type="button" class="btn-pdp-swap" onclick="openSwapModalFromCurrent()">⇄ Propose Swap</button>` : ''}
      <button type="button" class="btn-pdp-primary" onclick="buyFixedPriceItem()">
        Buy for ₹ ${item.price.toLocaleString()} (Fixed Price)
      </button>
    `;
  }

  modal.classList.add('active');
};

window.closePdpModal = function() {
  document.getElementById('pdp-modal')?.classList.remove('active');
  AppState.currentPdpItem = null;
};

window.toggleCurrentPieceWishlist = function() {
  if (AppState.currentPdpItem) {
    toggleWishlistItem(AppState.currentPdpItem.id);
    openPdpModal(AppState.currentPdpItem); // Re-render modal button
  }
};

window.shareCurrentPiece = function() {
  showToast("Campus piece link copied to clipboard! 📋");
};

function renderFitSpecGrid(specs) {
  if (!specs) return '<span>No measurements recorded</span>';
  return Object.entries(specs).map(([key, val]) => {
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    return `
      <div class="spec-pair">
        <span>${label}:</span>
        <strong>${val}</strong>
      </div>
    `;
  }).join('');
}

window.buyFixedPriceItem = function() {
  const item = AppState.currentPdpItem;
  if (!item) return;

  AppState.activity.unshift({
    id: 'drop-' + Date.now(),
    type: 'drop',
    timestamp: 'Friday Break • 1:30 PM',
    title: `Break Drop Reserved: ${item.title}`,
    detail: `Meet ${item.seller.handle} at Canteen Amphitheatre Steps during lunch break to inspect and complete.`,
    location: 'Canteen Amphitheatre Steps',
    status: 'scheduled'
  });

  closePdpModal();
  showToast(`Reserved! Collect at Friday Lunch Break Drop from ${item.seller.handle}. ✨`);
  showDesktopView('activity', 'drops');
  renderActivityStream();
};


// ==========================================================================
// 10. LIVE CAMPUS BIDDING MODAL (TIERS 4 & 5)
// ==========================================================================

window.openBiddingModalFromCurrent = function() {
  if (AppState.currentPdpItem) openBiddingModal(AppState.currentPdpItem);
};

window.openBiddingModal = function(item) {
  AppState.biddingTargetItem = item;
  const modal = document.getElementById('bidding-modal');
  const summary = document.getElementById('bid-modal-summary');
  const highVal = document.getElementById('bid-modal-high');
  const countVal = document.getElementById('bid-modal-count');
  const minVal = document.getElementById('bid-modal-min');
  const input = document.getElementById('bid-modal-input');
  if (!modal || !summary || !input) return;

  const currentHigh = item.currentHighestBid || item.price;
  const minNext = currentHigh + 50;

  summary.innerHTML = `
    <strong>${item.title}</strong>
    <span style="display:block; font-size:12px; color:var(--color-supporting-text-grey); margin-top:2px;">
      Curator: ${item.seller.handle} • ${item.deptFullName}
    </span>
  `;

  if (highVal) highVal.textContent = `₹ ${currentHigh.toLocaleString()}`;
  if (countVal) countVal.textContent = `${item.bidsCount || 4} bids`;
  if (minVal) minVal.textContent = `₹ ${minNext.toLocaleString()}`;
  input.value = minNext;

  modal.classList.add('active');
};

window.closeBiddingModal = function() {
  document.getElementById('bidding-modal')?.classList.remove('active');
  AppState.biddingTargetItem = null;
};

window.incrementBid = function(amt) {
  const input = document.getElementById('bid-modal-input');
  if (!input) return;
  const curr = parseInt(input.value, 10) || 0;
  input.value = curr + amt;
};

window.submitBidFromModal = function() {
  const item = AppState.biddingTargetItem;
  const input = document.getElementById('bid-modal-input');
  if (!item || !input) return;

  const val = parseInt(input.value, 10);
  const minNext = (item.currentHighestBid || item.price) + 50;

  if (isNaN(val) || val < minNext) {
    showToast(`Bid must be at least ₹ ${minNext.toLocaleString()}`);
    return;
  }

  item.currentHighestBid = val;
  item.bidsCount = (item.bidsCount || 4) + 1;

  AppState.activity.unshift({
    id: 'bid-' + Date.now(),
    type: 'bid',
    timestamp: 'Just now',
    title: `Active High Bid: ${item.title}`,
    detail: `You are leading at ₹ ${val.toLocaleString()}! Collect at Friday Lunch Break Drop.`,
    location: 'Canteen Amphitheatre Steps',
    status: 'leading'
  });

  closeBiddingModal();
  closePdpModal();
  showToast(`Bid of ₹ ${val.toLocaleString()} submitted! You are the high bidder! 🔥`);
  renderMarketplaceGrid();
  renderActivityStream();
  showDesktopView('activity');
};


// ==========================================================================
// 11. BILATERAL WARDROBE SWAP DRAWER
// ==========================================================================

window.openSwapModalFromCurrent = function() {
  if (AppState.currentPdpItem) openSwapModal(AppState.currentPdpItem);
};

window.openSwapModal = function(targetPiece) {
  AppState.swapTargetItem = targetPiece;
  AppState.cashTopUpAmount = 0;
  updateCashBalancerUI();

  const modal = document.getElementById('swap-modal');
  const targetBox = document.getElementById('swap-target-box');
  const picker = document.getElementById('swap-closet-picker');
  if (!modal || !targetBox || !picker) return;

  targetBox.innerHTML = `
    <div style="display:flex; gap:12px; align-items:center; background:var(--color-soft-cream); padding:10px; border-radius:4px;">
      <img src="${targetPiece.heroImage}" alt="${targetPiece.title}" style="width:48px; height:48px; object-fit:cover; border-radius:4px;">
      <div>
        <strong style="font-size:13px; display:block;">${targetPiece.title}</strong>
        <span style="font-size:11px; color:var(--color-supporting-text-grey);">${targetPiece.seller.handle} (${targetPiece.dept})</span>
      </div>
    </div>
  `;

  picker.innerHTML = AppState.userCloset.map(piece => `
    <div class="swap-picker-card ${piece.id === AppState.selectedTradeClosetItemId ? 'selected' : ''}" onclick="selectSwapClosetPiece(${piece.id}, this)">
      <img src="${piece.heroImage}" alt="${piece.title}" class="swap-picker-thumb">
      <span style="font-size:10px; font-weight:700; display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${piece.title}</span>
      <span style="font-family:var(--font-mono); font-size:10px; color:var(--color-deep-burgundy);">₹ ${piece.price.toLocaleString()}</span>
    </div>
  `).join('');

  modal.classList.add('active');
};

window.closeSwapModal = function() {
  document.getElementById('swap-modal')?.classList.remove('active');
  AppState.swapTargetItem = null;
};

window.selectSwapClosetPiece = function(id, el) {
  AppState.selectedTradeClosetItemId = id;
  document.querySelectorAll('.swap-picker-card').forEach(card => {
    card.classList.remove('selected');
  });
  if (el) {
    el.classList.add('selected');
  }
};

window.adjustCashBalancer = function(delta) {
  if (AppState.cashTopUpAmount + delta >= 0) {
    AppState.cashTopUpAmount += delta;
    updateCashBalancerUI();
  }
};

function updateCashBalancerUI() {
  const lbl = document.getElementById('swap-cash-val');
  if (lbl) lbl.textContent = `₹ ${AppState.cashTopUpAmount.toLocaleString()}`;
}

window.submitSwapProposal = function() {
  const target = AppState.swapTargetItem;
  const offered = AppState.userCloset.find(p => p.id === AppState.selectedTradeClosetItemId) || AppState.userCloset[0];
  const note = document.getElementById('swap-msg-input')?.value || "Can meet at Canteen Steps during lunch drop!";

  AppState.activity.unshift({
    id: 'trade-' + Date.now(),
    type: 'trade',
    timestamp: 'Just now',
    title: `Swap Proposal Sent to ${target.seller.handle}`,
    detail: `Offered "${offered.title}" ${AppState.cashTopUpAmount > 0 ? `+ ₹${AppState.cashTopUpAmount}` : ''} for "${target.title}". Message: "${note}"`,
    location: 'Canteen Amphitheatre Steps',
    status: 'sent'
  });

  closeSwapModal();
  closePdpModal();
  showToast(`Swap proposal sent to ${target.seller.handle}! ⇄`);
  renderActivityStream();
  showDesktopView('activity');
};


// ==========================================================================
// 12. CAMPUS BREAK DROP HANDOFF & INSPECTION TICKET
// ==========================================================================

window.openHandoffInspection = function(actId) {
  const act = AppState.activity.find(a => a.id === actId);
  const modal = document.getElementById('handoff-modal');
  const body = document.getElementById('handoff-body-slot');
  if (!modal || !body || !act) return;

  body.innerHTML = `
    <div style="background:var(--color-soft-cream); padding:14px; border-radius:4px; margin-bottom:16px;">
      <span style="font-family:var(--font-mono); font-size:10px; color:var(--color-deep-burgundy); font-weight:700;">SCHEDULED BREAK DROP MEET</span>
      <h4 style="font-family:var(--font-editorial); font-size:18px; margin:4px 0;">${act.title}</h4>
      <p style="font-size:12px; color:var(--color-supporting-text-grey);">📍 Location: ${act.location}</p>
    </div>

    <div style="margin-bottom:16px;">
      <label class="form-lbl">CAMPUS DAYLIGHT INSPECTION CHECKLIST:</label>
      <div style="display:flex; flex-direction:column; gap:8px; font-size:12.5px;">
        <label style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" checked style="accent-color:var(--color-deep-burgundy);">
          <span>Flat-lay dimensions verified seam-to-seam</span>
        </label>
        <label style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" checked style="accent-color:var(--color-deep-burgundy);">
          <span>Condition tier matches description &amp; clean</span>
        </label>
        <label style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" checked style="accent-color:var(--color-deep-burgundy);">
          <span>Inspected in daylight for any undisclosed defects</span>
        </label>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap:10px;">
      <button type="button" class="btn-primary-action" onclick="confirmDropComplete('${act.id}')">
        ✓ Received &amp; Confirmed at Drop
      </button>
      <button type="button" class="btn-act-secondary" onclick="closeHandoffModal()">
        Cancel / Inspect Later
      </button>
    </div>
  `;

  modal.classList.add('active');
};

window.closeHandoffModal = function() {
  document.getElementById('handoff-modal')?.classList.remove('active');
};

window.confirmDropComplete = function(actId) {
  closeHandoffModal();
  AppState.activity = AppState.activity.filter(a => a.id !== actId);
  AppState.currentUser.salesCount += 1;
  AppState.currentUser.earnings += 1200;

  showToast("Drop verified! Garment circulated & 5-star rating recorded. ✨");
  renderActivityStream();
  renderClosetGrid();
};


// ==========================================================================
// 13. SELL STUDIO WIZARD CONTROLLER
// ==========================================================================

window.wizardGoNext = function() {
  if (AppState.wizardStep < 6) {
    AppState.wizardStep++;
    if (AppState.wizardStep === 6) renderSellPreview();
    updateWizardUI();
  } else {
    publishNewGarment();
  }
};

window.wizardGoPrev = function() {
  if (AppState.wizardStep > 1) {
    AppState.wizardStep--;
    updateWizardUI();
  }
};

function updateWizardUI() {
  const titles = [
    "STEP 1: CURATE PHOTOS",
    "STEP 2: GARMENT IDENTITY",
    "STEP 3: CONDITION & FIT",
    "STEP 4: PRICING TERMS",
    "STEP 5: CAMPUS DROP ZONES",
    "STEP 6: EDITORIAL PREVIEW"
  ];

  const titleEl = document.getElementById('wizard-title-indicator');
  const numEl = document.getElementById('wizard-num-indicator');
  const fillEl = document.getElementById('wizard-fill-bar');
  const backBtn = document.getElementById('btn-wizard-back');
  const nextBtn = document.getElementById('btn-wizard-forward');

  if (titleEl) titleEl.textContent = titles[AppState.wizardStep - 1];
  if (numEl) numEl.textContent = `${AppState.wizardStep} of 6`;
  if (fillEl) fillEl.style.width = `${(AppState.wizardStep / 6) * 100}%`;

  document.querySelectorAll('.sell-pane').forEach(pane => {
    pane.classList.toggle('active', parseInt(pane.dataset.step, 10) === AppState.wizardStep);
  });

  if (backBtn) backBtn.style.visibility = AppState.wizardStep === 1 ? 'hidden' : 'visible';
  if (nextBtn) nextBtn.textContent = AppState.wizardStep === 6 ? 'Broadcast to Campus Drop &rarr;' : 'NEXT STEP &rarr;';
}

function updateSellPricingUI(model) {
  const title = document.getElementById('sell-step4-title');
  const sub = document.getElementById('sell-step4-sub');
  const lbl = document.getElementById('sell-price-label');

  if (model === 'bidding') {
    if (title) title.textContent = "Campus Live Bidding Setup";
    if (sub) sub.innerHTML = "🔥 <strong>Tiers 4 &amp; 5 enter Campus Live Bidding:</strong> Enter your base starting bid. Students bid leading up to the Friday break drop!";
    if (lbl) lbl.textContent = "STARTING MINIMUM BID (₹ INR) *";
  } else {
    if (title) title.textContent = "Direct Fixed Price Setup";
    if (sub) sub.innerHTML = "🔒 <strong>Tiers 1–3 use Direct Fixed Pricing:</strong> Zero lowballs allowed. Students purchase directly at your stated value.";
    if (lbl) lbl.textContent = "DIRECT FIXED PRICE (₹ INR) *";
  }
}

window.updateDynamicFitFields = function(category) {
  const container = document.getElementById('sell-dynamic-meas');
  const catLbl = document.getElementById('sell-meas-cat');
  if (!container) return;

  if (catLbl) catLbl.textContent = category.toUpperCase();

  if (category === 'Bottoms') {
    container.innerHTML = `
      <div class="meas-item-box"><label>Waist (Flat × 2)</label><input type="text" value="30.0 in"></div>
      <div class="meas-item-box"><label>Hip</label><input type="text" value="38.5 in"></div>
      <div class="meas-item-box"><label>Inseam</label><input type="text" value="32.0 in"></div>
      <div class="meas-item-box"><label>Rise</label><input type="text" value="11.5 in"></div>
    `;
  } else if (category === 'Bags') {
    container.innerHTML = `
      <div class="meas-item-box"><label>Width</label><input type="text" value="13.0 in"></div>
      <div class="meas-item-box"><label>Height</label><input type="text" value="9.0 in"></div>
      <div class="meas-item-box"><label>Strap Drop</label><input type="text" value="10.0 in"></div>
      <div class="meas-item-box"><label>Depth</label><input type="text" value="3.5 in"></div>
    `;
  } else {
    container.innerHTML = `
      <div class="meas-item-box"><label>Chest</label><input type="text" value="22.5 in"></div>
      <div class="meas-item-box"><label>Shoulder</label><input type="text" value="19.0 in"></div>
      <div class="meas-item-box"><label>Length</label><input type="text" value="24.0 in"></div>
      <div class="meas-item-box"><label>Sleeve</label><input type="text" value="23.5 in"></div>
    `;
  }
};

function renderSellPreview() {
  const slot = document.getElementById('sell-preview-slot');
  if (!slot) return;

  const title = document.getElementById('input-sell-title')?.value || "Vintage Workwear Jacket";
  const brand = document.getElementById('input-sell-brand')?.value || "Carhartt Archive";
  const dept = document.getElementById('input-sell-dept')?.value || "FC";
  const amount = parseInt(document.getElementById('input-sell-amount')?.value, 10) || 1800;
  const isBidding = AppState.wizardPricingModel === 'bidding';

  slot.innerHTML = `
    <div style="max-width:240px; margin:0 auto; background:var(--color-card-bg); border-radius:6px; overflow:hidden; border:1px solid var(--color-border-card); padding:10px;">
      <img src="images/reference/feat-plaid-blouse.jpg" alt="Preview" style="width:100%; aspect-ratio:1; object-fit:cover; border-radius:4px; margin-bottom:8px;">
      <strong style="font-size:13px; display:block;">${title}</strong>
      <span style="font-size:11px; color:var(--color-supporting-text-grey);">${brand} • ${dept}</span>
      <div style="font-weight:700; font-size:14px; margin-top:4px;">
        ${isBidding ? `Start Bid: ₹ ${amount.toLocaleString()}` : `₹ ${amount.toLocaleString()}`}
      </div>
    </div>
  `;
}

function publishNewGarment() {
  const title = document.getElementById('input-sell-title')?.value || "Vintage Curated Piece";
  const brand = document.getElementById('input-sell-brand')?.value || "Studio Collection";
  const category = document.getElementById('input-sell-cat')?.value || "Outerwear";
  const dept = document.getElementById('input-sell-dept')?.value || "FC";
  const price = parseInt(document.getElementById('input-sell-amount')?.value, 10) || 1800;
  const condition = document.querySelector('input[name="sell-condition-choice"]:checked')?.value || "Gently Used";
  const flaws = document.getElementById('input-sell-flaws')?.value || "Studio condition.";
  const size = document.getElementById('input-sell-size')?.value || "Size M";
  const isBidding = AppState.wizardPricingModel === 'bidding';

  const newId = Date.now();
  const newPiece = {
    id: newId,
    title,
    brand,
    category,
    dept,
    deptFullName: `${dept} Department`,
    condition,
    conditionTier: isBidding ? 4 : 3,
    pricingModel: isBidding ? 'bidding' : 'fixed',
    price: isBidding ? undefined : price,
    startingBid: isBidding ? price : undefined,
    currentHighestBid: isBidding ? price : undefined,
    bidsCount: isBidding ? 0 : undefined,
    size,
    heroImage: "images/reference/feat-plaid-blouse.jpg",
    openForSwap: true,
    flaws,
    measurements: { chest: "22.0 in", length: "24.0 in" },
    seller: {
      name: AppState.currentUser.name,
      handle: AppState.currentUser.handle,
      dept: AppState.currentUser.dept,
      rating: AppState.currentUser.rating,
      circulations: AppState.currentUser.salesCount,
      location: "Canteen Steps",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&q=80"
    },
    dropZones: ["Canteen Amphitheatre Steps"],
    isMine: true
  };

  AppState.listings.unshift(newPiece);
  AppState.userCloset.unshift(newPiece);

  const banner = document.getElementById('sell-success-banner');
  if (banner) banner.style.display = 'block';

  showToast("Piece curated & broadcasted to NIFT Campus! ✨");

  setTimeout(() => {
    if (banner) banner.style.display = 'none';
    AppState.wizardStep = 1;
    updateWizardUI();
    showDesktopView('discover');
    renderMarketplaceGrid();
    renderClosetGrid();
  }, 1200);
}


// ==========================================================================
// 14. ACTIVITY STREAM RENDERING
// ==========================================================================

window.filterActivity = function(filterType) {
  document.querySelectorAll('.activity-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.actfilter === filterType);
  });
  renderActivityStream(filterType);
};

function renderActivityStream(filter = 'all') {
  const container = document.getElementById('desktop-activity-stream');
  const mobContainer = document.getElementById('mob-activity-stream');
  if (!container) return;

  let items = [...AppState.activity];
  if (filter === 'bids') items = items.filter(i => i.type === 'bid');
  if (filter === 'trades') items = items.filter(i => i.type === 'trade');
  if (filter === 'drops') items = items.filter(i => i.type === 'drop');

  const html = items.map(act => `
    <div class="activity-item-card">
      <div class="act-card-header">
        <span class="act-type-tag ${act.type}">
          ${act.type === 'bid' ? '🔥 Live Bid' : act.type === 'trade' ? '⇄ Swap Offer' : '📍 Campus Drop'}
        </span>
        <span class="act-time">${act.timestamp}</span>
      </div>
      <h3 class="act-title">${act.title}</h3>
      <p class="act-body-text">${act.detail}</p>
      <div class="act-btn-row">
        ${act.type === 'drop' 
          ? `<button type="button" class="btn-act-action" onclick="openHandoffInspection('${act.id}')">Open Drop Inspection</button>`
          : act.type === 'trade'
          ? `<button type="button" class="btn-act-action" onclick="acceptTradeProposal('${act.id}')">Accept for Drop</button>
             <button type="button" class="btn-act-secondary" onclick="declineTradeProposal('${act.id}')">Decline</button>`
          : `<span style="font-size:12px; font-weight:700; color:var(--color-deep-burgundy);">👑 Leading Bidder</span>`
        }
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
  if (mobContainer) mobContainer.innerHTML = html;
}

window.acceptTradeProposal = function(id) {
  const act = AppState.activity.find(a => a.id === id);
  if (!act) return;
  act.type = 'drop';
  act.title = 'Break Drop Scheduled: Swap Confirmed';
  act.detail = 'Meet at Canteen Amphitheatre Steps during lunch break to inspect and exchange.';
  showToast("Swap confirmed for Friday courtyard drop! 📍");
  renderActivityStream();
};

window.declineTradeProposal = function(id) {
  AppState.activity = AppState.activity.filter(a => a.id !== id);
  showToast("Swap proposal declined.");
  renderActivityStream();
};


// ==========================================================================
// 15. MY CLOSET & SAVED ARCHIVE CONTROLLER
// ==========================================================================

window.switchClosetSubmode = function(mode) {
  AppState.closetSubmode = mode;

  document.getElementById('btn-closet-listings')?.classList.toggle('active', mode === 'listings');
  document.getElementById('btn-closet-saved')?.classList.toggle('active', mode === 'saved');
  document.getElementById('mob-btn-closet-listings')?.classList.toggle('active', mode === 'listings');
  document.getElementById('mob-btn-closet-saved')?.classList.toggle('active', mode === 'saved');

  renderClosetGrid();
};

function renderClosetGrid() {
  const grid = document.getElementById('desktop-closet-grid');
  const mobGrid = document.getElementById('mob-closet-grid');
  const countLbl = document.getElementById('user-closet-count');
  const closetQty = document.getElementById('lbl-closet-qty');
  if (!grid) return;

  if (countLbl) countLbl.textContent = AppState.userCloset.length;
  if (closetQty) closetQty.textContent = `(${AppState.userCloset.length})`;

  let pieces = [];
  if (AppState.closetSubmode === 'saved') {
    pieces = AppState.listings.filter(i => AppState.savedIds.has(i.id));
  } else {
    pieces = AppState.userCloset;
  }

  if (pieces.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--color-card-bg); border-radius: var(--radius-card);">
        <p style="font-family: var(--font-editorial); font-size: 20px;">No saved pieces in your archive yet.</p>
        <p style="font-size: 13px; color: var(--color-supporting-text-grey); margin-top: 6px;">Tap the heart icon on any campus listing to add it here.</p>
      </div>
    `;
    if (mobGrid) mobGrid.innerHTML = grid.innerHTML;
    return;
  }

  const html = pieces.map(item => createProductCardHTML(item)).join('');
  grid.innerHTML = html;
  attachProductCardEvents(grid);

  if (mobGrid) {
    mobGrid.innerHTML = html;
    attachProductCardEvents(mobGrid);
  }
}


// ==========================================================================
// 16. MOBILE APPLICATION NAVIGATION CONTROLLER
// ==========================================================================

window.switchMobileTab = function(tabId, submode) {
  AppState.mobileTab = tabId;

  // View containers
  document.querySelectorAll('.mobile-tab-view').forEach(view => {
    view.classList.remove('active');
  });

  const targetView = document.getElementById(`mob-view-${tabId.replace('m-', '')}`);
  if (targetView) targetView.classList.add('active');

  // Bottom buttons
  document.querySelectorAll('.mob-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  if (tabId === 'm-discover') {
    if (submode === 'swap') filterByTransaction('swap');
    else if (submode === 'shop') filterByTransaction('all');
    renderMarketplaceGrid();
  }

  if (tabId === 'm-closet') {
    switchClosetSubmode(submode || 'listings');
  }

  const scrollBody = document.getElementById('mobile-scroll-content');
  if (scrollBody) scrollBody.scrollTop = 0;
};

function renderMobileHomeFeed() {
  const container = document.getElementById('mob-home-2col-feed');
  if (!container) return;
  const recent = AppState.listings.slice(0, 6);
  container.innerHTML = recent.map(item => createProductCardHTML(item)).join('');
  attachProductCardEvents(container);
}


// ==========================================================================
// 17. EVENT RSVP, STORIES & UTILITIES
// ==========================================================================

window.handleEventRsvp = function(btn) {
  btn.textContent = "✓ RSVP Confirmed";
  btn.style.backgroundColor = "#3B5F41";
  btn.style.color = "#FFFFFF";
  showToast("✓ RSVP Confirmed! Meet at Canteen Amphitheatre Steps @ 4:00 PM.");
};

window.openStoryModal = function() {
  document.getElementById('story-modal')?.classList.add('active');
};

window.closeStoryModal = function() {
  document.getElementById('story-modal')?.classList.remove('active');
};

window.openGuidelinesModal = function(type) {
  if (type === 'condition') {
    showToast("5-Tier Condition Rubric: Tiers 1–3 Fixed Price, Tiers 4–5 Live Bidding.");
  } else if (type === 'bidding') {
    showToast("Bids close prior to the Friday Lunch Break Drop.");
  } else if (type === 'drops') {
    showToast("Daylight daylight inspection on Canteen steps before confirming.");
  } else {
    showToast("NIFT Student ID verified peer-to-peer circle.");
  }
};

window.showToast = function(message) {
  const toast = document.getElementById('toast-notify');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
};
