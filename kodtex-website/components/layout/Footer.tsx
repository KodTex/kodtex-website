import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/shared/Icons";
import { wa } from "@/lib/whatsapp";

const fabricLinks = [
  { href: "/fabrics/corduroy", label: "Corduroy" },
  { href: "/fabrics/linen", label: "Linen" },
  { href: "/fabrics/cotton", label: "Cotton" },
  { href: "/fabrics/twill", label: "Twill" },
  { href: "/fabrics/shirting", label: "Shirting" },
  { href: "/fabrics/suiting", label: "Suiting" },
  { href: "/fabrics/furnishing", label: "Furnishing" },
];

const companyLinks = [
  { href: "/about", label: "About KodTex" },
  { href: "/trade", label: "Trade & Bulk" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faq", label: "FAQ" },
];

const resourceLinks = [
  { href: "/blog", label: "The Fabric Guide" },
  { href: "/blog/corduroy-guide", label: "Corduroy Guide" },
  { href: "/blog/linen-guide", label: "Linen Guide" },
  { href: "/blog/fabric-care", label: "Fabric Care" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-heading text-3xl text-ivory block mb-3">
              KodTex
            </Link>
            <p className="text-sand text-sm leading-relaxed max-w-xs mb-6">
              Premium fabrics, your way. No minimum order. Fully customisable.
              Backed by 70 years of Kailash Vivek & Co.
            </p>
            <div className="flex flex-col gap-2 text-sm text-sand">
              <a
                href="mailto:vivekk.men@gmail.com"
                className="flex items-center gap-2 hover:text-ivory transition-colors"
              >
                <Mail size={14} />
                vivekk.men@gmail.com
              </a>
              <a
                href="tel:+917990273955"
                className="flex items-center gap-2 hover:text-ivory transition-colors"
              >
                <Phone size={14} />
                +91 79902 73955
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                N.C. Market, Ahmedabad, Gujarat
              </span>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/kodtex/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KodTex Instagram"
                className="text-sand hover:text-ivory transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={wa.general()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand hover:text-ivory transition-colors text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Fabrics */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.1em] uppercase text-sand/70 mb-4">
              Fabrics
            </h4>
            <ul className="flex flex-col gap-2">
              {fabricLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand hover:text-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.1em] uppercase text-sand/70 mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand hover:text-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.1em] uppercase text-sand/70 mb-4">
              Fabric Guide
            </h4>
            <ul className="flex flex-col gap-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand hover:text-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            KodTex is a brand of{" "}
            <a
              href="https://www.kailashvivek.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors underline underline-offset-2"
            >
              Kailash Vivek & Co.
            </a>{" "}
            · Est. 1954 · ISO 9001:2008 · GST: 24AFCPM9485J1ZZ · Ahmedabad, Gujarat
          </p>
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} KodTex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
