"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, Receipt, Cake } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Overview",
    href: "/customer/dashboard",
    icon: LayoutDashboard,
    section: "overview",
  },
  {
    label: "Order History",
    href: "/customer/dashboard?section=orders",
    icon: ShoppingBag,
    section: "orders",
  },
  {
    label: "Transactions",
    href: "/customer/dashboard?section=transactions",
    icon: Receipt,
    section: "transactions",
  },
];

export function CustomerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-shrink-0 border-r bg-white md:block">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <Cake className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-primary">Sweet Delights</span>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => {
            const isActive =
              pathname === "/customer/dashboard" && item.section === "overview"
                ? true
                : item.href.includes(item.section) &&
                  pathname.includes("dashboard");

            return (
              <Link
                key={item.section}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t p-4">
          <p className="text-xs text-gray-500">Customer Portal v1.0</p>
        </div>
      </div>
    </aside>
  );
}
