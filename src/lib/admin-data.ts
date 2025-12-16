export type InventoryItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  stock: number;
  minStock: number;
  lastRestocked: string;
};

export const inventoryData: InventoryItem[] = [
  {
    id: 1,
    name: "Artisan Sourdough",
    description: "Traditional sourdough bread with a crispy crust.",
    price: 6.99,
    image: "/images/artisan sourdough.png",
    category: "breads",
    tags: ["traditional", "bestseller"],
    stock: 24,
    minStock: 10,
    lastRestocked: "2025-12-15",
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    description: "Buttery, flaky croissant filled with rich chocolate.",
    price: 3.99,
    image: "/images/chocolate croissant.png",
    category: "pastries",
    tags: ["breakfast", "bestseller"],
    stock: 36,
    minStock: 15,
    lastRestocked: "2025-12-16",
  },
  {
    id: 3,
    name: "Strawberry Tart",
    description: "Delicate pastry with fresh strawberries and cream.",
    price: 5.99,
    image: "/images/strawberry tart.png",
    category: "pastries",
    tags: ["fruit", "seasonal"],
    stock: 12,
    minStock: 8,
    lastRestocked: "2025-12-14",
  },
  {
    id: 4,
    name: "Blueberry Muffin",
    description: "Soft muffin bursting with fresh blueberries.",
    price: 3.49,
    image: "/images/blueberry muffin.png",
    category: "pastries",
    tags: ["breakfast", "fruit"],
    stock: 5,
    minStock: 12,
    lastRestocked: "2025-12-13",
  },
  {
    id: 5,
    name: "Multigrain Loaf",
    description: "Healthy bread made with seven different grains.",
    price: 7.99,
    image: "/images/multigrain loaf.png",
    category: "breads",
    tags: ["healthy", "traditional"],
    stock: 18,
    minStock: 8,
    lastRestocked: "2025-12-15",
  },
  {
    id: 6,
    name: "Chocolate Cake",
    description: "Rich, decadent chocolate layer cake.",
    price: 28.99,
    image: "/images/chocolate cake.png",
    category: "cakes",
    tags: ["chocolate", "celebration"],
    stock: 4,
    minStock: 5,
    lastRestocked: "2025-12-14",
  },
  {
    id: 7,
    name: "Baguette",
    description: "Classic French baguette with a golden crust.",
    price: 3.49,
    image: "/images/baguette.png",
    category: "breads",
    tags: ["traditional"],
    stock: 30,
    minStock: 15,
    lastRestocked: "2025-12-16",
  },
  {
    id: 8,
    name: "Cinnamon Roll",
    description: "Soft, swirled roll with cinnamon and cream cheese frosting.",
    price: 3.99,
    image: "/images/cinnamon roll.png",
    category: "pastries",
    tags: ["breakfast", "bestseller"],
    stock: 20,
    minStock: 10,
    lastRestocked: "2025-12-16",
  },
  {
    id: 9,
    name: "Vanilla Cheesecake",
    description: "Creamy New York-style cheesecake.",
    price: 24.99,
    image: "/images/vanilla cheesecake.png",
    category: "cakes",
    tags: ["celebration", "bestseller"],
    stock: 6,
    minStock: 4,
    lastRestocked: "2025-12-15",
  },
];

export type OrderStatus = "pending" | "processing" | "completed" | "cancelled";

export type OrderItem = {
  productId: number;
  name: string;
  quantity: number;
  price: number;
};

export type Order = {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  completedAt?: string;
};

