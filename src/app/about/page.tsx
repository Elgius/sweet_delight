import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Our bakery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-lg">
                Discover the passion and tradition behind Sweet Delights Bakery
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">
                  How It All Began
                </h2>
                <p className="text-gray-700">
                  Sweet Delights Bakery was founded in 2010 by master baker
                  Maria Johnson, who dreamed of creating a bakery that combined
                  traditional baking methods with innovative recipes and
                  flavors.
                </p>
                <p className="text-gray-700">
                  After years of perfecting her craft in some of the finest
                  bakeries across Europe, Maria returned to her hometown with a
                  vision to create a warm, welcoming space where people could
                  enjoy artisanal baked goods made with the finest ingredients.
                </p>
                <p className="text-gray-700">
                  What started as a small shop with just three employees has
                  grown into a beloved local institution, but our commitment to
                  quality and craftsmanship remains unchanged.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Bakery founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-secondary/20">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Baking Philosophy
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                At Sweet Delights, we believe that exceptional baking requires
                three essential ingredients: time-honored techniques, premium
                ingredients, and a genuine passion for the craft.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">
                    Quality Ingredients
                  </h3>
                  <p className="text-gray-600">
                    We source the finest organic flour, European-style butter,
                    farm-fresh eggs, and seasonal produce from local suppliers
                    whenever possible.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">
                    Traditional Methods
                  </h3>
                  <p className="text-gray-600">
                    We honor time-tested baking techniques, allowing our doughs
                    to develop naturally for superior flavor and texture.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    While respecting tradition, we continuously explore new
                    flavors, techniques, and dietary options to meet our
                    customers' evolving tastes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const team = [
  {
    name: "Maria Johnson",
    role: "Founder & Head Baker",
    bio: "With over 20 years of experience in artisanal baking, Maria brings passion and expertise to every recipe at Sweet Delights.",
    image: "/images/Maria Johnson.png",
  },
  {
    name: "David Chen",
    role: "Pastry Chef",
    bio: "A graduate of the prestigious Culinary Institute, David specializes in creating exquisite pastries that are as beautiful as they are delicious.",
    image: "/images/David chen.png",
  },
  {
    name: "Sarah Williams",
    role: "Bread Specialist",
    bio: "Sarah's dedication to traditional bread-making techniques and natural fermentation results in our signature artisan loaves.",
    image: "/images/Sara williams.png",
  },
];
