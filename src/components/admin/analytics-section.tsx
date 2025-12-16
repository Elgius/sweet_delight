"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "./stat-card";
import {
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Clock,
  Cake,
  BookOpen,
  AlertTriangle,
  Star,
} from "lucide-react";
import {
  analyticsSummary,
  inventoryData,
  ordersData,
  customOrdersData,
  classBookingsData,
} from "@/lib/admin-data";
import { formatPrice } from "@/lib/utils";

export function AnalyticsSection() {
  const [data] = useState(analyticsSummary);

  const lowStockItems = inventoryData.filter(
    (item) => item.stock < item.minStock
  );
  const pendingOrders = ordersData.filter(
    (order) => order.status === "pending"
  );
  const upcomingCustomOrders = customOrdersData.filter(
    (order) => order.status !== "completed"
  );
  const upcomingClasses = classBookingsData.filter(
    (booking) => booking.status !== "cancelled" && booking.status !== "attended"
  );

  const maxRevenue = Math.max(...data.ordersLast7Days.map((d) => d.revenue));

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value={formatPrice(data.totalRevenue)}
          icon={DollarSign}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatCard
          title="Total Orders"
          value={data.totalOrders}
          icon={ShoppingCart}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatCard
          title="Avg Order Value"
          value={formatPrice(data.averageOrderValue)}
          icon={TrendingUp}
          trend={{ value: 3.1, isPositive: true }}
        />
        <StatCard
          title="Pending Orders"
          value={pendingOrders.length}
          icon={Clock}
          description="Needs attention"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Custom Orders"
          value={upcomingCustomOrders.length}
          icon={Cake}
          description="Active this month"
        />
        <StatCard
          title="Class Bookings"
          value={upcomingClasses.length}
          icon={BookOpen}
          description="Upcoming workshops"
        />
        <StatCard
          title="Low Stock Items"
          value={lowStockItems.length}
          icon={AlertTriangle}
          description={lowStockItems.length > 0 ? "Needs restocking" : "All good"}
          className={lowStockItems.length > 0 ? "border-l-4 border-l-amber-500" : ""}
        />
        <StatCard
          title="Top Seller"
          value={data.topSellingProduct}
          icon={Star}
          description="This week"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Revenue Last 7 Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.ordersLast7Days.map((day) => (
                <div key={day.date} className="flex items-center gap-4">
                  <span className="w-16 text-sm text-gray-600">{day.date}</span>
                  <div className="flex-1">
                    <div
                      className="h-8 rounded bg-primary/80 transition-all"
                      style={{
                        width: `${(day.revenue / maxRevenue) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="w-24 text-right text-sm font-medium">
                    {formatPrice(day.revenue)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Revenue by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.revenueByCategory.map((category) => {
                const totalCategoryRevenue = data.revenueByCategory.reduce(
                  (sum, c) => sum + c.revenue,
                  0
                );
                const percentage = (
                  (category.revenue / totalCategoryRevenue) *
                  100
                ).toFixed(1);

                return (
                  <div key={category.category} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{category.category}</span>
                      <span className="text-gray-600">
                        {formatPrice(category.revenue)} ({percentage}%)
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {lowStockItems.length > 0 && (
        <Card className="border-none border-l-4 border-l-amber-500 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-amber-700">
              <AlertTriangle className="h-5 w-5" />
              Low Stock Alert
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {lowStockItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg bg-amber-50 p-3"
                >
                  <span className="font-medium text-gray-900">{item.name}</span>
                  <span className="text-sm text-amber-700">
                    {item.stock} / {item.minStock} min
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