export const ordersData: Order[] = [
  {
    id: "ORD-001",
    customerName: "Sarah Johnson",
    customerEmail: "sarah@example.com",
    customerPhone: "+960 123-4567",
    items: [
      { productId: 1, name: "Artisan Sourdough", quantity: 2, price: 6.99 },
      { productId: 2, name: "Chocolate Croissant", quantity: 4, price: 3.99 },
    ],
    total: 29.94,
    status: "completed",
    createdAt: "2025-12-14T09:30:00",
    completedAt: "2025-12-14T10:15:00",
  },
  {
    id: "ORD-002",
    customerName: "Michael Chen",
    customerEmail: "michael@example.com",
    customerPhone: "+960 234-5678",
    items: [
      { productId: 6, name: "Chocolate Cake", quantity: 1, price: 28.99 },
      { productId: 8, name: "Cinnamon Roll", quantity: 6, price: 3.99 },
    ],
    total: 52.93,
    status: "completed",
    createdAt: "2025-12-14T11:00:00",
    completedAt: "2025-12-14T14:30:00",
  },
  {
    id: "ORD-003",
    customerName: "Emily Rodriguez",
    customerEmail: "emily@example.com",
    customerPhone: "+960 345-6789",
    items: [
      { productId: 9, name: "Vanilla Cheesecake", quantity: 1, price: 24.99 },
    ],
    total: 24.99,
    status: "processing",
    createdAt: "2025-12-15T08:45:00",
  },
  {
    id: "ORD-004",
    customerName: "David Kim",
    customerEmail: "david@example.com",
    customerPhone: "+960 456-7890",
    items: [
      { productId: 5, name: "Multigrain Loaf", quantity: 2, price: 7.99 },
      { productId: 7, name: "Baguette", quantity: 3, price: 3.49 },
    ],
    total: 26.45,
    status: "pending",
    createdAt: "2025-12-16T07:20:00",
  },
  {
    id: "ORD-005",
    customerName: "Lisa Thompson",
    customerEmail: "lisa@example.com",
    customerPhone: "+960 567-8901",
    items: [
      { productId: 3, name: "Strawberry Tart", quantity: 4, price: 5.99 },
      { productId: 4, name: "Blueberry Muffin", quantity: 6, price: 3.49 },
    ],
    total: 44.90,
    status: "pending",
    createdAt: "2025-12-16T09:15:00",
  },
  {
    id: "ORD-006",
    customerName: "James Wilson",
    customerEmail: "james@example.com",
    customerPhone: "+960 678-9012",
    items: [
      { productId: 1, name: "Artisan Sourdough", quantity: 1, price: 6.99 },
    ],
    total: 6.99,
    status: "cancelled",
    createdAt: "2025-12-13T16:00:00",
  },
  {
    id: "ORD-007",
    customerName: "Anna Martinez",
    customerEmail: "anna@example.com",
    customerPhone: "+960 789-0123",
    items: [
      { productId: 2, name: "Chocolate Croissant", quantity: 12, price: 3.99 },
      { productId: 8, name: "Cinnamon Roll", quantity: 12, price: 3.99 },
    ],
    total: 95.76,
    status: "completed",
    createdAt: "2025-12-15T10:30:00",
    completedAt: "2025-12-15T12:00:00",
  },
  {
    id: "ORD-008",
    customerName: "Robert Brown",
    customerEmail: "robert@example.com",
    customerPhone: "+960 890-1234",
    items: [
      { productId: 6, name: "Chocolate Cake", quantity: 2, price: 28.99 },
    ],
    total: 57.98,
    status: "processing",
    createdAt: "2025-12-16T08:00:00",
  },
  {
    id: "ORD-009",
    customerName: "Jennifer Lee",
    customerEmail: "jennifer@example.com",
    customerPhone: "+960 901-2345",
    items: [
      { productId: 9, name: "Vanilla Cheesecake", quantity: 1, price: 24.99 },
      { productId: 3, name: "Strawberry Tart", quantity: 2, price: 5.99 },
    ],
    total: 36.97,
    status: "pending",
    createdAt: "2025-12-16T10:45:00",
  },
  {
    id: "ORD-010",
    customerName: "Thomas Anderson",
    customerEmail: "thomas@example.com",
    customerPhone: "+960 012-3456",
    items: [
      { productId: 7, name: "Baguette", quantity: 5, price: 3.49 },
      { productId: 5, name: "Multigrain Loaf", quantity: 2, price: 7.99 },
    ],
    total: 33.43,
    status: "completed",
    createdAt: "2025-12-14T15:30:00",
    completedAt: "2025-12-14T16:00:00",
  },
];

export type CustomOrderType = "birthday" | "wedding" | "corporate" | "other";
export type CustomOrderStatus =
  | "inquiry"
  | "quoted"
  | "confirmed"
  | "in_progress"
  | "completed";

export type CustomOrder = {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  orderType: CustomOrderType;
  description: string;
  eventDate: string;
  servings: number;
  estimatedPrice: number;
  status: CustomOrderStatus;
  createdAt: string;
  notes?: string;
};

