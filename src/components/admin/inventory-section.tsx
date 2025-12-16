"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { inventoryData, type InventoryItem } from "@/lib/admin-data";
import { formatPrice, cn } from "@/lib/utils";
import { Search, Package } from "lucide-react";

export function InventorySection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [inventory] = useState<InventoryItem[]>(inventoryData);

  const filteredInventory = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStockStatus = (item: InventoryItem) => {
    if (item.stock <= 0) {
      return { label: "Out of Stock", color: "bg-red-100 text-red-700" };
    }
    if (item.stock < item.minStock) {
      return { label: "Low Stock", color: "bg-amber-100 text-amber-700" };
    }
    return { label: "In Stock", color: "bg-green-100 text-green-700" };
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Inventory Management
          </h2>
          <p className="text-sm text-gray-600">
            Track stock levels and manage your products
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Package className="h-5 w-5" />
            Product Stock ({filteredInventory.length} items)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-600">
                  <th className="pb-3 pr-4 font-medium">Product</th>
                  <th className="pb-3 pr-4 font-medium">Category</th>
                  <th className="pb-3 pr-4 font-medium">Price</th>
                  <th className="pb-3 pr-4 font-medium">Stock</th>
                  <th className="pb-3 pr-4 font-medium">Min Stock</th>
                  <th className="pb-3 pr-4 font-medium">Status</th>
                  <th className="pb-3 font-medium">Last Restocked</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredInventory.map((item) => {
                  const status = getStockStatus(item);
                  return (
                    <tr
                      key={item.id}
                      className={cn(
                        "text-sm",
                        item.stock < item.minStock && "bg-amber-50/50"
                      )}
                    >
                      <td className="py-3 pr-4">
                        <div className="font-medium text-gray-900">
                          {item.name}
                        </div>
                      </td>
                      <td className="py-3 pr-4 capitalize text-gray-600">
                        {item.category}
                      </td>
                      <td className="py-3 pr-4 text-gray-900">
                        {formatPrice(item.price)}
                      </td>
                      <td
                        className={cn(
                          "py-3 pr-4 font-medium",
                          item.stock < item.minStock
                            ? "text-red-600"
                            : "text-gray-900"
                        )}
                      >
                        {item.stock}
                      </td>
                      <td className="py-3 pr-4 text-gray-600">
                        {item.minStock}
                      </td>
                      <td className="py-3 pr-4">
                        <span
                          className={cn(
                            "inline-flex rounded-full px-2 py-1 text-xs font-medium",
                            status.color
                          )}
                        >
                          {status.label}
                        </span>
                      </td>
                      <td className="py-3 text-gray-600">
                        {new Date(item.lastRestocked).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredInventory.length === 0 && (
            <div className="py-8 text-center text-gray-500">
              No products found matching your search.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
