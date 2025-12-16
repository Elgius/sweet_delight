"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  customerOrders,
  type CustomerOrder,
  type OrderStatus,
} from "@/lib/customer-data";
import { formatPrice, cn } from "@/lib/utils";
import { ShoppingBag, ChevronDown, ChevronUp } from "lucide-react";

const statusColors: Record<OrderStatus, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

const statusFilters: { label: string; value: OrderStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Processing", value: "processing" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

export function OrdersHistory() {
  const [orders] = useState<CustomerOrder[]>(customerOrders);
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all");
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const filteredOrders =
    statusFilter === "all"
      ? orders
      : orders.filter((order) => order.status === statusFilter);

  const toggleExpand = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Order History</h2>
          <p className="text-sm text-gray-600">
            View all your past and current orders
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {statusFilters.map((filter) => (
            <Button
              key={filter.value}
              variant={statusFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter(filter.value)}
              className={
                statusFilter === filter.value
                  ? "bg-primary hover:bg-primary/90"
                  : ""
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <ShoppingBag className="h-5 w-5" />
            Orders ({filteredOrders.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-lg border bg-white transition-shadow hover:shadow-sm"
              >
                <div
                  className="flex cursor-pointer items-center justify-between p-4"
                  onClick={() => toggleExpand(order.id)}
                >
                  <div className="flex flex-1 flex-wrap items-center gap-4">
                    <div className="min-w-[100px]">
                      <div className="font-medium text-gray-900">{order.id}</div>
                      <div className="text-xs text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>

                    <div className="min-w-[80px]">
                      <div className="font-medium text-gray-900">
                        {formatPrice(order.total)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {order.items.length} item(s)
                      </div>
                    </div>

                    <span
                      className={cn(
                        "inline-flex rounded-full px-2 py-1 text-xs font-medium capitalize",
                        statusColors[order.status]
                      )}
                    >
                      {order.status}
                    </span>
                  </div>

                  <Button variant="ghost" size="icon">
                    {expandedOrder === order.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {expandedOrder === order.id && (
                  <div className="border-t bg-gray-50 p-4">
                    <div className="mb-3 text-sm font-medium text-gray-700">
                      Order Items
                    </div>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-gray-600">
                            {item.name} x {item.quantity}
                          </span>
                          <span className="font-medium text-gray-900">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t pt-3">
                      <span className="font-medium text-gray-900">Total</span>
                      <span className="font-bold text-gray-900">
                        {formatPrice(order.total)}
                      </span>
                    </div>
                    {order.completedAt && (
                      <div className="mt-3 text-xs text-gray-500">
                        Completed on{" "}
                        {new Date(order.completedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredOrders.length === 0 && (
            <div className="py-8 text-center text-gray-500">
              No orders found with the selected filter.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
