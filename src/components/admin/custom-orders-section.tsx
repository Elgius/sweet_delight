"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  customOrdersData,
  type CustomOrder,
  type CustomOrderStatus,
  type CustomOrderType,
} from "@/lib/admin-data";
import { formatPrice, cn } from "@/lib/utils";
import { Cake, Calendar, Users, Mail, Phone } from "lucide-react";

const statusColors: Record<CustomOrderStatus, string> = {
  inquiry: "bg-gray-100 text-gray-700",
  quoted: "bg-purple-100 text-purple-700",
  confirmed: "bg-blue-100 text-blue-700",
  in_progress: "bg-yellow-100 text-yellow-700",
  completed: "bg-green-100 text-green-700",
};

const typeIcons: Record<CustomOrderType, string> = {
  birthday: "🎂",
  wedding: "💒",
  corporate: "🏢",
  other: "🎁",
};

const statusLabels: Record<CustomOrderStatus, string> = {
  inquiry: "Inquiry",
  quoted: "Quoted",
  confirmed: "Confirmed",
  in_progress: "In Progress",
  completed: "Completed",
};

export function CustomOrdersSection() {
  const [customOrders] = useState<CustomOrder[]>(customOrdersData);

  const getDaysUntilEvent = (eventDate: string) => {
    const today = new Date();
    const event = new Date(eventDate);
    const diffTime = event.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Custom Orders</h2>
        <p className="text-sm text-gray-600">
          Manage custom cake and pastry orders
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {customOrders.map((order) => {
          const daysUntil = getDaysUntilEvent(order.eventDate);
          const isUrgent = daysUntil <= 7 && daysUntil > 0;

          return (
            <Card
              key={order.id}
              className={cn(
                "border-none shadow-sm transition-shadow hover:shadow-md",
                isUrgent && "border-l-4 border-l-amber-500"
              )}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{typeIcons[order.orderType]}</span>
                    <div>
                      <CardTitle className="text-base">
                        {order.customerName}
                      </CardTitle>
                      <p className="text-xs capitalize text-gray-500">
                        {order.orderType} Order
                      </p>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2 py-1 text-xs font-medium",
                      statusColors[order.status]
                    )}
                  >
                    {statusLabels[order.status]}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">{order.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(order.eventDate).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    {daysUntil > 0 && (
                      <span
                        className={cn(
                          "text-xs",
                          isUrgent ? "font-medium text-amber-600" : "text-gray-400"
                        )}
                      >
                        ({daysUntil} days)
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{order.servings} servings</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Cake className="h-4 w-4" />
                    <span className="font-medium text-gray-900">
                      {formatPrice(order.estimatedPrice)}
                    </span>
                  </div>
                </div>

                {order.notes && (
                  <div className="rounded-lg bg-gray-50 p-2">
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Note:</span> {order.notes}
                    </p>
                  </div>
                )}

                <div className="border-t pt-3">
                  <div className="flex flex-col gap-1 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {order.customerEmail}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {order.customerPhone}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {customOrders.length === 0 && (
        <Card className="border-none shadow-sm">
          <CardContent className="py-8 text-center text-gray-500">
            No custom orders at the moment.
          </CardContent>
        </Card>
      )}
    </div>
  );
}
