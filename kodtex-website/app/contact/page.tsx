"use client";

import type { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { wa } from "@/lib/whatsapp";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hi KodTex! My name is ${form.name}. ${form.requirement}${form.phone ? ` My phone: ${form.phone}.` : ""}${form.email ? ` Email: ${form.email}.` : ""}`;
    window.open(`https://wa.me/917990273955?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  }

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-10">
        <AnimatedSection>
          <div className="mb-14">
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-terracotta block mb-4">
              Get in Touch
            </span>
            <h1 className="font-heading text-5xl md:text-7xl text-charcoal leading-tight mb-4">
              Let&apos;s talk fabric.
            </h1>
            <p className="text-charcoal/60 text-lg max-w-xl">
              WhatsApp is the fastest way to reach us. For longer enquiries,
              use the form and we&apos;ll open a chat with you directly.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Contact details */}
          <AnimatedSection direction="left">
            <div className="flex flex-col gap-8">
              {/* Primary CTA */}
              <div className="bg-charcoal p-8">
                <h2 className="font-heading text-2xl text-ivory mb-3">
                  WhatsApp — fastest reply
                </h2>
                <p className="text-sand/60 text-sm mb-6 leading-relaxed">
                  Most enquiries answered within the hour on WhatsApp.
                  Share your requirement and we&apos;ll get back to you personally.
                </p>
                <a
                  href={wa.general()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold tracking-wide px-6 py-3.5 hover:bg-[#1ebe59] transition-colors"
                >
                  Open WhatsApp Chat →
                </a>
              </div>

              {/* Contact info */}
              <div className="flex flex-col gap-5">
                <a
                  href="tel:+917990273955"
                  className="flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors group"
                >
                  <Phone size={18} className="text-terracotta flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">+91 7990273955</div>
                    <div className="text-xs text-charcoal/40">WhatsApp & Phone</div>
                  </div>
                </a>
                <a
                  href="mailto:vivekk.men@gmail.com"
                  className="flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors"
                >
                  <Mail size={18} className="text-terracotta flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">vivekk.men@gmail.com</div>
                    <div className="text-xs text-charcoal/40">Email</div>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-charcoal">
                  <MapPin size={18} className="text-terracotta flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Kailash Vivek & Co.</div>
                    <div className="text-xs text-charcoal/40 mt-0.5">
                      N.C. Market, Ahmedabad, Gujarat, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Business hours */}
              <div className="border border-sand/40 p-5 text-sm">
                <div className="font-medium text-charcoal mb-3">Business Hours</div>
                <div className="flex flex-col gap-1.5 text-charcoal/60">
                  <div className="flex justify-between">
                    <span>Monday – Saturday</span>
                    <span>10:00 AM – 7:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" delay={0.1}>
            <div>
              <h2 className="font-semibold text-charcoal text-xl mb-6">
                Send a message
              </h2>
              {sent ? (
                <div className="bg-linen-white border border-sand/40 p-8 text-center">
                  <div className="text-3xl mb-3">✓</div>
                  <h3 className="font-semibold text-charcoal mb-2">WhatsApp opened!</h3>
                  <p className="text-charcoal/60 text-sm">
                    Your message was pre-filled in WhatsApp. Send it and we&apos;ll
                    reply shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="text-xs font-medium text-charcoal/60 tracking-wide uppercase block mb-1.5">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-sand bg-linen-white text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-terracotta transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-charcoal/60 tracking-wide uppercase block mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-sand bg-linen-white text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-terracotta transition-colors"
                        placeholder="+91"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-charcoal/60 tracking-wide uppercase block mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-sand bg-linen-white text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-terracotta transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-charcoal/60 tracking-wide uppercase block mb-1.5">
                      Requirement *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.requirement}
                      onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                      className="w-full border border-sand bg-linen-white text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-terracotta transition-colors resize-none"
                      placeholder="Tell us about the fabric you're looking for — type, quantity, colour, or any other details..."
                    />
                  </div>
                  <p className="text-xs text-charcoal/40">
                    Submitting this form will open WhatsApp with your message
                    pre-filled.
                  </p>
                  <button
                    type="submit"
                    className="bg-terracotta text-white text-sm font-semibold tracking-wide py-4 hover:bg-terracotta-dark transition-colors w-full"
                  >
                    Send via WhatsApp →
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
