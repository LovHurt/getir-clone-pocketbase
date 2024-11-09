// src/data/products.ts

import { ProductProps } from '../../types';

export const products = [
  // Category 1: Discount (1-1, 1-2, 1-3)
  {
    id: "104",
    name: "Yaz İndirimi",
    price: 100,
    sellingPrice: 80,
    type: "adet",
    images: [
    "../../../assets/products/summer-discount-1.png",
    //   require("../../../assets/products/summer-discount-2.png"),
    ],
    subcategoryId: "1-1", // Seasonal Discounts
  },
  {
    id: "105",
    name: "Gece Yarısı Fırsatı",
    price: 150,
    sellingPrice: 120,
    type: "adet",
    images: [
    //   require("../../../assets/products/midnight-sale-1.png"),
    //   require("../../../assets/products/midnight-sale-2.png"),
    ],
    subcategoryId: "1-2", // Flash Sales
  },
  {
    id: "106",
    name: "Sınırlı Stok İndirimi",
    price: 200,
    sellingPrice: 160,
    type: "adet",
    images: [
    //   require("../../../assets/products/limited-offers-1.png"),
    //   require("../../../assets/products/limited-offers-2.png"),
    ],
    subcategoryId: "1-3", // Limited Offers
  },

  // Category 2: Drinks (2-1, 2-2, 2-3)
  {
    id: "107",
    name: "Kola",
    price: 10,
    sellingPrice: 8,
    type: "adet",
    images: [
    //   require("../../../assets/products/coke-1.png"),
    //   require("../../../assets/products/coke-2.png"),
    ],
    subcategoryId: "2-1", // Soda
  },
  {
    id: "108",
    name: "Meyve Suyu",
    price: 20,
    sellingPrice: 18,
    type: "adet",
    images: [
    //   require("../../../assets/products/fruit-juice-1.png"),
    //   require("../../../assets/products/fruit-juice-2.png"),
    ],
    subcategoryId: "2-2", // Juice
  },
  {
    id: "109",
    name: "Mineral Su",
    price: 15,
    sellingPrice: 12,
    type: "adet",
    images: [
    //   require("../../../assets/products/mineral-water-1.png"),
    //   // require("../../../assets/products/mineral-water-2.png"),
    ],
    subcategoryId: "2-3", // Water
  },

  // Category 3: Fruits (3-1, 3-2, 3-3)
  {
    id: "101",
    name: "Organik Elma",
    price: 50,
    sellingPrice: 45,
    type: "gram",
    images: [
    //   // require("../../../assets/products/organic-apple-1.png"),
    //   // require("../../../assets/products/organic-apple-2.png"),
    ],
    subcategoryId: "3-1", // Citrus
  },
  {
    id: "102",
    name: "Doğal Bal",
    price: 200,
    sellingPrice: 180,
    type: "adet",
    images: [
      // require("../../../assets/products/natural-honey-1.png"),
      // require("../../../assets/products/natural-honey-2.png"),
    ],
    subcategoryId: "3-2", // Berries
  },
  {
    id: "110",
    name: "Tropikal Muz",
    price: 60,
    sellingPrice: 50,
    type: "gram",
    images: [
      // require("../../../assets/products/tropical-mango-1.png"),
      // require("../../../assets/products/tropical-mango-2.png"),
    ],
    subcategoryId: "3-3", // Tropical Fruits
  },
  {
    id: "111",
    name: "Yer Elması",
    price: 55,
    sellingPrice: 45,
    type: "gram",
    images: [
      // require("../../../assets/products/ground-apple-1.png"),
      // require("../../../assets/products/ground-apple-2.png"),
    ],
    subcategoryId: "3-1", // Citrus
  },
  {
    id: "112",
    name: "Yaban Mersini",
    price: 180,
    sellingPrice: 160,
    type: "adet",
    images: [
      // require("../../../assets/products/blueberries-1.png"),
      // require("../../../assets/products/blueberries-2.png"),
    ],
    subcategoryId: "3-2", // Berries
  },

  // Category 4: Bread (4-1, 4-2, 4-3)
  {
    id: "103",
    name: "Tam Buğday Ekmeği",
    price: 30,
    sellingPrice: 25,
    type: "adet",
    images: [
      // require("../../../assets/products/whole-grain-bread-1.png"),
      // require("../../../assets/products/whole-grain-bread-2.png"),
    ],
    subcategoryId: "4-1", // Whole Grain
  },
  {
    id: "113",
    name: "Sourdough Ekmeği",
    price: 35,
    sellingPrice: 28,
    type: "adet",
    images: [
      // require("../../../assets/products/sourdough-bread-1.png"),
      // require("../../../assets/products/sourdough-bread-2.png"),
    ],
    subcategoryId: "4-2", // Sourdough
  },
  {
    id: "114",
    name: "Baget Ekmeği",
    price: 25,
    sellingPrice: 20,
    type: "adet",
    images: [
      // require("../../../assets/products/baguette-1.png"),
      // require("../../../assets/products/baguette-2.png"),
    ],
    subcategoryId: "4-3", // Baguette
  },

  // Category 5: Pasta (5-1, 5-2, 5-3)
  {
    id: "115",
    name: "Spagetti",
    price: 20,
    sellingPrice: 18,
    type: "gram",
    images: [
      // require("../../../assets/products/spaghetti-1.png"),
      // require("../../../assets/products/spaghetti-2.png"),
    ],
    subcategoryId: "5-1", // Spaghetti
  },

  // Category 6: Candies (6-1, 6-2, 6-3)
  {
    id: "116",
    name: "Çikolata",
    price: 10,
    sellingPrice: 8,
    type: "adet",
    images: [
      // require("../../../assets/products/chocolate-1.png"),
      // require("../../../assets/products/chocolate-2.png"),
    ],
    subcategoryId: "6-1", // Chocolate
  },

  // Category 7: Ice Cream (7-1, 7-2, 7-3)
  {
    id: "117",
    name: "Vanilyalı Dondurma",
    price: 25,
    sellingPrice: 20,
    type: "adet",
    images: [
      // require("../../../assets/products/vanilla-icecream-1.png"),
      // require("../../../assets/products/vanilla-icecream-2.png"),
    ],
    subcategoryId: "7-1", // Vanilla
  },

  // Category 8: Milk (8-1, 8-2, 8-3)
  {
    id: "118",
    name: "Tam Yağlı Süt",
    price: 15,
    sellingPrice: 12,
    type: "adet",
    images: [
      // require("../../../assets/products/whole-milk-1.png"),
      // require("../../../assets/products/whole-milk-2.png"),
    ],
    subcategoryId: "8-1", // Whole Milk
  },

  // Category 9: Breakfast (9-1, 9-2, 9-3)
  {
    id: "119",
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
    id: "120",
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
    id: "121",
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
    id: "122",
    name: "Cilt Bakım Kremi",
    price: 100,
    sellingPrice: 90,
    type: "adet",
    images: [
      // require("../../../assets/products/skin-care-cream-1.png"),
      // require("../../../assets/products/skin-care-cream-2.png"),
    ],
    subcategoryId: "12-1", // Skin Care
  },

  // Category 13: Animal (13-1, 13-2, 13-3)
  {
    id: "123",
    name: "Köpek Maması",
    price: 80,
    sellingPrice: 70,
    type: "adet",
    images: [
      // require("../../../assets/products/dog-food-1.png"),
      // require("../../../assets/products/dog-food-2.png"),
    ],
    subcategoryId: "13-1", // Dog Food
  },

  // Category 14: Baby (14-1, 14-2, 14-3)
  {
    id: "124",
    name: "Bebek Bezleri",
    price: 60,
    sellingPrice: 50,
    type: "adet",
    images: [
      // require("../../../assets/products/diapers-1.png"),
      // require("../../../assets/products/diapers-2.png"),
    ],
    subcategoryId: "14-1", // Diapers
  },

  // Category 15: Sexual Health (15-1, 15-2, 15-3)
  {
    id: "125",
    name: "Kondom",
    price: 25,
    sellingPrice: 20,
    type: "adet",
    images: [
      // require("../../../assets/products/condoms-1.png"),
      // require("../../../assets/products/condoms-2.png"),
    ],
    subcategoryId: "15-1", // Condoms
  },

  // Category 16: Cleaning (16-1, 16-2, 16-3)
  {
    id: "126",
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
    id: "127",
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
    id: "128",
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