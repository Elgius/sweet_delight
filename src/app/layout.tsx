import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Sweet Delights Bakery",
  description:
    "Artisanal bakery offering fresh breads, pastries, and cakes made with love and the finest ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${openSans.variable} font-sans min-h-screen bg-background text-foreground`}
      >
        <Providers>
          <div className="flex flex-col min-h-screen">
            {children}
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
