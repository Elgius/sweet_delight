"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  customerTransactions,
  type Transaction,
  type TransactionStatus,
} from "@/lib/customer-data";
import { formatPrice, cn } from "@/lib/utils";
import { Receipt, CreditCard, Wallet } from "lucide-react";

const statusColors: Record<TransactionStatus, string> = {
  successful: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  failed: "bg-red-100 text-red-700",
  refunded: "bg-purple-100 text-purple-700",
};

const statusFilters: { label: string; value: TransactionStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Successful", value: "successful" },
  { label: "Pending", value: "pending" },
  { label: "Refunded", value: "refunded" },
  { label: "Failed", value: "failed" },
];

export function TransactionHistory() {
  const [transactions] = useState<Transaction[]>(customerTransactions);
  const [statusFilter, setStatusFilter] = useState<TransactionStatus | "all">(
    "all"
  );

  const filteredTransactions =
    statusFilter === "all"
      ? transactions
      : transactions.filter((txn) => txn.status === statusFilter);

  const getPaymentIcon = (method: string) => {
    switch (method) {
      case "credit-card":
        return <CreditCard className="h-4 w-4" />;
      case "paypal":
        return <Wallet className="h-4 w-4" />;
      default:
        return <Receipt className="h-4 w-4" />;
    }
  };

  const getPaymentLabel = (txn: Transaction) => {
    switch (txn.paymentMethod) {
      case "credit-card":
        return `Card ending ${txn.cardLast4}`;
      case "paypal":
        return "PayPal";
      default:
        return "Cash";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Transaction History
          </h2>
          <p className="text-sm text-gray-600">
            View all your payment transactions
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
            <Receipt className="h-5 w-5" />
            Transactions ({filteredTransactions.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-600">
                  <th className="pb-3 pr-4 font-medium">Transaction ID</th>
                  <th className="pb-3 pr-4 font-medium">Order</th>
                  <th className="pb-3 pr-4 font-medium">Payment Method</th>
                  <th className="pb-3 pr-4 font-medium">Amount</th>
                  <th className="pb-3 pr-4 font-medium">Status</th>
                  <th className="pb-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredTransactions.map((txn) => (
                  <tr key={txn.id} className="text-sm">
                    <td className="py-3 pr-4">
                      <div className="font-medium text-gray-900">{txn.id}</div>
                    </td>
                    <td className="py-3 pr-4 text-gray-600">{txn.orderId}</td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        {getPaymentIcon(txn.paymentMethod)}
                        <span>{getPaymentLabel(txn)}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4 font-medium text-gray-900">
                      {formatPrice(txn.amount)}
                    </td>
                    <td className="py-3 pr-4">
                      <span
                        className={cn(
                          "inline-flex rounded-full px-2 py-1 text-xs font-medium capitalize",
                          statusColors[txn.status]
                        )}
                      >
                        {txn.status}
                      </span>
                    </td>
                    <td className="py-3 text-gray-600">
                      {new Date(txn.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredTransactions.length === 0 && (
            <div className="py-8 text-center text-gray-500">
              No transactions found with the selected filter.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
