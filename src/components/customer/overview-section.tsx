"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShoppingBag,
  CheckCircle,
  DollarSign,
  Clock,
  Calendar,
} from "lucide-react";
import {
  customerSummary,
  customerOrders,
  customerTransactions,
} from "@/lib/customer-data";
import { formatPrice, cn } from "@/lib/utils";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

export function OverviewSection() {
  const [summary] = useState(customerSummary);
  const recentOrders = customerOrders.slice(0, 3);
  const recentTransactions = customerTransactions.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Orders
            </CardTitle>
            <ShoppingBag className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {summary.totalOrders}
            </div>
            <p className="mt-1 text-xs text-gray-500">Lifetime orders</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Completed
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {summary.completedOrders}
            </div>
            <p className="mt-1 text-xs text-gray-500">Successfully delivered</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Spent
            </CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {formatPrice(summary.totalSpent)}
            </div>
            <p className="mt-1 text-xs text-gray-500">Lifetime spending</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Pending
            </CardTitle>
            <Clock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {summary.pendingOrders}
            </div>
            <p className="mt-1 text-xs text-gray-500">Orders in progress</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="flex flex-row items-center gap-2">
          <Calendar className="h-5 w-5 text-gray-500" />
          <CardTitle className="text-lg">Member Since</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            You have been a valued customer since{" "}
            <span className="font-medium text-primary">
              {new Date(summary.memberSince).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <div className="font-medium text-gray-900">{order.id}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">
                      {formatPrice(order.total)}
                    </div>
                    <span
                      className={cn(
                        "inline-flex rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                        statusColors[order.status]
                      )}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTransactions.map((txn) => (
                <div
                  key={txn.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <div className="font-medium text-gray-900">{txn.id}</div>
                    <div className="text-xs text-gray-500">
                      {txn.paymentMethod === "credit-card"
                        ? `Card ending ${txn.cardLast4}`
                        : txn.paymentMethod === "paypal"
                          ? "PayPal"
                          : "Cash"}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">
                      {formatPrice(txn.amount)}
                    </div>
                    <span
                      className={cn(
                        "inline-flex rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                        txn.status === "successful"
                          ? "bg-green-100 text-green-700"
                          : txn.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : txn.status === "refunded"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-red-100 text-red-700"
                      )}
                    >
                      {txn.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
