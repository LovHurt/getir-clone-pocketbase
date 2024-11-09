// src/data/products.ts

import { ProductProps } from '../../types';

export const products = [
  // Category 1: Discount (1-1, 1-2, 1-3)
  {
    id: "104",
    name: "Summer Discount",
    price: 100,
    sellingPrice: 80,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/tech",
      "https://loremflickr.com/320/240/electronics"
    ],
    subcategoryId: "1-1",
  },
  {
    id: "105",
    name: "Midnight Sale",
    price: 150,
    sellingPrice: 120,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/tech",
      "https://loremflickr.com/320/240/electronics"
    ],
    subcategoryId: "1-2",
  },
  {
    id: "106",
    name: "Limited Stock",
    price: 200,
    sellingPrice: 160,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/gadgets",
      "https://loremflickr.com/320/240/tech"
    ],
    subcategoryId: "1-3",
  },
  {
    id: "107",
    name: "Winter Sale",
    price: 120,
    sellingPrice: 95,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/earbuds",
      "https://loremflickr.com/320/240/electronics"
    ],
    subcategoryId: "1-1",
  },

  // Category 2: Drinks (2-1, 2-2, 2-3)
  {
    id: "108",
    name: "Soda",
    price: 10,
    sellingPrice: 8,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/drink",
      "https://loremflickr.com/320/240/soda"
    ],
    subcategoryId: "2-1",
  },
  {
    id: "109",
    name: "Fruit Juice",
    price: 20,
    sellingPrice: 18,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/juice",
      "https://loremflickr.com/320/240/fruit"
    ],
    subcategoryId: "2-2",
  },
  {
    id: "110",
    name: "Mineral Water",
    price: 15,
    sellingPrice: 12,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/water",
      "https://loremflickr.com/320/240/bottle"
    ],
    subcategoryId: "2-3",
  },
  {
    id: "111",
    name: "Energy Drink",
    price: 25,
    sellingPrice: 20,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/energy",
      "https://loremflickr.com/320/240/drink"
    ],
    subcategoryId: "2-1",
  },

  // Category 3: Fruits (3-1, 3-2, 3-3)
  {
    id: "112",
    name: "Organic Apple",
    price: 50,
    sellingPrice: 45,
    type: "gram",
    images: [
      "https://loremflickr.com/320/240/apple",
      "https://loremflickr.com/320/240/fruit"
    ],
    subcategoryId: "3-1",
  },
  {
    id: "113",
    name: "Natural Honey",
    price: 200,
    sellingPrice: 180,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/honey",
      "https://loremflickr.com/320/240/bees"
    ],
    subcategoryId: "3-2",
  },
  {
    id: "114",
    name: "Tropical Banana",
    price: 60,
    sellingPrice: 50,
    type: "gram",
    images: [
      "https://loremflickr.com/320/240/banana",
      "https://loremflickr.com/320/240/tropical"
    ],
    subcategoryId: "3-3",
  },
  {
    id: "115",
    name: "Strawberries",
    price: 70,
    sellingPrice: 60,
    type: "gram",
    images: [
      "https://loremflickr.com/320/240/strawberry",
      "https://loremflickr.com/320/240/berries"
    ],
    subcategoryId: "3-2",
  },
  
  // Category 4: Bread (4-1, 4-2, 4-3)
  {
    id: "116",
    name: "Whole Wheat Bread",
    price: 30,
    sellingPrice: 25,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/bread",
      "https://loremflickr.com/320/240/grain"
    ],
    subcategoryId: "4-1",
  },
  {
    id: "117",
    name: "Sourdough Bread",
    price: 35,
    sellingPrice: 28,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/bread",
      "https://loremflickr.com/320/240/bakery"
    ],
    subcategoryId: "4-2",
  },
  {
    id: "118",
    name: "Baguette",
    price: 25,
    sellingPrice: 20,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/baguette",
      "https://loremflickr.com/320/240/bakery"
    ],
    subcategoryId: "4-3",
  },
  {
    id: "119",
    name: "Gluten-Free Bread",
    price: 40,
    sellingPrice: 35,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/bread",
      "https://loremflickr.com/320/240/glutenfree"
    ],
    subcategoryId: "4-1",
  },

  // Category 5: Pasta (5-1, 5-2, 5-3)
  {
    id: "120",
    name: "Spaghetti",
    price: 20,
    sellingPrice: 18,
    type: "gram",
    images: [
      "https://loremflickr.com/320/240/spaghetti",
      "https://loremflickr.com/320/240/pasta"
    ],
    subcategoryId: "5-1",
  },
  {
    id: "121",
    name: "Penne",
    price: 18,
    sellingPrice: 16,
    type: "gram",
    images: [
      "https://loremflickr.com/320/240/penne",
      "https://loremflickr.com/320/240/pasta"
    ],
    subcategoryId: "5-2",
  },
  {
    id: "122",
    name: "Macaroni",
    price: 22,
    sellingPrice: 20,
    type: "gram",
    images: [
      "https://loremflickr.com/320/240/macaroni",
      "https://loremflickr.com/320/240/pasta"
    ],
    subcategoryId: "5-3",
  },

  // Category 6: Candies (6-1, 6-2, 6-3)
  {
    id: "123",
    name: "Chocolate",
    price: 10,
    sellingPrice: 8,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/chocolate",
      "https://loremflickr.com/320/240/sweets"
    ],
    subcategoryId: "6-1",
  },
  {
    id: "124",
    name: "Gummy Bears",
    price: 15,
    sellingPrice: 12,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/gummybears",
      "https://loremflickr.com/320/240/sweets"
    ],
    subcategoryId: "6-2",
  },

  // Category 7: Ice Cream (7-1, 7-2, 7-3)
  {
    id: "125",
    name: "Vanilla Ice Cream",
    price: 25,
    sellingPrice: 20,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/icecream",
      "https://loremflickr.com/320/240/dessert"
    ],
    subcategoryId: "7-1",
  },

  // Category 8: Milk (8-1, 8-2, 8-3)
  {
    id: "126",
    name: "Whole Milk",
    price: 15,
    sellingPrice: 12,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/milk",
      "https://loremflickr.com/320/240/dairy"
    ],
    subcategoryId: "8-1",
  },
  {
    id: "127",
    name: "Organic Yogurt",
    price: 35,
    sellingPrice: 30,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/yogurt",
      "https://loremflickr.com/320/240/dairy"
    ],
    subcategoryId: "8-1",
  },
  // Category 9: Breakfast (9-1, 9-2, 9-3)
  {
    id: "128",
    name: "Cereals",
    price: 40,
    sellingPrice: 35,
    type: "gram",
    images: [
      // require("../../../assets/products/cereals-1.png"),
      // require("../../../assets/products/cereals-2.png"),
    ],
    subcategoryId: "9-1", // Cereals
  },

  // Category 10: Cookies (10-1, 10-2, 10-3)
  {
    id: "129",
    name: "Chocolate Chip Cookies",
    price: 20,
    sellingPrice: 18,
    type: "adet",
    images: [
      // require("../../../assets/products/chocolate-chip-cookies-1.png"),
      // require("../../../assets/products/chocolate-chip-cookies-2.png"),
    ],
    subcategoryId: "10-1", // Chocolate Chip
  },

  // Category 11: Fit Foods (11-1, 11-2, 11-3)
  {
    id: "130",
    name: "Protein Bars",
    price: 50,
    sellingPrice: 45,
    type: "adet",
    images: [
      // require("../../../assets/products/protein-bars-1.png"),
      // require("../../../assets/products/protein-bars-2.png"),
    ],
    subcategoryId: "11-1", // Protein Bars
  },

  // Category 12: Personal Care (12-1, 12-2, 12-3)
  {
    id: "131",
    name: "Skin Care Cream",
    price: 100,
    sellingPrice: 90,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/skincare",
      "https://loremflickr.com/320/240/cosmetics"
    ],
    subcategoryId: "12-1",
  },

  // Category 13: Animal (13-1, 13-2, 13-3)
  {
    id: "132",
    name: "Dog Food",
    price: 80,
    sellingPrice: 70,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/dogfood",
      "https://loremflickr.com/320/240/pet"
    ],
    subcategoryId: "13-1",
  },

  // Category 14: Baby (14-1, 14-2, 14-3)
  {
    id: "133",
    name: "Diapers",
    price: 60,
    sellingPrice: 50,
    type: "unit",
    images: [
      "https://loremflickr.com/320/240/diapers",
      "https://loremflickr.com/320/240/baby"
    ],
    subcategoryId: "14-1",
  },

  // Category 15: Sexual Health (15-1, 15-2, 15-3)
  {
    id: "134",
    name: "Kondom",
    price: 25,
    sellingPrice: 20,
    type: "adet",
    images: [
      "https://loremflickr.com/320/240/condom"
    ],
    subcategoryId: "15-1", // Condoms
  },

  // Category 16: Cleaning (16-1, 16-2, 16-3)
  {
    id: "135",
    name: "Yüzey Temizleyici",
    price: 35,
    sellingPrice: 30,
    type: "adet",
    images: [
      // require("../../../assets/products/surface-cleaner-1.png"),
      // require("../../../assets/products/surface-cleaner-2.png"),
    ],
    subcategoryId: "16-1", // Surface Cleaners
  },

  // Category 17: Tech (17-1, 17-2, 17-3)
  {
    id: "136",
    name: "Kulaklık",
    price: 150,
    sellingPrice: 130,
    type: "adet",
    images: [
      // require("../../../assets/products/headphones-1.png"),
      // require("../../../assets/products/headphones-2.png"),
    ],
    subcategoryId: "17-1", // Headphones
  },

  // Category 18: Home (18-1, 18-2, 18-3)
  {
    id: "137",
    name: "Mobilya Seti",
    price: 1000,
    sellingPrice: 900,
    type: "adet",
    images: [
      // require("../../../assets/products/furniture-set-1.png"),
      // require("../../../assets/products/furniture-set-2.png"),
    ],
    subcategoryId: "18-1", // Furniture
  },
];