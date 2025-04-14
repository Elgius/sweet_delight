import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Star, Clock, Award, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-section relative h-[600px] flex items-center justify-center">
          <Image
            src="/images/Hero.png"
            alt="Sweet Delights Bakery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 text-white">
            <div className="max-w-2xl mx-auto space-y-6 text-center">
              <h1 className="text-4xl md:text-6xl font-bold">
                Artisanal Baking with Love and Tradition
              </h1>
              <p className="text-lg md:text-xl">
                Handcrafted breads, pastries, and cakes made fresh daily with
                the finest ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/products">Explore Our Products</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white border-white hover:bg-white/20"
                >
                  <Link href="/about">Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-secondary/20">
          <div className="container">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-primary">
                Featured Products
              </h2>
              <Button asChild variant="link" className="text-primary">
                <Link href="/products" className="flex items-center">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
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
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Our bakery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">
                  Our Baking Philosophy
                </h2>
                <p className="text-gray-700">
                  At Sweet Delights, we believe in the power of traditional
                  baking methods combined with innovative recipes. Every loaf,
                  pastry, and cake is crafted with attention to detail and a
                  passion for quality.
                </p>
                <p className="text-gray-700">
                  We source our ingredients locally whenever possible,
                  supporting our community while ensuring the freshest flavors
                  in every bite.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-accent fill-accent"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fresh Daily</h3>
                <p className="text-gray-600">
                  We bake everything fresh each morning, ensuring you get the
                  best quality products every day.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Ingredients</h3>
                <p className="text-gray-600">
                  We use only the finest ingredients, locally sourced whenever
                  possible for the best flavor.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Bakers</h3>
                <p className="text-gray-600">
                  Our team of skilled bakers brings years of experience and
                  passion to every creation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
              <p className="mb-6">
                Subscribe to receive updates on new products, seasonal specials,
                and exclusive offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none"
                  required
                />
                <Button
                  type="submit"
                  className="bg-accent text-primary hover:bg-accent/90"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

const featuredProducts = [
  {
    id: 1,
    name: "Artisan Sourdough",
    description:
      "Traditional sourdough bread with a crispy crust and soft interior.",
    price: 6.99,
    image: "/images/artisan sourdough.png",
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    description: "Buttery, flaky croissant filled with rich chocolate.",
    price: 3.99,
    image: "/images/chocolate croissant.png",
  },
  {
    id: 3,
    name: "Strawberry Tart",
    description:
      "Sweet pastry crust filled with vanilla custard and topped with fresh strawberries.",
    price: 5.99,
    image: "/images/Strawberry tart.png",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Local Customer",
    text: "The sourdough bread is absolutely amazing! I've never tasted anything like it. Sweet Delights has become my go-to bakery.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    location: "Event Planner",
    text: "We ordered catering for our corporate event and everyone was impressed. The pastries were not only beautiful but delicious!",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    location: "Regular Customer",
    text: "Their cakes are works of art! I've ordered birthday cakes here for the past three years and they never disappoint.",
    rating: 4,
    avatar: "/placeholder.svg?height=100&width=100",
  },
];
