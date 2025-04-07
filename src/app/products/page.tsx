import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductGrid } from "@/components/product-grid";
import { ProductFilters } from "@/components/product-filters";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Our Products
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <ProductFilters />
            </div>
            <div className="md:col-span-3">
              <ProductGrid />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
