/**
 * SECOND ROOM — APPLICATION ENGINE
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
  savedIds: new Set([1, 4]),

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

  // Hero Carousel State (60s Cycle, 5 Slots)
  heroCurrentIndex: 0,
  heroTotalSlides: 5,
  heroAutoplayDuration: 60000, // 60 seconds
  heroElapsed: 0,
  heroIsPaused: false,
  heroProgressTimer: null,

  // Active Modals & Transient States
  currentPdpItem: null,
  biddingTargetItem: null,
  swapTargetItem: null,
  selectedTradeClosetItemId: 101,
  cashTopUpAmount: 0,

  // Sell Wizard State
  wizardStep: 1,
  wizardPricingModel: 'fixed',

  // Community Stories & Campus Gossip Shared Feed (Spotlight & Compact Boxes)
  activeSpotlightIndex: 0,
  communityFeed: [
    {
      id: 1,
      type: "story",
      typeLabel: "FEATURED ARCHIVE STORY",
      dept: "TD",
      deptFullName: "Textile Design (TD '26)",
      author: "Ananya Sen",
      title: "How I Built My Wardrobe at NIFT Through Swaps",
      lead: "Coming to NIFT Hyderabad, you quickly realise how much money students spend on styling assignments and runway looks that only get worn once. Instead of letting beautiful garments gather dust in hostel lockers, we started trading in the Canteen courtyard during lunch breaks.",
      fullText: "Coming to NIFT Hyderabad, you quickly realise how much money students spend on styling assignments and runway looks that only get worn once. Instead of letting beautiful garments gather dust in hostel lockers, we started trading in the Canteen courtyard during lunch breaks.\n\nLast semester, I traded my handloom Chanderi drape for a vintage biker jacket and tailored trousers. It’s not just circular fashion—it’s how our community connects across departments without paying courier fees or bubble-wrap waste.\n\nEvery Friday, students bring their pieces to the Canteen amphitheatre steps. You touch the textile, inspect the seams in natural daylight, and talk to the person who styled it. It has completely transformed how we view conscious fashion on campus.",
      timeAgo: "Issue 04",
      likesCount: 54,
      isLiked: false,
      isLongStory: true
    },
    {
      id: 2,
      type: "swap",
      typeLabel: "SWAP WIN",
      dept: "AD",
      deptFullName: "Accessory Design (AD '25)",
      author: "Tanvi Patel",
      title: "Won the distressed denim jacket only for ₹450...",
      lead: "Won the distressed biker denim jacket on a ₹450 bid and replaced all the brass rivets with custom cast buckle hardware in the AD metal workshop. Total high-fashion archive runway piece now.",
      fullText: "Won the distressed biker denim jacket on a ₹450 bid and replaced all the brass rivets with custom cast buckle hardware in the AD metal workshop. Total high-fashion archive runway piece now.\n\nNext drop I'm bringing handmade leather cuffs and upcycled belt buckles to trade with anyone in FC or FD!",
      timeAgo: "2h ago",
      likesCount: 42,
      isLiked: false,
      isLongStory: false
    },
    {
      id: 3,
      type: "styling",
      typeLabel: "STYLING GOSSIP",
      dept: "FC",
      deptFullName: "Fashion Communication (FC '25)",
      author: "Rhea Kapoor",
      title: "Milan showroom or NIFT hostel closet?",
      lead: "The vintage suede trench from the Friday drop ended up being the star of our Term 4 editorial lookbook. The jury literally asked which Milan showroom we sourced it from lol.",
      fullText: "The vintage suede trench from the Friday drop ended up being the star of our Term 4 editorial lookbook. The jury literally asked which Milan showroom we sourced it from lol. Shoutout to the FD senior who let it go for just ₹1,800 on fixed price instead of hoarding it in hostel storage!",
      timeAgo: "4h ago",
      likesCount: 38,
      isLiked: false,
      isLongStory: false
    },
    {
      id: 4,
      type: "tea",
      typeLabel: "CAMPUS TEA",
      dept: "TD",
      deptFullName: "Textile Design (TD '27)",
      author: "Meera Sen",
      title: "Angel alert in the draping lab!",
      lead: "Whoever dropped that indigo tie-dye corset under fixed price—you are an absolute angel. Saved me 4 entire days of vat-dyeing in the lab for the draping submission!",
      fullText: "Whoever dropped that indigo tie-dye corset under fixed price—you are an absolute angel. Saved me 4 entire days of vat-dyeing in the lab for the draping submission! The natural indigo patina was literally museum-grade.",
      timeAgo: "Yesterday",
      likesCount: 31,
      isLiked: false,
      isLongStory: false
    },
    {
      id: 5,
      type: "random",
      typeLabel: "RANDOM GOSSIP",
      dept: "FD",
      deptFullName: "Fashion Design (FD '26)",
      author: "Kabir Mehta",
      title: "The Canteen lunch drop is the real fashion week",
      lead: "Forget Lakme Fashion Week, the real silhouettes are sitting on the Canteen amphitheatre steps on Friday at 1:15 PM. Everyone's fit checks are immaculate.",
      fullText: "Forget Lakme Fashion Week, the real silhouettes are sitting on the Canteen amphitheatre steps on Friday at 1:15 PM. Everyone's fit checks are immaculate. Swapped my raw denim jacket for a hand-distressed knit in literally 3 minutes during lunch break. Zero shipping, no waiting for couriers.",
      timeAgo: "Yesterday",
      likesCount: 29,
      isLiked: false,
      isLongStory: false
    },
    {
      id: 6,
      type: "gossip",
      typeLabel: "CAMPUS GOSSIP",
      dept: "KD",
      deptFullName: "Knitwear Design (KD '25)",
      author: "Pooja Roy",
      title: "Someone wore the sample runway knit to cafeteria",
      lead: "Spotted someone wearing the unreleased Term 5 crochet shrug to the Nescafe counter today. Whoever traded that, you’re an icon.",
      fullText: "Spotted someone wearing the unreleased Term 5 crochet shrug to the Nescafe counter today. Whoever traded that, you’re an icon. Half the KD department was taking notes on the stitch tension.",
      timeAgo: "2d ago",
      likesCount: 26,
      isLiked: false,
      isLongStory: false
    }
  ],

  // Master Campus Catalog (The Curated 15-Product Archive Showcase)
  listings: [
    // ------------------------------------------------------------------------
    // THE 8 FEATURED HOMEPAGE PIECES (BALANCED CURATED ORDER)
    // ------------------------------------------------------------------------
    // 01. BAG — Plaid Gathered Shoulder Bag
    {
      id: 1,
      title: "Navy Plaid Gathered Shoulder Bag with Wooden Button",
      brand: "Subversive Studio Archive",
      category: "Bags",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 1200,
      size: "One size",
      heroImage: "images/products/product-1.jpg",
      isFeatured: true,
      openForSwap: true,
      tradeWishlist: "Open to trade for silver concho belt or leather Mary Janes",
      flaws: "Hand-pleated tartan with natural carved wooden button; flawless interior lining.",
      measurements: { width: "14.5 in", height: "11.0 in", strapDrop: "10.0 in" },
      seller: { name: "Ria Sharma", handle: "@ria_fc", dept: "Fashion Comm (FC)", rating: 4.9, circulations: 28, location: "Canteen Steps", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre", "Textile Lawn"]
    },

    // 02. CLOTHING — Brown Plaid Wrap Blouse
    {
      id: 2,
      title: "Brown Plaid Wrap Blouse",
      brand: "FD Atelier Studio Drape Lab",
      category: "Tops",
      dept: "FD",
      deptFullName: "Fashion Design (FD)",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed",
      price: 1400,
      size: "Fits S - M",
      heroImage: "images/products/product-2.jpg",
      isFeatured: true,
      openForSwap: false,
      flaws: "Asymmetric neckline with side tie detail; tailored during Term 3 draping project, pristine seams.",
      measurements: { chest: "36.0 in", waist: "29.0 in", length: "21.5 in" },
      seller: { name: "Arjun Verma", handle: "@arjun_fd", dept: "Fashion Design (FD)", rating: 5.0, circulations: 12, location: "Resource Centre Lobby", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre", "FD Patternmaking Lab"]
    },

    // 03. BAG — Burgundy Leather Shoulder Bag
    {
      id: 3,
      title: "Burgundy Leather Shoulder Bag",
      brand: "Vintage Milan Archive",
      category: "Bags",
      dept: "AD",
      deptFullName: "Accessory Design (AD)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 1850,
      size: "One size",
      heroImage: "images/products/product-3.jpg",
      fitMode: "contain",
      isFeatured: true,
      openForSwap: true,
      tradeWishlist: "Looking for moto boots or Mary Jane flats",
      flaws: "Glossy deep cherry crimson leather with polished metallic ring; supple structure.",
      measurements: { width: "13.0 in", height: "9.5 in", strapDrop: "11.5 in" },
      seller: { name: "Meera Nair", handle: "@meera_ad", dept: "Accessory Design (AD)", rating: 4.95, circulations: 18, location: "Resource Centre Lobby", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre", "Library Lobby"]
    },

    // 04. CLOTHING — Embroidered Denim Jeans
    {
      id: 7,
      title: "Embroidered Denim Jeans",
      brand: "Jaded London Archive",
      category: "Bottoms",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed",
      price: 3200,
      size: "Waist 30",
      heroImage: "images/products/product-7.jpg",
      isFeatured: true,
      openForSwap: true,
      tradeWishlist: "Only trading for heavy leather jacket or vintage footwear",
      flaws: "Heavy acid wash with dense tribal flame chainstitch embroidery along the leg; pristine denim weave.",
      measurements: { waist: "31.0 in", hip: "42.0 in", inseam: "32.5 in" },
      seller: { name: "Karan Joshi", handle: "@karan_fc", dept: "Fashion Comm (FC)", rating: 4.88, circulations: 31, location: "Canteen Steps", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre"]
    },

    // 05. BAG — Distressed Studded Shoulder Bag
    {
      id: 4,
      title: "Distressed Studded Shoulder Bag",
      brand: "Diesel Archive Study",
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
      size: "One size",
      heroImage: "images/products/product-4.jpg",
      isFeatured: true,
      openForSwap: true,
      tradeWishlist: "Swap for wide leg skate denims or silver cuffs",
      flaws: "Authentic grunge edge wear along bottom piping; all grommets firmly secured.",
      measurements: { width: "11.5 in", height: "7.0 in", depth: "3.5 in" },
      seller: { name: "Ananya Sen", handle: "@ananya_td", dept: "Textile Design (TD)", rating: 4.95, circulations: 19, location: "Textile Lawn", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Textile Lawn", "Canteen Amphitheatre"]
    },

    // 06. CLOTHING — Multicolour Striped Puff-Sleeve Top
    {
      id: 10,
      title: "Multicolour Striped Puff-Sleeve Top",
      brand: "Textile Dept Handloom Project",
      category: "Tops",
      dept: "TD",
      deptFullName: "Textile Design (TD)",
      condition: "New / Unworn",
      conditionTier: 1,
      pricingModel: "fixed",
      price: 2600,
      size: "Size M",
      heroImage: "images/products/product-10.jpg",
      isFeatured: true,
      openForSwap: true,
      tradeWishlist: "Swap for archival footwear or designer bags",
      flaws: "Zero flaws. Pure silk-cotton chanderi multi-stripe with voluminous balloon lantern sleeves.",
      measurements: { chest: "37.5 in", waist: "31.0 in", sleeve: "22.0 in", length: "22.5 in" },
      seller: { name: "Devika Rao", handle: "@devika_td", dept: "Textile Design (TD)", rating: 4.8, circulations: 42, location: "Textile Lawn", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Textile Lawn", "Canteen Amphitheatre"]
    },

    // 07. ACCESSORY — Sculptural Resin Ring Set
    {
      id: 6,
      title: "Sculptural Resin Ring Set",
      brand: "AD Studio Handcast",
      category: "Accessories",
      dept: "AD",
      deptFullName: "Accessory Design (AD)",
      condition: "New / Unworn",
      conditionTier: 1,
      pricingModel: "fixed",
      price: 950,
      size: "Inner Dia 2.5 in",
      heroImage: "images/products/product-6.jpg",
      fitMode: "contain",
      isFeatured: true,
      openForSwap: false,
      flaws: "Zero defects. Handcrafted amber swirl resin paired with hammered brass bangle stack.",
      measurements: { innerDiameter: "65 mm" },
      seller: { name: "Meera Nair", handle: "@meera_ad", dept: "Accessory Design (AD)", rating: 5.0, circulations: 9, location: "Library Lobby", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Library Lobby", "Canteen Amphitheatre"]
    },

    // 08. CLOTHING — Washed Wide-Leg Jeans
    {
      id: 9,
      title: "Washed Wide-Leg Jeans",
      brand: "Textile Dept Study",
      category: "Bottoms",
      dept: "TD",
      deptFullName: "Textile Design (TD)",
      condition: "Well Used",
      conditionTier: 4,
      pricingModel: "bidding",
      startingBid: 700,
      currentHighestBid: 1450,
      bidsCount: 6,
      price: 1450,
      size: "Waist 28 - 30",
      heroImage: "images/products/product-9.jpg",
      isFeatured: true,
      openForSwap: true,
      tradeWishlist: "Looking to swap for chore jacket or embroidered shirts",
      flaws: "Intentional raw distress drag at rear heel hem; vintage dirty-wash fade.",
      measurements: { waist: "29.5 in", hip: "41.0 in", inseam: "33.0 in", legOpening: "12.0 in" },
      seller: { name: "Devika Rao", handle: "@devika_td", dept: "Textile Design (TD)", rating: 4.8, circulations: 42, location: "Textile Lawn", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Textile Lawn", "Canteen Amphitheatre"]
    },

    // ------------------------------------------------------------------------
    // ADDITIONAL CURATED ARCHIVE PIECES (FULL ARCHIVE COLLECTION VIEW)
    // ------------------------------------------------------------------------
    // 09. ACCESSORY — Embellished Leather Belt / Statement Accessory
    {
      id: 5,
      title: "Embellished Leather Belt / Statement Accessory",
      brand: "Heritage Rajasthan Guild",
      category: "Accessories",
      dept: "AD",
      deptFullName: "Accessory Design (AD)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 1100,
      size: "Waist 26 - 32 in",
      heroImage: "images/products/product-5.jpg",
      isFeatured: false,
      openForSwap: true,
      flaws: "Solid oxidised silver-finish conchos; full grain brown leather with metallic disc studs.",
      measurements: { length: "38.0 in", width: "1.5 in" },
      seller: { name: "Meera Nair", handle: "@meera_ad", dept: "Accessory Design (AD)", rating: 5.0, circulations: 9, location: "Library Lobby", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Library Lobby", "Canteen Amphitheatre"]
    },

    // 10. BAG — Black Buckle Shoulder Bag
    {
      id: 8,
      title: "Black Buckle Shoulder Bag",
      brand: "Mango Premium Archive",
      category: "Bags",
      dept: "LD",
      deptFullName: "Leather Design (LD)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 1650,
      size: "One size",
      heroImage: "images/products/product-8.jpg",
      isFeatured: false,
      openForSwap: true,
      tradeWishlist: "Looking for pleated skirts or oversized poplin shirts",
      flaws: "Supple lambskin feel, silver hardware buckle, slight surface rub on base corner.",
      measurements: { width: "12.0 in", height: "6.5 in" },
      seller: { name: "Pooja Hegde", handle: "@pooja_fc", dept: "Fashion Comm (FC)", rating: 4.85, circulations: 24, location: "Library Lobby", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Library Lobby", "Canteen Amphitheatre"]
    },

    // 11. CLOTHING — Burgundy Embroidered Shirt
    {
      id: 11,
      title: "Burgundy Embroidered Shirt",
      brand: "Bode Archive Study",
      category: "Tops",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 1500,
      size: "Size L (Boxy Fit)",
      heroImage: "images/products/product-11.jpg",
      isFeatured: false,
      openForSwap: true,
      tradeWishlist: "Looking to swap for chore jackets or denim trousers",
      flaws: "Carefully hand-embroidered cursive script across chest; breathable cotton-linen weave.",
      measurements: { chest: "23.0 in", shoulder: "19.5 in", length: "27.0 in" },
      seller: { name: "Karan Joshi", handle: "@karan_fc", dept: "Fashion Comm (FC)", rating: 4.88, circulations: 31, location: "Canteen Steps", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre"]
    },

    // 12. CLOTHING — Illustrated Panel Striped Shirt
    {
      id: 12,
      title: "Illustrated Panel Striped Shirt",
      brand: "FC Screenprint Atelier",
      category: "Tops",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed",
      price: 1950,
      size: "Fits M - XL",
      heroImage: "images/products/product-12.jpg",
      isFeatured: false,
      openForSwap: false,
      flaws: "Classical Greek sculpture photo-emulsion printed onto classic Bengal stripe poplin in vibrant yellow.",
      measurements: { chest: "24.0 in", shoulder: "20.5 in", length: "29.0 in" },
      seller: { name: "Ria Sharma", handle: "@ria_fc", dept: "Fashion Comm (FC)", rating: 4.9, circulations: 28, location: "Canteen Courtyard", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre", "Textile Lawn"]
    },

    // 13. CLOTHING — Brown Striped Fitted Shirt
    {
      id: 13,
      title: "Brown Striped Fitted Shirt",
      brand: "Zara Woman Vintage",
      category: "Tops",
      dept: "FC",
      deptFullName: "Fashion Communication (FC)",
      condition: "Gently Used",
      conditionTier: 3,
      pricingModel: "fixed",
      price: 850,
      size: "Size S (Fitted)",
      heroImage: "images/products/product-13.jpg",
      isFeatured: false,
      openForSwap: true,
      tradeWishlist: "Swap for silver belt or mini shoulder bag",
      flaws: "Sharply pressed darting; faint button patina.",
      measurements: { chest: "17.5 in", waist: "14.0 in", length: "21.0 in" },
      seller: { name: "Pooja Hegde", handle: "@pooja_fc", dept: "Fashion Comm (FC)", rating: 4.85, circulations: 24, location: "Library Lobby", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Library Lobby", "Canteen Amphitheatre"]
    },

    // 14. CLOTHING — Burgundy Graphic T-shirt
    {
      id: 14,
      title: "Burgundy Graphic T-shirt",
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
      size: "Tag L (Boxy Fit)",
      heroImage: "images/products/product-14.jpg",
      isFeatured: false,
      openForSwap: true,
      tradeWishlist: "Open to swap for any vintage graphic tee or trucker cap",
      flaws: "Disclosed: 1997 Archive Fragment Low Stance graphic print; vintage sun-fade across shoulders.",
      measurements: { chest: "22.5 in", shoulder: "21.0 in", length: "27.5 in" },
      seller: { name: "Zayn Khan", handle: "@zayn_kd", dept: "Knitwear Design (KD)", rating: 4.92, circulations: 15, location: "Canteen Courtyard", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre"]
    },

    // 15. CLOTHING — Cream Pinstripe Fitted Shirt
    {
      id: 15,
      title: "Cream Pinstripe Fitted Shirt",
      brand: "FD Patternmaking Lab",
      category: "Tops",
      dept: "FD",
      deptFullName: "Fashion Design (FD)",
      condition: "Like New",
      conditionTier: 2,
      pricingModel: "fixed",
      price: 1800,
      size: "Size S / M",
      heroImage: "images/products/product-15.jpg",
      isFeatured: false,
      openForSwap: false,
      flaws: "Sculptural hourglass pattern with exaggerated elongated turnback cuffs; clean French seams.",
      measurements: { chest: "35.0 in", waist: "27.5 in", flareHem: "42.0 in" },
      seller: { name: "Arjun Verma", handle: "@arjun_fd", dept: "Fashion Design (FD)", rating: 5.0, circulations: 12, location: "Resource Centre", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&q=80" },
      dropZones: ["Canteen Amphitheatre"]
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
  initHeroCarousel();
  renderFeaturedThisWeek();
  renderMarketplaceGrid();
  renderActivityStream();
  renderClosetGrid();
  initCommunitySpotlight();
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
// HERO DISPLAY CONTROLLER (SINGLE STATIC ARCHIVE PORTRAIT)
// ==========================================================================

function initHeroCarousel() {
  // Single static hero photo display — no carousel timer or slide switching needed
  if (AppState.heroProgressTimer) {
    clearInterval(AppState.heroProgressTimer);
    AppState.heroProgressTimer = null;
  }
}

function startHeroAutoplay() {
  if (AppState.heroProgressTimer) {
    clearInterval(AppState.heroProgressTimer);
    AppState.heroProgressTimer = null;
  }
}

window.goToHeroSlide = function(index) {};
window.nextHeroSlide = function() {};
window.prevHeroSlide = function() {};

function updateHeroSlideUI() {}


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

  // The 8 curated featured pieces
  const featured = AppState.listings.filter(i => i.isFeatured);

  row.innerHTML = featured.map(item => createProductCardHTML(item)).join('');
  attachProductCardEvents(row);

  if (mobCarousel) {
    mobCarousel.innerHTML = featured.map(item => createProductCardHTML(item)).join('');
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
  const fitClass = item.fitMode === 'contain' ? 'fit-contain' : '';
  
  // 1. Transaction Type · Department Kicker (e.g. FIXED PRICE · FC DEPT or LIVE BID · TD DEPT)
  let txType = 'FIXED PRICE';
  if (isBidding) {
    txType = 'LIVE BID';
  } else if (item.openForSwap && (!item.price || item.pricingModel === 'swap')) {
    txType = 'SWAP ONLY';
  }
  const deptCode = item.dept || 'FC';
  const kicker = `${txType} · ${deptCode} DEPT`;

  // 2. Clearly visible price (₹ 1,200 or Current Bid: ₹ 950)
  let priceLine = `₹ ${item.price ? item.price.toLocaleString() : 'Open for Trade'}`;
  if (isBidding) {
    const curBid = item.currentHighestBid || item.startingBid || item.price || 500;
    priceLine = `Current Bid: ₹ ${curBid.toLocaleString()}`;
  }

  // 3. Condition and size (e.g. Good condition · One size)
  const condition = item.condition || 'Good condition';
  const size = item.size ? item.size.replace(/^Size\s+/i, '') : 'One size';
  const detailLine = `${condition} · ${size}`;

  return `
    <article class="product-card" data-id="${item.id}" role="button" tabindex="0" aria-label="${item.title}, ${priceLine}">
      <div class="product-photo-wrap">
        <img src="${item.heroImage}" alt="${item.title}" class="product-photo ${fitClass}" loading="lazy">
        <button type="button" class="product-heart-btn ${isSaved ? 'saved' : ''}" 
          onclick="event.stopPropagation(); toggleWishlistItem(${item.id})" 
          title="${isSaved ? 'Saved to Wishlist' : 'Save piece'}" 
          aria-label="${isSaved ? 'Saved piece' : 'Save piece'}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="${isSaved ? '#792C35' : 'none'}" stroke="${isSaved ? '#792C35' : '#1C1B19'}" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
      </div>
      <div class="product-meta-block">
        <span class="product-meta-kicker">${kicker}</span>
        <h4 class="product-title-text">${item.title}</h4>
        <div class="product-price-row">${priceLine}</div>
        <div class="product-spec-row">${detailLine}</div>
      </div>
    </article>
  `;
}

function attachProductCardEvents(container) {
  if (!container) return;
  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.product-heart-btn') || e.target.closest('.card-heart-btn')) return;
      const id = parseInt(card.dataset.id, 10);
      const piece = AppState.listings.find(i => i.id === id) || (AppState.userCloset && AppState.userCloset.find(i => i.id === id));
      if (piece) openPdpModal(piece);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.closest('.product-heart-btn') || e.target.closest('.card-heart-btn')) return;
        e.preventDefault();
        const id = parseInt(card.dataset.id, 10);
        const piece = AppState.listings.find(i => i.id === id) || (AppState.userCloset && AppState.userCloset.find(i => i.id === id));
        if (piece) openPdpModal(piece);
      }
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
  
  // Highlight dept pill across desktop & mobile
  document.querySelectorAll('.dept-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.dept === deptCode);
  });
  document.querySelectorAll('.mob-dept-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.dept === deptCode);
  });

  if (AppState.experienceMode === 'mobile') {
    switchMobileTab('m-discover');
  } else {
    showDesktopView('discover');
  }

  renderMarketplaceGrid();
  
  const deptNames = {
    FC: "Fashion Communication",
    FD: "Fashion Design",
    TD: "Textile Design",
    KD: "Knitwear Design",
    AD: "Accessory Design",
    LD: "Leather Design"
  };
  showToast(`Filtered by ${deptNames[deptCode] || deptCode} (${deptCode}) 🏷️`);
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

window.handleCampusDropRsvp = function(btn) {
  const isConfirmed = btn.classList.contains('confirmed');
  
  if (isConfirmed) {
    document.querySelectorAll('.btn-strip-rsvp, #btn-campus-drop-rsvp, .mob-strip-btn, #btn-hero-rsvp, .mob-rsvp').forEach(b => {
      b.classList.remove('confirmed');
      b.innerHTML = '<span>RSVP TO DROP &rarr;</span>';
    });
    showToast("RSVP cancelled for Studio Block Daylight Drop.");
  } else {
    document.querySelectorAll('.btn-strip-rsvp, #btn-campus-drop-rsvp, .mob-strip-btn, #btn-hero-rsvp, .mob-rsvp').forEach(b => {
      b.classList.add('confirmed');
      b.innerHTML = '<span>✓ RSVP CONFIRMED</span>';
    });
    showToast("✓ RSVP Confirmed for Studio Block Daylight Drop (28 Nov · 4:00 PM)!");
  }
};

window.handleEventRsvp = function(btn) {
  window.handleCampusDropRsvp(btn);
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

// ==========================================================================
// 18. COMMUNITY SPOTLIGHT & CAMPUS GOSSIP SHARED FEED CONTROLLER
// ==========================================================================

function initCommunitySpotlight() {
  renderSpotlightStory();
  renderGossipBoxes();
}

function renderSpotlightStory() {
  if (!AppState.communityFeed || AppState.communityFeed.length === 0) return;
  
  if (AppState.activeSpotlightIndex >= AppState.communityFeed.length) {
    AppState.activeSpotlightIndex = 0;
  }
  if (AppState.activeSpotlightIndex < 0) {
    AppState.activeSpotlightIndex = AppState.communityFeed.length - 1;
  }

  const item = AppState.communityFeed[AppState.activeSpotlightIndex];
  const total = AppState.communityFeed.length;
  const currentNum = AppState.activeSpotlightIndex + 1;
  const counterText = `${currentNum} / ${total}`;

  // Update counters
  const deskCounter = document.getElementById('spotlight-counter');
  const mobCounter = document.getElementById('mob-spotlight-counter');
  if (deskCounter) deskCounter.textContent = counterText;
  if (mobCounter) mobCounter.textContent = counterText;

  // Desktop spotlight text area
  const deskArea = document.getElementById('spotlight-content-area');
  if (deskArea) {
    deskArea.style.opacity = '0.3';
    setTimeout(() => {
      deskArea.innerHTML = `
        <div class="spotlight-badge-row">
          <span class="spotlight-kicker">${escapeHtml(item.typeLabel)}</span>
          <span class="spotlight-dept-pill">${escapeHtml(item.dept)} DEPT</span>
        </div>
        <h3 class="spotlight-title">${escapeHtml(item.title)}</h3>
        <p class="spotlight-quote">"${escapeHtml(item.lead)}"</p>
        <div class="spotlight-byline-row">
          <span>By ${escapeHtml(item.author)} • ${escapeHtml(item.deptFullName)}</span>
          <span class="drop-schedule-sep">•</span>
          <span>${escapeHtml(item.timeAgo)}</span>
        </div>
        <div class="spotlight-actions-row">
          <button type="button" class="btn-spotlight-story" onclick="openStoryModal(${item.id})">
            <span>Read Full Story &rarr;</span>
          </button>
          <button type="button" class="btn-spotlight-ghost" onclick="openAddStoryModal()">
            <span>+ Add Your POV / Gossip</span>
          </button>
        </div>
      `;
      deskArea.style.opacity = '1';
    }, 120);
  }

  // Mobile spotlight text area
  const mobArea = document.getElementById('mob-spotlight-content');
  if (mobArea) {
    mobArea.innerHTML = `
      <span class="mob-story-kicker">${escapeHtml(item.typeLabel)} · ${escapeHtml(item.dept)} DEPT</span>
      <h4 class="mob-story-title">${escapeHtml(item.title)}</h4>
      <p class="mob-story-lead">"${escapeHtml(item.lead)}"</p>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
        <span class="mob-story-author">${escapeHtml(item.author)} (${escapeHtml(item.dept)})</span>
        <button type="button" style="background:none; border:none; color:var(--color-muted-burgundy); font-weight:700; font-size:12px; cursor:pointer;" onclick="openStoryModal(${item.id})">Read Story &rarr;</button>
      </div>
    `;
  }

  // Highlight the active card in the compact grid below
  document.querySelectorAll('.compact-gossip-card').forEach((card, idx) => {
    if (idx === AppState.activeSpotlightIndex) {
      card.classList.add('active-spotlight');
    } else {
      card.classList.remove('active-spotlight');
    }
  });
}

function renderGossipBoxes() {
  const deskContainer = document.getElementById('desktop-gossip-boxes');
  const mobContainer = document.getElementById('mob-pov-feed-container');

  if (deskContainer) {
    deskContainer.innerHTML = AppState.communityFeed.map((item, index) => {
      const isActive = index === AppState.activeSpotlightIndex;
      return `
        <article class="compact-gossip-card ${isActive ? 'active-spotlight' : ''}" onclick="selectSpotlightStory(${index})">
          <div class="compact-gossip-top">
            <span class="pov-type-badge ${item.type}">${escapeHtml(item.typeLabel)}</span>
            <span class="pov-dept-tag">${escapeHtml(item.dept)} '26</span>
          </div>
          <h4 class="compact-gossip-title">${escapeHtml(item.title)}</h4>
          <p class="compact-gossip-snippet">"${escapeHtml(item.lead)}"</p>
          <div class="compact-gossip-bottom">
            <span>${escapeHtml(item.author)} • ${escapeHtml(item.timeAgo)}</span>
            <button type="button" class="pov-like-btn ${item.isLiked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleLikeStory(${item.id})" title="Like note">
              <span>${item.isLiked ? '♥' : '♡'}</span>
              <span>${item.likesCount}</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  if (mobContainer) {
    mobContainer.innerHTML = AppState.communityFeed.map((item, index) => {
      const isActive = index === AppState.activeSpotlightIndex;
      return `
        <div class="mob-pov-card ${isActive ? 'active-spotlight' : ''}" onclick="selectSpotlightStory(${index})">
          <div class="pov-card-top" style="margin-bottom:6px;">
            <span class="pov-type-badge ${item.type}">${escapeHtml(item.typeLabel)}</span>
            <span class="pov-dept-tag">${escapeHtml(item.dept)}</span>
          </div>
          <p class="compact-gossip-title" style="font-size:13.5px; margin-bottom:4px;">${escapeHtml(item.title)}</p>
          <p class="pov-note-quote" style="font-size:12px; margin-bottom:8px;">"${escapeHtml(item.lead)}"</p>
          <div class="pov-card-bottom" style="padding-top:6px;">
            <span style="font-size:10.5px;">${escapeHtml(item.author)} • ${escapeHtml(item.timeAgo)}</span>
            <button type="button" class="pov-like-btn ${item.isLiked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleLikeStory(${item.id})">
              <span>${item.isLiked ? '♥' : '♡'}</span>
              <span>${item.likesCount}</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

window.selectSpotlightStory = function(index) {
  AppState.activeSpotlightIndex = index;
  renderSpotlightStory();
  
  // Smooth scroll up to spotlight if clicked on a lower gossip box
  const spotlightSection = document.getElementById('community-stories-section');
  if (spotlightSection) {
    const rect = spotlightSection.getBoundingClientRect();
    if (rect.top < -50 || rect.top > window.innerHeight - 150) {
      spotlightSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
};

window.nextSpotlightStory = function() {
  AppState.activeSpotlightIndex = (AppState.activeSpotlightIndex + 1) % AppState.communityFeed.length;
  renderSpotlightStory();
};

window.prevSpotlightStory = function() {
  AppState.activeSpotlightIndex = (AppState.activeSpotlightIndex - 1 + AppState.communityFeed.length) % AppState.communityFeed.length;
  renderSpotlightStory();
};

window.openStoryModal = function(storyId) {
  let story = null;
  if (storyId) {
    story = AppState.communityFeed.find(s => s.id === storyId);
  }
  if (!story) {
    story = AppState.communityFeed[AppState.activeSpotlightIndex] || AppState.communityFeed[0];
  }
  if (!story) return;

  const kickerEl = document.getElementById('modal-story-kicker');
  const titleEl = document.getElementById('modal-story-title');
  const innerTitleEl = document.getElementById('modal-story-inner-title');
  const bylineEl = document.getElementById('modal-story-byline');
  const slotEl = document.getElementById('modal-story-content-slot');
  const tagsEl = document.getElementById('modal-story-tags');

  if (kickerEl) kickerEl.textContent = `${story.typeLabel} · NIFT HYDERABAD`;
  if (titleEl) titleEl.textContent = story.typeLabel;
  if (innerTitleEl) innerTitleEl.textContent = story.title;
  if (bylineEl) {
    bylineEl.innerHTML = `
      <span>By ${escapeHtml(story.author)} • ${escapeHtml(story.deptFullName)}</span>
      <span class="drop-schedule-sep">•</span>
      <span>${escapeHtml(story.timeAgo)}</span>
    `;
  }
  if (slotEl) {
    const paragraphs = (story.fullText || story.lead).split('\n\n').filter(Boolean);
    slotEl.innerHTML = paragraphs.map(p => `
      <p class="story-modal-paragraph">${escapeHtml(p)}</p>
    `).join('');
  }
  if (tagsEl) {
    tagsEl.innerHTML = `
      <span class="pov-type-badge ${story.type}">#${story.type.toUpperCase()}</span>
      <span class="pov-type-badge styling">#${story.dept}Dept</span>
      <span class="pov-type-badge drop">#NIFTHyderabad</span>
    `;
  }

  const modal = document.getElementById('story-modal');
  if (modal) {
    modal.classList.add('active');
    const scrollBody = document.getElementById('modal-story-scroll-body');
    if (scrollBody) scrollBody.scrollTop = 0;
  }
};

window.closeStoryModal = function() {
  document.getElementById('story-modal')?.classList.remove('active');
};

window.openAddStoryModal = function() {
  document.getElementById('add-story-modal')?.classList.add('active');
};

window.closeAddStoryModal = function() {
  document.getElementById('add-story-modal')?.classList.remove('active');
};

window.handlePostCommunityStory = function(e) {
  e.preventDefault();

  const nameVal = document.getElementById('pov-input-name')?.value.trim() || 'Anonymous';
  const deptVal = document.getElementById('pov-input-dept')?.value || 'FC';
  const typeVal = document.getElementById('pov-input-type')?.value || 'tea';
  const titleVal = document.getElementById('pov-input-title')?.value.trim() || 'Campus Gossip / Student Note';
  const contentVal = document.getElementById('pov-input-content')?.value.trim();

  if (!contentVal) {
    showToast("Please enter your gossip or story note.");
    return;
  }

  const typeMap = {
    styling: "STYLING GOSSIP",
    drop: "DROP REVIEW",
    swap: "SWAP WIN",
    tea: "CAMPUS TEA",
    random: "CAMPUS GOSSIP"
  };

  const newStory = {
    id: Date.now(),
    type: typeVal,
    typeLabel: typeMap[typeVal] || "STUDENT POV",
    dept: deptVal,
    deptFullName: `${deptVal} Dept ('26)`,
    author: nameVal,
    title: titleVal,
    lead: contentVal.length > 180 ? contentVal.substring(0, 180) + '...' : contentVal,
    fullText: contentVal,
    timeAgo: "Just now",
    likesCount: 1,
    isLiked: true,
    isLongStory: contentVal.length > 250
  };

  AppState.communityFeed.unshift(newStory);
  AppState.activeSpotlightIndex = 0;

  renderSpotlightStory();
  renderGossipBoxes();

  closeAddStoryModal();
  const inputEl = document.getElementById('pov-input-content');
  if (inputEl) inputEl.value = '';
  const titleEl = document.getElementById('pov-input-title');
  if (titleEl) titleEl.value = '';

  showToast("✓ Your gossip / story is now spotlighted beside the group photo!");
};

window.toggleLikeStory = function(storyId) {
  const story = AppState.communityFeed.find(s => s.id === storyId);
  if (!story) return;
  if (story.isLiked) {
    story.isLiked = false;
    story.likesCount = Math.max(0, story.likesCount - 1);
  } else {
    story.isLiked = true;
    story.likesCount += 1;
    showToast("♥ Liked campus note");
  }
  renderGossipBoxes();
  renderSpotlightStory();
};

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#039;';
      default: return m;
    }
  });
}
