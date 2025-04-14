import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cake, Utensils, BookOpen } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <Image
            src="/images/Our services.png"
            alt="Our services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Services
              </h1>
              <p className="text-lg">
                From custom cakes to catering and workshops, we offer a range of
                services to meet your needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Cake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Custom Orders</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    Personalized cakes, pastries, and bread baskets for special
                    occasions and celebrations.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center pt-0">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="#custom-orders">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Utensils className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Catering</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    Delicious baked goods for events of all sizes, from intimate
                    gatherings to corporate functions.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center pt-0">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="#catering">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Workshops</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    Hands-on baking classes for all skill levels, from beginners
                    to advanced bakers.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center pt-0">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="#workshops">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Custom Orders */}
        <section id="custom-orders" className="py-16 bg-secondary/20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">
                  Custom Orders
                </h2>
                <p className="text-gray-700">
                  Whether you're celebrating a birthday, wedding, anniversary,
                  or any special occasion, our custom-made cakes and pastries
                  will make your event memorable.
                </p>
                <p className="text-gray-700">
                  Our talented team works closely with you to create
                  personalized designs and flavors that reflect your vision and
                  taste preferences.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Our Custom Order Process:
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>
                      Consultation: Discuss your ideas, preferences, and
                      requirements
                    </li>
                    <li>
                      Design: Our team creates a custom design based on your
                      vision
                    </li>
                    <li>
                      Tasting: Sample flavors and make adjustments as needed
                    </li>
                    <li>Finalization: Confirm details and place your order</li>
                    <li>
                      Creation: Our bakers craft your custom order with care
                    </li>
                    <li>Delivery/Pickup: Enjoy your custom creation!</li>
                  </ol>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Request a Custom Order</Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/custom cake.png"
                  alt="Custom cake"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Catering */}
        <section id="catering" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/catering display.png"
                  alt="Catering display"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-3xl font-bold text-primary">
                  Catering Services
                </h2>
                <p className="text-gray-700">
                  From corporate meetings to weddings and everything in between,
                  our catering services provide fresh, delicious baked goods for
                  events of all sizes.
                </p>
                <p className="text-gray-700">
                  We offer a variety of options to suit your needs, including
                  breakfast pastry platters, sandwich trays, dessert
                  assortments, and custom menus.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Popular Catering Options:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">
                        Morning Pastry Platter:
                      </span>
                      <span>
                        An assortment of croissants, muffins, and danish
                        pastries
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">
                        Artisan Sandwich Tray:
                      </span>
                      <span>Freshly baked breads with premium fillings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">
                        Dessert Sampler:
                      </span>
                      <span>
                        Mini versions of our most popular cakes and pastries
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Bread Basket:</span>
                      <span>
                        Selection of our artisan breads with butter and spreads
                      </span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Inquire About Catering</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Workshops */}
        <section id="workshops" className="py-16 bg-secondary/20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">
                  Baking Workshops
                </h2>
                <p className="text-gray-700">
                  Learn the art of baking from our expert team in a fun,
                  hands-on environment. Our workshops are perfect for beginners
                  and experienced bakers alike.
                </p>
                <p className="text-gray-700">
                  Each workshop includes all necessary ingredients, equipment,
                  and detailed instructions. You'll leave with new skills,
                  recipes, and your freshly baked creations.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Upcoming Workshops:</h3>
                  <div className="space-y-4">
                    {workshops.map((workshop, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm"
                      >
                        <h4 className="font-semibold">{workshop.title}</h4>
                        <p className="text-sm text-gray-500">
                          {workshop.date} | {workshop.time}
                        </p>
                        <p className="text-sm mt-2">{workshop.description}</p>
                        <p className="text-sm font-medium mt-1">
                          Price: ${workshop.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Register for a Workshop</Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/baking workshop.png"
                  alt="Baking workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Whether you need a custom cake, catering for your next event, or
              want to join one of our workshops, we're here to help make your
              experience special.
            </p>
            <Button
              asChild
              className="bg-accent text-primary hover:bg-accent/90"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const workshops = [
  {
    title: "Sourdough Bread Basics",
    date: "June 15, 2023",
    time: "10:00 AM - 2:00 PM",
    description:
      "Learn the fundamentals of sourdough bread making, from starter maintenance to shaping and baking the perfect loaf.",
    price: 85,
  },
  {
    title: "French Pastry Essentials",
    date: "June 22, 2023",
    time: "1:00 PM - 5:00 PM",
    description:
      "Master the art of French pastry with this hands-on workshop covering croissants, pain au chocolat, and more.",
    price: 95,
  },
  {
    title: "Cake Decorating for Beginners",
    date: "July 8, 2023",
    time: "11:00 AM - 3:00 PM",
    description:
      "Learn basic cake decorating techniques including frosting, piping, and simple decorative elements.",
    price: 90,
  },
];

const testimonials = [
  {
    name: "Jennifer Smith",
    service: "Custom Wedding Cake",
    text: "Sweet Delights created the most beautiful wedding cake for our special day. Not only was it stunning, but it tasted amazing too! Our guests are still talking about it months later. The entire process from consultation to delivery was flawless.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Rodriguez",
    service: "Corporate Catering",
    text: "We've been using Sweet Delights for our monthly team meetings and client events for over a year now. Their pastry platters and sandwich trays are always fresh, delicious, and beautifully presented. Highly recommend their catering services!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Johnson",
    service: "Sourdough Workshop",
    text: "I attended the sourdough workshop and it was incredible! The instructor was knowledgeable and patient, and I left with the skills to make amazing bread at home. Worth every penny for the hands-on experience and all the tips I wouldn't have learned from a recipe.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "David Chen",
    service: "Birthday Cake",
    text: "Ordered a custom birthday cake for my daughter and it exceeded all expectations. Not only was the design exactly what we wanted, but the cake itself was moist and delicious. Will definitely be ordering from Sweet Delights for all our celebrations!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];
