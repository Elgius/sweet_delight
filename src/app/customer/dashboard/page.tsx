"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { OverviewSection } from "@/components/customer/overview-section";
import { OrdersHistory } from "@/components/customer/orders-history";
import { TransactionHistory } from "@/components/customer/transaction-history";

export default function CustomerDashboard() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const section = searchParams.get("section") || "overview";

  const handleTabChange = (value: string) => {
    if (value === "overview") {
      router.push("/customer/dashboard");
    } else {
      router.push(`/customer/dashboard?section=${value}`);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Welcome back!
        </h1>
        <p className="text-gray-600">
          View your order history and transactions.
        </p>
      </div>

      <Tabs value={section} onValueChange={handleTabChange} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewSection />
        </TabsContent>

        <TabsContent value="orders">
          <OrdersHistory />
        </TabsContent>

        <TabsContent value="transactions">
          <TransactionHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
}
