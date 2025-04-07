"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, ArrowLeft } from "lucide-react";

// Mock product data - in a real app, this would come from an API or database
const products = [
  {
    id: 1,
    name: "Artisan Sourdough",
    description:
      "Traditional sourdough bread with a crispy crust and soft interior.",
    longDescription:
      "Our signature sourdough is made with a natural levain that's been nurtured in our bakery for over 5 years. The dough ferments for 24 hours, developing complex flavors and that distinctive sourdough tang. Each loaf is shaped by hand and baked on a stone hearth for the perfect crust.",
    price: 6.99,
    image: "/placeholder.svg?height=600&width=800",
    category: "breads",
    tags: ["bestseller", "traditional"],
    ingredients: "Organic flour, water, salt, natural levain (wild yeast).",
    nutritionalInfo:
      "Serving size: 1 slice (50g), Calories: 120, Protein: 4g, Carbohydrates: 23g, Fat: 0.5g, Fiber: 2g, Sodium: 230mg",
    storageInstructions:
      "Store in a paper bag at room temperature for up to 3 days. For longer storage, slice and freeze for up to 3 months.",
    relatedProducts: [2, 4, 7],
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    description: "Buttery, flaky croissant filled with rich chocolate.",
    longDescription:
      "Our chocolate croissants feature layers of buttery, flaky pastry wrapped around premium dark chocolate batons. Each croissant is made using traditional French techniques, with dough that's laminated over three days for the perfect texture. Baked until golden and served fresh daily.",
    price: 3.99,
    image: "/placeholder.svg?height=600&width=800",
    category: "pastries",
    tags: ["bestseller", "chocolate"],
    ingredients:
      "Organic flour, European-style butter, sugar, eggs, chocolate (cocoa mass, sugar, cocoa butter), salt, yeast.",
    nutritionalInfo:
      "Serving size: 1 croissant (85g), Calories: 320, Protein: 5g, Carbohydrates: 34g, Fat: 19g, Fiber: 2g, Sodium: 190mg",
    storageInstructions:
      "Best enjoyed same day. Can be stored in an airtight container for 1 day or frozen for up to 1 month.",
    relatedProducts: [3, 5, 8],
  },
  // Additional products would be defined here
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    const productId = Number(params.id);
    const foundProduct = products.find((p) => p.id === productId);

    if (foundProduct) {
      setProduct(foundProduct);

      // Get related products
      if (foundProduct.relatedProducts) {
        const related = products.filter((p) =>
          foundProduct.relatedProducts.includes(p.id)
        );
        setRelatedProducts(related);
      }
    }

    setLoading(false);
  }, [params.id]);

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image,
      });

      toast.success(
        `${quantity} × ${product.name} has been added to your cart.`
      );
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 container py-12">
          <div className="flex justify-center items-center h-[400px]">
            <p>Loading product details...</p>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 container py-12">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">
              Sorry, the product you're looking for doesn't exist.
            </p>
            <Button
              onClick={() => router.push("/products")}
              className="bg-primary hover:bg-primary/90"
            >
              Back to Products
            </Button>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <Button
            variant="ghost"
            className="mb-6 flex items-center"
            onClick={() => router.push("/products")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-primary">
                  {product.name}
                </h1>
                <p className="text-2xl font-semibold mt-2">
                  {formatPrice(product.price)}
                </p>
              </div>

              <p className="text-gray-700">{product.description}</p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 border-r"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 border-l"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Add to Cart
                </Button>
              </div>

              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                  <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4">
                  <p className="text-gray-700">{product.longDescription}</p>
                  <p className="text-gray-700 mt-4">
                    <strong>Storage Instructions:</strong>{" "}
                    {product.storageInstructions}
                  </p>
                </TabsContent>
                <TabsContent value="ingredients" className="pt-4">
                  <p className="text-gray-700">{product.ingredients}</p>
                </TabsContent>
                <TabsContent value="nutrition" className="pt-4">
                  <p className="text-gray-700 whitespace-pre-line">
                    {product.nutritionalInfo}
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-primary mb-6">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="border rounded-lg overflow-hidden shadow-md cursor-pointer"
                    onClick={() =>
                      router.push(`/products/${relatedProduct.id}`)
                    }
                  >
                    <div className="relative h-48">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{relatedProduct.name}</h3>
                      <p className="text-primary font-medium mt-1">
                        {formatPrice(relatedProduct.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
