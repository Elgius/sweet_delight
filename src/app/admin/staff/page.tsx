"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AnalyticsSection } from "@/components/admin/analytics-section";
import { InventorySection } from "@/components/admin/inventory-section";
import { SalesSection } from "@/components/admin/sales-section";
import { CustomOrdersSection } from "@/components/admin/custom-orders-section";
import { ClassBookingsSection } from "@/components/admin/class-bookings-section";

export default function StaffDashboard() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const section = searchParams.get("section") || "analytics";

  const handleTabChange = (value: string) => {
    if (value === "analytics") {
      router.push("/admin/staff");
    } else {
      router.push(`/admin/staff?section=${value}`);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Welcome back!
        </h1>
        <p className="text-gray-600">
          Here is what is happening with your bakery today.
        </p>
      </div>

      <Tabs value={section} onValueChange={handleTabChange} className="w-full">
        <TabsList className="mb-4 flex-wrap">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="custom-orders">Custom Orders</TabsTrigger>
          <TabsTrigger value="class-bookings">Class Bookings</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics">
          <AnalyticsSection />
        </TabsContent>

        <TabsContent value="inventory">
          <InventorySection />
        </TabsContent>

        <TabsContent value="sales">
          <SalesSection />
        </TabsContent>

        <TabsContent value="custom-orders">
          <CustomOrdersSection />
        </TabsContent>

        <TabsContent value="class-bookings">
          <ClassBookingsSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
