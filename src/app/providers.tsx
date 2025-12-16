"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/hooks/use-cart";
import { AdminAuthProvider } from "@/hooks/use-admin-auth";
import { CustomerAuthProvider } from "@/hooks/use-customer-auth";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <AdminAuthProvider>
        <CustomerAuthProvider>{children}</CustomerAuthProvider>
      </AdminAuthProvider>
    </CartProvider>
  );
}
