"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";
import { formatPrice } from "@/lib/utils";

// Mock product data
const allProducts = [
  {
    id: 1,
    name: "Artisan Sourdough",
    description:
      "Traditional sourdough bread with a crispy crust and soft interior.",
    price: 6.99,
    image: "/images/artisan sourdough.png",
    category: "breads",
    tags: ["traditional", "bestseller"],
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    description: "Buttery, flaky croissant filled with rich chocolate.",
    price: 3.99,
    image: "/images/chocolate croissant.png",
    category: "pastries",
    tags: ["breakfast", "bestseller"],
  },
  {
    id: 3,
    name: "Strawberry Tart",
    description:
      "Sweet pastry crust filled with vanilla custard and topped with fresh strawberries.",
    price: 5.99,
    image: "/images/Strawberry tart.png",
    category: "pastries",
    tags: ["dessert", "seasonal"],
  },
  {
    id: 4,
    name: "Blueberry Muffin",
    description:
      "Moist muffin packed with fresh blueberries and a hint of lemon.",
    price: 3.49,
    image: "/images/blueberry muffin.png",
    category: "pastries",
    tags: ["breakfast", "bestseller"],
  },
  {
    id: 5,
    name: "Multigrain Loaf",
    description: "Hearty bread made with a blend of whole grains and seeds.",
    price: 7.99,
    image: "/images/multigrain loaf.png",
    category: "breads",
    tags: ["healthy", "bestseller"],
  },
  {
    id: 6,
    name: "Chocolate Cake",
    description: "Rich, moist chocolate cake with a silky chocolate ganache.",
    price: 28.99,
    image: "/images/chocolate cake.png",
    category: "cakes",
    tags: ["chocolate", "celebration"],
  },
  {
    id: 7,
    name: "Baguette",
    description:
      "Traditional French baguette with a crisp crust and chewy interior.",
    price: 3.49,
    image: "/images/Baguette.png",
    category: "breads",
    tags: ["traditional", "bestseller"],
  },
  {
    id: 8,
    name: "Cinnamon Roll",
    description:
      "Soft, fluffy roll swirled with cinnamon sugar and topped with cream cheese frosting.",
    price: 3.99,
    image: "/images/cinnamon roll.png",
    category: "pastries",
    tags: ["breakfast", "bestseller"],
  },
  {
    id: 9,
    name: "Vanilla Cheesecake",
    description: "Creamy vanilla cheesecake with a graham cracker crust.",
    price: 24.99,
    image: "/images/Vanilla cheesecake.png",
    category: "cakes",
    tags: ["celebration", "classic"],
  },
];

export function ProductGrid() {
  const [products, setProducts] = useState(allProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem } = useCart();

  // Get filter values from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const tag = params.get("tag");
    const search = params.get("search");

    if (search) {
      setSearchQuery(search);
    }

    let filtered = [...allProducts];

    if (category && category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (tag && tag !== "all") {
      filtered = filtered.filter((product) => product.tags.includes(tag));
    }

    if (search) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setProducts(filtered);
  }, []);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });

    toast.success(`${product.name} has been added to your cart.`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          Showing {products.length} product{products.length !== 1 ? "s" : ""}
        </p>
        <div className="flex items-center space-x-2">
          <label htmlFor="search" className="sr-only">
            Search products
          </label>
          <input
            type="search"
            id="search"
            placeholder="Search products..."
            className="px-3 py-2 border rounded-md w-full max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="product-card overflow-hidden border-none shadow-md"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className="font-semibold text-primary">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex space-x-2">
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={`/products/${product.id}`}>Details</Link>
                  </Button>
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
