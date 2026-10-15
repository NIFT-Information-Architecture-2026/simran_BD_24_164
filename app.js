/**
 * NIFT HYDERABAD THRIFT CLOSET — INTERACTIVE PROTOTYPE ENGINE
 * Hyperlocal Campus Architecture: Exclusively NIFT Hyderabad (Madhapur)
 * Pricing Paradigms: Fixed Price (Tiers 1-3) vs. Live Bidding (Tiers 4-5)
 * Fulfillment: Physical Break Drops at Campus Courtyard & Amphitheatre (Zero Courier)
 */

// ==========================================================================
// 1. STATE & MOCK REPOSITORY
// ==========================================================================

const AppState = {
  activeTab: 'view-discover',
  curatedFilter: 'all',
  categoryFilter: 'all',
  searchQuery: '',
  searchCondition: 'all',
  searchPricingParadigm: 'all', // 'all', 'fixed', 'bidding'
  searchDept: 'all',
  searchMaxPrice: 4000,
  searchSwapOnly: false,
  closetMode: 'closet', // 'closet' or 'saved'
  savedIds: new Set([1, 4]),

  // Current User (Fashion Communication, NIFT Hyderabad)
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

  // Garment Catalog (Hyperlocal NIFT Hyderabad Wardrobes - Real Student Catalog)
  listings: [
    {
      id: 1,
      title: "Y2K Tartan Checked Ruched Hobo Bag",
      brand: "Subversive Studio",
      category: "Bags",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 1250,
      size: "One Size (Medium Slouch)",
      heroImage: "images/product-1.jpg",
      gallery: [
        "images/product-1.jpg"
      ],
      openForSwap: true,
      tradeWishlist: "Open to trade for concho belts or vintage silver cuffs",
      flaws: "Minor fabric softening on interior lining; carved toggle wood button intact.",
      measurements: {
        width: "14.5 in",
        height: "11.0 in",
        strapDrop: "10.0 in"
      },
      seller: {
        name: "Ria Sharma",
        handle: "@ria_fc",
        dept: "Fashion Comm (FC)",
        rating: 4.9,
        circulations: 28,
        location: "NIFT Canteen Courtyard",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Y2K", "#Tartan", "#HoboBag"],
      dropZones: ["Canteen Amphitheatre", "Textile Lawn"],
      isJustListed: true
    },
    {
      id: 2,
      title: "Asymmetric Plaid Peplum Tie Blouse",
      brand: "FC Atelier Drape Lab",
      category: "Tops",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 1400,
      size: "Fits S - Boxy M",
      heroImage: "images/product-2.jpg",
      gallery: [
        "images/product-2.jpg"
      ],
      openForSwap: false,
      flaws: "None. Tailored for Term 3 studio styling project, worn once on campus runway.",
      measurements: {
        chest: "36.0 in",
        waist: "29.0 in",
        length: "21.5 in"
      },
      seller: {
        name: "Arjun Verma",
        handle: "@arjun_fd",
        dept: "Fashion Design (FD)",
        rating: 5.0,
        circulations: 12,
        location: "Resource Centre Lobby",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Plaid", "#Drape", "#Atelier"],
      dropZones: ["Canteen Amphitheatre"],
      isJustListed: true
    },
    {
      id: 3,
      title: "Glossy Cherry Crimson Ring Hobo",
      brand: "Vintage Milan Archive",
      category: "Bags",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 1850,
      size: "One Size (Shoulder Bag)",
      heroImage: "images/product-3.jpg",
      gallery: [
        "images/product-3.jpg"
      ],
      openForSwap: true,
      tradeWishlist: "Looking for moto boots or cow-print Sambas",
      flaws: "Pristine cherry red glaze; hairline hardware contact on inner ring buckle.",
      measurements: {
        width: "13.0 in",
        height: "9.5 in",
        strapDrop: "11.0 in"
      },
      seller: {
        name: "Devika Rao",
        handle: "@devika_td",
        dept: "Textile Design (TD)",
        rating: 4.8,
        circulations: 42,
        location: "Textile Department Lawns",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#CherryRed", "#PatentLeather", "#90s"],
      dropZones: ["Canteen Amphitheatre", "Textile Lawn"],
      isJustListed: false
    },
    {
      id: 4,
      title: "Distressed Grommet Buckle Shoulder Bag",
      brand: "Diesel Archive",
      category: "Bags",
      condition: "Well Used",
      conditionTier: 4,
      pricingModel: "bidding", // Tiers 4-5: CAMPUS LIVE BIDDING
      startingBid: 550,
      currentHighestBid: 950,
      bidsCount: 5,
      biddingEnds: "Friday Lunch Break (1:30 PM)",
      size: "One Size (Compact Flap)",
      heroImage: "images/product-4.jpg",
      gallery: [
        "images/product-4.jpg"
      ],
      openForSwap: true,
      tradeWishlist: "Swap for wide leg skate denims or silver accessories",
      flaws: "Authentic grunge edge wear along bottom piping; grommets fully secured.",
      measurements: {
        width: "11.5 in",
        height: "7.0 in",
        depth: "3.5 in"
      },
      seller: {
        name: "Ananya Sen",
        handle: "@ananya_td",
        dept: "Textile Design (TD)",
        rating: 4.95,
        circulations: 19,
        location: "Textile Department Lawn",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Grunge", "#Distressed", "#Y2K"],
      dropZones: ["Textile Lawn", "Canteen Amphitheatre"],
      isJustListed: false
    },
    {
      id: 5,
      title: "Ornate Silver Concho Leather Waist Belt",
      brand: "Heritage Rajasthan Guild",
      category: "Accessories",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 1100,
      size: "Waist 26 - 32 in (Adjustable)",
      heroImage: "images/product-5.jpg",
      gallery: [
        "images/product-5.jpg"
      ],
      openForSwap: true,
      tradeWishlist: "Swap for leather baguette bag or Mary Jane flats",
      flaws: "Solid oxidised silver-finish concho medallions; full grain supple black leather.",
      measurements: {
        length: "38.0 in",
        width: "1.5 in",
        conchoDiameter: "2.2 in"
      },
      seller: {
        name: "Meera Nair",
        handle: "@meera_ad",
        dept: "Accessory Design (AD)",
        rating: 5.0,
        circulations: 9,
        location: "Resource Centre Lobby",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Concho", "#Western", "#Leather"],
      dropZones: ["Library Lobby", "Canteen Amphitheatre"],
      isJustListed: false
    },
    {
      id: 6,
      title: "Molten Gold & Amber Resin Bangle Stack",
      brand: "AD Studio Handcast",
      category: "Accessories",
      condition: "New / Unworn",
      conditionTier: 1,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 950,
      size: "Inner Dia 2.4 - 2.6 in (Standard)",
      heroImage: "images/product-6.jpg",
      gallery: [
        "images/product-6.jpg"
      ],
      openForSwap: false,
      flaws: "Zero flaws. Freshly demolded amber swirl resin paired with hammered brass bangle.",
      measurements: {
        innerDiameter: "65 mm",
        bandWidth: "12 mm"
      },
      seller: {
        name: "Meera Nair",
        handle: "@meera_ad",
        dept: "Accessory Design (AD)",
        rating: 5.0,
        circulations: 9,
        location: "Resource Centre Lobby",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Sculptural", "#Jewelry", "#Resin"],
      dropZones: ["Library Lobby", "Canteen Amphitheatre"],
      isJustListed: true
    },
    {
      id: 7,
      title: "Tribal Flame Embroidered Baggy Jeans",
      brand: "Jaded London Archive",
      category: "Bottoms",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 3200,
      size: "Tag 30 (Fits 29-32 Relaxed)",
      heroImage: "images/product-7.jpg",
      gallery: [
        "images/product-7.jpg"
      ],
      openForSwap: true,
      tradeWishlist: "Only trading for heavy leather jacket or Dr. Martens",
      flaws: "No fraying, heavy dense embroidery across back legs, pristine condition.",
      measurements: {
        waist: "31.0 in",
        hip: "42.0 in",
        inseam: "32.5 in",
        legOpening: "11.0 in"
      },
      seller: {
        name: "Karan Joshi",
        handle: "@karan_fc",
        dept: "Fashion Comm (FC)",
        rating: 4.88,
        circulations: 31,
        location: "Canteen Steps",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Skate", "#Y2K", "#BaggyFit"],
      dropZones: ["Canteen Amphitheatre"],
      isJustListed: true
    },
    {
      id: 8,
      title: "Noir Moto Leather Ruched Baguette",
      brand: "Mango Premium",
      category: "Bags",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 1650,
      size: "One Size (Underarm Baguette)",
      heroImage: "images/product-8.jpg",
      gallery: [
        "images/product-8.jpg"
      ],
      openForSwap: true,
      tradeWishlist: "Looking for pleated skirts or oversized poplin shirts",
      flaws: "Supple lambskin feel, silver hardware buckle, slight surface rub on base corner.",
      measurements: {
        width: "12.0 in",
        height: "6.5 in",
        depth: "2.5 in"
      },
      seller: {
        name: "Pooja Hegde",
        handle: "@pooja_fc",
        dept: "Fashion Comm (FC)",
        rating: 4.85,
        circulations: 24,
        location: "Library Lobby",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Moto", "#Minimal", "#Baguette"],
      dropZones: ["Library Lobby", "Canteen Amphitheatre"],
      isJustListed: false
    },
    {
      id: 9,
      title: "Sand-Wash Extreme Wide Leg Denims",
      brand: "Weekday Archive",
      category: "Bottoms",
      condition: "Well Used",
      conditionTier: 4,
      pricingModel: "bidding", // Tiers 4-5: CAMPUS LIVE BIDDING
      startingBid: 700,
      currentHighestBid: 1350,
      bidsCount: 7,
      biddingEnds: "Friday Lunch Break (1:30 PM)",
      size: "Waist 28 - 30 (Extreme Puddle)",
      heroImage: "images/product-9.jpg",
      gallery: [
        "images/product-9.jpg"
      ],
      openForSwap: true,
      tradeWishlist: "Swap for vintage band tees or Carhartt work jackets",
      flaws: "Intentional raw distress drag at rear heel hems from skate wear; incredible sandy patina.",
      measurements: {
        waist: "29.5 in",
        hip: "41.0 in",
        inseam: "33.0 in",
        legOpening: "12.5 in"
      },
      seller: {
        name: "Zayn Khan",
        handle: "@zayn_kd",
        dept: "Knitwear Design (KD)",
        rating: 4.92,
        circulations: 15,
        location: "Canteen Courtyard",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#WideLeg", "#SandWash", "#Skate"],
      dropZones: ["Canteen Amphitheatre"],
      isJustListed: false
    },
    {
      id: 10,
      title: "Chanderi Multi-Stripe Lantern Sleeve Blouse",
      brand: "Textile Dept Handloom Project",
      category: "Indian / Ethnic Wear",
      condition: "New / Unworn",
      conditionTier: 1,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 2600,
      size: "Size M (Tailored Comfort)",
      heroImage: "images/product-10.jpg",
      gallery: [
        "images/product-10.jpg"
      ],
      openForSwap: true,
      tradeWishlist: "Swap for high-end archival footwear or designer bags",
      flaws: "Zero flaws. Pure silk-chanderi with zari temple borders woven in Pochampally cluster.",
      measurements: {
        chest: "37.5 in",
        waist: "31.0 in",
        sleeve: "22.0 in",
        length: "22.5 in"
      },
      seller: {
        name: "Devika Rao",
        handle: "@devika_td",
        dept: "Textile Design (TD)",
        rating: 4.8,
        circulations: 42,
        location: "Textile Department Lawns",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Handloom", "#Chanderi", "#TextileDesign"],
      dropZones: ["Textile Lawn", "Canteen Amphitheatre"],
      isJustListed: true
    },
    {
      id: 11,
      title: "'From Venice With Love' Embroidered Shirt",
      brand: "Bode Archive Study",
      category: "Tops",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 1500,
      size: "Size L (Boxy Fit)",
      heroImage: "images/product-11.jpg",
      gallery: [
        "images/product-11.jpg"
      ],
      openForSwap: true,
      tradeWishlist: "Looking to swap for chore jackets or denim trousers",
      flaws: "Carefully hand-embroidered script & boat motif; light linen creasing characteristic of fabric.",
      measurements: {
        chest: "23.0 in",
        shoulder: "19.5 in",
        length: "27.0 in"
      },
      seller: {
        name: "Karan Joshi",
        handle: "@karan_fc",
        dept: "Fashion Comm (FC)",
        rating: 4.88,
        circulations: 31,
        location: "Canteen Steps",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Embroidery", "#CampCollar", "#Artisanal"],
      dropZones: ["Canteen Amphitheatre"],
      isJustListed: false
    },
    {
      id: 12,
      title: "Statue Print Striped Oxford Shirt",
      brand: "FC Screenprint Atelier",
      category: "Tops",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 1950,
      size: "Oversized Fit (Fits M-XL)",
      heroImage: "images/product-12.jpg",
      gallery: [
        "images/product-12.jpg"
      ],
      openForSwap: false,
      flaws: "None. Classical Greek sculpture photo-emulsion printed onto classic Bengal stripe poplin.",
      measurements: {
        chest: "24.0 in",
        shoulder: "20.5 in",
        length: "29.0 in"
      },
      seller: {
        name: "Ria Sharma",
        handle: "@ria_fc",
        dept: "Fashion Comm (FC)",
        rating: 4.9,
        circulations: 28,
        location: "NIFT Canteen Courtyard",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Screenprint", "#Oxford", "#Atelier"],
      dropZones: ["Canteen Amphitheatre", "Textile Lawn"],
      isJustListed: true
    },
    {
      id: 13,
      title: "Tailored Brown Stripe Utility Blouse",
      brand: "Zara Woman Vintage",
      category: "Tops",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 850,
      size: "Size S (Fitted Silhouette)",
      heroImage: "images/product-13.jpg",
      gallery: [
        "images/product-13.jpg"
      ],
      openForSwap: true,
      tradeWishlist: "Swap for silver belt or mini shoulder bag",
      flaws: "Sharply pressed darting; faint button patina.",
      measurements: {
        chest: "17.5 in",
        waist: "14.0 in",
        length: "21.0 in"
      },
      seller: {
        name: "Pooja Hegde",
        handle: "@pooja_fc",
        dept: "Fashion Comm (FC)",
        rating: 4.85,
        circulations: 24,
        location: "Library Lobby",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#OfficeSiren", "#Tailored", "#Y2K"],
      dropZones: ["Library Lobby", "Canteen Amphitheatre"],
      isJustListed: false
    },
    {
      id: 14,
      title: "1997 Archive 'Fragment Low Stance' Tee",
      brand: "Vintage Japanese Import",
      category: "Tops",
      condition: "Visible Wear / Flaws",
      conditionTier: 5,
      pricingModel: "bidding", // Tiers 4-5: CAMPUS LIVE BIDDING
      startingBid: 450,
      currentHighestBid: 850,
      bidsCount: 4,
      biddingEnds: "Friday Lunch Break (1:30 PM)",
      size: "Tag L (Boxy Heavyweight)",
      heroImage: "images/product-14.jpg",
      gallery: [
        "images/product-14.jpg"
      ],
      openForSwap: true,
      tradeWishlist: "Open to swap for any vintage graphic tee or trucker cap",
      flaws: "Mandatory Disclosure: Vintage sun fade across shoulders and micro pinhole near back collar seam.",
      measurements: {
        chest: "22.5 in",
        shoulder: "21.0 in",
        length: "27.5 in"
      },
      seller: {
        name: "Zayn Khan",
        handle: "@zayn_kd",
        dept: "Knitwear Design (KD)",
        rating: 4.92,
        circulations: 15,
        location: "Canteen Courtyard",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Archive", "#90s", "#GraphicTee"],
      dropZones: ["Canteen Amphitheatre"],
      isJustListed: false
    },
    {
      id: 15,
      title: "Hourglass Flared Peplum Striped Blouse",
      brand: "FD Studio Patternmaking",
      category: "Tops",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 1800,
      size: "Size S / M",
      heroImage: "images/product-15.jpg",
      gallery: [
        "images/product-15.jpg"
      ],
      openForSwap: false,
      flaws: "None. Sculptural pattern drafted on Alvanon dress form, clean internal French seams.",
      measurements: {
        chest: "35.0 in",
        waist: "27.5 in",
        flareHem: "42.0 in"
      },
      seller: {
        name: "Arjun Verma",
        handle: "@arjun_fd",
        dept: "Fashion Design (FD)",
        rating: 5.0,
        circulations: 12,
        location: "Resource Centre Lobby",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Hourglass", "#Tailored", "#Runway"],
      dropZones: ["Canteen Amphitheatre"],
      isJustListed: true
    },
    {
      id: 16,
      title: "Adidas Samba OG 'Cow Print Pony Hair'",
      brand: "Adidas Originals Special Edition",
      category: "Footwear",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed", // Tiers 1-3: FIXED PRICE ONLY
      price: 4200,
      size: "UK 6.5 / EU 40",
      heroImage: "images/product-16.jpg",
      gallery: [
        "images/product-16.jpg"
      ],
      openForSwap: true,
      tradeWishlist: "Will trade for Salomon XT-6 or Maison Margiela Tabi",
      flaws: "Worn once to campus exhibition. Genuine tactile calf hair texture, gum sole 98% life.",
      measurements: {
        insoleLength: "25.5 cm",
        soleDrop: "0.8 in"
      },
      seller: {
        name: "Ananya Sen",
        handle: "@ananya_td",
        dept: "Textile Design (TD)",
        rating: 4.95,
        circulations: 19,
        location: "Textile Department Lawn",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["#Samba", "#Sneakers", "#AnimalPrint"],
      dropZones: ["Textile Lawn", "Canteen Amphitheatre"],
      isJustListed: true
    }
  ],

  // Current User's Closet (Available for Trade or Sale - Simran's Archive)
  userCloset: [
    {
      id: 101,
      title: "House 40 Patent Crimson Mary Janes",
      brand: "House 40 Archive",
      category: "Footwear",
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

  // Activity stream (Orders, Bids, Trades)
  activity: [
    {
      id: 'act-1',
      type: 'trade',
      status: 'pending',
      timestamp: '25m ago',
      targetItemTitle: 'Subversive Moto Jacket with Pony Hair Belt',
      counterItemTitle: 'Tribal Flame Embroidered Baggy Jeans',
      cashAdjustment: 300,
      senderHandle: '@karan_fc',
      senderLocation: 'NIFT Canteen Amphitheatre',
      message: 'Hey Simran! Would love to swap my Tribal Flame Jeans + ₹300 for your Subversive Moto Jacket at the Friday lunch break courtyard drop!'
    },
    {
      id: 'act-2',
      type: 'order',
      status: 'scheduled',
      timestamp: 'Friday Break • 1:30 PM',
      itemTitle: 'Ornate Silver Concho Leather Waist Belt',
      price: 1100,
      counterpartHandle: '@meera_ad',
      counterpartLocation: 'NIFT Canteen Amphitheatre Steps',
      fulfillmentMode: 'Friday Courtyard Meetup Drop',
      message: 'Campus drop confirmed. Meet during lunch break to inspect and complete the exchange.'
    },
    {
      id: 'act-3',
      type: 'bid',
      status: 'active',
      timestamp: '1h ago',
      itemTitle: "Distressed Grommet Buckle Shoulder Bag",
      yourBid: 950,
      highestBid: 950,
      isLeading: true,
      message: 'You are currently the highest bidder! Drop handoff at Canteen Amphitheatre.'
    }
  ],

  // Active PDP & Modal States
  currentPdpItem: null,
  biddingTargetItem: null,
  tradeTargetItem: null,
  selectedTradeClosetItemId: null,
  cashTopUpAmount: 0,

  // Sell Wizard State
  wizardStep: 1,
  wizardConditionTier: 3,
  wizardPricingModel: 'fixed'
};


// ==========================================================================
// 2. INITIALIZATION & DOM BINDINGS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCuratedFilters();
  initCategoryFilters();
  initSellWizard();
  initClosetDualMode();
  initPdpModals();
  initBiddingModal();
  initTradeDrawer();
  initHandoffModal();
  initCampusDropBeacon();

  // Initial Renders
  renderDiscoverFeed();
  renderActivityStream();
  renderClosetView();
  updateBadgeCounts();
});


// ==========================================================================
// 3. NAVIGATION CONTROLLER
// ==========================================================================

function initNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;
      if (targetId) switchTab(targetId);
    });
  });

  const desktopBeaconBtn = document.getElementById('desktop-beacon-btn');
  if (desktopBeaconBtn) {
    desktopBeaconBtn.addEventListener('click', () => {
      showToast("📍 Friday Lunch Break Drop @ Canteen Amphitheatre!");
      switchTab('view-activity');
    });
  }
  
  const mobileBeaconBtn = document.getElementById('mobile-beacon-btn');
  if (mobileBeaconBtn) {
    mobileBeaconBtn.addEventListener('click', () => {
      showToast("📍 Friday Lunch Break Drop @ Canteen Amphitheatre!");
      switchTab('view-activity');
    });
  }

  const listBtn = document.getElementById('closet-list-new-btn');
  if (listBtn) {
    listBtn.addEventListener('click', () => {
      switchTab('view-sell');
    });
  }
}

function switchTab(targetId) {
  AppState.activeTab = targetId;

  document.querySelectorAll('.tab-view').forEach(view => {
    view.classList.remove('active');
  });
  const targetView = document.getElementById(targetId);
  if (targetView) targetView.classList.add('active');

  document.querySelectorAll('.nav-tab').forEach(tab => {
    if (tab.dataset.target === targetId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  const main = document.querySelector('.app-main');
  if (main) main.scrollTop = 0;

  if (targetId === 'view-closet') renderClosetView();
  if (targetId === 'view-activity') renderActivityStream();
}


// ==========================================================================
// 4. CAMPUS EVENT BROADCAST BEACON
// ==========================================================================

function initCampusDropBeacon() {
  const rsvpBtn = document.getElementById('btn-rsvp-drop');
  if (rsvpBtn) {
    rsvpBtn.addEventListener('click', () => {
      showToast("✓ RSVP Confirmed! Meet at Canteen Amphitheatre @ 1:30 PM.");
      rsvpBtn.textContent = "✓ RSVP Confirmed";
      rsvpBtn.style.backgroundColor = "#03543F";
    });
  }
}


// ==========================================================================
// 5. DISCOVER FEED ENGINE (TWO-COLUMN MASONRY EDITORIAL)
// ==========================================================================

function initCuratedFilters() {
  const pills = document.querySelectorAll('.curated-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.curatedFilter = pill.dataset.curated;
      renderDiscoverFeed();
    });
  });
}

function initCategoryFilters() {
  const chips = document.querySelectorAll('.cat-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      AppState.categoryFilter = chip.dataset.category;
      renderDiscoverFeed();
    });
  });
}

function renderDiscoverFeed() {
  const grid = document.getElementById('discover-product-grid');
  const countEl = document.getElementById('feed-item-count');
  if (!grid) return;

  let filtered = [...AppState.listings];

  // Category filter
  if (AppState.categoryFilter !== 'all') {
    filtered = filtered.filter(item => item.category === AppState.categoryFilter);
  }

  // Curated Capsule & Pricing Paradigm filters
  if (AppState.curatedFilter === 'fixed-price') {
    filtered = filtered.filter(item => item.pricingModel === 'fixed');
  } else if (AppState.curatedFilter === 'live-bids') {
    filtered = filtered.filter(item => item.pricingModel === 'bidding');
  } else if (AppState.curatedFilter === 'swaps-only') {
    filtered = filtered.filter(item => item.openForSwap);
  } else if (AppState.curatedFilter === 'under-800') {
    filtered = filtered.filter(item => (item.price || item.currentHighestBid || item.startingBid) <= 800);
  } else if (AppState.curatedFilter === 'y2k') {
    filtered = filtered.filter(item => item.tags.some(t => t.includes('Y2K')));
  } else if (AppState.curatedFilter === 'fc-dept') {
    filtered = filtered.filter(item => item.seller.dept.includes('FC'));
  } else if (AppState.curatedFilter === 'fd-dept') {
    filtered = filtered.filter(item => item.seller.dept.includes('FD'));
  }

  if (countEl) {
    countEl.textContent = `${filtered.length} CAMPUS PIECE${filtered.length === 1 ? '' : 'S'} CIRCULATING`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background-color: var(--bg-beige-card); border: 2px solid var(--border-dark); box-shadow: var(--shadow-brutal);">
        <p style="font-family: var(--font-display); font-size: 24px; margin-bottom: 6px;">NO GARMENTS FOUND IN THIS FILTER</p>
        <p style="font-size: 13px; color: var(--text-muted);">Try switching categories or exploring "ALL CAMPUS DROPS".</p>
      </div>
    `;
    return;
  }

  const isFullFeed = (AppState.curatedFilter === 'all' && AppState.categoryFilter === 'all');
  let html = '';

  filtered.forEach((item, index) => {
    html += renderGarmentCardHTML(item);

    // After item 2: Insert the Dazed & Krongauz Editorial Lookbook Spread Break
    if (isFullFeed && index === 1) {
      html += `
        <div class="editorial-lookbook-spread">
          <div class="tape-cross-red" style="top:-10px; right:-10px; left:auto;">
            <svg viewBox="0 0 32 32">
              <line x1="6" y1="6" x2="26" y2="26" stroke="#D02323" stroke-width="4.5" stroke-linecap="round"/>
              <line x1="26" y1="6" x2="6" y2="26" stroke="#D02323" stroke-width="4.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="lookbook-visual-cluster">
            <img class="lookbook-img-primary" src="images/product-10.jpg" alt="Chanderi Blouse Styling">
            <img class="lookbook-img-secondary" src="images/product-7.jpg" alt="Tribal Flame Denim Drape">
          </div>
          <div class="lookbook-text-col">
            <span class="lookbook-tagline">✳ STUDENT EDITORIAL SPOTLIGHT • FC & FD DEPT</span>
            <h3 class="lookbook-headline">
              HYDERABAD MONSOON LAYERS: <span class="headline-script">Styling</span> ARCHIVE SILK & FLAMES
            </h3>
            <p class="lookbook-lead-text">
              A collaborative study on the Canteen Steps by Simran Singh & Devika Rao. Exploring handloom Chanderi multi-stripe lantern sleeves paired with skate flame denims. Every styled garment is recirculating in this Friday's break drop.
            </p>
            <div class="lookbook-action-row">
              <span class="link-read-more" onclick="showToast('Lookbook Chapter: Studying Proportions on Campus')">R E A D   M O R E</span>
            </div>
          </div>
        </div>
      `;
    }

    // After item 4: Insert the Anastasia Krongauz Solid Red Split Quote Break (Beige font on Red Ground!)
    if (isFullFeed && index === 3) {
      html += `
        <div class="editorial-quote-spread">
          <div class="quote-photo-side">
            <img src="images/product-20.jpg" alt="Subversive Moto Jacket Editorial">
          </div>
          <div class="quote-content-side">
            <div class="quote-sticker-box">✳ NIFT ATELIER ETHOS</div>
            <h3 class="quote-text-lead">
              "NOT A RESALE APP. A LIVING CAMPUS <span class="quote-script">Archive</span> — WEAR IT, STUDY IT, TRADE IT, PASS IT FORWARD."
            </h3>
            <div class="quote-author">— SIMRAN SINGH, FASHION COMMUNICATION (BD/24/164)</div>
            <button class="btn-beige-invert" onclick="quickFilterParadigm('swaps-only')">EXPLORE SWAP PIECES (⇄)</button>
          </div>
        </div>
      `;
    }
  });

  grid.innerHTML = html;
  attachCardListeners(grid);
}

function renderGarmentCardHTML(item) {
  const isSaved = AppState.savedIds.has(item.id);
  const conditionBadgeClass = getConditionBadgeClass(item.condition);
  const isBidding = item.pricingModel === 'bidding';
  const deptCode = item.seller.dept.split('(')[1]?.replace(')', '') || 'FC';

  return `
    <article class="garment-card" data-id="${item.id}">
      <div class="tape-cross-red" aria-hidden="true">
        <svg viewBox="0 0 32 32">
          <line x1="6" y1="6" x2="26" y2="26" stroke="#D02323" stroke-width="4.5" stroke-linecap="round"/>
          <line x1="26" y1="6" x2="6" y2="26" stroke="#D02323" stroke-width="4.5" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="card-media">
        <img src="${item.heroImage}" alt="${item.title}" loading="lazy">
        <div class="card-tag-overlay">
          ${isBidding ? '<span class="sticker-pill bidding-tag">🔥 LIVE BIDS</span>' : '<span class="sticker-pill fixed-tag">🔒 FIXED</span>'}
          ${item.openForSwap ? '<span class="sticker-pill swap-tag">⇄ SWAP</span>' : ''}
        </div>
        <button class="card-save-btn ${isSaved ? 'saved' : ''}" data-id="${item.id}" title="Save Piece" onclick="event.stopPropagation(); toggleSaveItem(${item.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
      </div>

      <div class="card-body">
        <div class="card-brand-row">
          <span class="card-brand">${item.brand}</span>
          <span class="card-dept-tag">✳ ${deptCode} DEPT</span>
        </div>
        <h4 class="card-title">${item.title}</h4>
        <span class="card-condition-pill ${conditionBadgeClass}">✳ ${item.condition}</span>
        
        <p class="card-secondary-caption">
          ${item.flaws || item.tradeWishlist || "Circulated from NIFT campus studio wardrobe. Inspected in natural light."}
        </p>

        <div class="card-meta-row">
          <div class="card-price-col">
            <span class="price-sub-caption">${isBidding ? 'High Bid' : 'Direct Price'}</span>
            <span class="card-price ${isBidding ? 'bidding-price' : ''}">₹${(isBidding ? item.currentHighestBid : item.price).toLocaleString()}</span>
          </div>
          <span class="card-size">${item.size.split('(')[0].trim()}</span>
        </div>

        <div class="card-inspect-row">
          <span class="card-inspect-link">
            ${isBidding ? 'P L A C E   B I D' : 'V I E W   P I E C E'} &rarr;
          </span>
        </div>
      </div>
    </article>
  `;
}

function getConditionBadgeClass(cond) {
  if (cond.includes('New / Unworn')) return 'pill-new';
  if (cond.includes('Like New')) return 'pill-likenew';
  if (cond.includes('Gently Used')) return 'pill-gentlyused';
  if (cond.includes('Well Used')) return 'pill-wellused';
  return 'pill-flawed';
}

function attachCardListeners(container) {
  container.querySelectorAll('.garment-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id, 10);
      const garment = AppState.listings.find(i => i.id === id) || AppState.userCloset.find(i => i.id === id);
      if (garment) openPdpModal(garment);
    });
  });
}

function toggleSaveItem(id) {
  if (AppState.savedIds.has(id)) {
    AppState.savedIds.delete(id);
    showToast("Removed from your saved archive.");
  } else {
    AppState.savedIds.add(id);
    showToast("Archived to your saved wishlist! ♡");
  }
  renderDiscoverFeed();
  renderClosetView();
  updateBadgeCounts();
}


// ==========================================================================
// 6. SELL WIZARD ENGINE (6-STEP GUIDED WIZARD WITH CONDITION PARADIGMS)
// ==========================================================================

function initSellWizard() {
  const prevBtn = document.getElementById('wizard-prev-btn');
  const nextBtn = document.getElementById('wizard-next-btn');
  const catSelect = document.getElementById('sell-category');
  const conditionRadios = document.querySelectorAll('input[name="sell-condition"]');

  if (catSelect) {
    catSelect.addEventListener('change', (e) => {
      updateDynamicMeasurementInputs(e.target.value);
    });
    updateDynamicMeasurementInputs('Outerwear');
  }

  conditionRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const paradigm = e.target.dataset.paradigm;
      AppState.wizardPricingModel = paradigm;
      updatePricingStepFields(paradigm);
    });
  });

  if (nextBtn) nextBtn.addEventListener('click', handleWizardNext);
  if (prevBtn) prevBtn.addEventListener('click', handleWizardPrev);

  updateWizardStepUI();
}

function updatePricingStepFields(paradigm) {
  const priceLabel = document.getElementById('price-input-label');
  const explainer = document.getElementById('price-mode-explainer');
  const stepTitle = document.getElementById('pricing-step-title');

  if (paradigm === 'bidding') {
    if (stepTitle) stepTitle.textContent = "Campus Auction / Bidding Setup";
    if (priceLabel) priceLabel.textContent = "Starting Minimum Bid (₹ INR) *";
    if (explainer) explainer.innerHTML = "🔥 <strong>Tiers 4 & 5 enter Live Campus Bidding:</strong> Enter your base starting bid. NIFT students place bids that close before the Friday break drop!";
  } else {
    if (stepTitle) stepTitle.textContent = "Direct Fixed Pricing Setup";
    if (priceLabel) priceLabel.textContent = "Direct Fixed Price (₹ INR) *";
    if (explainer) explainer.innerHTML = "🔒 <strong>Tiers 1–3 use Direct Fixed Pricing:</strong> Zero bidding or bargaining allowed. Students purchase directly at your listed price.";
  }
}

function updateDynamicMeasurementInputs(category) {
  const container = document.getElementById('dynamic-meas-inputs');
  const catBadge = document.getElementById('meas-cat-label');
  if (!container) return;

  if (catBadge) catBadge.textContent = category.toUpperCase();

  let fieldsHTML = '';
  if (category === 'Bottoms') {
    fieldsHTML = `
      <div class="meas-input-item"><label>Waist (Flat × 2)</label><input type="text" value="30.0 in"></div>
      <div class="meas-input-item"><label>Hip (Widest)</label><input type="text" value="38.5 in"></div>
      <div class="meas-input-item"><label>Inseam Length</label><input type="text" value="32.0 in"></div>
      <div class="meas-input-item"><label>Rise</label><input type="text" value="11.5 in"></div>
    `;
  } else if (category === 'Dresses') {
    fieldsHTML = `
      <div class="meas-input-item"><label>Bust (Pit-to-pit)</label><input type="text" value="34.0 in"></div>
      <div class="meas-input-item"><label>Waist</label><input type="text" value="28.0 in"></div>
      <div class="meas-input-item"><label>Hip</label><input type="text" value="36.0 in"></div>
      <div class="meas-input-item"><label>Total Length</label><input type="text" value="44.0 in"></div>
    `;
  } else if (category === 'Indian / Ethnic Wear') {
    fieldsHTML = `
      <div class="meas-input-item"><label>Bust / Chest</label><input type="text" value="36.0 in"></div>
      <div class="meas-input-item"><label>Shoulder Width</label><input type="text" value="15.0 in"></div>
      <div class="meas-input-item"><label>Garment Length</label><input type="text" value="42.0 in"></div>
      <div class="meas-input-item"><label>Sleeve Length</label><input type="text" value="18.0 in"></div>
    `;
  } else {
    fieldsHTML = `
      <div class="meas-input-item"><label>Chest (Pit-to-pit)</label><input type="text" value="22.5 in"></div>
      <div class="meas-input-item"><label>Shoulder Width</label><input type="text" value="19.0 in"></div>
      <div class="meas-input-item"><label>Center Back Length</label><input type="text" value="24.0 in"></div>
      <div class="meas-input-item"><label>Sleeve Length</label><input type="text" value="23.5 in"></div>
    `;
  }

  container.innerHTML = fieldsHTML;
}

function handleWizardNext() {
  if (AppState.wizardStep < 6) {
    AppState.wizardStep++;
    if (AppState.wizardStep === 6) renderWizardPreview();
    updateWizardStepUI();
  } else {
    publishNewListing();
  }
}

function handleWizardPrev() {
  if (AppState.wizardStep > 1) {
    AppState.wizardStep--;
    updateWizardStepUI();
  }
}

function updateWizardStepUI() {
  const stepTitles = [
    "STEP 1: CURATE PHOTOS",
    "STEP 2: BASIC IDENTITY",
    "STEP 3: CONDITION & FIT",
    "STEP 4: PRICING / BIDDING",
    "STEP 5: CAMPUS DROP ZONES",
    "STEP 6: EDITORIAL PREVIEW"
  ];

  const titleEl = document.getElementById('wizard-step-title');
  const counterEl = document.getElementById('wizard-step-counter');
  const fillEl = document.getElementById('wizard-progress-fill');
  const prevBtn = document.getElementById('wizard-prev-btn');
  const nextBtn = document.getElementById('wizard-next-btn');

  if (titleEl) titleEl.textContent = stepTitles[AppState.wizardStep - 1];
  if (counterEl) counterEl.textContent = `${AppState.wizardStep} of 6`;
  if (fillEl) fillEl.style.width = `${(AppState.wizardStep / 6) * 100}%`;

  document.querySelectorAll('.wizard-step-pane').forEach(pane => {
    if (parseInt(pane.dataset.step, 10) === AppState.wizardStep) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });

  if (prevBtn) prevBtn.style.visibility = AppState.wizardStep === 1 ? 'hidden' : 'visible';
  if (nextBtn) nextBtn.textContent = AppState.wizardStep === 6 ? 'Curate & Broadcast Drop' : 'Next Step';
}

function renderWizardPreview() {
  const container = document.getElementById('wizard-preview-container');
  if (!container) return;

  const title = document.getElementById('sell-title')?.value || "Workwear Canvas Jacket";
  const brand = document.getElementById('sell-brand')?.value || "Carhartt";
  const price = parseInt(document.getElementById('sell-price')?.value, 10) || 1800;
  const isSwap = document.getElementById('sell-exchange-toggle')?.checked;
  const selectedCond = document.querySelector('input[name="sell-condition"]:checked')?.value || "Gently Used";
  const isBidding = AppState.wizardPricingModel === 'bidding';

  container.innerHTML = `
    <div style="background-color: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden; max-width: 240px; margin: 0 auto; box-shadow: var(--shadow-subtle);">
      <div style="position: relative; aspect-ratio: 4/5; background-color: #E2DDD5;">
        <img src="images/product-2.jpg" style="width:100%; height:100%; object-fit: cover;">
        ${isBidding ? '<span class="card-paradigm-badge bidding" style="position: absolute; top: 8px; left: 8px;">🔥 Live Bids</span>' : '<span class="card-paradigm-badge fixed" style="position: absolute; top: 8px; left: 8px;">🔒 Fixed</span>'}
        ${isSwap ? '<span class="card-swap-pill" style="position: absolute; bottom: 8px; left: 8px;">⇄ Swap</span>' : ''}
      </div>
      <div style="padding: 12px;">
        <span style="font-size: 10px; font-weight: 800; color: var(--text-tertiary); text-transform: uppercase;">${brand}</span>
        <h4 style="font-size: 13px; font-weight: 700; color: var(--text-primary); margin: 2px 0 6px;">${title}</h4>
        <span class="card-condition-pill ${getConditionBadgeClass(selectedCond)}">${selectedCond}</span>
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 8px; padding-top: 6px; border-top: 1px solid var(--border-subtle);">
          <span style="font-size: 14px; font-weight: 800; font-family: var(--font-mono);">${isBidding ? 'Start Bid: ' : ''}₹${price.toLocaleString()}</span>
          <span style="font-size: 10px; font-weight: 700; color: var(--accent-cobalt);">NIFT FC</span>
        </div>
      </div>
    </div>
  `;
}

function publishNewListing() {
  const title = document.getElementById('sell-title')?.value || "Vintage Workwear Jacket";
  const brand = document.getElementById('sell-brand')?.value || "Carhartt";
  const category = document.getElementById('sell-category')?.value || "Outerwear";
  const dept = document.getElementById('sell-dept')?.value || "Fashion Communication (FC)";
  const price = parseInt(document.getElementById('sell-price')?.value, 10) || 1800;
  const isSwap = document.getElementById('sell-exchange-toggle')?.checked;
  const condition = document.querySelector('input[name="sell-condition"]:checked')?.value || "Gently Used";
  const flaws = document.getElementById('sell-flaws')?.value || "No stains; laundered studio piece.";
  const labelSize = document.getElementById('sell-label-size')?.value || "Size L";
  const isBidding = AppState.wizardPricingModel === 'bidding';

  const newId = Date.now();

  const newGarment = {
    id: newId,
    title,
    brand,
    category,
    condition,
    conditionTier: isBidding ? 4 : 3,
    pricingModel: isBidding ? 'bidding' : 'fixed',
    price: isBidding ? undefined : price,
    startingBid: isBidding ? price : undefined,
    currentHighestBid: isBidding ? price : undefined,
    bidsCount: isBidding ? 0 : undefined,
    biddingEnds: isBidding ? "Friday Lunch Break (1:30 PM)" : undefined,
    size: labelSize,
    heroImage: "images/product-2.jpg",
    gallery: [
      "images/product-2.jpg"
    ],
    openForSwap: isSwap,
    tradeWishlist: "Open to swap at Friday Courtyard drop",
    flaws,
    measurements: { chest: "22.5 in", shoulder: "19.0 in", length: "24.0 in" },
    seller: {
      name: AppState.currentUser.name,
      handle: AppState.currentUser.handle,
      dept,
      rating: AppState.currentUser.rating,
      circulations: AppState.currentUser.salesCount,
      location: "Canteen Amphitheatre",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    tags: ["#Streetwear", "#CampusDrop", "#NewPiece"],
    dropZones: ["Canteen Amphitheatre", "Textile Lawn"],
    isJustListed: true,
    isMine: true
  };

  AppState.listings.unshift(newGarment);
  AppState.userCloset.unshift(newGarment);

  const successMsg = document.getElementById('wizard-success-msg');
  if (successMsg) successMsg.style.display = 'block';

  showToast("Piece curated & broadcasted to NIFT Campus! ✨");

  setTimeout(() => {
    if (successMsg) successMsg.style.display = 'none';
    AppState.wizardStep = 1;
    updateWizardStepUI();
    switchTab('view-discover');
    renderDiscoverFeed();
    renderClosetView();
  }, 1200);
}


// ==========================================================================
// 8. UNIFIED ACTIVITY STREAM (BIDS, SWAPS, CAMPUS DROPS)
// ==========================================================================

function renderActivityStream(filter = 'all') {
  const container = document.getElementById('activity-stream');
  if (!container) return;

  const segmentBtns = document.querySelectorAll('.activity-segment-btn');
  segmentBtns.forEach(btn => {
    btn.onclick = () => {
      segmentBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderActivityStream(btn.dataset.segment);
    };
  });

  let items = [...AppState.activity];
  if (filter === 'bids') items = items.filter(i => i.type === 'bid');
  if (filter === 'trades') items = items.filter(i => i.type === 'trade');
  if (filter === 'drops') items = items.filter(i => i.type === 'order');

  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-secondary);">
        <p style="font-weight: 700;">No active ${filter} right now.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(act => {
    if (act.type === 'bid') {
      return `
        <div class="activity-card highlight" id="${act.id}">
          <div class="activity-card-header">
            <span class="activity-type-tag type-bid">🔥 Live Campus Bid</span>
            <span class="activity-time">${act.timestamp}</span>
          </div>
          <h4 class="activity-garment-title">${act.itemTitle}</h4>
          <p class="activity-detail-text">
            <strong>Your Active Bid:</strong> ₹${act.yourBid.toLocaleString()} • ${act.isLeading ? '👑 You are currently the highest bidder!' : '⚠️ Outbid!'}
          </p>
          <div style="font-size: 11px; background-color: var(--bg-primary); padding: 8px; border-radius: var(--radius-xs); border: 1px solid var(--border-subtle); margin-top: 4px;">
            📍 Physical Drop Handoff: Friday Lunch Break @ Canteen Amphitheatre
          </div>
        </div>
      `;
    } else if (act.type === 'trade') {
      return `
        <div class="activity-card highlight" id="${act.id}">
          <div class="activity-card-header">
            <span class="activity-type-tag type-trade">⇄ Campus Swap Proposal</span>
            <span class="activity-time">${act.timestamp}</span>
          </div>
          <h4 class="activity-garment-title">${act.senderHandle} wants to swap:</h4>
          <p class="activity-detail-text">
            <strong>For:</strong> "${act.targetItemTitle}"<br>
            <strong>Offers:</strong> "${act.counterItemTitle}" ${act.cashAdjustment ? `+ ₹${act.cashAdjustment} Cash Top-up` : ''}
          </p>
          <div style="font-size: 11px; background-color: var(--bg-primary); padding: 8px; border-radius: var(--radius-xs); border: 1px solid var(--border-subtle); margin-top: 4px;">
            💬 "${act.message}"
          </div>
          <div class="activity-actions-row">
            <button class="btn-sm-primary" onclick="acceptTradeProposal('${act.id}')">Accept Swap for Drop</button>
            <button class="btn-sm-secondary" onclick="declineTradeProposal('${act.id}')">Decline</button>
          </div>
        </div>
      `;
    } else if (act.type === 'order') {
      return `
        <div class="activity-card highlight" id="${act.id}">
          <div class="activity-card-header">
            <span class="activity-type-tag type-order">📍 Break Drop Scheduled</span>
            <span class="activity-time">${act.timestamp}</span>
          </div>
          <h4 class="activity-garment-title">${act.itemTitle}</h4>
          <p class="activity-detail-text">
            <strong>Drop Hub:</strong> ${act.counterpartLocation}<br>
            <strong>With:</strong> ${act.counterpartHandle} • Direct Inspection Required
          </p>
          <div class="activity-actions-row">
            <button class="btn-sm-primary" onclick="openHandoffModal('${act.id}')">Open Drop Inspection</button>
          </div>
        </div>
      `;
    }
    return '';
  }).join('');
}

function acceptTradeProposal(actId) {
  const act = AppState.activity.find(a => a.id === actId);
  if (!act) return;

  act.type = 'order';
  act.status = 'scheduled';
  act.itemTitle = `${act.targetItemTitle} ⇄ ${act.counterItemTitle}`;
  act.counterpartHandle = act.senderHandle;
  act.counterpartLocation = 'NIFT Canteen Amphitheatre Steps';
  act.timestamp = 'Friday Lunch Break (1:30 PM)';

  showToast("Swap locked for the Friday Courtyard Drop! 📍");
  renderActivityStream();
  updateBadgeCounts();
}

function declineTradeProposal(actId) {
  AppState.activity = AppState.activity.filter(a => a.id !== actId);
  showToast("Swap proposal politely declined.");
  renderActivityStream();
  updateBadgeCounts();
}


// ==========================================================================
// 9. DUAL-MODE "MY CLOSET" CONTROLLER
// ==========================================================================

function initClosetDualMode() {
  const btnCloset = document.getElementById('btn-mode-closet');
  const btnSaved = document.getElementById('btn-mode-saved');
  const panelCloset = document.getElementById('panel-my-closet');
  const panelSaved = document.getElementById('panel-my-saved');

  if (btnCloset && btnSaved) {
    btnCloset.addEventListener('click', () => {
      btnCloset.classList.add('active');
      btnSaved.classList.remove('active');
      panelCloset.classList.add('active');
      panelSaved.classList.remove('active');
      AppState.closetMode = 'closet';
    });

    btnSaved.addEventListener('click', () => {
      btnSaved.classList.add('active');
      btnCloset.classList.remove('active');
      panelSaved.classList.add('active');
      panelCloset.classList.remove('active');
      AppState.closetMode = 'saved';
      renderSavedGrid();
    });
  }
}

function renderClosetView() {
  const closetGrid = document.getElementById('closet-product-grid');
  const countCloset = document.getElementById('count-mode-closet');
  const countActive = document.getElementById('closet-active-count');

  if (closetGrid) {
    closetGrid.innerHTML = AppState.userCloset.map(item => renderGarmentCardHTML(item)).join('');
    attachCardListeners(closetGrid);
  }

  if (countCloset) countCloset.textContent = `(${AppState.userCloset.length})`;
  if (countActive) countActive.textContent = AppState.userCloset.length;

  renderSavedGrid();
}

function renderSavedGrid() {
  const savedGrid = document.getElementById('saved-product-grid');
  const countSaved = document.getElementById('count-mode-saved');
  if (!savedGrid) return;

  const savedList = AppState.listings.filter(i => AppState.savedIds.has(i.id));
  if (countSaved) countSaved.textContent = `(${savedList.length})`;

  if (savedList.length === 0) {
    savedGrid.innerHTML = `
      <div style="grid-column: span 2; text-align: center; padding: 40px 10px; color: var(--text-secondary);">
        <p style="font-weight: 700;">No saved pieces in your archive yet.</p>
        <p style="font-size: 12px; margin-top: 4px;">Tap the heart icon on any campus piece to save it.</p>
      </div>
    `;
    return;
  }

  savedGrid.innerHTML = savedList.map(item => renderGarmentCardHTML(item)).join('');
  attachCardListeners(savedGrid);
}


// ==========================================================================
// 10. PRODUCT DETAIL MODAL (PDP) - PARADIGM-AWARE 7-LAYER SYSTEM
// ==========================================================================

function initPdpModals() {
  const closeBtn = document.getElementById('pdp-close-btn');
  const modal = document.getElementById('pdp-modal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      AppState.currentPdpItem = null;
    });
  }

  const favBtn = document.getElementById('pdp-favorite-btn');
  if (favBtn) {
    favBtn.addEventListener('click', () => {
      if (AppState.currentPdpItem) {
        toggleSaveItem(AppState.currentPdpItem.id);
        updatePdpFavButtonState();
      }
    });
  }

  const shareBtn = document.getElementById('pdp-share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      showToast("Campus piece link copied to clipboard!");
    });
  }
}

function openPdpModal(item) {
  AppState.currentPdpItem = item;
  const modal = document.getElementById('pdp-modal');
  const body = document.getElementById('pdp-body-content');
  const actionBar = document.getElementById('pdp-action-bar');
  if (!modal || !body || !actionBar) return;

  updatePdpFavButtonState();
  const isBidding = item.pricingModel === 'bidding';

  // Render the 7 Structured Content Layers
  body.innerHTML = `
    <!-- 1. HERO IMAGE CAROUSEL WITH RED TAPED CROSS -->
    <div class="pdp-hero-gallery">
      <div class="tape-cross-red" style="top:12px; left:12px;">
        <svg viewBox="0 0 32 32">
          <line x1="6" y1="6" x2="26" y2="26" stroke="#D02323" stroke-width="4.5" stroke-linecap="round"/>
          <line x1="26" y1="6" x2="6" y2="26" stroke="#D02323" stroke-width="4.5" stroke-linecap="round"/>
        </svg>
      </div>
      <img src="${item.heroImage}" alt="${item.title}">
      <span class="pdp-gallery-counter">1 of ${item.gallery ? item.gallery.length : 1}</span>
    </div>

    <!-- DETAILS COLUMN (RIGHT SIDE ON DESKTOP) -->
    <div class="pdp-details-col">
      
      <!-- 2. ITEM IDENTITY & CONDITION BADGE -->
      <div>
        <div class="pdp-brand-row">
          <span class="pdp-brand-name">${item.brand} • ${item.seller.dept}</span>
          ${isBidding ? '<span class="sticker-pill bidding-tag">🔥 Live Bids Active</span>' : '<span class="sticker-pill fixed-tag">🔒 Fixed Direct Price</span>'}
        </div>
        <h2 class="pdp-title">${item.title}</h2>
        <div class="pdp-price-condition-row">
          <span class="pdp-price ${isBidding ? 'bidding-price' : ''}">
            ${isBidding ? `High Bid: ₹${item.currentHighestBid.toLocaleString()}` : `₹${item.price.toLocaleString()}`}
          </span>
          <span class="card-condition-pill ${getConditionBadgeClass(item.condition)}">✳ ${item.condition}</span>
        </div>

        ${isBidding ? `
          <div class="pdp-bidding-card">
            <div class="bidding-card-top">
              <span class="bidding-status-tag">🔥 CAMPUS BIDDING ACTIVE</span>
              <span class="bidding-countdown">Closes Friday 1:30 PM</span>
            </div>
            <div class="bidding-amounts-row">
              <div>
                <span class="price-sub-caption" style="color:#FFE0D0;">CURRENT HIGH BID</span>
                <div class="bid-current-high">₹${item.currentHighestBid.toLocaleString()}</div>
              </div>
              <span class="bid-count-badge">${item.bidsCount} bids placed</span>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- 3. FIT & MEASUREMENT SPEC SHEET -->
      <div>
        <div class="measurement-table-card">
          <div class="meas-table-header">
            <span class="meas-title">True Flat-Lay Fit Specs</span>
            <span class="meas-tag-label">${item.size}</span>
          </div>
          <div class="meas-grid-spec">
            ${renderMeasurementsGrid(item.measurements)}
          </div>
        </div>
        <div style="font-size: 11px; color: var(--text-muted); margin-top: 6px; font-family: var(--font-mono);">
          *Measured flat lay seam-to-seam. Compare against your studio garments.
        </div>
      </div>

      <!-- 4. CONDITION & FLAW TRANSPARENCY -->
      <div>
        <h4 style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-dark); margin-bottom: 6px;">Condition & Flaw Integrity</h4>
        <div style="background-color: var(--bg-beige-card); border: 1.5px solid var(--border-dark); padding: 12px; border-radius: 4px; font-size: 13px;">
          ${item.conditionTier >= 4 ? '<div style="font-family:var(--font-mono); font-size:11px; font-weight:700; color:var(--red-carmine); margin-bottom:4px;">⚠️ Mandatory Flaw Disclosure (Auction Grade)</div>' : ''}
          <p style="color:var(--text-dark);">${item.flaws || "Laundered studio garment, no defects or odors."}</p>
        </div>
      </div>

      <!-- 5. CURATORIAL ATTRIBUTES & SWAP WISHLIST -->
      <div>
        <h4 style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-dark); margin-bottom: 6px;">Curated Tags & Swap Wishlist</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px;">
          ${item.tags ? item.tags.map(t => `<span style="font-family:var(--font-mono); font-size: 11px; font-weight: 700; padding: 4px 8px; background-color: var(--bg-beige-card); border: 1px solid var(--border-dark); border-radius: 3px;">${t}</span>`).join('') : ''}
        </div>
        ${item.tradeWishlist ? `<p style="font-size: 12px; color: var(--text-muted); line-height:1.4;"><strong>Curator's Swap Wishlist:</strong> ${item.tradeWishlist}</p>` : ''}
      </div>

      <!-- 6. SELLER CREDIBILITY & WARDROBE -->
      <div style="background-color: var(--bg-beige-card); border: 1.5px solid var(--border-dark); padding: 14px; border-radius: 4px; display:flex; gap:12px; align-items:center;">
        <img src="${item.seller.avatar}" alt="${item.seller.name}" style="width:44px; height:44px; border-radius:50%; border:1.5px solid var(--border-dark); object-fit:cover;">
        <div>
          <h4 style="font-family:var(--font-display); font-size:17px; line-height:1;">${item.seller.name} <span style="font-family:var(--font-mono); font-size: 11px; font-weight: normal; color: var(--text-muted);">${item.seller.handle}</span></h4>
          <p style="font-size: 12px; color: var(--text-muted); margin-top:3px;">★ <strong>${item.seller.rating}</strong> (${item.seller.circulations} campus drops) • ${item.seller.dept}</p>
        </div>
      </div>

      <!-- 7. CAMPUS DROP HANDOFF PROTOCOL -->
      <div>
        <h4 style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-dark); margin-bottom: 6px;">Campus Drop Locations (Zero Courier)</h4>
        <ul style="list-style: none; font-size: 12px; color: var(--text-muted); display: flex; flex-direction: column; gap: 4px;">
          ${item.dropZones ? item.dropZones.map(z => `<li>📍 <strong>${z}</strong> (Friday Lunch Break Drop)</li>`).join('') : '<li>📍 NIFT Canteen Amphitheatre Steps</li>'}
        </ul>
      </div>

    </div>
  `;

  // Render Action Bar based on Commercial Paradigm
  if (item.isMine) {
    actionBar.innerHTML = `
      <div style="width: 100%; text-align: center; font-size: 12px; font-weight: 700; color: var(--text-secondary);">
        This piece is currently circulating from your closet.
      </div>
    `;
  } else if (isBidding) {
    // TIERS 4 & 5: CAMPUS BIDDING PARADIGM
    actionBar.innerHTML = `
      ${item.openForSwap ? '<button class="btn-pdp-trade" id="btn-action-trade">⇄ Propose Swap</button>' : ''}
      <button class="btn-pdp-bid" id="btn-action-bid">🔥 Place Bid (Min ₹${(item.currentHighestBid + 50).toLocaleString()})</button>
    `;

    document.getElementById('btn-action-bid').addEventListener('click', () => {
      openBiddingModal(item);
    });

    if (item.openForSwap) {
      document.getElementById('btn-action-trade').addEventListener('click', () => {
        openTradeModal(item);
      });
    }
  } else {
    // TIERS 1, 2, 3: DIRECT FIXED PRICE ONLY (NO BIDDING / HAGGLING)
    actionBar.innerHTML = `
      ${item.openForSwap ? '<button class="btn-pdp-trade" id="btn-action-trade">⇄ Propose Swap</button>' : ''}
      <button class="btn-pdp-buy" id="btn-action-buy">Buy for ₹${item.price.toLocaleString()} (Fixed)</button>
    `;

    document.getElementById('btn-action-buy').addEventListener('click', () => {
      executeDirectBuy(item);
    });

    if (item.openForSwap) {
      document.getElementById('btn-action-trade').addEventListener('click', () => {
        openTradeModal(item);
      });
    }
  }

  modal.classList.add('active');
}

function updatePdpFavButtonState() {
  const favBtn = document.getElementById('pdp-favorite-btn');
  if (!favBtn || !AppState.currentPdpItem) return;
  const isSaved = AppState.savedIds.has(AppState.currentPdpItem.id);
  favBtn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? '#FF4757' : 'none'}" stroke="${isSaved ? '#FF4757' : 'currentColor'}" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
  `;
}

function renderMeasurementsGrid(specs) {
  if (!specs) return '<span>No measurements recorded.</span>';
  return Object.entries(specs).map(([key, val]) => {
    const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    return `
      <div class="meas-spec-box">
        <span class="spec-name">${formattedKey}</span>
        <span class="spec-val">${val}</span>
      </div>
    `;
  }).join('');
}

function executeDirectBuy(item) {
  const orderId = 'drop-' + Date.now();
  AppState.activity.unshift({
    id: orderId,
    type: 'order',
    status: 'scheduled',
    timestamp: 'Friday Break • 1:30 PM',
    itemTitle: item.title,
    price: item.price,
    counterpartHandle: item.seller.handle,
    counterpartLocation: 'NIFT Canteen Amphitheatre Steps',
    fulfillmentMode: 'Friday Courtyard Meetup Drop',
    message: `Fixed-price purchase confirmed for ₹${item.price.toLocaleString()}. Meet at Canteen Amphitheatre during lunch break to inspect and collect.`
  });

  document.getElementById('pdp-modal').classList.remove('active');
  showToast(`Reserved! Collect at Friday Lunch Break Drop from ${item.seller.handle}.`);
  switchTab('view-activity');
  updateBadgeCounts();
}


// ==========================================================================
// 11. LIVE BIDDING MODAL ENGINE (TIERS 4 & 5)
// ==========================================================================

function initBiddingModal() {
  const closeBtn = document.getElementById('bidding-modal-close');
  const submitBtn = document.getElementById('submit-bid-btn');
  const chip50 = document.getElementById('bid-plus-50');
  const chip100 = document.getElementById('bid-plus-100');
  const chip200 = document.getElementById('bid-plus-200');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('bidding-modal').classList.remove('active');
    });
  }

  const applyIncrement = (inc) => {
    if (AppState.biddingTargetItem) {
      const minBid = AppState.biddingTargetItem.currentHighestBid + 50;
      const input = document.getElementById('bid-input-amount');
      const currentVal = parseInt(input.value, 10) || minBid;
      input.value = currentVal + inc;
    }
  };

  if (chip50) chip50.addEventListener('click', () => applyIncrement(50));
  if (chip100) chip100.addEventListener('click', () => applyIncrement(100));
  if (chip200) chip200.addEventListener('click', () => applyIncrement(200));

  if (submitBtn) {
    submitBtn.addEventListener('click', submitCampusBid);
  }
}

function openBiddingModal(item) {
  AppState.biddingTargetItem = item;
  const modal = document.getElementById('bidding-modal');
  const summary = document.getElementById('bidding-item-summary');
  const highestDisp = document.getElementById('highest-bid-display');
  const bidsCountDisp = document.getElementById('bids-count-display');
  const minBidDisp = document.getElementById('min-bid-display');
  const input = document.getElementById('bid-input-amount');
  if (!modal || !summary || !input) return;

  const minBid = item.currentHighestBid + 50;

  summary.innerHTML = `
    <div style="font-size: 13px; font-weight: 700; color: var(--text-primary); margin-bottom: 2px;">${item.title}</div>
    <div style="font-size: 11.5px; color: var(--text-secondary);">Seller: <strong>${item.seller.handle} (${item.seller.dept})</strong></div>
  `;

  highestDisp.textContent = `₹${item.currentHighestBid.toLocaleString()}`;
  bidsCountDisp.textContent = `${item.bidsCount} bids`;
  minBidDisp.textContent = `₹${minBid.toLocaleString()}`;
  input.value = minBid;

  modal.classList.add('active');
}

function submitCampusBid() {
  const item = AppState.biddingTargetItem;
  const input = document.getElementById('bid-input-amount');
  const bidVal = parseInt(input?.value, 10);
  const minBid = item.currentHighestBid + 50;

  if (!bidVal || bidVal < minBid) {
    showToast(`Bid must be at least ₹${minBid.toLocaleString()}`);
    return;
  }

  // Update item state
  item.currentHighestBid = bidVal;
  item.bidsCount += 1;

  // Add to Activity as active lead bid
  const bidId = 'bid-' + Date.now();
  AppState.activity.unshift({
    id: bidId,
    type: 'bid',
    status: 'active',
    timestamp: 'Just now',
    itemTitle: item.title,
    yourBid: bidVal,
    highestBid: bidVal,
    isLeading: true,
    message: `You are the leading bidder at ₹${bidVal.toLocaleString()}! Collect at Friday Lunch Break Drop.`
  });

  document.getElementById('bidding-modal').classList.remove('active');
  document.getElementById('pdp-modal').classList.remove('active');

  showToast(`Bid of ₹${bidVal.toLocaleString()} submitted! You are the high bidder! 🔥`);
  renderDiscoverFeed();
  renderActivityStream();
  switchTab('view-activity');
  updateBadgeCounts();
}


// ==========================================================================
// 12. BILATERAL TRADE MODAL ENGINE
// ==========================================================================

function initTradeDrawer() {
  const closeBtn = document.getElementById('trade-modal-close');
  const minusBtn = document.getElementById('cash-minus-btn');
  const plusBtn = document.getElementById('cash-plus-btn');
  const submitBtn = document.getElementById('trade-submit-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('trade-modal').classList.remove('active');
    });
  }

  if (minusBtn && plusBtn) {
    minusBtn.addEventListener('click', () => {
      if (AppState.cashTopUpAmount >= 100) {
        AppState.cashTopUpAmount -= 100;
        updateCashDisplay();
      }
    });
    plusBtn.addEventListener('click', () => {
      AppState.cashTopUpAmount += 100;
      updateCashDisplay();
    });
  }

  if (submitBtn) submitBtn.addEventListener('click', submitTradeProposal);
}

function updateCashDisplay() {
  const display = document.getElementById('cash-topup-display');
  if (display) display.textContent = `₹${AppState.cashTopUpAmount.toLocaleString()}`;
}

function openTradeModal(targetGarment) {
  AppState.tradeTargetItem = targetGarment;
  AppState.selectedTradeClosetItemId = AppState.userCloset[0] ? AppState.userCloset[0].id : null;
  AppState.cashTopUpAmount = 0;
  updateCashDisplay();

  const modal = document.getElementById('trade-modal');
  const targetDisplay = document.getElementById('trade-target-display');
  const closetPicker = document.getElementById('trade-closet-options');
  if (!modal || !targetDisplay || !closetPicker) return;

  targetDisplay.innerHTML = `
    <img src="${targetGarment.heroImage}" class="target-thumb" alt="${targetGarment.title}">
    <div>
      <span style="font-size: 9.5px; font-weight: 800; color: var(--text-tertiary); text-transform: uppercase;">REQUESTING SWAP</span>
      <h4 style="font-size: 13px; font-weight: 700; color: var(--text-primary);">${targetGarment.title}</h4>
      <span style="font-size: 12px; font-family: var(--font-mono); font-weight: 700;">${targetGarment.seller.handle} (${targetGarment.seller.dept})</span>
    </div>
  `;

  closetPicker.innerHTML = AppState.userCloset.map(piece => {
    const isSelected = piece.id === AppState.selectedTradeClosetItemId;
    return `
      <div class="picker-item-card ${isSelected ? 'selected' : ''}" data-id="${piece.id}" onclick="selectTradeClosetItem(${piece.id})">
        <img src="${piece.heroImage}" class="picker-thumb" alt="${piece.title}">
        <div class="picker-info">
          <div class="picker-title">${piece.title}</div>
          <div class="picker-val">₹${piece.price.toLocaleString()}</div>
        </div>
      </div>
    `;
  }).join('');

  modal.classList.add('active');
}

window.selectTradeClosetItem = function(id) {
  AppState.selectedTradeClosetItemId = id;
  document.querySelectorAll('.picker-item-card').forEach(card => {
    if (parseInt(card.dataset.id, 10) === id) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
};

function submitTradeProposal() {
  if (!AppState.selectedTradeClosetItemId) {
    showToast("Please choose an item from your closet to trade.");
    return;
  }

  const offeredPiece = AppState.userCloset.find(p => p.id === AppState.selectedTradeClosetItemId);
  const targetPiece = AppState.tradeTargetItem;
  const userNote = document.getElementById('trade-note-input')?.value || "Let's swap at Friday lunch break drop!";

  const newActivityId = 'trade-' + Date.now();
  AppState.activity.unshift({
    id: newActivityId,
    type: 'trade',
    status: 'sent',
    timestamp: 'Just now',
    targetItemTitle: targetPiece.title,
    counterItemTitle: offeredPiece.title,
    cashAdjustment: AppState.cashTopUpAmount,
    senderHandle: `@you (${AppState.currentUser.handle})`,
    message: userNote
  });

  document.getElementById('trade-modal').classList.remove('active');
  document.getElementById('pdp-modal').classList.remove('active');

  showToast(`Swap proposal sent to ${targetPiece.seller.handle}! ⇄`);
  switchTab('view-activity');
  updateBadgeCounts();
}


// ==========================================================================
// 13. CAMPUS DROP HANDOFF & INSPECTION MODAL
// ==========================================================================

function initHandoffModal() {
  const closeBtn = document.getElementById('handoff-modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('handoff-modal').classList.remove('active');
    });
  }
}

function openHandoffModal(activityId) {
  const act = AppState.activity.find(a => a.id === activityId);
  const modal = document.getElementById('handoff-modal');
  const content = document.getElementById('handoff-modal-content');
  if (!modal || !content || !act) return;

  content.innerHTML = `
    <div style="background-color: var(--bg-secondary); padding: 12px; border-radius: var(--radius-sm); margin-bottom: 14px;">
      <span style="font-size: 9.5px; font-weight: 800; color: var(--text-tertiary); text-transform: uppercase;">CAMPUS DROP INSPECTION</span>
      <h4 style="font-size: 14px; font-weight: 700; color: var(--text-primary); margin: 2px 0;">${act.itemTitle}</h4>
      <p style="font-size: 12px; color: var(--text-secondary);">With: <strong>${act.counterpartHandle}</strong> at ${act.counterpartLocation}</p>
    </div>

    <div style="margin-bottom: 14px;">
      <label style="font-size: 10.5px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary); display: block; margin-bottom: 6px;">Garment Physical Inspection Checklist:</label>
      <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px;">
        <label style="display: flex; align-items: center; gap: 8px;">
          <input type="checkbox" id="check-measurements" checked style="accent-color: var(--accent-cobalt);">
          <span>Flat-lay dimensions verified on campus</span>
        </label>
        <label style="display: flex; align-items: center; gap: 8px;">
          <input type="checkbox" id="check-condition" checked style="accent-color: var(--accent-cobalt);">
          <span>Condition tier verified & clean</span>
        </label>
        <label style="display: flex; align-items: center; gap: 8px;">
          <input type="checkbox" id="check-flaws" checked style="accent-color: var(--accent-cobalt);">
          <span>Inspected for any undisclosed defects</span>
        </label>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 10px;">
      <button class="btn btn-primary" onclick="confirmHandoffComplete('${act.id}')">
        ✓ Received & Confirmed at Drop
      </button>
      <button class="btn btn-secondary" onclick="reportDiscrepancy('${act.id}')" style="font-size: 11px; color: #9C3D28;">
        Report Discrepancy / Cancel Drop
      </button>
    </div>
  `;

  modal.classList.add('active');
}

window.confirmHandoffComplete = function(activityId) {
  const modal = document.getElementById('handoff-modal');
  if (modal) modal.classList.remove('active');

  AppState.activity = AppState.activity.filter(a => a.id !== activityId);
  AppState.currentUser.salesCount += 1;
  AppState.currentUser.earnings += 1200;

  showToast("Drop completed! Piece circulated & 5-star rating recorded. ✨");
  renderActivityStream();
  renderClosetView();
  updateBadgeCounts();
};

window.reportDiscrepancy = function(activityId) {
  const modal = document.getElementById('handoff-modal');
  if (modal) modal.classList.remove('active');

  showToast("Drop paused. Return garment to peer curator.");
};


// ==========================================================================
// 14. UTILITIES & TOASTS
// ==========================================================================

function showToast(message) {
  const toast = document.getElementById('toast-notify');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function updateBadgeCounts() {
  const badge = document.getElementById('activity-badge-count');
  if (badge) {
    const count = AppState.activity.length;
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// Global window helpers for desktop jump navigation
window.quickFilterParadigm = function(type) {
  AppState.curatedFilter = type;
  document.querySelectorAll('.curated-pill').forEach(pill => {
    if (pill.dataset.curated === type) pill.classList.add('active');
    else pill.classList.remove('active');
  });
  renderDiscoverFeed();
  switchTab('view-discover');
};

window.switchTab = switchTab;

