// Helper: compute days left until expiry (used for badges)
export const getFreshnessDaysLeft = (expiryDateStr) => {
  const expiry = new Date(expiryDateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = expiry - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

// 10 curated products – nice variety, real images, interactive freshness
export const products = [
  {
    _id: "prod1",
    name: "Fresh Milk",
    price: 56,
    category: "Dairy",
    expiryDate: "2026-12-31", // far future → fresh badge
    imageUrl: "https://images.pexels.com/photos/20285562/pexels-photo-20285562.jpeg",
    shopId: "shop1",
    shopName: "Fresh Mart",
    available: true,
    batchInfo: "Batch #M01",
    lastRestocked: "2026-04-10T10:30:00Z",
  },
  {
    _id: "prod2",
    name: "Artisan Bread",
    price: 42,
    category: "Bakery",
    expiryDate: "2026-04-20", // 6 days left → warning badge
    imageUrl: "https://images.pexels.com/photos/6880223/pexels-photo-6880223.jpeg",
    shopId: "shop2",
    shopName: "Daily Needs Store",
    available: true,
    batchInfo: "Batch #B02",
    lastRestocked: "2026-04-11T07:00:00Z",
  },
  {
    _id: "prod3",
    name: "Farm Eggs (12 pcs)",
    price: 94,
    category: "Dairy",
    expiryDate: "2026-04-15", // 1 day left → urgent badge
    imageUrl: "https://images.pexels.com/photos/6827029/pexels-photo-6827029.jpeg",
    shopId: "shop3",
    shopName: "Grain Hub",
    available: true,
    batchInfo: "Batch #E03",
    lastRestocked: "2026-04-09T14:20:00Z",
  },
  {
    _id: "prod4",
    name: "Organic Quinoa",
    price: 458,
    category: "Health",
    expiryDate: "2027-06-30", // far future → fresh
    imageUrl: "https://images.pexels.com/photos/5446137/pexels-photo-5446137.jpeg",
    shopId: "shop1",
    shopName: "Fresh Mart",
    available: true,
    batchInfo: "Batch #Q01",
    lastRestocked: "2026-04-12T09:00:00Z",
  },
  {
    _id: "prod5",
    name: "Ripe Avocados",
    price: 128,
    category: "Fruits",
    expiryDate: "2026-04-18", // 4 days left → warning
    imageUrl: "https://images.pexels.com/photos/19808826/pexels-photo-19808826.jpeg",
    shopId: "shop4",
    shopName: "Green Grocery",
    available: true,
    batchInfo: "Batch #A01",
    lastRestocked: "2026-04-10T14:00:00Z",
  },
  {
    _id: "prod6",
    name: "Basmati Rice (5kg)",
    price: 356,
    category: "Grains",
    expiryDate: "2026-12-31", // fresh
    imageUrl: "https://images.pexels.com/photos/36346845/pexels-photo-36346845.jpeg",
    shopId: "shop5",
    shopName: "Super Mart",
    available: true,
    batchInfo: "Batch #R04",
    lastRestocked: "2026-04-12T06:45:00Z",
  },
  {
    _id: "prod7",
    name: "Almond Butter",
    price: 618,
    category: "Health",
    expiryDate: "2027-05-01", // fresh
    imageUrl: "https://images.pexels.com/photos/33657317/pexels-photo-33657317.jpeg",
    shopId: "shop2",
    shopName: "Daily Needs Store",
    available: true,
    batchInfo: "Batch #AB01",
    lastRestocked: "2026-04-11T11:00:00Z",
  },
  {
    _id: "prod8",
    name: "Imported Cheese",
    price: 802,
    category: "Dairy",
    expiryDate: "2026-04-25", // 11 days left → fresh (still >3)
    imageUrl: "https://images.pexels.com/photos/5732760/pexels-photo-5732760.jpeg",
    shopId: "shop6",
    shopName: "Dairy Delight",
    available: true,
    batchInfo: "Batch #C01",
    lastRestocked: "2026-04-08T10:00:00Z",
  },
  {
    _id: "prod9",
    name: "Protein Bars Pack",
    price: 265,
    category: "Fitness",
    expiryDate: "2027-03-15", // fresh
    imageUrl: "https://images.pexels.com/photos/6208145/pexels-photo-6208145.jpeg",
    shopId: "shop4",
    shopName: "Green Grocery",
    available: true,
    batchInfo: "Batch #P01",
    lastRestocked: "2026-04-09T16:00:00Z",
  },
  {
    _id: "prod10",
    name: "Cold Pressed Oil (1L)",
    price: 166,
    category: "Grocery",
    expiryDate: "2026-12-31", // fresh
    imageUrl: "https://images.pexels.com/photos/31275834/pexels-photo-31275834.jpeg",
    shopId: "shop7",
    shopName: "Urban Basket",
    available: true,
    batchInfo: "Batch #O07",
    lastRestocked: "2026-04-11T09:30:00Z",
  },
];

// Unique shops derived from products (for delivery charges)
export const shops = [
  { id: "shop1", name: "Fresh Mart", deliveryCharge: 29 },
  { id: "shop2", name: "Daily Needs Store", deliveryCharge: 39 },
  { id: "shop3", name: "Grain Hub", deliveryCharge: 49 },
  { id: "shop4", name: "Green Grocery", deliveryCharge: 19 },
  { id: "shop5", name: "Super Mart", deliveryCharge: 29 },
  { id: "shop6", name: "Dairy Delight", deliveryCharge: 35 },
  { id: "shop7", name: "Urban Basket", deliveryCharge: 45 },
];