export const customOrdersData: CustomOrder[] = [
  {
    id: "CUSTOM-001",
    customerName: "Emily Rodriguez",
    customerPhone: "+960 123-4567",
    customerEmail: "emily@example.com",
    orderType: "wedding",
    description:
      "3-tier white fondant cake with gold leaf accents and fresh flowers",
    eventDate: "2026-02-14",
    servings: 150,
    estimatedPrice: 450.0,
    status: "confirmed",
    createdAt: "2025-12-01T14:00:00",
    notes: "Bride prefers minimal sweetness",
  },
  {
    id: "CUSTOM-002",
    customerName: "Corporate Solutions Inc.",
    customerPhone: "+960 234-5678",
    customerEmail: "events@corpsolutions.com",
    orderType: "corporate",
    description: "50 assorted pastry boxes for annual meeting",
    eventDate: "2025-12-20",
    servings: 50,
    estimatedPrice: 275.0,
    status: "in_progress",
    createdAt: "2025-12-10T09:00:00",
    notes: "Include vegetarian options",
  },
  {
    id: "CUSTOM-003",
    customerName: "Maria Santos",
    customerPhone: "+960 345-6789",
    customerEmail: "maria@example.com",
    orderType: "birthday",
    description: "Dinosaur-themed cake for 5-year-old birthday party",
    eventDate: "2025-12-22",
    servings: 30,
    estimatedPrice: 85.0,
    status: "confirmed",
    createdAt: "2025-12-12T11:30:00",
    notes: "Green and blue colors preferred",
  },
  {
    id: "CUSTOM-004",
    customerName: "John Davis",
    customerPhone: "+960 456-7890",
    customerEmail: "john@example.com",
    orderType: "other",
    description: "Anniversary cake - 25 years, silver theme",
    eventDate: "2025-12-28",
    servings: 40,
    estimatedPrice: 120.0,
    status: "quoted",
    createdAt: "2025-12-14T16:00:00",
  },
  {
    id: "CUSTOM-005",
    customerName: "Sofia Patel",
    customerPhone: "+960 567-8901",
    customerEmail: "sofia@example.com",
    orderType: "wedding",
    description: "Elegant 4-tier cake with cascading sugar flowers",
    eventDate: "2026-03-15",
    servings: 200,
    estimatedPrice: 650.0,
    status: "inquiry",
    createdAt: "2025-12-15T10:00:00",
  },
];

export type ClassBookingStatus =
  | "registered"
  | "confirmed"
  | "attended"
  | "cancelled";

export type ClassBooking = {
  id: string;
  workshopTitle: string;
  workshopDate: string;
  workshopTime: string;
  workshopPrice: number;
  participantName: string;
  participantEmail: string;
  participantPhone: string;
  numberOfGuests: number;
  totalPrice: number;
  status: ClassBookingStatus;
  registeredAt: string;
};

