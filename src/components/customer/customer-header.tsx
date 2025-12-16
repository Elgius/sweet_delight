"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCustomerAuth } from "@/hooks/use-customer-auth";
import { LogOut, Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CustomerSidebar } from "./customer-sidebar";

export function CustomerHeader() {
  const { user, logout } = useCustomerAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/customer");
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <CustomerSidebar />
          </SheetContent>
        </Sheet>

        <h1 className="text-lg font-semibold text-gray-900 md:text-xl">
          My Account
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">{user?.username}</span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="text-gray-600 hover:text-gray-900"
        >
          <LogOut className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  );
}
