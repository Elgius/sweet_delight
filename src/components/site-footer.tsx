import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Sweet Delights</h3>
          <p className="text-sm text-gray-200">
            Artisanal bakery offering fresh breads, pastries, and cakes made
            with love and the finest ingredients.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-accent transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-accent transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-accent transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-accent transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Hours</h4>
          <ul className="space-y-2 text-sm">
            <li>Monday - Friday: 7am - 7pm</li>
            <li>Saturday: 8am - 6pm</li>
            <li>Sunday: 8am - 3pm</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <address className="not-italic text-sm space-y-2">
            <p>123 Bakery Lane</p>
            <p>Flourville, CA 90210</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@sweetdelights.com</p>
          </address>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Sweet Delights Bakery. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-300">
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
