"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Cake,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin/staff",
    icon: LayoutDashboard,
    section: "analytics",
  },
  {
    label: "Inventory",
    href: "/admin/staff?section=inventory",
    icon: Package,
    section: "inventory",
  },
  {
    label: "Sales",
    href: "/admin/staff?section=sales",
    icon: ShoppingCart,
    section: "sales",
  },
  {
    label: "Custom Orders",
    href: "/admin/staff?section=custom-orders",
    icon: Cake,
    section: "custom-orders",
  },
  {
    label: "Class Bookings",
    href: "/admin/staff?section=class-bookings",
    icon: BookOpen,
    section: "class-bookings",
  },
];

export function AdminSidebar() {
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
            const isActive = pathname === "/admin/staff" && item.section === "analytics"
              ? true
              : item.href.includes(item.section) && pathname.includes("staff");

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
          <p className="text-xs text-gray-500">Staff Dashboard v1.0</p>
        </div>
      </div>
    </aside>
  );
}
