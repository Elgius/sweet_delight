export type OrderStatus = "pending" | "processing" | "completed" | "cancelled";

export type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

export type CustomerOrder = {
  id: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  completedAt?: string;
};

export const customerOrders: CustomerOrder[] = [
  {
    id: "ORD-001",
    items: [
      { name: "Artisan Sourdough", quantity: 2, price: 6.99 },
      { name: "Chocolate Croissant", quantity: 4, price: 3.99 },
    ],
    total: 29.94,
    status: "completed",
    createdAt: "2025-12-14T09:30:00",
    completedAt: "2025-12-14T10:15:00",
  },
  {
    id: "ORD-002",
    items: [
      { name: "Chocolate Cake", quantity: 1, price: 28.99 },
      { name: "Cinnamon Roll", quantity: 6, price: 3.99 },
    ],
    total: 52.93,
    status: "completed",
    createdAt: "2025-12-10T11:00:00",
    completedAt: "2025-12-10T14:30:00",
  },
  {
    id: "ORD-003",
    items: [{ name: "Vanilla Cheesecake", quantity: 1, price: 24.99 }],
    total: 24.99,
    status: "processing",
    createdAt: "2025-12-15T08:45:00",
  },
  {
    id: "ORD-004",
    items: [
      { name: "Multigrain Loaf", quantity: 2, price: 7.99 },
      { name: "Baguette", quantity: 3, price: 3.49 },
    ],
    total: 26.45,
    status: "pending",
    createdAt: "2025-12-16T07:20:00",
  },
  {
    id: "ORD-005",
    items: [
      { name: "Strawberry Tart", quantity: 4, price: 5.99 },
      { name: "Blueberry Muffin", quantity: 6, price: 3.49 },
    ],
    total: 44.9,
    status: "completed",
    createdAt: "2025-11-28T09:15:00",
    completedAt: "2025-11-28T10:00:00",
  },
  {
    id: "ORD-006",
    items: [{ name: "Artisan Sourdough", quantity: 1, price: 6.99 }],
    total: 6.99,
    status: "cancelled",
    createdAt: "2025-11-20T16:00:00",
  },
  {
    id: "ORD-007",
    items: [
      { name: "Chocolate Croissant", quantity: 12, price: 3.99 },
      { name: "Cinnamon Roll", quantity: 12, price: 3.99 },
    ],
    total: 95.76,
    status: "completed",
    createdAt: "2025-11-15T10:30:00",
    completedAt: "2025-11-15T12:00:00",
  },
  {
    id: "ORD-008",
    items: [{ name: "Chocolate Cake", quantity: 2, price: 28.99 }],
    total: 57.98,
    status: "completed",
    createdAt: "2025-10-22T08:00:00",
    completedAt: "2025-10-22T11:00:00",
  },
];

export type TransactionStatus = "successful" | "pending" | "failed" | "refunded";
export type PaymentMethod = "credit-card" | "paypal" | "cash";

export type Transaction = {
  id: string;
  orderId: string;
  amount: number;
  paymentMethod: PaymentMethod;
  status: TransactionStatus;
  date: string;
  cardLast4?: string;
};

export const customerTransactions: Transaction[] = [
  {
    id: "TXN-001",
    orderId: "ORD-001",
    amount: 29.94,
    paymentMethod: "credit-card",
    status: "successful",
    date: "2025-12-14T09:30:00",
    cardLast4: "4242",
  },
  {
    id: "TXN-002",
    orderId: "ORD-002",
    amount: 52.93,
    paymentMethod: "paypal",
    status: "successful",
    date: "2025-12-10T11:00:00",
  },
  {
    id: "TXN-003",
    orderId: "ORD-003",
    amount: 24.99,
    paymentMethod: "credit-card",
    status: "pending",
    date: "2025-12-15T08:45:00",
    cardLast4: "1234",
  },
  {
    id: "TXN-004",
    orderId: "ORD-004",
    amount: 26.45,
    paymentMethod: "credit-card",
    status: "pending",
    date: "2025-12-16T07:20:00",
    cardLast4: "4242",
  },
  {
    id: "TXN-005",
    orderId: "ORD-005",
    amount: 44.9,
    paymentMethod: "credit-card",
    status: "successful",
    date: "2025-11-28T09:15:00",
    cardLast4: "4242",
  },
  {
    id: "TXN-006",
    orderId: "ORD-006",
    amount: 6.99,
    paymentMethod: "credit-card",
    status: "refunded",
    date: "2025-11-20T16:00:00",
    cardLast4: "5678",
  },
  {
    id: "TXN-007",
    orderId: "ORD-007",
    amount: 95.76,
    paymentMethod: "cash",
    status: "successful",
    date: "2025-11-15T10:30:00",
  },
  {
    id: "TXN-008",
    orderId: "ORD-008",
    amount: 57.98,
    paymentMethod: "paypal",
    status: "successful",
    date: "2025-10-22T08:00:00",
  },
];

export type CustomerSummary = {
  totalOrders: number;
  completedOrders: number;
  totalSpent: number;
  memberSince: string;
  pendingOrders: number;
};

export const customerSummary: CustomerSummary = {
  totalOrders: 8,
  completedOrders: 5,
  totalSpent: 339.94,
  memberSince: "2025-06-15",
  pendingOrders: 2,
};
