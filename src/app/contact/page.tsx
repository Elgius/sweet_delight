import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 bg-secondary/20">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Contact Us
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              We would love to hear from you! Whether you have a question about
              our products, want to place a custom order, or just want to say
              hello, we are here to help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Visit Our Bakery
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <address className="not-italic text-gray-600">
                          123 Bakery Lane
                          <br />
                          Flourville, CA 90210
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600">info@sweetdelights.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Hours</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>Monday - Friday: 7am - 7pm</li>
                          <li>Saturday: 8am - 6pm</li>
                          <li>Sunday: 8am - 3pm</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  {/* This would be replaced with an actual map in a real implementation */}
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">
                      Interactive Map Would Be Here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const faqs = [
  {
    question: "Do you offer gluten-free options?",
    answer:
      "Yes, we offer a selection of gluten-free breads, pastries, and cakes. Please note that while we take precautions to prevent cross-contamination, our kitchen does process products containing gluten.",
  },
  {
    question: "Can I place a custom order for a special occasion?",
    answer:
      "We specialize in custom cakes, pastries, and bread baskets for all occasions. Please contact us at least 48 hours in advance for most orders, and 7 days in advance for wedding cakes or large events.",
  },
  {
    question: "Do you deliver?",
    answer:
      "Yes, we offer local delivery within a 15-mile radius of our bakery for orders over $30. Delivery fees vary based on distance. We also offer nationwide shipping for select non-perishable items.",
  },
  {
    question: "Are your ingredients organic?",
    answer:
      "We use organic ingredients whenever possible, with a focus on locally-sourced produce and dairy. All our flour is organic, and we never use artificial preservatives, colors, or flavors.",
  },
  {
    question: "Do you offer catering services?",
    answer:
      "Yes, we provide catering services for events of all sizes, from intimate gatherings to large corporate functions. Our catering menu includes breakfast pastry platters, sandwich trays, dessert assortments, and custom options.",
  },
];