export const classBookingsData: ClassBooking[] = [
  {
    id: "BOOK-001",
    workshopTitle: "Sourdough Bread Basics",
    workshopDate: "2025-12-20",
    workshopTime: "10:00 AM - 2:00 PM",
    workshopPrice: 85.0,
    participantName: "Michael Chen",
    participantEmail: "michael@example.com",
    participantPhone: "+960 987-6543",
    numberOfGuests: 1,
    totalPrice: 85.0,
    status: "confirmed",
    registeredAt: "2025-12-10T11:30:00",
  },
  {
    id: "BOOK-002",
    workshopTitle: "Sourdough Bread Basics",
    workshopDate: "2025-12-20",
    workshopTime: "10:00 AM - 2:00 PM",
    workshopPrice: 85.0,
    participantName: "Sarah Johnson",
    participantEmail: "sarah@example.com",
    participantPhone: "+960 123-4567",
    numberOfGuests: 2,
    totalPrice: 170.0,
    status: "confirmed",
    registeredAt: "2025-12-11T09:15:00",
  },
  {
    id: "BOOK-003",
    workshopTitle: "French Pastry Essentials",
    workshopDate: "2025-12-22",
    workshopTime: "1:00 PM - 5:00 PM",
    workshopPrice: 95.0,
    participantName: "Lisa Thompson",
    participantEmail: "lisa@example.com",
    participantPhone: "+960 567-8901",
    numberOfGuests: 1,
    totalPrice: 95.0,
    status: "registered",
    registeredAt: "2025-12-14T14:00:00",
  },
  {
    id: "BOOK-004",
    workshopTitle: "French Pastry Essentials",
    workshopDate: "2025-12-22",
    workshopTime: "1:00 PM - 5:00 PM",
    workshopPrice: 95.0,
    participantName: "Emily Rodriguez",
    participantEmail: "emily@example.com",
    participantPhone: "+960 345-6789",
    numberOfGuests: 1,
    totalPrice: 95.0,
    status: "confirmed",
    registeredAt: "2025-12-12T10:30:00",
  },
  {
    id: "BOOK-005",
    workshopTitle: "Cake Decorating for Beginners",
    workshopDate: "2025-12-27",
    workshopTime: "11:00 AM - 3:00 PM",
    workshopPrice: 90.0,
    participantName: "Anna Martinez",
    participantEmail: "anna@example.com",
    participantPhone: "+960 789-0123",
    numberOfGuests: 2,
    totalPrice: 180.0,
    status: "confirmed",
    registeredAt: "2025-12-13T16:45:00",
  },
  {
    id: "BOOK-006",
    workshopTitle: "Cake Decorating for Beginners",
    workshopDate: "2025-12-27",
    workshopTime: "11:00 AM - 3:00 PM",
    workshopPrice: 90.0,
    participantName: "Jennifer Lee",
    participantEmail: "jennifer@example.com",
    participantPhone: "+960 901-2345",
    numberOfGuests: 1,
    totalPrice: 90.0,
    status: "registered",
    registeredAt: "2025-12-15T08:20:00",
  },
  {
    id: "BOOK-007",
    workshopTitle: "Sourdough Bread Basics",
    workshopDate: "2025-12-20",
    workshopTime: "10:00 AM - 2:00 PM",
    workshopPrice: 85.0,
    participantName: "David Kim",
    participantEmail: "david@example.com",
    participantPhone: "+960 456-7890",
    numberOfGuests: 1,
    totalPrice: 85.0,
    status: "cancelled",
    registeredAt: "2025-12-08T13:00:00",
  },
  {
    id: "BOOK-008",
    workshopTitle: "French Pastry Essentials",
    workshopDate: "2025-12-22",
    workshopTime: "1:00 PM - 5:00 PM",
    workshopPrice: 95.0,
    participantName: "Robert Brown",
    participantEmail: "robert@example.com",
    participantPhone: "+960 890-1234",
    numberOfGuests: 3,
    totalPrice: 285.0,
    status: "confirmed",
    registeredAt: "2025-12-09T11:00:00",
  },
];

export type AnalyticsSummary = {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  pendingOrders: number;
  customOrdersThisMonth: number;
  upcomingClasses: number;
  lowStockItems: number;
  topSellingProduct: string;
  revenueByCategory: { category: string; revenue: number }[];
  ordersLast7Days: { date: string; orders: number; revenue: number }[];
};

export const analyticsSummary: AnalyticsSummary = {
  totalRevenue: 12450.0,
  totalOrders: 156,
  averageOrderValue: 79.81,
  pendingOrders: 8,
  customOrdersThisMonth: 12,
  upcomingClasses: 5,
  lowStockItems: 3,
  topSellingProduct: "Chocolate Croissant",
  revenueByCategory: [
    { category: "Breads", revenue: 3200.0 },
    { category: "Pastries", revenue: 4800.0 },
    { category: "Cakes", revenue: 4450.0 },
  ],
  ordersLast7Days: [
    { date: "Dec 10", orders: 18, revenue: 1420.0 },
    { date: "Dec 11", orders: 22, revenue: 1780.0 },
    { date: "Dec 12", orders: 25, revenue: 1950.0 },
    { date: "Dec 13", orders: 20, revenue: 1600.0 },
    { date: "Dec 14", orders: 28, revenue: 2240.0 },
    { date: "Dec 15", orders: 24, revenue: 1920.0 },
    { date: "Dec 16", orders: 19, revenue: 1540.0 },
  ],
};
