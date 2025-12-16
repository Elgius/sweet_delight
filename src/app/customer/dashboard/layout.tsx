"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCustomerAuth } from "@/hooks/use-customer-auth";
import { CustomerSidebar } from "@/components/customer/customer-sidebar";
import { CustomerHeader } from "@/components/customer/customer-header";
import { Loader2 } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useCustomerAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/customer");
    } else {
      setIsChecking(false);
    }
  }, [isAuthenticated, router]);

  if (isChecking || !isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <CustomerSidebar />
      <div className="flex flex-1 flex-col">
        <CustomerHeader />
        <main className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
