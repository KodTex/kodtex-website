"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/shared/Icons";
import { wa } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/fabrics", label: "Fabrics" },
  { href: "/about", label: "About" },
  { href: "/trade", label: "Trade" },
  { href: "/blog", label: "Fabric Guide" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  // Only the homepage hero has a guaranteed dark backdrop for the transparent
  // nav to sit on; every other page defaults to the opaque, legible style.
  const isScrolled = pathname === "/" ? scrolled : true;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-ivory/75 backdrop-blur-xl saturate-150 border-b border-sand/30 shadow-[0_1px_0_0_rgba(205,185,154,0.25)]"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/images/logo/logo.svg"
              alt="KodTex"
              className="h-8 w-auto transition-all"
              style={{ filter: isScrolled ? undefined : "drop-shadow(0 1px 4px rgba(0,0,0,0.5))" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors relative group focus-visible:outline-none focus-visible:underline",
                    isScrolled ? "text-charcoal" : "text-white",
                    isActive && isScrolled && "text-terracotta",
                    isActive && !isScrolled && "text-terracotta-light"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300",
                    isScrolled ? "bg-terracotta" : "bg-white"
                  )} />
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/kodtex/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KodTex on Instagram"
              className={cn(
                "transition-colors hover:opacity-70",
                isScrolled ? "text-charcoal" : "text-white"
              )}
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={wa.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-terracotta to-[#E8834E] text-white text-sm font-semibold tracking-wide px-5 py-2 hover:opacity-90 transition-opacity shadow-[0_2px_12px_rgba(194,92,53,0.3)] rounded-sm"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className={cn(
              "md:hidden p-2 -mr-2 transition-colors",
              isScrolled ? "text-charcoal" : "text-white"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-charcoal/97 backdrop-blur-xl flex flex-col"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex-1 flex flex-col justify-center px-8 pt-24 pb-12">
              <nav className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "font-heading text-4xl transition-colors block",
                        pathname === link.href ? "text-terracotta" : "text-ivory hover:text-terracotta"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex flex-col gap-4"
              >
                <a
                  href={wa.general()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 bg-terracotta text-white text-base font-semibold px-6 py-3 w-fit"
                >
                  WhatsApp Us →
                </a>
                <a
                  href="https://www.instagram.com/kodtex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand text-sm flex items-center gap-2 hover:text-ivory transition-colors"
                >
                  <InstagramIcon size={16} />
                  @kodtex
                </a>
              </motion.div>
            </div>

            <div className="px-8 pb-8 border-t border-white/10 pt-6">
              <p className="text-white/40 text-xs">
                KodTex — A brand of Kailash Vivek & Co., est. 1954
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
