// ==============cards-main-stage===============================
const cardsMainStage = [
  {
    id: 0,
    img: {
      png: new URL(
        "@assets/image/pages/main/sections/main-stage/sneakers/nike-air-max-270.png",
        import.meta.url,
      ),
      webp: new URL(
        "@assets/image/pages/main/sections/main-stage/sneakers/nike-air-max-270.webp",
        import.meta.url,
      ),
    },
    name: "new",
    description: "AIR JORDAN 1 MID LIGHT SMOKE GREY",
  },
  {
    id: 1,
    img: {
      png: new URL(
        "@assets/image/pages/main/sections/main-stage/sneakers/red-shoe.webp",
        import.meta.url,
      ),
      webp: new URL(
        "@assets/image/pages/main/sections/main-stage/sneakers/red-shoe.webp",
        import.meta.url,
      ),
    },
    name: "new",
    description: "Air Max 200 SE",
  },
];

// cards-Top-Sneakers-------------

const cardsTopSneakers = [
  {
    id: 0,
    img: {
      png: new URL(
        "@assets/image/pages/main/sections/summertime-mood/top-sneakers/air-max-97.png",
        import.meta.url,
      ),
      webp: new URL(
        "@assets/image/pages/main/sections/summertime-mood/top-sneakers/air-max-97.webp",
        import.meta.url,
      ),
    },
    name: "Air Max 97",
    price: 20.99,
  },
  {
    id: 1,
    img: {
      png: new URL(
        "@assets/image/pages/main/sections/summertime-mood/top-sneakers/react-presto.png",
        import.meta.url,
      ),
      webp: new URL(
        "@assets/image/pages/main/sections/summertime-mood/top-sneakers/react-presto.webp",
        import.meta.url,
      ),
    },
    name: "React Presto",
    price: 20.99,
  },
  {
    id: 2,
    img: {
      png: new URL(
        "@assets/image/pages/main/sections/summertime-mood/top-sneakers/KD13-EP.png",
        import.meta.url,
      ),
      webp: new URL(
        "@assets/image/pages/main/sections/summertime-mood/top-sneakers/KD13-EP.webp",
        import.meta.url,
      ),
    },
    name: "KD13 EP",
    price: 20.99,
  },
];

// cards-discount-sneakers-------------

const cardsDiscountSneakers = [
  {
    id: 0,
    img: {
      png: new URL(
        "@assets/image/pages/main/sections/looks-runs-feels/discount-sneakers/nike-gray-sneakers.png",
        import.meta.url,
      ),
      webp: new URL(
        "@assets/image/pages/main/sections/looks-runs-feels/discount-sneakers/nike-gray-sneakers.webp",
        import.meta.url,
      ),
    },
    name: "Discount",
    description: "on your first purchase",
    discount: 20,
  },
  {
    id: 1,
    img: {
      png: new URL(
        "@assets/image/pages/main/sections/looks-runs-feels/discount-sneakers/nike-green-sneakers.png",
        import.meta.url,
      ),
      webp: new URL(
        "@assets/image/pages/main/sections/looks-runs-feels/discount-sneakers/nike-green-sneakers.webp",
        import.meta.url,
      ),
    },
    name: "Discount",
    description: "on your first purchase",
    discount: 20,
  },
];

export { cardsMainStage, cardsTopSneakers, cardsDiscountSneakers };
