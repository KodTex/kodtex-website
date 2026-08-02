"use client";

import { useState } from "react";

export default function ContactForm() {
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

  if (sent) {
    return (
      <div className="bg-linen-white border border-sand/40 p-8 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h3 className="font-semibold text-charcoal mb-2">WhatsApp opened!</h3>
        <p className="text-charcoal/60 text-sm">
          Your message was pre-filled in WhatsApp. Send it and we&apos;ll
          reply shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="text-sm font-medium text-charcoal/70 block mb-1.5">
          Name *
        </label>
        <input
          required
          aria-required="true"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-sand bg-linen-white text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-terracotta transition-colors"
          placeholder="Your name"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-charcoal/70 block mb-1.5">
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
          <label className="text-sm font-medium text-charcoal/70 block mb-1.5">
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
        <label className="text-sm font-medium text-charcoal/70 block mb-1.5">
          Requirement *
        </label>
        <textarea
          required
          aria-required="true"
          rows={5}
          value={form.requirement}
          onChange={(e) => setForm({ ...form, requirement: e.target.value })}
          className="w-full border border-sand bg-linen-white text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-terracotta transition-colors resize-none"
          placeholder="Tell us about the fabric you're looking for — type, quantity, colour, or any other details..."
        />
      </div>
      <p className="text-xs text-charcoal/60">
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
  );
}
