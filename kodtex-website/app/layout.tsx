import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "KodTex — Premium Fabrics, Your Way",
    template: "%s | KodTex",
  },
  description:
    "Premium corduroy, linen, and cotton fabrics backed by 70 years of Kailash Vivek & Co. No minimum order. Fully customisable. Fast delivery across India.",
  keywords: [
    "corduroy fabric",
    "linen fabric",
    "cotton fabric",
    "fabric online India",
    "buy fabric online",
    "wholesale fabric India",
    "KodTex",
    "Kailash Vivek",
    "Ahmedabad fabric",
    "twill fabric",
    "shirting fabric",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "KodTex",
    title: "KodTex — Premium Fabrics, Your Way",
    description:
      "Premium corduroy, linen, and cotton fabrics. No minimum order. Fully customisable. Fast delivery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KodTex — Premium Fabrics, Your Way",
    description: "Premium corduroy, linen, and cotton fabrics. No minimum order.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
